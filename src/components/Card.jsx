import Icon from './Icon'
import { categoryStyle } from '../data/categoryStyle'

export default function Card({ item, expanded, onToggleExpand, onOpenModal, otherLabel }) {
  const style = categoryStyle(item.category, otherLabel)

  return (
    <div style={{ width: 250, flexShrink: 0 }}>
      <div style={{ fontSize: 12.5, color: '#667', marginBottom: 6 }}>{item.week}</div>

      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: style.bg,
          border: '2px solid #fff',
          boxShadow: `0 0 0 1.5px ${style.dot}, 0 3px 8px oklch(0.2 0.02 260 / 0.08)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <Icon name={style.icon} size={17} color={style.dot} />
      </div>

      <div
        style={{
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow-card)',
          padding: 16,
        }}
      >
        <div style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 10 }}>
          {item.shortDesc}
        </div>

        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: item.required ? 'var(--status-required)' : 'var(--status-optional)',
            marginBottom: 10,
          }}
        >
          {item.required ? '✓ Обов’язково' : '○ Необов’язково'}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 4 }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 10.5,
              fontWeight: 700,
              padding: '3px 10px',
              borderRadius: 'var(--radius-pill)',
              background: '#fff',
              border: `1.5px solid ${style.dot}`,
              color: style.text,
            }}
          >
            {style.label}
          </span>
          {(item.chips || []).map((chip) => (
            <button
              key={chip.modalId}
              onClick={() => onOpenModal(chip.modalId)}
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: '#fff',
                border: '1.5px solid #ddd',
                color: 'var(--text-secondary)',
              }}
            >
              {chip.icon} {chip.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onToggleExpand(item.id)}
          style={{
            marginTop: 16,
            width: '100%',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 'var(--radius-pill)',
            color: style.text,
            fontSize: 12.5,
            fontWeight: 600,
            padding: '8px 0',
          }}
        >
          {expanded ? 'Згорнути' : 'Детальніше →'}
        </button>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: 8,
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            padding: 16,
          }}
        >
          <CardExpandedContent item={item} onOpenModal={onOpenModal} />
        </div>
      )}
    </div>
  )
}

function CardExpandedContent({ item, onOpenModal }) {
  if (item.descRaw) {
    return item.descRaw.map((block, i) => {
      if (block.type === 'header') {
        return (
          <p key={i} style={{ fontWeight: 700, fontSize: 13.5, margin: '0 0 6px' }}>
            {block.text}
          </p>
        )
      }
      if (block.type === 'bullet') {
        return (
          <li key={i} style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginBottom: 4 }}>
            {block.text}
          </li>
        )
      }
      return (
        <p key={i} style={{ fontSize: 12.5, color: 'var(--text-secondary)', margin: '0 0 8px', lineHeight: 1.5 }}>
          {block.text}
        </p>
      )
    })
  }

  return (
    <>
      {item.desc && (
        <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', margin: '0 0 10px', lineHeight: 1.5 }}>
          {item.desc}
        </p>
      )}
      {item.list && item.list.length > 0 && (
        <>
          <p style={{ fontWeight: 700, fontSize: 12.5, margin: '0 0 6px' }}>Що входить</p>
          <ul style={{ margin: '0 0 10px', paddingLeft: 18 }}>
            {item.list.map((li, i) => (
              <li
                key={i}
                onClick={li.modalId ? () => onOpenModal(li.modalId) : undefined}
                style={{
                  fontSize: 12.5,
                  color: li.modalId ? 'var(--cat-uzd-text)' : 'var(--text-secondary)',
                  textDecoration: li.modalId ? 'underline' : 'none',
                  cursor: li.modalId ? 'pointer' : 'default',
                  marginBottom: 4,
                }}
              >
                {li.text}
              </li>
            ))}
          </ul>
        </>
      )}
      {item.prep && (
        <>
          <p style={{ fontWeight: 700, fontSize: 12.5, margin: '0 0 6px' }}>Підготовка</p>
          <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
            {item.prep}
          </p>
        </>
      )}
    </>
  )
}
