import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Citizens from './pages/Citizens'
import Employees from './pages/Employees'
import Security from './pages/Security'
import PrivateSecurity from './pages/PrivateSecurity'
import Rosgvardia from './pages/Rosgvardia'
import Children from './pages/Children'
import Business from './pages/Business'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citizens" element={<Citizens />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/security" element={<Security />} />
            <Route path="/private" element={<PrivateSecurity />} />
            <Route path="/rosgvardia" element={<Rosgvardia />} />
            <Route path="/children" element={<Children />} />
            <Route path="/business" element={<Business />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
