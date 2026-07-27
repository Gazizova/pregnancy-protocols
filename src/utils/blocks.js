export function normalizeBlocks(rawBlocks) {
  return (rawBlocks || []).map((b) => ({
    text: b.t,
    lead: b.lead || '',
    num: b.n || 0,
    isHeader: !!b.h,
    isBullet: !!b.b,
    isSubBullet: !!b.b2,
    isNumbered: !!b.n,
    isParagraph: !b.h && !b.b && !b.b2 && !b.n,
  }))
}
