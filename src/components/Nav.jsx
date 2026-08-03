import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Icon from './Icon'
import '../styles/nav.css'

const LINKS = [
  { to: '/ukraine', label: 'Український протокол', flag: '🇺🇦' },
  { to: '/nice', label: 'Британський (NICE)', flag: '🇬🇧' },
  { to: '/acog', label: 'Американський (ACOG)', flag: '🇺🇸' },
]

export default function Nav({ theme, onToggleTheme }) {
  const { pathname } = useLocation()
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
      <div
        className="nav-pill-group"
        style={{
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-pill)',
          padding: 4,
          boxShadow: 'var(--shadow-card)',
        }}
      >
        {LINKS.map((l) => {
          const active = pathname === l.to
          return (
            <Link
              key={l.to}
              to={l.to}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 18px',
                borderRadius: 'var(--radius-pill)',
                background: active ? 'var(--accent-soft-bg)' : 'transparent',
                color: active ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: 13.5,
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              <span aria-hidden="true">{l.flag}</span>
              {l.label}
            </Link>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={onToggleTheme}
          aria-label="Перемкнути тему"
          style={iconButtonStyle}
        >
          <Icon kind="moon" size={16} color="var(--text-secondary)" fill={theme === 'dark' ? 'var(--text-secondary)' : 'none'} />
        </button>
        <button
          onClick={() => setBookmarked((b) => !b)}
          aria-label="Зберегти"
          style={iconButtonStyle}
        >
          <Icon kind="bookmark" size={16} color={bookmarked ? 'var(--accent)' : 'var(--text-secondary)'} fill={bookmarked ? 'var(--accent)' : 'none'} />
        </button>
      </div>
    </div>
  )
}

const iconButtonStyle = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'var(--card-bg)',
  border: '1px solid var(--border-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'var(--shadow-card)',
}
