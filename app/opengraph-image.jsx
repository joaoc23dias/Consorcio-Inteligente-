import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'João Dias | Consórcio Inteligente · Planejamento patrimonial';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const fonts = join(process.cwd(), 'node_modules/@fontsource');
  const [serif, sans, foto] = await Promise.all([
    readFile(join(fonts, 'cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff')),
    readFile(join(fonts, 'montserrat/files/montserrat-latin-600-normal.woff')),
    readFile(join(process.cwd(), 'public/joao-dias-hero.jpg')),
  ]);
  const fotoSrc = `data:image/jpeg;base64,${foto.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#FAF7F1' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 64px', width: 720 }}>
          <div style={{ fontFamily: 'Montserrat', fontSize: 16, letterSpacing: 4, color: '#8C7036', textTransform: 'uppercase' }}>
            Planejamento patrimonial
          </div>
          <div style={{ fontFamily: 'Cormorant', fontSize: 64, lineHeight: 1.05, color: '#1A221F', marginTop: 20 }}>
            Seu próximo ativo merece uma estratégia, não uma cota qualquer.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 36 }}>
            <div style={{ width: 40, height: 2, background: '#1F3A2E', marginRight: 16 }} />
            <div style={{ fontFamily: 'Montserrat', fontSize: 22, color: '#1F3A2E' }}>João Dias | Consórcio Inteligente</div>
          </div>
          <div style={{ fontFamily: 'Montserrat', fontSize: 15, color: '#6E7872', marginTop: 12 }}>
            Gaia Group · Administração exclusiva HS Consórcios
          </div>
        </div>
        <img src={fotoSrc} width={480} height={630} style={{ objectFit: 'cover' }} alt="" />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Cormorant', data: serif, weight: 500, style: 'normal' },
        { name: 'Montserrat', data: sans, weight: 600, style: 'normal' },
      ],
    }
  );
}
