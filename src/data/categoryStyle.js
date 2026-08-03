const KIND_STYLE = {
  lab: { bg: 'var(--cat-lab-bg)', color: 'var(--cat-lab-text)', dot: 'var(--cat-lab-dot)' },
  usg: { bg: 'var(--cat-usg-bg)', color: 'var(--cat-usg-text)', dot: 'var(--cat-usg-dot)' },
  visit: { bg: 'var(--cat-visit-bg)', color: 'var(--cat-visit-text)', dot: 'var(--cat-visit-dot)' },
  vaccine: { bg: 'var(--cat-vaccine-bg)', color: 'var(--cat-vaccine-text)', dot: 'var(--cat-vaccine-dot)' },
}

function withKind(kind) {
  return { ...KIND_STYLE[kind], kind }
}

export const UA_CATEGORY_MAP = {
  'аналізи': withKind('lab'),
  'УЗД': withKind('usg'),
  'інше': withKind('visit'),
  'вакцинація': withKind('vaccine'),
}

export const INTL_CATEGORY_MAP = {
  'аналізи': withKind('lab'),
  'УЗД': withKind('usg'),
  'візит': withKind('visit'),
  'вакцинація': withKind('vaccine'),
}

export function categoryStyle(categoryMap, category, fallbackCategory) {
  return categoryMap[category] || (fallbackCategory ? categoryMap[fallbackCategory] : undefined)
}

export const TRIMESTER_STYLE = {
  1: { bg: 'var(--tri1-bg)', accent: 'var(--tri1-accent)', emoji: '🌱' },
  2: { bg: 'var(--tri2-bg)', accent: 'var(--tri2-accent)', emoji: '☀️' },
  3: { bg: 'var(--tri3-bg)', accent: 'var(--tri3-accent)', emoji: '🌙' },
}
