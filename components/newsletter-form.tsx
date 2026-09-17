'use client';

import Link from 'next/link';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { useId, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LazyMotion, domAnimation, m, MotionConfig } from 'motion/react';
import { maskPhone, newsletterSchema, newsletterStates, type NewsletterValues } from '../lib/newsletter';

const defaults: NewsletterValues = { name: '', email: '', phone: '', state: 'PR', city: '', consent: false, website: '' };

export function NewsletterForm() {
  const id = useId();
  const [success, setSuccess] = useState(false);
  const { register, control, handleSubmit, reset, setError, clearErrors, formState: { errors, isSubmitting } } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema), defaultValues: defaults, mode: 'onBlur', reValidateMode: 'onChange' });

  const attributes = (field: keyof NewsletterValues) => ({ 'aria-invalid': Boolean(errors[field]), 'aria-describedby': errors[field] ? `${id}-${field}-error` : undefined });
  const error = (field: keyof NewsletterValues) => errors[field] ? <span className="field-error" id={`${id}-${field}-error`}>{errors[field]?.message}</span> : null;

  async function submit(values: NewsletterValues) {
    clearErrors('root');
    setSuccess(false);
    const data = new FormData();
    for (const [key, value] of Object.entries(values)) data.set(key, typeof value === 'boolean' ? (value ? 'on' : '') : value);
    try {
      const response = await fetch('/api/cadastro', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setError('root', { message: result.error || 'Não foi possível enviar. Tente novamente em instantes.' });
        return;
      }
      reset(defaults);
      setSuccess(true);
    } catch {
      setError('root', { message: 'Não foi possível conectar. Confira sua conexão e tente novamente.' });
    }
  }

  return <MotionConfig reducedMotion="user"><LazyMotion features={domAnimation}>
    <form className="newsletter-form" onSubmit={handleSubmit(submit)} noValidate aria-label="Receber notícias do João" aria-busy={isSubmitting}>
      <fieldset disabled={isSubmitting} className="newsletter-fieldset">
        <div className="newsletter-fields">
          <label>Nome<input {...register('name')} {...attributes('name')} autoComplete="name" placeholder="Seu nome" maxLength={100} required />{error('name')}</label>
          <label>E-mail<input {...register('email')} {...attributes('email')} type="email" autoComplete="email" placeholder="Seu e-mail" maxLength={254} required />{error('email')}</label>
          <label>Celular<Controller name="phone" control={control} render={({ field }) => <input {...field} {...attributes('phone')} onChange={(event) => field.onChange(maskPhone(event.target.value))} type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(41) 9 9999-0000" maxLength={17} required />} />{error('phone')}</label>
          <label>Estado<select {...register('state')} {...attributes('state')} autoComplete="address-level1" required>{newsletterStates.map((state) => <option key={state}>{state}</option>)}</select>{error('state')}</label>
          <label>Cidade<input {...register('city')} {...attributes('city')} autoComplete="address-level2" placeholder="Sua cidade" maxLength={100} required />{error('city')}</label>
        </div>
        <div className="newsletter-trap" aria-hidden="true"><label>Site<input {...register('website')} tabIndex={-1} autoComplete="off" /></label></div>
        <label className="newsletter-consent"><input {...register('consent')} {...attributes('consent')} type="checkbox" required /><span>Aceito receber comunicações da campanha e concordo com a <Link href="/privacidade">Política de Privacidade</Link>.</span></label>
        {error('consent')}
        <m.button className="button" type="submit" disabled={isSubmitting} whileTap={{ scale: .98 }}>
          {isSubmitting ? <LoaderCircle className="newsletter-spinner" size={18} /> : <Send size={18} />}{isSubmitting ? 'Enviando…' : 'Quero receber'}
        </m.button>
      </fieldset>
      <div className="newsletter-status" role="status" aria-live="polite">
        {(success || errors.root) && <m.p key={success ? 'success' : 'error'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }} className={success ? 'form-success' : 'field-error'}>{success ? <><CheckCircle2 size={18} /> Cadastro recebido! Obrigado por acompanhar o João.</> : errors.root?.message}</m.p>}
      </div>
    </form>
  </LazyMotion></MotionConfig>;
}
