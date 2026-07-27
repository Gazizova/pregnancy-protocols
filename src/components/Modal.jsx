function Shell({ onClose, maxWidth, children }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'oklch(0.2 0.02 260 / 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: 16,
          maxWidth,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: 32,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Header({ title, onClose }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, gap: 16 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{title}</h2>
      <button
        onClick={onClose}
        style={{
          background: 'oklch(0.95 0.005 260)',
          border: 'none',
          borderRadius: '50%',
          width: 32,
          height: 32,
          fontSize: 16,
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  )
}

export function BlockModal({ open, onClose, title, blocks }) {
  if (!open) return null
  return (
    <Shell onClose={onClose} maxWidth={680}>
      <Header title={title} onClose={onClose} />
      {blocks.map((block, i) => {
        if (block.isHeader) {
          return (
            <div key={i} style={{ fontSize: 14.5, fontWeight: 700, color: 'oklch(0.25 0.02 260)', margin: '16px 0 8px' }}>
              {block.text}
            </div>
          )
        }
        if (block.isBullet) {
          return (
            <div key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'oklch(0.35 0.02 260)', paddingLeft: 16, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 0 }}>–</span>{block.text}
            </div>
          )
        }
        if (block.isSubBullet) {
          return (
            <div key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'oklch(0.35 0.02 260)', paddingLeft: 34, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 16 }}>–</span>{block.text}
            </div>
          )
        }
        if (block.isNumbered) {
          return (
            <div key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'oklch(0.35 0.02 260)', paddingLeft: 20, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 0, fontWeight: 600 }}>{block.num}.</span>{block.text}
            </div>
          )
        }
        return (
          <p key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'oklch(0.35 0.02 260)', margin: '0 0 10px' }}>
            <strong>{block.lead}</strong>{block.text}
          </p>
        )
      })}
    </Shell>
  )
}

export function CostModal({ open, onClose, title, sections }) {
  if (!open) return null
  return (
    <Shell onClose={onClose} maxWidth={640}>
      <Header title={title} onClose={onClose} />
      {sections.map((section, i) => (
        <div key={i} style={{ marginBottom: i < sections.length - 1 ? 22 : 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', color: section.color, marginBottom: 8 }}>
            {section.heading}
          </div>
          {section.paragraphs.map((html, j) => (
            <p
              key={j}
              style={{ fontSize: 14.5, lineHeight: 1.6, color: 'oklch(0.35 0.02 260)', margin: j < section.paragraphs.length - 1 ? '0 0 8px' : 0 }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      ))}
    </Shell>
  )
}
