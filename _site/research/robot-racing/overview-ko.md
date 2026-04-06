<h2>RoboRacer & Autonomous Driving 연구 테마</h2>

<h3>1. 소형 자율주행 플랫폼(RoboRacer, 1/10-scale) 기반 알고리즘 연구</h3>
<p class="section-text">
  RoboRacer(F1TENTH) 차량을 활용하여 <strong>실세계 자율주행 알고리즘을 실험 가능한 형태로 축소·구현</strong>하는 연구를 수행합니다.
</p>
<ul class="section-text">
  <li>SLAM, Localization, Mapping</li>
  <li>Obstacle avoidance(Follow-The-Gap, AEB), Pure Pursuit 기반 경로 추종</li>
  <li>최적 경로 생성(Optimal Trajectory)과 고속 레이스 주행</li>
</ul>

<hr class="section-divider" />

<h3>2. Embodied AI–World Model + 모델체킹 기반 시뮬레이션 안전성·신뢰성 연구</h3>
<p class="section-text">
  자율주행 에이전트가 <strong>환경과 상호작용하며 학습·추론하는 Embodied AI 환경</strong>에서,
  <strong>World Model</strong>과 <strong>Formal Verification(모델체킹)</strong>을 결합하여 <strong>안정적이고 신뢰할 수 있는 시뮬레이션 및 주행 제어</strong>를 연구합니다.
</p>
<ul class="section-text">
  <li>World Model을 통한 환경 동역학 예측 및 미래 상태 시뮬레이션</li>
  <li>Timed Automata 기반 환경·상황 모델의 안전성 검증</li>
  <li>모델체킹으로 도출된 제약(safety constraints)을 RL·planning에 연동</li>
  <li>Sim-to-real 전환 시 발생할 수 있는 위험 상황 최소화</li>
  <li>시뮬레이터 내 시나리오 생성의 안정성·일관성 강화</li>
</ul>
<div class="highlight-box">
  <p class="section-text">
    <strong>핵심 목표:</strong><br />
    "학습 및 제어 알고리즘이 안전 제약을 위반하지 않도록 보장하는 <strong>검증 기반(verification-aware) Embodied AI 자율주행 프레임워크</strong> 개발."
  </p>
</div>

<hr class="section-divider" />

<h3>3. 시뮬레이터 기반 자율주행 학습 및 평가</h3>
<p class="section-text">
  실차 실험의 위험성과 비용을 줄이기 위해 <strong>Gazebo / Isaac / custom simulator</strong> 환경에서 알고리즘을 반복 검증합니다.
</p>
<ul class="section-text">
  <li>RL 및 imitation learning 정책 학습</li>
  <li>도전적 시나리오 자동 생성 및 stress-testing</li>
  <li>World Model 기반 predictive simulation과 결합한 연속적 학습</li>
  <li>sim-to-real 성능 격차 최소화 설계</li>
</ul>

<hr class="section-divider" />

<h3>4. Formal Verification을 적용한 안전 자율주행</h3>
<p class="section-text">
  자율주행 알고리즘의 <strong>안전성·신뢰성 보장을 정형 기법으로 체계화</strong>합니다.
</p>
<ul class="section-text">
  <li>Timed Automata 기반 주행·충돌·제동 시나리오 모델링</li>
  <li>충돌/제동 조건에 대한 safety property 모델체킹</li>
  <li>Verification-guided control 및 runtime shielding 설계</li>
  <li>안전 미준수 상황에 대한 자동 방어동작 제어</li>
</ul>

<hr class="section-divider" />

<h3>5. 경량 AI / 세계 모델(World Models)의 자율주행 적용</h3>
<p class="section-text">
  LLM·World Model 기술을 자율주행 환경에 맞게 <strong>경량화하고 실시간성 요구에 부합하도록 구현</strong>합니다.
</p>
<ul class="section-text">
  <li>World Model 기반 환경 예측 및 미래 trajectory 샘플링</li>
  <li>불확실성을 고려한 planning 및 제어</li>
  <li>Multi-modal state representation 학습</li>
</ul>

<hr class="section-divider" />

<h3>6. 교육·오픈소스 기반 자율주행 생태계 구축</h3>
<p class="section-text">
  RoboRacer Korea를 중심으로 <strong>교육–연구–경진대회</strong> 생태계를 구축합니다.
</p>
<ul class="section-text">
  <li>ROS2 기반 랩 과제 및 실습 자료(Lab-06~Lab-12) 개발</li>
  <li>초급~고급 워크숍 및 실차 실습 기반 교육 커리큘럼 운영</li>
  <li>전국 RoboRacer 네트워크 및 오픈소스 프로젝트 활성화</li>
</ul>

