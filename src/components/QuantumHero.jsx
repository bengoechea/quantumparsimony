import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './QuantumHero.css';

const principles = [
  {
    id: 1,
    name: 'Entanglement',
    label: 'Twins Acting as One',
    equation: '|ψ⟩ₐᵦ ≠ |ψ⟩ₐ ⊗ |ψ⟩ᵦ',
    simple: 'CORRELATE',
    tagline: 'Two particles, one dance',
    nature: 'twin-particles',
    color: '#00f5ff',
  },
  {
    id: 2,
    name: 'Superposition',
    label: 'Many Paths Merge',
    equation: '|ψ⟩ = α|0⟩ + β|1⟩',
    simple: 'MERGE',
    tagline: 'All paths until measured',
    nature: 'merge-waves',
    color: '#7c3aed',
  },
  {
    id: 3,
    name: 'Wave-Particle',
    label: 'Wave Becomes Particle',
    equation: 'λ = h/p',
    simple: 'COLLAPSE',
    tagline: 'Ruler touches, wave solidifies',
    nature: 'wave-collapse',
    color: '#10b981',
  },
  {
    id: 4,
    name: 'Uncertainty',
    label: 'Fuzzy Boundaries',
    equation: 'ΔxΔp ≥ ℏ/2',
    simple: 'MINIMIZE',
    tagline: 'Know one, lose the other',
    nature: 'fuzzy-cloud',
    color: '#f59e0b',
  },
  {
    id: 5,
    name: 'Path Integral',
    label: 'Simplest Route Wins',
    equation: 'S = ∫ L dt',
    simple: 'PRUNE',
    tagline: 'Nature picks efficiency',
    nature: 'path-prune',
    color: '#ec4899',
  },
  {
    id: 6,
    name: 'Decoherence',
    label: 'Classical Emerges',
    equation: 'ρ → |ψ⟩⟨ψ|',
    simple: 'COMPRESS',
    tagline: 'Quantum hides in noise',
    nature: 'decohere',
    color: '#8b5cf6',
  },
];

const QuantumHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState('spinning'); // spinning, focused, transforming, revealed
  const [mechanicsCrossed, setMechanicsCrossed] = useState(false);
  const [parsimonyVisible, setParsimonyVisible] = useState(false);
  
  const current = principles[currentIndex];

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase('spinning');
      setMechanicsCrossed(false);
      setParsimonyVisible(false);
      
      setTimeout(() => {
        setPhase('focused');
        setTimeout(() => {
          setPhase('transforming');
          setMechanicsCrossed(true);
          setTimeout(() => {
            setPhase('revealed');
            setParsimonyVisible(true);
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % principles.length);
            }, 3500);
          }, 2000);
        }, 3000);
      }, 2500);
    }, 11000);
    
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="quantum-hero-new">
      <div className="hero-bg-particles"></div>
      
      {/* Top Title */}
      <motion.div 
        className="hero-title-new"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <AnimatePresence mode="wait">
          {!mechanicsCrossed ? (
            <motion.div
              key="mechanics"
              className="mechanics-label"
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <span className="quantum-text">Quantum</span>
              <motion.span 
                className="mechanics-text"
                animate={mechanicsCrossed ? { opacity: 0 } : {}}
              >
                Mechanics
                <motion.div
                  className="cross-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: mechanicsCrossed ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              key="parsimony"
              className="parsimony-label"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, type: 'spring' }}
            >
              <span className="quantum-text">Quantum</span>
              <span className="parsimony-text">Parsimony</span>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="hero-subtitle-new">Ken Mendoza's Framework</p>
      </motion.div>

      {/* Main Animation Area */}
      <div className="animation-container">
        {/* Left: Spinning Circle with Equations */}
        <div className="equation-circle">
          {principles.map((principle, idx) => {
            const angle = (360 / principles.length) * idx;
            const isActive = idx === currentIndex && phase === 'focused';
            const rotation = angle - (currentIndex * 60);
            
            return (
              <motion.div
                key={principle.id}
                className={`equation-node ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotate(${rotation}deg) translate(180px) rotate(-${rotation}deg)`,
                }}
                animate={{
                  scale: isActive ? 1.6 : 1,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 2, type: 'spring', stiffness: 60 }}
              >
                <div 
                  className="equation-content"
                  style={{ 
                    borderColor: principle.color,
                    boxShadow: isActive ? `0 0 40px ${principle.color}` : 'none'
                  }}
                >
                  <div className="equation-text">{principle.equation}</div>
                  {isActive && (
                    <motion.div
                      className="equation-label"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {principle.label}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
          
          {/* Center pulse */}
          <motion.div
            className="circle-center"
            animate={{
              scale: phase === 'focused' ? [1, 1.2, 1] : 1,
              opacity: phase === 'focused' ? [0.5, 1, 0.5] : 0.3,
            }}
            transition={{ duration: 2, repeat: phase === 'focused' ? Infinity : 0 }}
          />
        </div>

        {/* Center: Arrow Animation */}
        <AnimatePresence mode="wait">
          {phase === 'transforming' && (
            <motion.div
              className="transform-arrow-container"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                className="arrow-pulse"
                style={{ borderColor: current.color }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
              <ParticleField color={current.color} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right: Nature Animations + Parsimony Concepts */}
        <div className="right-side">
          <AnimatePresence mode="wait">
            {phase === 'revealed' && (
              <motion.div
                key={current.id}
                className="parsimony-concept"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.2, type: 'spring' }}
              >
                {/* Nature Animation */}
                <div className="nature-animation">
                  <NatureAnimation type={current.nature} color={current.color} />
                </div>
                
                {/* Parsimony Word */}
                <motion.div
                  className="simple-word"
                  style={{ 
                    color: current.color,
                    textShadow: `0 0 30px ${current.color}` 
                  }}
                  animate={{
                    textShadow: [
                      `0 0 30px ${current.color}`,
                      `0 0 50px ${current.color}`,
                      `0 0 30px ${current.color}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {current.simple}
                </motion.div>
                
                <motion.div
                  className="tagline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {current.tagline}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom: Principle Indicators */}
      <div className="principle-indicators-new">
        {principles.map((principle, idx) => (
          <motion.button
            key={principle.id}
            className={`indicator-new ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(idx);
              setPhase('spinning');
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: principle.color,
              backgroundColor: idx === currentIndex ? `${principle.color}33` : 'transparent',
              boxShadow: idx === currentIndex ? `0 0 20px ${principle.color}` : 'none',
            }}
          >
            {principle.id}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="scroll-hint"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="scroll-text">Explore Principles Below</div>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </div>
  );
};

// Nature-inspired animations for each principle
const NatureAnimation = ({ type, color }) => {
  switch (type) {
    case 'twin-particles':
      return (
        <div className="nature-twin">
          <motion.div
            className="particle"
            style={{ background: color }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="particle twin"
            style={{ background: color }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="connection-line"
            style={{ borderColor: color }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
    
    case 'merge-waves':
      return (
        <div className="nature-merge">
          <motion.div
            className="wave wave1"
            style={{ borderColor: color }}
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="wave wave2"
            style={{ borderColor: color }}
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      );
    
    case 'wave-collapse':
      return (
        <div className="nature-collapse">
          <motion.div
            className="wave-form"
            style={{ borderColor: color }}
            animate={{
              scaleY: [1, 0.1],
              opacity: [1, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.div
            className="ruler"
            style={{ background: color }}
            animate={{ y: [0, 60] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.div
            className="particle-dot"
            style={{ background: color }}
            animate={{
              scale: [0, 1.5, 1],
              opacity: [0, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
      );
    
    case 'fuzzy-cloud':
      return (
        <div className="nature-fuzzy">
          <motion.div
            className="cloud"
            style={{ borderColor: color, background: `${color}22` }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="center-dot"
            style={{ background: color }}
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
    
    case 'path-prune':
      return (
        <div className="nature-prune">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <motion.path
              d="M60,100 L40,60 L20,40 M60,100 L60,60 L40,20 M60,100 L80,60 L100,40 M60,100 L60,60 L80,20"
              stroke={color}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <motion.path
              d="M60,100 L60,60 L60,20"
              stroke={color}
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
          <motion.div
            className="scissors"
            style={{ color }}
            animate={{ rotate: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✂
          </motion.div>
        </div>
      );
    
    case 'decohere':
      return (
        <div className="nature-decohere">
          <motion.div
            className="quantum-state"
            style={{ borderColor: color }}
            animate={{
              scale: [1, 0.7],
              opacity: [1, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="noise-particle"
              style={{
                background: color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      );
    
    default:
      return null;
  }
};

const ParticleField = ({ color }) => {
  return (
    <div className="particle-field">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="energy-particle"
          style={{
            left: `${50 + Math.cos(i * 18 * Math.PI / 180) * 40}%`,
            top: `${50 + Math.sin(i * 18 * Math.PI / 180) * 40}%`,
            background: color,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.05,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default QuantumHero;
