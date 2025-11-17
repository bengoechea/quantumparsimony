import React from 'react'
import { Link } from 'react-router-dom'
import QuantumHero from '../components/QuantumHero'

function Home() {
  return (
    <div className="fade-in">
      <QuantumHero />

      <div className="section">
        <h2>The Mission: Clearing the Ontological Fog</h2>
        <p>
          For generations, science has been stumbling through conceptual fog—confusion between heat and information, 
          self-defense vs. danger response, mechanics vs. the structure of computation itself. Ken Mendoza's work 
          represents a fundamental clarification: ontological precision informed by epistemology is not just 
          philosophically desirable, it's computationally necessary.
        </p>
        
        <div className="highlight-box">
          <strong>Core Insight</strong>
          <p>
            Just as coding follows the DRY (Don't Repeat Yourself) principle, nature's code is incessantly 
            minimal, directed, and parsimonious. What we call "quantum mechanics" confuses what we're trying 
            to question with what we're trying to model. The math is a grammar missing structure—the structure 
            of computation, driven by nature's prime directive: parsimony.
          </p>
        </div>
      </div>

      <div className="card-grid">
        <Link to="/entropy-clarity" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <h3>🔥 Entropy vs Information</h3>
            <p>
              How Clausius' S (entropy in thermodynamics) was conflated with Shannon's H (information entropy), 
              creating generations of confusion. Von Neumann's advice to Shannon inadvertently perpetuated 
              the muddle between heat and information.
            </p>
          </div>
        </Link>

        <Link to="/danger-theory" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <h3>🛡️ Danger Theory</h3>
            <p>
              Polly Matzinger's 1994 breakthrough remains underappreciated: the immune system responds to 
              danger signals, not self/non-self distinction. This ontological clarity eliminates the messy 
              models of innate, adaptive, and "everything else" responses.
            </p>
          </div>
        </Link>

        <Link to="/computational-modeling" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <h3>💻 Labyrinthine Orthogonal Modeling</h3>
            <p>
              Computational modeling demands ontological precision. Through rigorous grounding in philosophy 
              of science and information theory, we build models that reveal nature's computational engine 
              across disciplines—iterating consciously, rationally, and aggressively.
            </p>
          </div>
        </Link>

        <Link to="/quantum-parsimony" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <h3>⚛️ Quantum Parsimony</h3>
            <p>
              The term "mechanics" in quantum mechanics is like Clausius' "heat"—it obscures what we're 
              investigating. Quantum Parsimony reframes quantum phenomena through the lens of nature's 
              computational parsimony: minimal, directed, and information-theoretic.
            </p>
          </div>
        </Link>

        <Link to="/timeline" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <h3>📅 Historical Timeline</h3>
            <p>
              From Clausius (1850s) through Von Neumann and Shannon (1940s) to contemporary clarification: 
              trace how conceptual confusion accumulated and how it's being systematically resolved through 
              computational thinking and ontological rigor.
            </p>
          </div>
        </Link>

        <Link to="/philosophy" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <h3>🎓 Philosophy of Science</h3>
            <p>
              Ontology driven by epistemology. Disciplines are merely convenient category names. Scientific 
              computation is absolutely discipline-boundless, but ontology-driven. In silico experiments 
              provide building blocks that reveal what was hidden.
            </p>
          </div>
        </Link>
      </div>

      <div className="section">
        <h2>Why This Matters</h2>
        <div className="highlight-box">
          <strong>Nature's DRY Principle</strong>
          <p>
            Just as good code doesn't repeat itself, nature's computational substrate operates on 
            minimal, parsimonious principles. Recognizing this allows us to:
          </p>
        </div>
        <ul>
          <li><strong>Unify across disciplines:</strong> See that immunology, thermodynamics, quantum phenomena, and information theory share computational foundations</li>
          <li><strong>Build better models:</strong> In silico experiments grounded in correct ontology reveal hidden patterns</li>
          <li><strong>Accelerate discovery:</strong> Clear conceptual frameworks eliminate stumbling blocks that have impeded progress for generations</li>
          <li><strong>Think computationally:</strong> View nature not as mechanical but as computational—governed by information-theoretic constraints and parsimony</li>
        </ul>

        <div className="error-box">
          <strong>The Cost of Conceptual Confusion</strong>
          <p>
            When Clausius' S (thermodynamic entropy) was conflated with information, when "mechanics" 
            obscured quantum computation, when self/non-self overshadowed danger response—each confusion 
            created decades of wasted effort, missed connections, and stunted progress. Ontological 
            clarity isn't academic; it's the prerequisite for true scientific advancement.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Ken Mendoza's Contribution</h2>
        <p>
          Through rigorous grounding in:
        </p>
        <ul>
          <li><strong>Classical philosophy of science:</strong> Understanding how we know what we know</li>
          <li><strong>Interdisciplinary knowledge synthesis:</strong> Seeing patterns across traditional boundaries</li>
          <li><strong>Information-theoretic foundations:</strong> Recognizing computation as nature's fundamental substrate</li>
          <li><strong>Labyrinthine orthogonal computational modeling:</strong> Building models that respect ontological distinctions</li>
        </ul>
        <p>
          Mendoza has systematically cleaned up conceptual messes that have plagued science for generations. 
          His work demonstrates that seeing through the fog—achieving ontological clarity—enables us to 
          perceive nature's computational engine operating across all disciplines.
        </p>
        
        <div className="highlight-box">
          <strong>The Quantum Parsimony Insight</strong>
          <p>
            Quantum mechanics is a grammar—a mathematical framework—missing its proper structure. That 
            structure is computational parsimony: nature's prime directive to minimize, to be efficient 
            with information, to follow the computational equivalent of the DRY principle. This isn't 
            metaphor; it's recognition that physics, biology, chemistry, and information theory are 
            different views of the same computational substrate.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Explore the Framework</h2>
        <p>
          Navigate through this hub to understand how ontological clarity, computational thinking, and 
          interdisciplinary synthesis reveal nature's parsimonious computational structure. Each section 
          builds on the others, showing how confusion in one domain mirrors confusion in others—and how 
          clarity propagates across all domains when we think computationally.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Link to="/entropy-clarity" className="btn">Start with Entropy Clarity</Link>
          <Link to="/quantum-parsimony" className="btn btn-secondary">Jump to Quantum Parsimony</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
