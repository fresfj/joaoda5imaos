import { z } from 'zod';

export const newsletterStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'] as const;
const text = (label: string) => z.string().trim().min(2, `${label} deve ter pelo menos 2 caracteres.`).max(100, `${label} deve ter até 100 caracteres.`).refine((value) => !/[\u0000-\u001f\u007f]/.test(value), 'Remova os caracteres inválidos.');

export const newsletterSchema = z.object({
  name: text('O nome'),
  email: z.string().trim().max(254).email('Informe um e-mail válido.'),
  phone: z.string().max(20).refine((value) => /^[()\d .-]+$/.test(value) && /^[1-9]\d9\d{8}$/.test(value.replace(/\D/g, '')), 'Informe DDD e celular com 11 dígitos.'),
  state: z.enum(newsletterStates, { message: 'Selecione um estado.' }),
  city: text('A cidade'),
  consent: z.boolean().refine((value) => value, 'Autorize o recebimento para se cadastrar.'),
  website: z.string().max(0, 'Cadastro inválido.'),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

export function maskPhone(input: string) {
  let digits = input.replace(/\D/g, '');
  if (digits.length === 13 && digits.startsWith('55')) digits = digits.slice(2);
  digits = digits.slice(0, 11);
  const local = digits.slice(2);
  return digits.length < 3 ? (digits ? `(${digits}` : '') : `(${digits.slice(0, 2)}) ${local.slice(0, 1)}${local.length > 1 ? ` ${local.slice(1, 5)}` : ''}${local.length > 5 ? `-${local.slice(5)}` : ''}`;
}
