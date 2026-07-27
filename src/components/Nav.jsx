import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/ukraine', label: 'Український протокол' },
  { to: '/nice', label: 'Британський (NICE)' },
  { to: '/acog', label: 'Американський (ACOG)' },
]

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {LINKS.map((l) =>
        pathname === l.to ? (
          <div
            key={l.to}
            style={{ padding: '8px 16px', borderRadius: 999, background: 'oklch(0.3 0.06 260)', color: 'white', fontSize: 13, fontWeight: 600 }}
          >
            {l.label}
          </div>
        ) : (
          <Link
            key={l.to}
            to={l.to}
            style={{ padding: '8px 16px', borderRadius: 999, background: 'oklch(0.94 0.005 260)', color: 'oklch(0.4 0.02 260)', fontSize: 13, fontWeight: 600 }}
          >
            {l.label}
          </Link>
        )
      )}
    </div>
  )
}
