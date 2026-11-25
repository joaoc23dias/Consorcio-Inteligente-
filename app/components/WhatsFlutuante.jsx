'use client';
import { track } from '@vercel/analytics';
import { WHATSAPP } from '../content';

const MSG = 'Olá, João! Vi o seu site e quero conversar sobre um diagnóstico patrimonial.';

export const IconeWhats = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path fill="currentColor" d="M16.04 3C9.4 3 4 8.36 4 14.98c0 2.3.66 4.5 1.9 6.4L4 29l7.84-1.86a12.1 12.1 0 0 0 4.2.76C22.66 27.9 28 22.55 28 15.93 28 9.3 22.66 3 16.04 3Zm0 21.84c-1.33 0-2.62-.26-3.84-.77l-.27-.12-4.65 1.1 1.13-4.43-.18-.29a9.8 9.8 0 0 1-1.52-5.27c0-5.43 4.4-9.85 9.33-9.85 5.6 0 9.73 4.4 9.73 9.82 0 5.43-4.4 9.81-9.73 9.81Zm5.35-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.24-.45-2.36-1.45-.87-.77-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.73-.7 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z"/>
  </svg>
);

export default function WhatsFlutuante() {
  return (
    <a className="whats-flutuante" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`} target="_blank" rel="noopener noreferrer"
      aria-label="Conversar com João no WhatsApp" onClick={() => track('whats_flutuante')}>
      <IconeWhats />
      <span className="whats-texto">Fale comigo no WhatsApp</span>
    </a>
  );
}
