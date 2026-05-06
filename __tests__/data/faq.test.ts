import { FAQ } from '@/data/faq';

describe('FAQ data', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(FAQ)).toBe(true);
    expect(FAQ.length).toBeGreaterThan(0);
  });

  it('every item has id, question, and answer', () => {
    FAQ.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.question).toBeTruthy();
      expect(item.answer).toBeTruthy();
    });
  });

  it('FAQ ids are unique', () => {
    const ids = FAQ.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all questions end with "?"', () => {
    FAQ.forEach((item) => {
      expect(item.question.trim().endsWith('?')).toBe(true);
    });
  });
});
