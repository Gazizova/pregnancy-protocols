import Card from './Card'
import Icon from './Icon'
import { categoryStyle } from '../data/categoryStyle'

export default function TrimesterTrack({ trimester, items, protocol, expanded, onToggleExpand, onOpenModal }) {
  const width = items.length * 266 - 16

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          width,
          boxSizing: 'border-box',
          borderRadius: 'var(--radius-band)',
          background: trimester.bg,
          color: trimester.accent,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 20px',
          marginBottom: 22,
        }}
      >
        <span style={{ fontSize: 16 }}>{trimester.emoji}</span>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>{trimester.label}</span>
        <span style={{ fontSize: 13, opacity: 0.75 }}>{trimester.range}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Icon kind="chevronDown" size={14} color={trimester.accent} strokeWidth={2.5} style={{ transform: 'rotate(-90deg)' }} />
        </span>
      </div>

      <div style={{ position: 'relative', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          style={{ position: 'absolute', left: 0, right: 8, top: 0, width: 'calc(100% - 8px)', height: 34, zIndex: 0 }}
        >
          <path
            d="M0,20 Q 8,4 16,20 T 32,20 T 48,20 T 64,20 T 80,20 T 96,20 T 112,20"
            fill="none"
            stroke={trimester.accent}
            strokeOpacity="0.4"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span
          style={{
            position: 'absolute',
            right: -2,
            top: 11,
            width: 0,
            height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: `7px solid ${trimester.accent}`,
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        {items.map((item) => {
          const cat = categoryStyle(protocol.categoryMap, item.category, protocol.categoryFallback)
          return (
            <div key={item.id} style={{ width: 250, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: cat.bg,
                  border: '2px solid var(--page-bg)',
                  boxShadow: `0 0 0 1.5px ${cat.dot}`,
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon kind={cat.kind} size={15} color={cat.dot} />
              </div>
              <Card
                item={item}
                protocol={protocol}
                expanded={!!expanded[item.id]}
                onToggleExpand={onToggleExpand}
                onOpenModal={(modalId) => onOpenModal(modalId)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
