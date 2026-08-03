const paths = {
  lab: (
    <>
      <path d="M9 2v7.5L4.2 18a2 2 0 0 0 1.7 3h12.2a2 2 0 0 0 1.7-3L15 9.5V2" />
      <path d="M8.5 2h7" />
      <path d="M6 14h12" />
    </>
  ),
  usg: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  visit: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6M9 19h3" />
    </>
  ),
  vaccine: (
    <>
      <path d="M18 2l4 4-2 2-4-4z" />
      <path d="M20 4l-3.5 3.5" />
      <path d="M14.5 7.5 4 18l-1 3 3-1L16.5 9.5" />
      <path d="M9 13l2 2" />
      <path d="M6 16l2 2" />
    </>
  ),
  brand: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M8.5 10.5C6 11.5 4 14 4 17.5c0 1.5 1 2.5 2.5 2.5h11c1.5 0 2.5-1 2.5-2.5 0-3.5-2-6-4.5-7" />
      <path d="M12 14v3" />
    </>
  ),
  moon: <path d="M21 12.5A8.5 8.5 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z" />,
  bookmark: <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
}

export default function Icon({ kind, size = 17, color = 'currentColor', strokeWidth = 2, fill = 'none', style }) {
  const content = paths[kind]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {content}
    </svg>
  )
}
