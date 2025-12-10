<h2>1. Core Vision</h2>
<p class="section-text">
  Our overall research vision is to build an <strong>"End-to-End Clinical Reasoning Pipeline"</strong> that goes beyond simple classification in medical imaging—quantifying diseases, generating structured clinical representations, and connecting them to LLM-based clinical reasoning.
</p>
<p class="section-text">
  This vision encompasses the following core objectives:
</p>
<ul class="section-text">
  <li>Medical images → Lesion segmentation → Quantification → Prediction models based on quantitative indicators</li>
  <li>Quantitative indicators + Images + Text reports → Multimodal LLM-based AI Doctor Assistant</li>
  <li>Safety and reliability enhancement: Model verification (Formal Verification), safety neuron analysis, mechanistic interpretability</li>
</ul>

<hr class="section-divider" />

<h2>2. Research Theme A: Medical Image Quantification & Disease Modeling</h2>
<p class="section-text">
  This research line focuses on generating <strong>continuous biomarkers that quantify disease progression and are clinically interpretable</strong>, moving beyond traditional CNN-based classification.
</p>

<h3>A.1. Ophthalmology (Ophthalmology Image-based Quantification)</h3>
<ul class="section-text">
  <li>Epiretinal Membrane (ERM), Diabetic Retinopathy, Macular Disease, etc.</li>
  <li>Based on Fundus / OCT-B-scans:
    <ul>
      <li>Lesion segmentation (Membrane, Retina layers, cyst regions)</li>
      <li>Generation of quantitative indicators such as thickness map, curvature, reflectance profile</li>
    </ul>
  </li>
  <li>Disease staging and progression prediction models based on quantitative indicators</li>
</ul>

<h3>A.2. Gait / Orthopedics (Orthopedic Gait Analysis)</h3>
<ul class="section-text">
  <li>Markerless video (pose estimation) → Biomechanical features → Gait anomaly quantification</li>
  <li>Diagnosis and progression models utilizing quantitative features instead of clinical grading</li>
  <li>Extendable to pediatric, elderly imbalance assessment, etc.</li>
</ul>

<h3>A.3. Multi-modal Structured Data Integration</h3>
<p class="section-text">
  Integration of images, quantitative features, EMR, lab values, etc.<br />
  Final goal: Building a <strong>disease progression world model</strong>.
</p>

<hr class="section-divider" />

<h2>3. Research Theme B: Domain-Specialized Medical LLMs (Ophtimus-V2 Series)</h2>
<p class="section-text">
  A research line on <strong>Ophthalmology-specific LLMs (Ophtimus-V2-Tx)</strong> developed directly by the research team.
</p>

<h3>B.1. Clinical Reasoning Models</h3>
<ul class="section-text">
  <li>Fine-tuning based on case reports</li>
  <li>Learning "clinical knowledge pathways" connecting symptoms–images–diagnosis–treatment</li>
  <li>Experiments with LoRA and structured LoRA to reduce hallucination and enhance safety</li>
</ul>

<h3>B.2. Multi-modal Input Extension</h3>
<ul class="section-text">
  <li>Fundus / OCT (B-scan) embedding + Structured quantification + Textual description</li>
  <li>Further integration with medical World Models to enable progression simulator linkage</li>
</ul>

<h3>B.3. Safety & Trustworthiness</h3>
<ul class="section-text">
  <li>"Safety Neurons" analysis</li>
  <li>Mechanistic interpretability (circuit-level patterns in reasoning)</li>
  <li>Detection and unlearning of clinically harmful outputs</li>
</ul>

<hr class="section-divider" />

<h2>4. Research Theme C: Formal Verification + AI Safety for Medical AI</h2>
<p class="section-text">
  An independent research line combining <strong>Formal Methods + AI Safety</strong> to ensure reliability and regulatory compliance (e.g., medical device approval) for medical AI.
</p>

<h3>C.1. Verified Environment Models</h3>
<ul class="section-text">
  <li>Medical process models based on Timed Automata</li>
  <li>Verification of safety constraints through model checking (PCTL, CTL, TCTL)</li>
  <li>Providing control shields to prevent reinforcement learning or AI inference from violating these constraints</li>
</ul>

<h3>C.2. Verified AI Controllers</h3>
<ul class="section-text">
  <li>Enforcing safety properties in Medical AI inference pipelines</li>
  <li>Analysis to verify "when and what inputs can lead to dangerous outputs"</li>
  <li>Verification-aware fine-tuning or pruning</li>
</ul>

<h3>C.3. Trustworthy Data & Contamination Check</h3>
<ul class="section-text">
  <li>LLM-cheating detection in crowd annotation (based on peer prediction)</li>
  <li>Ensuring reliability of medical data labels</li>
</ul>

<hr class="section-divider" />

<h2>5. Research Theme D: Medical World Models & Embodied AI</h2>
<p class="section-text">
  A research direction directly aligned with core trends at NeurIPS 2025 ("World Models", "Embodied AI for Healthcare").
</p>

<h3>D.1. Disease Progression World Model</h3>
<ul class="section-text">
  <li>Generative world models that model Retina / ERM progression dynamics</li>
  <li>Temporal latent dynamics based on OCT/B-scan sequential images</li>
  <li>Enabling counterfactual simulation such as "If a patient's condition is X, how would the OCT change after 6 months?"</li>
</ul>

<h3>D.2. Multi-modal Clinical Simulator</h3>
<ul class="section-text">
  <li>Including images, quantitative biomarkers, text reports, treatment history</li>
  <li>Providing structured clinical simulation contexts to LLMs</li>
  <li>Maximizing clinical decision support enhancement</li>
</ul>

<h3>D.3. Reinforcement Learning in Verified Clinical Simulation</h3>
<ul class="section-text">
  <li>For cases where direct learning from real-world medical settings is prohibited</li>
  <li>Application of safe RL based on verified world models</li>
  <li>Extendable to research on treatment planning or screening policy optimization</li>
</ul>

<hr class="section-divider" />

<h2>6. Research Theme E: Foundations for AI-Driven Clinical Decision Support</h2>
<p class="section-text">
  Supporting the ultimate goal of medical AI—<strong>automated clinical reasoning</strong>—by integrating all the above axes (A~D).
</p>

<h3>E.1. Image → Biomarker → Reasoner → Recommendation</h3>
<ul class="section-text">
  <li>Building fully end-to-end connectable pipelines</li>
  <li>Linking image-based quantification to input structures for LLM reasoning</li>
</ul>

<h3>E.2. Multi-lingual / Multi-institution Generalization</h3>
<ul class="section-text">
  <li>Based on collaborations with Korea, USA (UPenn), and other institutions</li>
  <li>Conducting research on robustness and distribution shift</li>
</ul>

<h3>E.3. Regulatory-readiness</h3>
<ul class="section-text">
  <li>Reliability assessment metrics (specificity, sensitivity, FN-critical tasks)</li>
  <li>Enabling medical AI documentation with "Safety case" structures</li>
</ul>

<hr class="section-divider" />

<h2>7. Overall Theme Summary (One-page Executive Summary)</h2>
<p class="section-text">
  <strong>Our Medical AI research focuses on building the following integrated research ecosystem, going beyond simple image classification.</strong>
</p>
<ol class="section-text">
  <li><strong>Disease Quantification Technology</strong>
    <ul>
      <li>Image-based lesion analysis, quantification, progression modeling</li>
    </ul>
  </li>
  <li><strong>Development of Clinical Domain-Specialized LLMs (Ophtimus-V2-Tx)</strong>
    <ul>
      <li>Ophthalmology-specific reasoning models</li>
      <li>Multi-modal processing (OCT/Fundus + EMR + biomarkers)</li>
    </ul>
  </li>
  <li><strong>Application of AI Safety & Formal Verification</strong>
    <ul>
      <li>Ensuring safety constraints for medical AI</li>
      <li>Verified environment + verified inference</li>
    </ul>
  </li>
  <li><strong>Clinical Simulation Based on World Models</strong>
    <ul>
      <li>Disease progression simulation</li>
      <li>Foundation for LLM's clinical decision reasoning</li>
    </ul>
  </li>
  <li><strong>Building Comprehensive Medical Decision Support Systems</strong>
    <ul>
      <li>End-to-end from Data → Image → Quantification → LLM → Decision</li>
    </ul>
  </li>
</ol>

