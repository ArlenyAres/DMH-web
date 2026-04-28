'use client';
import { useState } from 'react';

const SI_BASE = 'https://cdn.simpleicons.org';

interface BrandLogoProps {
  name: string;
  iconSlug?: string;
  logoSrc?: string;
  imgClassName: string;
  fallbackClassName: string;
}

export function BrandLogo({ name, iconSlug, logoSrc, imgClassName, fallbackClassName }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  const src = logoSrc ?? (iconSlug ? `${SI_BASE}/${iconSlug}` : null);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={name}
        className={imgClassName}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return <span className={fallbackClassName}>{name}</span>;
}
