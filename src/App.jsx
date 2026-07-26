import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtocolPage from './pages/ProtocolPage'
import { ukraineProtocol } from './data/ukraine'
import { niceProtocol } from './data/nice'
import { acogProtocol } from './data/acog'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ukraine" replace />} />
        <Route path="/ukraine" element={<ProtocolPage {...ukraineProtocol} />} />
        <Route path="/nice" element={<ProtocolPage {...niceProtocol} />} />
        <Route path="/acog" element={<ProtocolPage {...acogProtocol} />} />
      </Routes>
    </HashRouter>
  )
}
