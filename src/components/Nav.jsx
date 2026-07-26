import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/ukraine', label: 'Україна (МОЗ)' },
  { to: '/nice', label: 'Великобританія (NICE)' },
  { to: '/acog', label: 'США (ACOG)' },
]

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <nav style={{ display: 'flex', gap: 8, justifyContent: 'center', padding: '20px 0', flexWrap: 'wrap' }}>
      {LINKS.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          style={{
            padding: '8px 18px',
            borderRadius: 'var(--radius-pill)',
            fontSize: 13.5,
            fontWeight: 600,
            background: pathname === l.to ? 'var(--text-primary)' : '#fff',
            color: pathname === l.to ? '#fff' : 'var(--text-primary)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}
