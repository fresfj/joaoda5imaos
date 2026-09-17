import { newsletterSchema } from '../../../lib/newsletter';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) return Response.json({ error: 'Origem inválida.' }, { status: 403 });
  const length = Number(request.headers.get('content-length'));
  if (length > 8192) return Response.json({ error: 'Cadastro inválido.' }, { status: 413 });
  let data: FormData;
  try {
    if (!request.body) throw new Error('empty');
    const reader = request.body.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value: chunk } = await reader.read();
      if (done) break;
      size += chunk.byteLength;
      if (size > 8192) { await reader.cancel(); return Response.json({ error: 'Cadastro muito grande.' }, { status: 413 }); }
      chunks.push(chunk);
    }
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
    data = await new Response(body, { headers: { 'Content-Type': request.headers.get('content-type') || '' } }).formData();
  }
  catch { return Response.json({ error: 'Cadastro inválido.' }, { status: 400 }); }
  if (data.get('website')) return Response.json({ error: 'Cadastro inválido.' }, { status: 400 });
  const value = (key: string) => typeof data.get(key) === 'string' ? String(data.get(key)).trim() : '';
  const parsed = newsletterSchema.safeParse({ name: value('name'), email: value('email'), phone: value('phone'), state: value('state'), city: value('city'), consent: data.get('consent') === 'on', website: value('website') });
  if (!parsed.success) {
    return Response.json({ error: 'Confira os campos e o consentimento.' }, { status: 400 });
  }
  const { name, email, phone, state, city } = parsed.data;
  const digits = phone.replace(/\D/g, '');
  const webhook = process.env.SHEETDB_API_URL || 'https://sheetdb.io/api/v1/xmvrrj274efck';
  try {
    if (new URL(webhook).protocol !== 'https:') throw new Error('configuration');
    const response = await fetch(webhook, {
      method: 'POST', headers: { 'Content-Type': 'application/json', ...(process.env.SHEETDB_AUTHORIZATION ? { Authorization: process.env.SHEETDB_AUTHORIZATION } : {}) },
      body: JSON.stringify({ mode: 'RAW', data: [{ Nome: name, Email: email.toLowerCase(), Telefone: digits, Estado: state, Cidade: city, Mensagem: 'Quero receber notícias da campanha', Consentimento: 'Sim', DataConsentimento: new Date().toISOString(), VersaoPrivacidade: '2026-09-17', Origem: 'site-joao' }] }),
      signal: AbortSignal.timeout(10000), redirect: 'error',
    });
    const result = await response.json();
    if (!response.ok || result.error) {
      // Log only technical status; upstream responses may contain personal data.
      console.error('SheetDB delivery failed', { status: response.status });
      const emptySheet = typeof result.error === 'string' && result.error.includes('Spreadsheet is empty');
      return Response.json({ error: emptySheet ? 'O cadastro está temporariamente indisponível. Acompanhe as notícias pelo grupo de WhatsApp.' : 'Não foi possível concluir o cadastro. Tente novamente em instantes.' }, { status: 503 });
    }
    if (result.created !== 1) throw new Error('not-created');
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Não foi possível receber seu cadastro.' }, { status: 502 });
  }
}
