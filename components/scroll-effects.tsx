'use client';

import { useEffect } from 'react';

export function ScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        if (!preference.matches) element.animate(
          [{ opacity: 0.25, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 650, easing: 'cubic-bezier(.2,.65,.3,1)' },
        );
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    const stopAnimations = () => {
      if (preference.matches) elements.forEach(element => element.getAnimations().forEach(animation => animation.cancel()));
    };
    preference.addEventListener('change', stopAnimations);
    return () => { observer.disconnect(); preference.removeEventListener('change', stopAnimations); stopAnimations(); };
  }, []);
  return null;
}
