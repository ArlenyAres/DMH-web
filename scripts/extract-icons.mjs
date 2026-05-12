import * as si from 'simple-icons';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const needed = [
  { slug: 'hp',               key: 'siHp' },
  { slug: 'dell',             key: 'siDell' },
  { slug: 'lenovo',           key: 'siLenovo' },
  { slug: 'apple',            key: 'siApple' },
  { slug: 'cisco',            key: 'siCisco' },
  { slug: 'panasonic',        key: 'siPanasonic' },
  { slug: 'epson',            key: 'siEpson' },
  { slug: 'kyocera',          key: 'siKyocera' },
  { slug: 'zebratechnologies', key: 'siZebratechnologies' },
  { slug: 'motorola',         key: 'siMotorola' },
  { slug: 'poly',             key: 'siPoly' },
  { slug: 'siemens',          key: 'siSiemens' },
];

for (const { slug, key } of needed) {
  const icon = si[key];
  if (!icon) {
    console.warn(`NOT FOUND in simple-icons: ${key}`);
    continue;
  }
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${icon.path}"/></svg>`;
  const outPath = join(publicDir, `${slug}.svg`);
  writeFileSync(outPath, svg, 'utf-8');
  console.log(`OK: ${slug}.svg`);
}
