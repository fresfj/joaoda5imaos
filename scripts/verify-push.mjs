import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, stdio: 'inherit', env: process.env });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} failed (${result.status})`);
}

if (process.versions.node.split('.')[0] !== '22') {
  console.error('Push blocked: use Node 22 (see .nvmrc).');
  process.exit(1);
}
const input = process.argv.includes('--hook') ? readFileSync(0, 'utf8') : '';
const revisions = input ? [...new Set(input.trim().split('\n').map((line) => line.split(/\s+/)[1]).filter((sha) => sha && !/^0+$/.test(sha)))] : ['HEAD'];

// Validate every pushed tip in isolation, without stale dependencies, .env or build cache.
for (const revision of revisions) {
  const directory = mkdtempSync(join(tmpdir(), 'joao-pre-push-'));
  try {
    const archive = join(directory, 'source.tar');
    run('git', ['archive', '--format=tar', `--output=${archive}`, revision], process.cwd());
    run('tar', ['-xf', archive, '-C', directory], process.cwd());
    run('npm', ['ci', '--no-audit', '--no-fund', '--cache', join(directory, '.npm-cache')], directory);
    run('npm', ['run', 'verify'], directory);
    console.log('Clean installation, lint, types and production build passed.');
  } catch (error) {
    console.error('Push blocked:', error.message);
    process.exitCode = 1;
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
  if (process.exitCode) break;
}
