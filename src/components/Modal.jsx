export default function Modal({ open, onClose, title, blocks }) {
  if (!open) return null
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-modal)',
          maxWidth: 680,
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: 32,
          position: 'relative',
          boxShadow: 'var(--shadow-header)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Закрити"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            border: 'none',
            background: 'transparent',
            fontSize: 20,
            lineHeight: 1,
            color: 'var(--text-secondary)',
          }}
        >
          ✕
        </button>
        {title && (
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 32px 16px 0' }}>{title}</h2>
        )}
        <ModalBlocks blocks={blocks} />
      </div>
    </div>
  )
}

function ModalBlocks({ blocks }) {
  if (!blocks) return null
  return blocks.map((block, i) => {
    if (block.type === 'header') {
      return (
        <p key={i} style={{ fontWeight: 700, fontSize: 15.5, margin: '16px 0 6px' }}>
          {block.text}
        </p>
      )
    }
    if (block.type === 'bullet') {
      return (
        <li key={i} style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 4 }}>
          {block.text}
        </li>
      )
    }
    return (
      <p key={i} style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 10px' }}>
        {block.text}
      </p>
    )
  })
}
