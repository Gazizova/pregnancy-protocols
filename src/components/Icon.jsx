const paths = {
  'test-tube': (
    <>
      <path d="M9 2v6.5l-4.5 9A3 3 0 0 0 7.2 22h9.6a3 3 0 0 0 2.7-4.5L15 8.5V2" />
      <path d="M9 2h6" />
      <path d="M6.5 15h11" />
    </>
  ),
  'activity-wave': (
    <path d="M3 12h3l2.5-7L13 19l2.5-9.5L17 12h4" />
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="18" rx="2" />
      <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
  syringe: (
    <>
      <path d="M18 2l4 4" />
      <path d="M17 7l-11 11" />
      <path d="M14.5 4.5l5 5" />
      <path d="M3 21l3-1 1-3L4.5 14 2 16.5z" />
      <path d="M9.5 10.5l4 4" />
    </>
  ),
}

export default function Icon({ name, size = 17, color = 'currentColor' }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {content}
    </svg>
  )
}
