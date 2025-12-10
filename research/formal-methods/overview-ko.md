<!-- Title -->
<h2 class="section-title">AiX Lab – Formal Methods Research Themes</h2>
<p class="section-subtitle">
  Verified Environment + Verified Learning 기반의 안전한 지능형 시스템 구축
</p>

<h2>1. Core Vision</h2>
<p class="section-text">
  사이버-물리 시스템(CPS)과 지능형 시스템에서 <strong>단순한 오프라인 검증(Offline Verification)이 아니라, 형식 검증(Formal Verification)에서 실행 코드 생성(Code Generation) 및 런타임 모니터링(Runtime Monitoring)까지 이어지는 "End-to-End Verified System Pipeline"을 구축</strong>하는 것이 전체적인 연구 비전입니다.
</p>
<p class="section-text">
  이 비전은 다음과 같은 핵심 목표를 가집니다:
</p>
<ul class="section-text">
  <li>Timed Automata 모델링 → UPPAAL 기반 형식 검증 → TADA 정규화 → Go 코드 자동 생성</li>
  <li>검증된 모델 + 자동 생성 코드 + Runtime Safety Monitor → 실시간 안전성 보장 시스템</li>
  <li>안전성·신뢰성 강화: 모델 체킹(Model Checking), 시간 제약 검증, 런타임 위반 감지·차단(shielding)</li>
  <li>Verified World Models: World Model이 생성하는 상태·전이가 물리적·논리적 제약을 위반하지 않도록 검증</li>
  <li>Safe Reinforcement Learning: Verified Environment + Formal Safety Shields를 통한 위험 행동 차단 및 안전 학습 프레임워크</li>
  <li>Counterfactual Simulation under Formal Constraints: 형식적 제약 하에서 현실적이고 안전한 시뮬레이션만 생성</li>
</ul>

<hr class="section-divider" />

<!-- ============================== -->
<!-- FM-U1                          -->
<!-- ============================== -->
<h3 id="fm-u1">FM-U1. Verified Environment Modeling & Execution</h3>
<p>
  지능형 시스템이 상호작용하는 환경을 정밀하게 형식화(Formalize)하고,
  검증된 환경에서만 시스템이 실행되도록 만드는 핵심 기술 축입니다.
  환경의 시간·논리 제약을 명확하게 정의하고, 실행 단계까지 안전성을 보증합니다.
</p>

<!-- FM-U1.1 -->
<h4 id="fm-u1-1">FM-U1.1. Timed Automata 기반 Environment & Mission Modeling</h4>
<p>
  현실 환경의 시간, 순서, 제약 조건을 <strong>Timed Automata (TA)</strong>로 모델링하여
  시스템이 절대 위반해서는 안 되는 <strong>안전 경계(safety envelope)</strong>를 정의합니다.
  TA 모델은 UPPAAL 등의 모델체커를 통해 safety, liveness, deadline 등을 자동 검증합니다.
</p>

<!-- FM-U1.2 -->
<h4 id="fm-u1-2">FM-U1.2. TADA 기반 의미 정규화 + 자동 코드 생성</h4>
<p>
  TA의 모호한 시간 의미를 <strong>TADA(Timed Automata with Disjoint Actions)</strong>로 정규화하여
  모델 의미와 실행 의미가 1:1로 대응하도록 구성합니다.
  TADA는 time-transition과 action-transition을 명확히 분리하고,
  경계조건(invariant violation, x==n 등)을 모두 상태로 표현하여 실행 안전성을 강화합니다.
</p>
<p>
  정규화된 TADA 모델은 자동으로 Go 코드로 변환되며,
  <strong>실행 중 safety 위반을 실시간으로 감지·차단(shielding)</strong>하는
  Runtime Safety Monitor가 함께 생성됩니다.
</p>

<!-- FM-U1.3 -->
<h4 id="fm-u1-3">FM-U1.3. Verified Simulation Environment</h4>
<p>
  TA/TADA로 검증된 환경을 기반으로 Vision, LLM, RL, Control 모듈이 
  <strong>항상 안전 제약 아래에서만 행동하도록 강제하는 실행 환경</strong>을 구성합니다.
  위험한 행동이 발생하면 즉시 차단되며, 
  AI가 학습·추론 중 잘못된 정책을 형성하는 것을 구조적으로 방지합니다.
</p>

<hr>

<!-- ============================== -->
<!-- FM-U2                          -->
<!-- ============================== -->
<h3 id="fm-u2">FM-U2. Verified World Models, Embodied AI, and Safe Reinforcement Learning</h3>
<p>
  Embodied AI, World Model, Reinforcement Learning이 
  잘못된 세계를 생성하거나 위험한 정책을 학습하지 않도록
  모델체킹 기반 안전성을 통합하는 연구 축입니다.
</p>

<!-- FM-U2.1 -->
<h4 id="fm-u2-1">FM-U2.1. Verified World Models</h4>
<p>
  World Model이 생성하는 상태(state)와 전이(transition)가 
  물리적·논리적 제약을 위반하지 않도록 검증합니다.
  잘못된 dynamics나 비현실적 시나리오가 
  AI의 정책 학습을 오염시키지 않도록 보장합니다.
</p>

<!-- FM-U2.2 -->
<h4 id="fm-u2-2">FM-U2.2. Safe RL via Verified Environment + Formal Shields</h4>
<p>
  RL의 exploration과 policy-learning 과정에서 발생하는 
  위험 행동을 <strong>Verified Environment</strong>와 
  <strong>Formal Safety Shields</strong>를 통해 즉시 차단합니다.
  이로써 RL이 안전 제약 안에서만 학습할 수 있는 
  <strong>Safe Learning Framework</strong>를 제공합니다.
</p>

<!-- FM-U2.3 -->
<h4 id="fm-u2-3">FM-U2.3. Counterfactual Simulation under Formal Constraints</h4>
<p>
  World Model 및 Embodied AI가 생성하는 counterfactual 시나리오에
  형식적 제약을 부여하여, 
  <strong>현실적이고 안전한 시뮬레이션만 생성</strong>하도록 보장합니다.
  이는 AI가 잘못된 가정이나 위험한 시나리오를 학습하는 것을 방지합니다.
</p>

<hr>

<!-- Summary -->
<h3>Executive Summary</h3>
<p>
  <strong>FM-U1</strong>은 환경을 정형적으로 모델링하고 검증하며 실행까지 연결하는 기술로,
  시스템이 어떤 AI 알고리즘을 사용하더라도 안전한 환경 안에서만 동작하게 합니다.
</p>
<p>
  <strong>FM-U2</strong>는 Embodied AI, World Model, RL이 
  위험한 상태나 정책을 생성하지 않도록 
  학습·시뮬레이션 단계에서부터 모델체킹을 통합하여
  <strong>Verified Learning</strong>을 실현합니다.
</p>
<p>
  두 기술이 결합하여,
  Perception → Reasoning/Planning → Control → Execution → Learning
  전체 루프가 안전성을 갖춘 
  <strong>Verified Intelligent System</strong>을 구성하게 됩니다.
</p>

