import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './QuantumHero.css';

const quantumPrinciples = [
  {
    id: 1,
    name: 'PRUNE',
    formula: 'E = ℏω(n + ½)',
    formulaAlt: 'Continuous spectrum',
    simple: 'PRUNE',
    tagline: 'Store indices, not infinities',
    compression: '2× compression',
    color: '#00f5ff',
  },
  {
    id: 2,
    name: 'MERGE',
    formula: 'Ewave + Eparticle',
    formulaAlt: '2 separate models',
    simple: 'MERGE',
    tagline: 'One truth, many views',
    compression: '4× compression',
    color: '#7c3aed',
  },
  {
    id: 3,
    name: 'COMPRESS',
    formula: 'K×N tables',
    formulaAlt: '|ψ⟩ = Σ cᵢ|i⟩',
    simple: 'COMPRESS',
    tagline: 'Transform once, project anywhere',
    compression: '100× compression',
    color: '#10b981',
  },
  {
    id: 4,
    name: 'MINIMIZE',
    formula: 'p(i) = |⟨i|ψ⟩|²',
    formulaAlt: 'Born rule',
    simple: 'MINIMIZE',
    tagline: 'Bet optimally on what you know',
    compression: '2× compression',
    color: '#f59e0b',
  },
  {
    id: 5,
    name: 'REGULARIZE',
    formula: 'ΔxΔp ≥ ℏ/2',
    formulaAlt: 'Uncertainty principle',
    simple: 'REGULARIZE',
    tagline: 'Bound precision, bound compute',
    compression: '2× compression',
    color: '#ec4899',
  },
  {
    id: 6,
    name: 'CORRELATE',
    formula: '|ψ⟩ₐᵦ ≠ |ψ⟩ₐ ⊗ |ψ⟩ᵦ',
    formulaAlt: 'Entanglement',
    simple: 'CORRELATE',
    tagline: 'Compress globally, correlate universally',
    compression: '3× compression',
    color: '#8b5cf6',
  },
];

const QuantumHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState('formula');
  const current = quantumPrinciples[currentIndex];

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase('formula');
      setTimeout(() => {
        setPhase('transforming');
        setTimeout(() => {
          setPhase('simple');
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % quantumPrinciples.length);
          }, 2000);
        }, 1500);
      }, 2000);
    }, 5500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="quantum-hero">
      <div className="hero-background">
        <ParticleField active={phase === 'transforming'} color={current.color} />
      </div>
      <div className="hero-content">
        <motion.div
          className="hero-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">
            <span className="title-quantum">Quantum Parsimony</span>
            <span className="title-hub">Hub</span>
          </h1>
          <p className="hero-subtitle">Ken Mendoza's Framework</p>
        </motion.div>

        <div className="principle-display">
          <AnimatePresence mode="wait">
            {phase === 'formula' && (
              <motion.div
                key="formula"
                className="formula-state"
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                transition={{ duration: 0.8 }}
              >
                <div className="formula-content">
                  <div className="formula-main">{current.formula}</div>
                  <div className="formula-alt">{current.formulaAlt}</div>
                </div>
              </motion.div>
            )}

            {phase === 'transforming' && (
              <motion.div
                key="transforming"
                className="transform-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="transform-arrow"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  style={{ color: current.color }}
                >
                  ↓
                </motion.div>
              </motion.div>
            )}

            {phase === 'simple' && (
              <motion.div
                key="simple"
                className="simple-state"
                initial={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <motion.div
                  className="simple-word"
                  style={{
                    color: current.color,
                    textShadow: `0 0 20px ${current.color}, 0 0 40px ${current.color}`,
                  }}
                  animate={{
                    textShadow: [
                      `0 0 20px ${current.color}, 0 0 40px ${current.color}`,
                      `0 0 30px ${current.color}, 0 0 60px ${current.color}`,
                      `0 0 20px ${current.color}, 0 0 40px ${current.color}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {current.simple}
                </motion.div>
                <motion.div
                  className="simple-tagline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {current.tagline}
                </motion.div>
                <motion.div
                  className="simple-compression"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {current.compression}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="principle-indicators">
          {quantumPrinciples.map((principle, idx) => (
            <motion.button
              key={principle.id}
              className={`indicator ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(idx);
                setPhase('formula');
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: idx === currentIndex ? principle.color : 'transparent',
                borderColor: principle.color,
              }}
            >
              {principle.id}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-text">Explore the principles</div>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </div>
  );
};

const ParticleField = ({ active, color }) => {
  if (!active) return null;

  return (
    <div className="particle-container">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: color,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 1.5,
            delay: Math.random() * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default QuantumHero;
