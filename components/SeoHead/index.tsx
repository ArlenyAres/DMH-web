import { JSON_LD_LOCAL_BUSINESS } from '@/lib/seo';
import type { SeoHeadProps } from './types';

export function SeoHead({ jsonLd }: SeoHeadProps = {}) {
  const data = jsonLd ?? JSON_LD_LOCAL_BUSINESS;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
