import { useState } from 'react'
import Nav from '../components/Nav'
import Toggle from '../components/Toggle'
import TrimesterTrack from '../components/TrimesterTrack'
import Icon from '../components/Icon'
import { BlockModal, CostModal } from '../components/Modal'
import { categoryStyle, TRIMESTER_STYLE } from '../data/categoryStyle'
import { normalizeBlocks } from '../utils/blocks'
import '../styles/protocol.css'

export default function ProtocolPage({ protocol, theme, onToggleTheme }) {
  const [expanded, setExpanded] = useState({})
  const [showOptional, setShowOptional] = useState(true)
  const [openModalId, setOpenModalId] = useState(null)

  const toggleExpand = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  const legendCategories = protocol.categoryOrder.map((key) => {
    const cat = categoryStyle(protocol.categoryMap, key)
    return { key, label: protocol.categoryLegendLabels[key], ...cat }
  })

  const activeExtraModal = openModalId && openModalId !== 'cost' ? protocol.extraModals[openModalId] : null

  const [titlePrefix, titleMain] = splitTitle(protocol.title)

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: 'var(--text-primary)', background: 'var(--page-bg)', paddingBottom: 80 }}>
      <div className="protocol-container">
        <div style={{ marginBottom: 24 }}>
          <Nav theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        <div
          className="protocol-header-card"
          style={{
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-band)',
            boxShadow: 'var(--shadow-header)',
            border: '1px solid var(--border-subtle)',
            padding: '28px 32px',
            marginBottom: 24,
          }}
        >
          <div className="protocol-header-top">
            <div style={{ display: 'flex', gap: 18 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'var(--accent-soft-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon kind="brand" size={28} color="var(--accent)" />
              </div>
              <div>
                <h1 style={{ fontSize: 22, fontWeight: 500, margin: '2px 0 2px', color: 'var(--text-primary)' }}>
                  {titlePrefix}
                </h1>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--accent)', marginBottom: 10 }}>
                  {titleMain}
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: 560, margin: 0 }}>
                  {protocol.subtitle}
                </p>
              </div>
            </div>

            <div className="protocol-legend">
              {legendCategories.map((cat) => (
                <div
                  key={cat.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: cat.color,
                    whiteSpace: 'nowrap',
                    padding: '6px 12px 6px 6px',
                    borderRadius: 'var(--radius-pill)',
                    background: cat.bg,
                  }}
                >
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: cat.dot, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon kind={cat.kind} size={12} color="white" />
                  </span>
                  {cat.label}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', margin: '24px 0 18px' }} />

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 5,
                  background: 'var(--cat-lab-bg)',
                  border: '1.5px solid var(--status-required)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon kind="check" size={11} color="var(--status-required)" strokeWidth={3} />
              </span>
              {protocol.requiredLegendLabel}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, color: 'var(--text-primary)' }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 5,
                  border: '1.5px dashed var(--text-tertiary)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              Додаткове (за бажанням)
              <Toggle checked={showOptional} onChange={setShowOptional} />
            </div>
          </div>
        </div>
      </div>

      <div className="protocol-track-wrap">
        <div style={{ display: 'flex', gap: 40, width: 'max-content', minWidth: '100%' }}>
          {protocol.trimesters.map((tri) => {
            const items = tri.items.filter((it) => showOptional || it.required)
            if (items.length === 0) return null
            const style = TRIMESTER_STYLE[tri.number]
            return (
              <TrimesterTrack
                key={tri.number}
                trimester={{ ...tri, bg: style.bg, accent: style.accent }}
                items={items}
                protocol={protocol}
                expanded={expanded}
                onToggleExpand={toggleExpand}
                onOpenModal={setOpenModalId}
              />
            )
          })}
        </div>
      </div>

      <div className="protocol-footer">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
          <div style={{ flex: 1, minWidth: 280, background: 'var(--card-bg)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: '18px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--accent-soft-bg)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
              i
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{protocol.footerHint}</p>
          </div>
          <div style={{ flex: 1, minWidth: 280, background: 'var(--accent-soft-bg)', border: '1px solid var(--border-subtle)', borderRadius: 14, padding: '18px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 18 }}>★</span>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{protocol.footerDisclaimer}</p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-tertiary)', textAlign: 'right', margin: 0 }}>{protocol.sourceNote}</p>
      </div>

      <CostModal
        open={openModalId === 'cost'}
        onClose={() => setOpenModalId(null)}
        title={protocol.costModal.title}
        sections={protocol.costModal.sections}
      />
      <BlockModal
        open={!!activeExtraModal}
        onClose={() => setOpenModalId(null)}
        title={activeExtraModal?.title}
        blocks={activeExtraModal ? normalizeBlocks(activeExtraModal.blocks) : []}
      />
    </div>
  )
}

function splitTitle(title) {
  const idx = title.indexOf(': ')
  if (idx === -1) return ['', title]
  return [title.slice(0, idx + 1), title.slice(idx + 2)]
}
