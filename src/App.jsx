import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import EntropyClarity from './pages/EntropyClarity'
import DangerTheory from './pages/DangerTheory'
import ComputationalModeling from './pages/ComputationalModeling'
import QuantumParsimony from './pages/QuantumParsimony'
import Timeline from './pages/Timeline'
import Philosophy from './pages/Philosophy'
import Podcasts from './pages/Podcasts'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entropy-clarity" element={<EntropyClarity />} />
          <Route path="/danger-theory" element={<DangerTheory />} />
          <Route path="/computational-modeling" element={<ComputationalModeling />} />
          <Route path="/quantum-parsimony" element={<QuantumParsimony />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
