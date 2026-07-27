export default function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        width: 34,
        height: 20,
        borderRadius: 999,
        border: 'none',
        padding: 0,
        display: 'inline-block',
        background: checked ? 'oklch(0.62 0.11 285)' : 'oklch(0.85 0.01 260)',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 18 : 2,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'white',
          transition: 'left .15s',
        }}
      />
    </button>
  )
}
