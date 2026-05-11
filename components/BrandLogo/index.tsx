'use client';
import { useState } from 'react';
import Image from 'next/image';

const SI_BASE = 'https://cdn.simpleicons.org';

interface BrandLogoProps {
  name: string;
  iconSlug?: string;
  logoSrc?: string;
  imgClassName: string;
  fallbackClassName: string;
  width?: number;
  height?: number;
}

export function BrandLogo({ name, iconSlug, logoSrc, imgClassName, fallbackClassName, width = 48, height = 48 }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  // Local PNGs → next/image (optimizado)
  if (logoSrc && !failed) {
    return (
      <Image
        src={logoSrc}
        alt={name}
        width={width}
        height={height}
        className={imgClassName}
        onError={() => setFailed(true)}
      />
    );
  }

  // SVGs externos de SimpleIcons → <img> nativo (next/image no procesa SVG externo)
  if (iconSlug && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${SI_BASE}/${iconSlug}`}
        alt={name}
        width={width}
        height={height}
        loading="lazy"
        className={imgClassName}
        onError={() => setFailed(true)}
      />
    );
  }

  return <span className={fallbackClassName}>{name}</span>;
}
