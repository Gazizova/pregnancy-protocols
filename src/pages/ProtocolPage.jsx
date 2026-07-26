import { useState } from 'react'
import Nav from '../components/Nav'
import Toggle from '../components/Toggle'
import TrimesterTrack from '../components/TrimesterTrack'
import Modal from '../components/Modal'
import Icon from '../components/Icon'
import { categoryStyle } from '../data/categoryStyle'

const LEGEND_CATEGORIES = ['analysis', 'uzd', 'visit', 'vaccine']

export default function ProtocolPage({ title, subtitle, trimesters, modals, otherLabel = 'Інше' }) {
  const [expanded, setExpanded] = useState({})
  const [showOptionalLocal, setShowOptionalLocal] = useState(true)
  const [openModalId, setOpenModalId] = useState(null)

  const toggleExpand = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  const activeModal = openModalId ? modals[openModalId] : null

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 60px' }}>
      <Nav />

      <header
        style={{
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-band)',
          boxShadow: 'var(--shadow-header)',
          padding: '28px 32px',
          marginBottom: 20,
        }}
      >
        <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 8px' }}>
          {title}
        </h1>
        <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 20px' }}>
          {subtitle}
        </p>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {LEGEND_CATEGORIES.map((cat) => {
            const style = categoryStyle(cat, otherLabel)
            return (
              <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: style.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name={style.icon} size={14} color={style.dot} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: style.text }}>{style.label}</span>
              </div>
            )
          })}
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 24,
          background: 'var(--card-bg)',
          borderRadius: 'var(--radius-band)',
          boxShadow: 'var(--shadow-card)',
          padding: '14px 20px',
        }}
      >
        <Toggle checked={showOptionalLocal} onChange={setShowOptionalLocal} />
        <span style={{ fontSize: 13.5, fontWeight: 600 }}>Показати додаткове (за бажанням)</span>
      </div>

      <div style={{ display: 'flex', gap: 40, overflowX: 'auto', paddingBottom: 20 }}>
        {trimesters.map((tri) => {
          const items = tri.items.filter((it) => it.required || showOptionalLocal)
          if (items.length === 0) return null
          return (
            <TrimesterTrack
              key={tri.number}
              trimester={tri}
              items={items}
              expanded={expanded}
              onToggleExpand={toggleExpand}
              onOpenModal={setOpenModalId}
              otherLabel={otherLabel}
            />
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 20 }}>
        <div
          style={{
            flex: 1,
            minWidth: 260,
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            padding: 18,
            fontSize: 13,
            color: 'var(--text-secondary)',
          }}
        >
          ℹ️ Натисніть «Детальніше» на картці, щоб побачити повний опис обстеження.
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 260,
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            padding: 18,
            fontSize: 13,
            color: 'var(--text-secondary)',
          }}
        >
          ★ Інформація має ознайомчий характер і не замінює консультацію лікаря.
        </div>
      </div>

      <Modal
        open={!!activeModal}
        onClose={() => setOpenModalId(null)}
        title={activeModal?.title}
        blocks={activeModal?.blocks}
      />
    </div>
  )
}
