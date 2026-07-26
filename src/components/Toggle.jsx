export default function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        position: 'relative',
        width: 34,
        height: 20,
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        padding: 0,
        background: checked ? 'var(--status-required)' : 'oklch(0.85 0.01 260)',
        transition: 'background .15s',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 16 : 2,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 1px 2px oklch(0.2 0.02 260 / 0.3)',
          transition: 'left .15s',
        }}
      />
    </button>
  )
}
