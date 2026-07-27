import Card from './Card'

export default function TrimesterTrack({ trimester, items, protocol, expanded, onToggleExpand, onOpenModal }) {
  const width = items.length * 266 - 16

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          width,
          boxSizing: 'border-box',
          borderRadius: 20,
          background: trimester.bg,
          color: trimester.accent,
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: 10,
          flexWrap: 'wrap',
          padding: '16px 26px',
          marginBottom: 22,
        }}
      >
        <span style={{ fontSize: 16 }}>{trimester.emoji}</span>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>{trimester.label}</span>
        <span style={{ fontSize: 14, opacity: 0.75 }}>· {trimester.range}</span>
      </div>

      <div style={{ position: 'relative', display: 'flex', gap: 16, alignItems: 'flex-start', paddingTop: 16 }}>
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          style={{ position: 'absolute', left: 0, right: 0, top: 36, width: '100%', height: 40, zIndex: 0 }}
        >
          <path
            d="M0,20 Q 8,4 16,20 T 32,20 T 48,20 T 64,20 T 80,20 T 96,20 T 112,20"
            fill="none"
            stroke={trimester.accent}
            strokeOpacity="0.35"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>

        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            protocol={protocol}
            expanded={!!expanded[item.id]}
            onToggleExpand={onToggleExpand}
            onOpenModal={(modalId) => onOpenModal(modalId)}
          />
        ))}
      </div>
    </div>
  )
}
