import { fadeUp, staggerContainer, heroEntrance } from '@/lib/animations';

describe('fadeUp', () => {
  it('has hidden and visible states', () => {
    expect(fadeUp).toHaveProperty('hidden');
    expect(fadeUp).toHaveProperty('visible');
  });

  it('hidden state has opacity 0 and y offset', () => {
    expect(fadeUp.hidden).toMatchObject({ opacity: 0, y: 16 });
  });

  it('visible state has opacity 1 and y 0', () => {
    const visible = fadeUp.visible as Record<string, unknown>;
    expect(visible).toMatchObject({ opacity: 1, y: 0 });
  });
});

describe('staggerContainer', () => {
  it('has hidden and visible states', () => {
    expect(staggerContainer).toHaveProperty('hidden');
    expect(staggerContainer).toHaveProperty('visible');
  });

  it('visible state includes staggerChildren transition', () => {
    const visible = staggerContainer.visible as { transition?: { staggerChildren?: number } };
    expect(visible.transition?.staggerChildren).toBeGreaterThan(0);
  });
});

describe('heroEntrance', () => {
  it('returns an object with hidden and visible states', () => {
    const variant = heroEntrance(0);
    expect(variant).toHaveProperty('hidden');
    expect(variant).toHaveProperty('visible');
  });

  it('hidden state has opacity 0', () => {
    const variant = heroEntrance(1) as { hidden: { opacity: number } };
    expect(variant.hidden.opacity).toBe(0);
  });

  it('visible state delay increases with index', () => {
    const v0 = heroEntrance(0) as { visible: { transition: { delay: number } } };
    const v2 = heroEntrance(2) as { visible: { transition: { delay: number } } };
    expect(v2.visible.transition.delay).toBeGreaterThan(v0.visible.transition.delay);
  });
});
