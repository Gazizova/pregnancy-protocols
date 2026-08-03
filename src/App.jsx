import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtocolPage from './pages/ProtocolPage'
import { ukraineProtocol } from './data/ukraine'
import { niceProtocol } from './data/nice'
import { acogProtocol } from './data/acog'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ukraine" replace />} />
        <Route path="/ukraine" element={<ProtocolPage protocol={ukraineProtocol} theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/nice" element={<ProtocolPage protocol={niceProtocol} theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/acog" element={<ProtocolPage protocol={acogProtocol} theme={theme} onToggleTheme={toggleTheme} />} />
      </Routes>
    </HashRouter>
  )
}
