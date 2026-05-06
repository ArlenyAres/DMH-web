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

  const src = logoSrc ?? (iconSlug ? `${SI_BASE}/${iconSlug}` : null);

  if (src && !failed) {
    return (
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        className={imgClassName}
        onError={() => setFailed(true)}
      />
    );
  }

  return <span className={fallbackClassName}>{name}</span>;
}
