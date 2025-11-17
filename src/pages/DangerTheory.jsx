import React from 'react'

function DangerTheory() {
  return (
    <div className="fade-in">
      <section className="hero">
        <h1>🛡️ Danger Theory: Ontological Clarity in Immunology</h1>
        <p>
          How Polly Matzinger's 1994 insight revolutionized our understanding of immunity—
          and why it remains underappreciated
        </p>
      </section>

      <div className="section">
        <h2>The Old Paradigm: Self vs Non-Self</h2>
        <p>
          For decades, immunology was dominated by the Self/Non-Self theory, which held that 
          the immune system's primary function was to distinguish between "self" (the organism's 
          own cells and molecules) and "non-self" (foreign entities).
        </p>

        <div className="error-box">
          <strong>Problems with Self/Non-Self Theory</strong>
          <ul>
            <li><strong>Fails to explain tolerance:</strong> Why doesn't the immune system attack beneficial gut bacteria?</li>
            <li><strong>Pregnancy paradox:</strong> A fetus is genetically "non-self" but isn't rejected</li>
            <li><strong>Autoimmune diseases:</strong> The system attacks "self" in numerous conditions</li>
            <li><strong>Transplant tolerance:</strong> Sometimes "non-self" organs are accepted without rejection</li>
            <li><strong>Messy categorization:</strong> Forces researchers to create categories like "innate," "adaptive," and "everything else" to handle exceptions</li>
          </ul>
        </div>

        <p>
          The Self/Non-Self framework created a conceptual mess: researchers had to invent 
          multiple overlapping systems (innate immunity, adaptive immunity, regulatory mechanisms) 
          to account for phenomena that didn't fit the central paradigm.
        </p>
      </div>

      <div className="section">
        <h2>Polly Matzinger's Danger Theory (1994)</h2>
        <p>
          In 1994, immunologist Polly Matzinger proposed a radical reconceptualization: 
          <strong>the immune system doesn't respond to foreignness—it responds to danger signals</strong>.
        </p>

        <div className="highlight-box">
          <strong>Core Insight of Danger Theory</strong>
          <p>
            The immune system is activated not by detecting "non-self" entities, but by detecting 
            signals of cellular distress, damage, or abnormal death. These "danger signals" (also 
            called damage-associated molecular patterns or DAMPs) indicate that something threatening 
            is happening, regardless of whether the trigger is foreign or self.
          </p>
        </div>

        <h3>Key Components of Danger Theory</h3>
        <ul>
          <li><strong>Danger signals:</strong> Molecules released by stressed, damaged, or dying cells</li>
          <li><strong>Context-dependent response:</strong> The same antigen can elicit immunity or tolerance depending on context</li>
          <li><strong>Unified framework:</strong> Explains innate and adaptive responses as part of the same danger-detection system</li>
          <li><strong>Professional antigen-presenting cells:</strong> These cells integrate danger signals to determine appropriate responses</li>
        </ul>

        <div className="card-grid">
          <div className="card">
            <h3>Why Gut Bacteria Aren't Attacked</h3>
            <p>
              Beneficial bacteria don't trigger danger signals—they exist in healthy tissue 
              without causing cellular damage. The immune system tolerates them not because 
              they're recognized as "non-threatening non-self," but because no danger signals 
              are present.
            </p>
          </div>

          <div className="card">
            <h3>Why Pregnancy Works</h3>
            <p>
              The fetus doesn't trigger danger signals in normal pregnancy. The placental 
              interface is carefully regulated to avoid triggering danger responses, not 
              through some complex "recognition of semi-self."
            </p>
          </div>

          <div className="card">
            <h3>Why Autoimmunity Occurs</h3>
            <p>
              When self-tissues are damaged (by infection, injury, or other stress), they 
              release danger signals that can activate immune responses against self-antigens. 
              It's not a failure to recognize "self"—it's a response to danger signals from 
              damaged self-tissue.
            </p>
          </div>

          <div className="card">
            <h3>Why Transplants Sometimes Work</h3>
            <p>
              Organs transplanted without significant damage and maintained in non-inflammatory 
              conditions generate fewer danger signals. Success isn't about fooling the 
              self/non-self distinction—it's about minimizing danger signals.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Ontological Clarity: Danger vs Self/Non-Self</h2>
        
        <div className="highlight-box">
          <strong>The Ontological Shift</strong>
          <p>
            Self/Non-Self is a category based on <em>identity</em>: "Is this me or not me?"<br/>
            Danger Theory is based on <em>functional state</em>: "Is this causing or signaling damage?"
          </p>
          <p style={{ marginTop: '1rem' }}>
            This shift from identity to functional state eliminates the need for messy, overlapping 
            categories and provides a unified explanatory framework.
          </p>
        </div>

        <h3>Before Danger Theory: Messy Ontology</h3>
        <div className="warning-box">
          <ul>
            <li><strong>Innate immunity:</strong> Fast, non-specific responses (but sometimes specific)</li>
            <li><strong>Adaptive immunity:</strong> Slow, specific responses (but sometimes broadly reactive)</li>
            <li><strong>Regulatory cells:</strong> Suppress responses (except when they don't)</li>
            <li><strong>Tolerance mechanisms:</strong> Accept "non-self" (but not always)</li>
            <li><strong>Autoimmunity:</strong> Attack "self" (contradiction of main theory)</li>
            <li><strong>"Everything else":</strong> Phenomena that don't fit the framework</li>
          </ul>
          <p>
            Each category has exceptions, special cases, and unclear boundaries. Models become 
            increasingly complex as researchers try to accommodate observed phenomena that don't 
            fit the self/non-self paradigm.
          </p>
        </div>

        <h3>After Danger Theory: Clear Ontology</h3>
        <div className="highlight-box">
          <ul>
            <li><strong>Danger detection:</strong> Systems monitor for signals of cellular damage/stress</li>
            <li><strong>Context evaluation:</strong> Antigen-presenting cells integrate danger signals with antigen information</li>
            <li><strong>Proportional response:</strong> Response intensity matches danger level</li>
            <li><strong>Response resolution:</strong> As danger signals decrease, response diminishes</li>
            <li><strong>Unified mechanism:</strong> All components work as parts of danger-detection and response system</li>
          </ul>
          <p>
            One coherent framework explains what previously required multiple overlapping systems. 
            The ontology is cleaner because it's based on the actual functional principle: danger detection.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Why Danger Theory Remains Underappreciated</h2>
        
        <p>
          Despite being proposed in 1994 and having substantial supporting evidence, Danger Theory 
          is still not the dominant paradigm in immunology. Why?
        </p>

        <div className="error-box">
          <strong>Barriers to Paradigm Shift</strong>
          <ol>
            <li><strong>Educational inertia:</strong> Generations of immunologists were trained in Self/Non-Self framework</li>
            <li><strong>Textbook lag:</strong> Most immunology textbooks still organize content around Self/Non-Self</li>
            <li><strong>Institutional momentum:</strong> Research programs, grant applications, and academic positions built around old paradigm</li>
            <li><strong>Conceptual comfort:</strong> Self/Non-Self is intuitive (even if wrong); Danger Theory requires deeper thinking</li>
            <li><strong>Lack of ontological training:</strong> Most scientists aren't trained to recognize when paradigms need replacement vs refinement</li>
          </ol>
        </div>

        <div className="highlight-box">
          <strong>The Cost of Ontological Confusion</strong>
          <p>
            Every year that immunology operates under the muddled self/non-self ontology is a year of:
          </p>
          <ul>
            <li>Misdirected research efforts</li>
            <li>Computational models built on wrong foundations</li>
            <li>Therapeutic strategies based on flawed understanding</li>
            <li>Students learning conceptual frameworks they'll need to unlearn</li>
            <li>Resources spent on reconciling contradictions instead of advancing knowledge</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Parallel to Entropy Confusion</h2>
        
        <p>
          The underappreciation of Danger Theory parallels the confusion between thermodynamic 
          and information entropy:
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Entropy Confusion</h3>
            <ul>
              <li>Old paradigm: Heat and information conflated</li>
              <li>Taught in this way for generations</li>
              <li>Creates conceptual barriers</li>
              <li>Requires messy workarounds</li>
              <li>Impedes interdisciplinary work</li>
            </ul>
          </div>

          <div className="card">
            <h3>Immunology Confusion</h3>
            <ul>
              <li>Old paradigm: Self vs non-self identity</li>
              <li>Taught in this way for generations</li>
              <li>Creates conceptual barriers</li>
              <li>Requires messy categories (innate/adaptive/etc)</li>
              <li>Impedes computational modeling</li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: '2rem' }}>
          In both cases, <strong>ontological clarity informed by epistemology</strong> is necessary 
          for advancement. And in both cases, the clearer framework has been available for decades 
          but remains underutilized because of educational and institutional inertia.
        </p>
      </div>

      <div className="section">
        <h2>Computational Modeling Implications</h2>
        
        <p>
          Ken Mendoza's work demonstrates why ontological clarity is essential for computational modeling:
        </p>

        <div className="highlight-box">
          <strong>Modeling Self/Non-Self (Old Paradigm)</strong>
          <pre className="code-block">{`class ImmuneSystem:
    def __init__(self):
        self.self_markers = set()
        self.innate_system = InnateImmunity()
        self.adaptive_system = AdaptiveImmunity()
        self.regulatory_system = RegulatoryMechanisms()
        # ... and many more special cases
    
    def respond_to_antigen(self, antigen):
        if antigen.is_self():
            # But wait, autoimmunity exists...
            if self.check_tolerance_exceptions():
                return self.innate_system.respond(antigen)
            # But wait, pregnancy...
            if self.check_special_cases():
                return None
            # Messy logic continues...
        else:
            # Foreign antigen, but wait...
            if self.check_beneficial_bacteria():
                return None
            # More exceptions...`}</pre>
          <p style={{ marginTop: '1rem' }}>
            The model becomes a nest of exceptions and special cases because the ontology doesn't 
            match the actual system operation.
          </p>
        </div>

        <div className="highlight-box">
          <strong>Modeling Danger Response (Danger Theory)</strong>
          <pre className="code-block">{`class ImmuneSystem:
    def __init__(self):
        self.danger_detectors = DangerSignalDetectors()
        self.response_systems = ResponseMechanisms()
    
    def respond_to_situation(self, antigens, context):
        danger_level = self.danger_detectors.assess(context)
        
        if danger_level > threshold:
            return self.response_systems.activate(
                antigens=antigens,
                intensity=danger_level
            )
        else:
            return self.response_systems.maintain_tolerance()
        
        # Clean, unified logic based on actual principle`}</pre>
          <p style={{ marginTop: '1rem' }}>
            The model is simpler, cleaner, and more accurately reflects the actual biological system 
            because the ontology matches the functional reality.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>The Lesson: Ontology Drives Modeling</h2>
        
        <div className="highlight-box">
          <strong>Ken Mendoza's Principle</strong>
          <p>
            Ontological clarity informed by epistemology is necessary for computer modeling and 
            scientific progress. We cannot build accurate computational models on flawed ontologies.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Just as:
          </p>
          <ul>
            <li>Conflating heat with information creates modeling problems in physics</li>
            <li>Confusing mechanics with computational structure obscures quantum phenomena</li>
            <li>Using self/non-self instead of danger detection creates messy immunology models</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <strong>Clear ontology → Clean models → True discovery</strong>
          </p>
        </div>

        <div className="interactive-demo">
          <h3>Testing Your Understanding</h3>
          <p><strong>Scenario:</strong> You receive a bone marrow transplant.</p>
          
          <p style={{ marginTop: '1.5rem' }}><strong>Self/Non-Self Explanation:</strong></p>
          <p style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--accent-color)' }}>
            "The new bone marrow is 'non-self,' so we must suppress your immune system to prevent 
            rejection, while hoping your body eventually accepts this 'non-self' tissue through 
            complex tolerance mechanisms we don't fully understand..."
          </p>
          
          <p style={{ marginTop: '1.5rem' }}><strong>Danger Theory Explanation:</strong></p>
          <p style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--primary-color)' }}>
            "We minimize danger signals during the transplant procedure and recovery period. If the 
            new marrow establishes itself without generating significant danger signals (damage, 
            inflammation, stress), your danger-detection systems won't mount a strong response. 
            Immunosuppression reduces the amplitude of danger responses while the new tissue integrates."
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Moving Forward</h2>
        
        <p>
          Danger Theory provides a clear, unified ontological framework for immunology—one that 
          accurately reflects the functional principles of immune systems. Yet it remains underappreciated, 
          leading to:
        </p>
        <ul>
          <li>Messy models with multiple overlapping systems</li>
          <li>Conceptual confusion about immune responses</li>
          <li>Difficulty in computational modeling</li>
          <li>Barriers to therapeutic innovation</li>
        </ul>

        <div className="highlight-box">
          <strong>The Path Forward</strong>
          <p>
            Seeing through the fog—achieving ontological clarity—enables us to:
          </p>
          <ul>
            <li><strong>Build accurate models:</strong> Computational models based on danger detection principles</li>
            <li><strong>Design better therapies:</strong> Treatments that modulate danger signals, not identity recognition</li>
            <li><strong>Unify understanding:</strong> One framework instead of messy overlapping categories</li>
            <li><strong>Advance science:</strong> Remove stumbling blocks that have impeded progress for decades</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Just as Quantum Parsimony clarifies quantum phenomena by recognizing nature's computational 
            substrate, Danger Theory clarifies immunology by recognizing the actual functional principle: 
            danger detection, not identity classification.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DangerTheory
