import Card from './Card'
import { TRIMESTER_STYLE } from '../data/categoryStyle'

export default function TrimesterTrack({ trimester, items, expanded, onToggleExpand, onOpenModal, otherLabel }) {
  const style = TRIMESTER_STYLE[trimester.number]
  const width = items.length * 266 - 16

  return (
    <div style={{ flexShrink: 0 }}>
      <div
        style={{
          width,
          borderRadius: 'var(--radius-band)',
          background: style.bg,
          color: style.accent,
          textAlign: 'center',
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        {style.emoji} {trimester.label} · {trimester.weeks}
      </div>

      <div style={{ position: 'relative' }}>
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            width,
            height: 80,
            zIndex: 0,
          }}
        >
          <path
            d="M0,20 Q25,0 50,20 T100,20"
            fill="none"
            stroke={style.accent}
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        </svg>

        <div style={{ display: 'flex', gap: 16, position: 'relative', zIndex: 1 }}>
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              expanded={!!expanded[item.id]}
              onToggleExpand={onToggleExpand}
              onOpenModal={onOpenModal}
              otherLabel={otherLabel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
