<h2>1. Core Vision</h2>
<p class="section-text">
  의료 영상에서 <strong>단순 분류(Classification)가 아니라, 질병을 정량화(Quantification)하고, 구조화된 임상 표현(structured clinical representations)을 생성하여 LLM 기반의 임상 추론으로 연결되는 "End-to-End Clinical Reasoning Pipeline"을 구축</strong>하는 것이 전체적인 연구 비전입니다.
</p>
<p class="section-text">
  이 비전은 다음과 같은 핵심 목표를 가집니다:
</p>
<ul class="section-text">
  <li>의료 영상 → 병변 분할(segmentation) → 수치화(quantification) → 정량 지표 기반 예측 모델</li>
  <li>정량 지표 + 이미지 + 텍스트 리포트 → Multimodal LLM 기반 AI Doctor Assistant</li>
  <li>안전성·신뢰성 강화: 모델 검증(Formal Verification), 안전 뉴런 분석, mechanistic interpretability</li>
</ul>

<hr class="section-divider" />

<h2>2. Research Theme A: Medical Image Quantification & Disease Modeling</h2>
<p class="section-text">
  전통적인 CNN 기반 분류를 넘어, <strong>질병의 진행 정도를 수치화하고 임상적으로 해석 가능한 continuous biomarker</strong>를 생성하는 연구 라인입니다.
</p>

<h3>A.1. Ophthalmology (안과 영상 기반 정량화)</h3>
<ul class="section-text">
  <li>Epiretinal Membrane(ERM), Diabetic Retinopathy, Macular Disease 등</li>
  <li>Fundus / OCT-B-scans 기반:
    <ul>
      <li>병변 segmentation (Membrane, Retina layers, cyst regions)</li>
      <li>Thickness map, curvature, reflectance profile 등 정량 지표 생성</li>
    </ul>
  </li>
  <li>정량 지표 기반 disease staging, progression prediction 모델</li>
</ul>

<h3>A.2. Gait / Orthopedics (정형외과 보행 분석)</h3>
<ul class="section-text">
  <li>Markerless video (pose estimation) → biomechanical features → gait anomaly quantification</li>
  <li>Clinical grading 대신 정량 feature를 활용한 진단 및 progression 모델</li>
  <li>Pediatric, elderly imbalance assessment 등 확장 가능</li>
</ul>

<h3>A.3. Multi-modal structured data integration</h3>
<p class="section-text">
  영상, 정량 feature, EMR, 검사 수치(labs) 등 통합.<br />
  최종 목적: <strong>disease progression world model</strong> 구축.
</p>

<hr class="section-divider" />

<h2>3. Research Theme B: Domain-Specialized Medical LLMs (Ophtimus-V2 계열)</h2>
<p class="section-text">
  사용자가 직접 개발한 <strong>Ophthalmology 특화 LLM(Ophtimus-V2-Tx)</strong> 연구 라인입니다.
</p>

<h3>B.1. Clinical reasoning 모델</h3>
<ul class="section-text">
  <li>케이스 리포트 기반 fine-tuning</li>
  <li>증상–영상–진단–치료로 이어지는 "임상 지식 경로(clinical knowledge pathway)" 학습</li>
  <li>hallucination 감소 및 안전성 강화 목적의 LoRA 및 structured LoRA 실험</li>
</ul>

<h3>B.2. Multi-modal 입력 확장</h3>
<ul class="section-text">
  <li>Fundus / OCT(B-scan) embedding + structured quantification + textual description</li>
  <li>나아가 의료용 World Model과 결합하여 progression simulator 연동 가능</li>
</ul>

<h3>B.3. Safety & Trustworthiness</h3>
<ul class="section-text">
  <li>"Safety Neurons" 분석</li>
  <li>Mechanistic interpretability (circuit-level patterns in reasoning)</li>
  <li>Clinically harmful output 검출 및 unlearning</li>
</ul>

<hr class="section-divider" />

<h2>4. Research Theme C: Formal Verification + AI Safety for Medical AI</h2>
<p class="section-text">
  의료 AI의 신뢰성과 규제 대응(의료기기 인허가 등)을 위해<br />
  <strong>정형 기법(Formal Methods) + AI Safety</strong>를 결합한 독자적 연구 라인.
</p>

<h3>C.1. Verified Environment Models</h3>
<ul class="section-text">
  <li>Timed Automata 기반 의료 프로세스 모델</li>
  <li>Model checking(PCTL, CTL, TCTL)을 통한 안전 제약 조건 검증</li>
  <li>강화학습 또는 AI inference가 이 제약을 위반하지 않도록 control shield 제공</li>
</ul>

<h3>C.2. Verified AI Controllers</h3>
<ul class="section-text">
  <li>Medical AI inference pipeline에 safety property 강제</li>
  <li>"언제 어떤 입력에서 위험한 출력이 발생 가능한가"를 검증하는 분석</li>
  <li>Verification-aware fine-tuning 또는 pruning</li>
</ul>

<h3>C.3. Trustworthy Data & Contamination Check</h3>
<ul class="section-text">
  <li>Crowd annotation에서 LLM-cheating 탐지(peer prediction 기반)</li>
  <li>의료 데이터 라벨의 신뢰성 확보</li>
</ul>

<hr class="section-divider" />

<h2>5. Research Theme D: Medical World Models & Embodied AI</h2>
<p class="section-text">
  NeurIPS 2025의 핵심 트렌드("World Models", "Embodied AI for Healthcare")와 직접적으로 정렬되는 연구 방향.
</p>

<h3>D.1. Disease Progression World Model</h3>
<ul class="section-text">
  <li>Retina / ERM progression dynamics를 모델링하는 generative world model</li>
  <li>OCT/B-scan 연속 영상 기반 temporal latent dynamics</li>
  <li>"만약 환자의 상태가 X라면, 6개월 후의 OCT는 어떻게 변할까?" 같은 counterfactual simulation 가능</li>
</ul>

<h3>D.2. Multi-modal Clinical Simulator</h3>
<ul class="section-text">
  <li>이미지, 정량 biomarker, 텍스트 리포트, 치료 이력 포함</li>
  <li>LLM에게 구조화된 임상 시뮬레이션 컨텍스트 제공</li>
  <li>임상 결정지원(Decision Support) 최대 강화</li>
</ul>

<h3>D.3. Reinforcement Learning in Verified Clinical Simulation</h3>
<ul class="section-text">
  <li>실세계 의료를 직접 학습시키는 것이 금지되는 경우</li>
  <li>Verified world model 기반 safe RL 적용 가능</li>
  <li>Treatment planning 또는 screening 정책 최적화 연구로 확장 가능</li>
</ul>

<hr class="section-divider" />

<h2>6. Research Theme E: Foundations for AI-Driven Clinical Decision Support</h2>
<p class="section-text">
  위의 모든 축(A~D)를 통합하여 <strong>임상 추론 자동화</strong>라는 궁극적인 의료 AI 목적을 지원.
</p>

<h3>E.1. Image → Biomarker → Reasoner → Recommendation</h3>
<ul class="section-text">
  <li>완전히 end-to-end 연결 가능한 pipeline 구축</li>
  <li>영상 기반 quantification이 LLM reasoning의 입력 구조로 연결됨</li>
</ul>

<h3>E.2. Multi-lingual / Multi-institution Generalization</h3>
<ul class="section-text">
  <li>한국, 미국(UPenn), 기타 기관 데이터 협력 기반</li>
  <li>Robustness, distribution shift 연구 수행</li>
</ul>

<h3>E.3. Regulatory-readiness</h3>
<ul class="section-text">
  <li>신뢰성 평가 지표(specificity, sensitivity, FN-critical tasks)</li>
  <li>"Safety case" 구조를 갖춘 의료 AI 문서화 가능</li>
</ul>

<hr class="section-divider" />

<h2>7. 전체 테마 요약 (One-page Executive Summary)</h2>
<p class="section-text">
  <strong>사용자의 Medical AI 연구는 단순한 이미지 분류를 넘어서 다음의 통합적 연구 생태계를 구축하는 것에 초점을 둔다.</strong>
</p>
<ol class="section-text">
  <li><strong>질병 정량화 기술</strong>
    <ul>
      <li>영상 기반 병변 분석, 수치화, progression modeling</li>
    </ul>
  </li>
  <li><strong>임상 특화 LLM 개발(Ophtimus-V2-Tx)</strong>
    <ul>
      <li>Ophthalmology 전문 reasoning 모델</li>
      <li>Multi-modal (OCT/Fundus + EMR + biomarkers) 처리</li>
    </ul>
  </li>
  <li><strong>AI Safety & Formal Verification 적용</strong>
    <ul>
      <li>의료 AI를 위한 safety constraints 보장</li>
      <li>Verified environment + verified inference</li>
    </ul>
  </li>
  <li><strong>World Model 기반 임상 시뮬레이션</strong>
    <ul>
      <li>질병 진행 시뮬레이션</li>
      <li>LLM의 clinical decision reasoning을 위한 foundation</li>
    </ul>
  </li>
  <li><strong>전반적 의료 의사결정 지원 시스템 구축</strong>
    <ul>
      <li>Data → Image → Quantification → LLM → Decision까지 end-to-end</li>
    </ul>
  </li>
</ol>


