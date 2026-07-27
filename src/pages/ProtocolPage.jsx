import { useState } from 'react'
import Nav from '../components/Nav'
import Toggle from '../components/Toggle'
import TrimesterTrack from '../components/TrimesterTrack'
import Icon from '../components/Icon'
import { BlockModal, CostModal } from '../components/Modal'
import { categoryStyle, TRIMESTER_STYLE } from '../data/categoryStyle'
import { normalizeBlocks } from '../utils/blocks'

export default function ProtocolPage({ protocol }) {
  const [expanded, setExpanded] = useState({})
  const [showOptional, setShowOptional] = useState(true)
  const [openModalId, setOpenModalId] = useState(null)

  const toggleExpand = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  const legendCategories = protocol.categoryOrder.map((key) => {
    const cat = categoryStyle(protocol.categoryMap, key)
    return { key, label: protocol.categoryLegendLabels[key], color: cat.dot, kind: cat.kind }
  })

  const activeExtraModal = openModalId && openModalId !== 'cost' ? protocol.extraModals[openModalId] : null

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: 'oklch(0.22 0.02 260)', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '40px 48px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 28 }}>
          <Nav />
        </div>

        <div
          style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 1px 3px oklch(0.2 0.02 260 / 0.08), 0 8px 24px oklch(0.2 0.02 260 / 0.05)',
            padding: '28px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 24,
            flexWrap: 'wrap',
            marginBottom: 32,
          }}
        >
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.01em', color: 'oklch(0.32 0.05 155)' }}>
              {protocol.title}
            </h1>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'oklch(0.48 0.02 260)', maxWidth: 640, margin: 0 }}>
              {protocol.subtitle}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', flexShrink: 0 }}>
            {legendCategories.map((cat) => (
              <div key={cat.key} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'oklch(0.4 0.02 260)', whiteSpace: 'nowrap' }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon kind={cat.kind} size={14} color="white" />
                </span>
                {cat.label}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, color: 'oklch(0.4 0.02 260)' }}>
            <span style={{ width: 22, height: 14, borderRadius: 4, background: 'oklch(0.94 0.02 150)', border: '1px solid oklch(0.55 0.1 150)', display: 'inline-block' }} />
            {protocol.requiredLegendLabel}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, color: 'oklch(0.4 0.02 260)' }}>
            <span style={{ width: 22, height: 14, borderRadius: 4, background: 'oklch(0.98 0.02 70)', border: '1.5px dashed oklch(0.62 0.16 70)', display: 'inline-block' }} />
            Додаткове (за бажанням)
            <span style={{ marginLeft: 4 }}>
              <Toggle checked={showOptional} onChange={setShowOptional} />
            </span>
          </div>
        </div>
      </div>

      <div style={{ overflowX: 'auto', padding: '0 48px 40px' }}>
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

      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
          <div style={{ flex: 1, minWidth: 280, background: 'white', border: '1px solid oklch(0.9 0.008 260)', borderRadius: 14, padding: '18px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'oklch(0.9 0.02 260)', color: 'oklch(0.4 0.05 260)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
              i
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'oklch(0.4 0.02 260)', margin: 0 }}>{protocol.footerHint}</p>
          </div>
          <div style={{ flex: 1, minWidth: 280, background: 'oklch(0.97 0.01 260)', border: '1px solid oklch(0.9 0.008 260)', borderRadius: 14, padding: '18px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 18 }}>★</span>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'oklch(0.4 0.02 260)', margin: 0 }}>{protocol.footerDisclaimer}</p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'oklch(0.55 0.02 260)', textAlign: 'right', margin: 0 }}>{protocol.sourceNote}</p>
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
