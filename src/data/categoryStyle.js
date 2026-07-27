export const UA_CATEGORY_MAP = {
  'аналізи': { bg: 'oklch(0.95 0.035 165)', color: 'oklch(0.4 0.09 165)', dot: 'oklch(0.64 0.1 165)', kind: 'lab' },
  'УЗД': { bg: 'oklch(0.95 0.03 285)', color: 'oklch(0.42 0.1 285)', dot: 'oklch(0.62 0.11 285)', kind: 'usg' },
  'інше': { bg: 'oklch(0.95 0.035 55)', color: 'oklch(0.45 0.09 55)', dot: 'oklch(0.68 0.1 55)', kind: 'visit' },
  'вакцинація': { bg: 'oklch(0.95 0.035 15)', color: 'oklch(0.45 0.1 15)', dot: 'oklch(0.65 0.1 15)', kind: 'vaccine' },
}

export const INTL_CATEGORY_MAP = {
  'аналізи': { bg: 'oklch(0.95 0.035 165)', color: 'oklch(0.4 0.09 165)', dot: 'oklch(0.64 0.1 165)', kind: 'lab' },
  'УЗД': { bg: 'oklch(0.95 0.03 285)', color: 'oklch(0.42 0.1 285)', dot: 'oklch(0.62 0.11 285)', kind: 'usg' },
  'візит': { bg: 'oklch(0.95 0.035 55)', color: 'oklch(0.45 0.09 55)', dot: 'oklch(0.68 0.1 55)', kind: 'visit' },
  'вакцинація': { bg: 'oklch(0.95 0.035 15)', color: 'oklch(0.45 0.1 15)', dot: 'oklch(0.65 0.1 15)', kind: 'vaccine' },
}

export function categoryStyle(categoryMap, category, fallbackCategory) {
  return categoryMap[category] || (fallbackCategory ? categoryMap[fallbackCategory] : undefined)
}

export const TRIMESTER_STYLE = {
  1: { bg: 'oklch(0.96 0.025 165)', accent: 'oklch(0.42 0.09 165)', emoji: '🌱' },
  2: { bg: 'oklch(0.96 0.025 55)', accent: 'oklch(0.46 0.09 55)', emoji: '☀️' },
  3: { bg: 'oklch(0.96 0.02 285)', accent: 'oklch(0.42 0.08 285)', emoji: '🌙' },
}
