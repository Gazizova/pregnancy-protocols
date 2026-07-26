export function categoryStyle(category, otherLabel = 'Інше') {
  switch (category) {
    case 'analysis':
      return {
        bg: 'var(--cat-analysis-bg)',
        text: 'var(--cat-analysis-text)',
        dot: 'var(--cat-analysis-dot)',
        icon: 'test-tube',
        label: 'Аналізи',
      }
    case 'uzd':
      return {
        bg: 'var(--cat-uzd-bg)',
        text: 'var(--cat-uzd-text)',
        dot: 'var(--cat-uzd-dot)',
        icon: 'activity-wave',
        label: 'УЗД',
      }
    case 'visit':
      return {
        bg: 'var(--cat-visit-bg)',
        text: 'var(--cat-visit-text)',
        dot: 'var(--cat-visit-dot)',
        icon: 'clipboard',
        label: otherLabel,
      }
    case 'vaccine':
      return {
        bg: 'var(--cat-vaccine-bg)',
        text: 'var(--cat-vaccine-text)',
        dot: 'var(--cat-vaccine-dot)',
        icon: 'syringe',
        label: 'Вакцинація',
      }
    default:
      return {
        bg: 'var(--cat-visit-bg)',
        text: 'var(--cat-visit-text)',
        dot: 'var(--cat-visit-dot)',
        icon: 'clipboard',
        label: otherLabel,
      }
  }
}

export const TRIMESTER_STYLE = {
  1: { bg: 'var(--tri1-bg)', accent: 'var(--tri1-accent)', emoji: '🌱' },
  2: { bg: 'var(--tri2-bg)', accent: 'var(--tri2-accent)', emoji: '☀️' },
  3: { bg: 'var(--tri3-bg)', accent: 'var(--tri3-accent)', emoji: '🌙' },
}
