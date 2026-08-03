import Icon from './Icon'
import { categoryStyle } from '../data/categoryStyle'
import { normalizeBlocks } from '../utils/blocks'

export default function Card({ item, protocol, expanded, onToggleExpand, onOpenModal }) {
  const cat = categoryStyle(protocol.categoryMap, item.category, protocol.categoryFallback)

  return (
    <div style={{ width: 250, flexShrink: 0 }}>
      <div
        style={{
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-card)',
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ padding: '16px 16px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: cat.bg,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon kind={cat.kind} size={16} color={cat.dot} />
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)' }}>{item.week}</span>
          </div>

          <div style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 4, color: 'var(--text-primary)' }}>
            {item.title}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 10 }}>{item.shortDesc}</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              marginBottom: 10,
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: '.02em',
              color: item.required ? 'var(--status-required)' : 'var(--status-optional)',
            }}
          >
            <span>{item.required ? '✓' : '○'}</span>{item.required ? "Обов'язково" : 'Необов’язково'}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '.03em',
                textTransform: 'uppercase',
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: cat.bg,
                color: cat.color,
              }}
            >
              {item.category}
            </span>
            {item.hasCostInfo && (
              <button onClick={() => onOpenModal('cost')} style={chipStyle}>💶 Вартість у світі</button>
            )}
            {item.hasGdmInfo && (
              <button onClick={() => onOpenModal('gdm')} style={chipStyle}>📖 Про гестаційний діабет</button>
            )}
            {item.hasAnatomyInfo && (
              <button onClick={() => onOpenModal('anatomy')} style={chipStyle}>📖 Про анатомію плода</button>
            )}
          </div>
          <button
            onClick={() => onToggleExpand(item.id)}
            style={{
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 700,
              color: 'var(--accent)',
              background: 'none',
              border: 'none',
              padding: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {expanded ? 'Згорнути' : 'Детальніше'}
            <Icon kind="chevronDown" size={14} color="var(--accent)" strokeWidth={2.5}
              style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform .15s' }} />
          </button>
        </div>

        {expanded && (
          <div style={{ padding: '0 16px 18px', borderTop: '1px solid var(--border-subtle)', textAlign: 'left' }}>
            <CardExpandedContent item={item} protocol={protocol} onOpenModal={onOpenModal} />
          </div>
        )}
      </div>
    </div>
  )
}

const chipStyle = {
  cursor: 'pointer',
  fontSize: 10.5,
  fontWeight: 700,
  letterSpacing: '.02em',
  padding: '3px 10px',
  borderRadius: 'var(--radius-pill)',
  background: 'var(--accent-soft-bg)',
  color: 'var(--accent)',
  border: 'none',
}

function CardExpandedContent({ item, protocol, onOpenModal }) {
  if (protocol.alwaysBlocks) {
    const blocks = normalizeBlocks(item.descRaw || [{ h: false, t: item.desc }])
    return <Blocks blocks={blocks} />
  }

  if (item.descRaw) {
    return <Blocks blocks={normalizeBlocks(item.descRaw)} />
  }

  return (
    <>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '16px 0 16px' }}>{item.desc}</p>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-tertiary)', marginBottom: 8 }}>
        Що входить
      </div>
      {item.list.map((li, i) => {
        const isObj = typeof li === 'object'
        const text = isObj ? li.text : li
        const modalId = isObj ? li.modalId : undefined
        return (
          <div
            key={i}
            onClick={modalId ? () => onOpenModal(modalId) : undefined}
            style={{
              fontSize: 13,
              lineHeight: 1.55,
              color: modalId ? 'var(--accent)' : 'var(--text-secondary)',
              textDecoration: modalId ? 'underline' : 'none',
              cursor: modalId ? 'pointer' : 'default',
              paddingLeft: 16,
              position: 'relative',
              marginBottom: 5,
            }}
          >
            <span style={{ position: 'absolute', left: 0 }}>•</span>{text}
          </div>
        )
      })}
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-tertiary)', margin: '14px 0 8px' }}>
        Підготовка
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{item.prep}</p>
    </>
  )
}

function Blocks({ blocks }) {
  return (
    <div style={{ margin: '16px 0' }}>
      {blocks.map((block, i) => {
        if (block.isHeader) {
          return (
            <div key={i} style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px' }}>
              {block.text}
            </div>
          )
        }
        if (block.isBullet) {
          return (
            <div key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', paddingLeft: 16, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 0 }}>•</span>{block.text}
            </div>
          )
        }
        if (block.isSubBullet) {
          return (
            <div key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', paddingLeft: 34, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 16 }}>•</span>{block.text}
            </div>
          )
        }
        if (block.isNumbered) {
          return (
            <div key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', paddingLeft: 20, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 0, fontWeight: 600 }}>{block.num}.</span>{block.text}
            </div>
          )
        }
        return (
          <p key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 12px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>{block.lead}</strong>{block.text}
          </p>
        )
      })}
    </div>
  )
}
