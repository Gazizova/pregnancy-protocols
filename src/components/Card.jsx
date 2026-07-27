import Icon from './Icon'
import { categoryStyle } from '../data/categoryStyle'
import { normalizeBlocks } from '../utils/blocks'

const REQUIRED_COLOR = 'oklch(0.5 0.1 165)'
const OPTIONAL_COLOR = 'oklch(0.58 0.12 55)'

export default function Card({ item, protocol, expanded, onToggleExpand, onOpenModal }) {
  const cat = categoryStyle(protocol.categoryMap, item.category, protocol.categoryFallback)
  const cardBg = item.required ? 'white' : cat.bg

  return (
    <div style={{ width: 250, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span style={{ fontSize: 12.5, fontWeight: 600, color: 'oklch(0.5 0.02 260)', marginBottom: 10, textAlign: 'center' }}>
        {item.week}
      </span>

      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: cat.bg,
          border: '2px solid white',
          boxShadow: `0 0 0 1.5px ${cat.dot}, 0 3px 8px oklch(0.2 0.02 260 / 0.08)`,
          position: 'relative',
          zIndex: 1,
          marginBottom: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon kind={cat.kind} size={17} color={cat.dot} />
      </div>

      <div style={{ background: cardBg, borderRadius: 22, width: '100%', boxSizing: 'border-box', overflow: 'hidden', boxShadow: '0 1px 2px oklch(0.2 0.02 260/.03), 0 10px 24px oklch(0.2 0.02 260/.05)' }}>
        <div style={{ padding: '16px 16px 14px', textAlign: 'center' }}>
          <div style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 4, minHeight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {item.title}
          </div>
          <div style={{ fontSize: 12, color: 'oklch(0.55 0.02 260)', marginBottom: 10 }}>{item.shortDesc}</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, marginBottom: 10, fontSize: 11.5, fontWeight: 700, letterSpacing: '.02em', color: item.required ? REQUIRED_COLOR : OPTIONAL_COLOR }}>
            <span>{item.required ? '✓' : '○'}</span>{item.required ? "Обов'язково" : 'Необов’язково'}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.03em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, background: 'white', color: cat.dot, border: `1.5px solid ${cat.dot}` }}>
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
              fontSize: 12.5,
              fontWeight: 700,
              color: cat.color,
              background: 'white',
              border: '1px solid oklch(0.85 0.01 260)',
              borderRadius: 999,
              padding: '7px 16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginTop: 16,
            }}
          >
            {expanded ? 'Згорнути' : 'Детальніше'} <span>→</span>
          </button>
        </div>

        {expanded && (
          <div style={{ padding: '0 18px 20px', borderTop: '1px solid oklch(0.92 0.008 260)', textAlign: 'left' }}>
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
  borderRadius: 999,
  background: 'white',
  color: 'oklch(0.45 0.1 250)',
  border: '1.5px solid oklch(0.62 0.1 250)',
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
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'oklch(0.35 0.02 260)', margin: '16px 0 16px' }}>{item.desc}</p>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'oklch(0.5 0.02 260)', marginBottom: 8 }}>
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
              color: modalId ? 'oklch(0.42 0.1 285)' : 'oklch(0.3 0.02 260)',
              textDecoration: modalId ? 'underline' : 'none',
              cursor: modalId ? 'pointer' : 'default',
              paddingLeft: 14,
              position: 'relative',
              marginBottom: 5,
            }}
          >
            <span style={{ position: 'absolute', left: 0 }}>–</span>{text}
          </div>
        )
      })}
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'oklch(0.5 0.02 260)', margin: '14px 0 8px' }}>
        Підготовка
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.55, color: 'oklch(0.3 0.02 260)', margin: 0 }}>{item.prep}</p>
    </>
  )
}

function Blocks({ blocks }) {
  return (
    <div style={{ margin: '16px 0' }}>
      {blocks.map((block, i) => {
        if (block.isHeader) {
          return (
            <div key={i} style={{ fontSize: 14.5, fontWeight: 700, color: 'oklch(0.25 0.02 260)', margin: '0 0 8px' }}>
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
          <p key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: 'oklch(0.35 0.02 260)', margin: '0 0 12px' }}>
            <strong>{block.lead}</strong>{block.text}
          </p>
        )
      })}
    </div>
  )
}
