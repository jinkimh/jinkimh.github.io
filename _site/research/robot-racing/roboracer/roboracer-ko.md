<div class="intro-section">
  <p class="section-text">
    <strong>RoboRacer(F1TENTH)</strong> (<a href="https://roboracer.or.kr" target="_blank">roboracer.or.kr</a>)는 실제 자율주행차의 개발 파이프라인을 축소·정제하여 연구·교육 현장에서 재현할 수 있도록 만든 <strong>표준화된 연구 플랫폼</strong>입니다.
  </p>
  <p class="section-text">
    본 플랫폼은 단순한 소형 RC 자동차가 아니라 아래 요소들을 모두 포함하는 <strong>완전한 자율주행 시스템의 축소판</strong>입니다:
  </p>
  <ul class="feature-highlights">
    <li>고정밀 LiDAR 센서 기반 인지(perception)</li>
    <li>실시간 계산(embedded computing)</li>
    <li>미분 가능한 동역학 기반 제어(control)</li>
    <li>경로 계획과 최적화(planning & optimization)</li>
    <li>안전성 평가와 검증(formal verification)</li>
  </ul>
  <p class="section-text">
    RoboRacer는 <em>연구자가 알고리즘을 변경하면 즉각 실제 주행 결과로 확인할 수 있는</em> 실험 친화적 구조를 갖고 있어 전 세계 대학·연구소·기업에서 자율주행 연구의 <strong>일반적 벤치마크 플랫폼</strong>으로 채택되고 있습니다.
  </p>
</div>

<div class="image-container">
  <img src="{{ '/research/robot-racing/roboracer/f1tenth.png' | relative_url }}" alt="F1TENTH RoboRacer Platform" class="content-image">
  <p class="image-caption">F1TENTH RoboRacer Platform</p>
</div>

<hr class="section-divider">

<h3>RoboRacer 플랫폼의 특징과 성능</h3>

<h4>(1) 정밀 센서·동역학 기반 구조</h4>
<ul class="section-text">
  <li>실제 차량과 동일한 <strong>Ackermann 또는 트랙 기반 동역학</strong> 적용</li>
  <li>타이어 마찰, 코너링, 과·부조향 등 차량 동역학 특성을 명확히 구현</li>
  <li><strong>2D LiDAR</strong>: 270° 이상 FOV, 0.25° 해상도, 약 40Hz 스캔 빈도 제공</li>
  <li>SLAM·ICP·NDT 등 고급 알고리즘도 실시간 적용 가능</li>
</ul>

<h4>(2) 고성능 임베디드 시스템</h4>
<ul class="section-text">
  <li><strong>NVIDIA Jetson Xavier/Orin</strong> 또는 <strong>Intel NUC</strong> 기반 고성능 연산</li>
  <li><strong>ROS2</strong> 통신 구조를 사용하여 연구자·학생뿐 아니라 산업용 로봇 시스템과도 구조적 일관성 확보</li>
  <li>Control cycle <strong>20–50Hz</strong> 안정 유지로 고속 레이싱이 가능</li>
</ul>

<h4>(3) Simulation–Reality 완전 호환성</h4>
<ul class="section-text">
  <li><strong>F1TENTH Gym(PyBullet)</strong>, <strong>Gazebo</strong>, <strong>NVIDIA Isaac Sim</strong> 모두 지원</li>
  <li><strong>Domain Randomization</strong>을 활용한 Sim2Real 연구 수행 가능</li>
  <li>동일 ROS 인터페이스로 시뮬레이터와 실차 코드가 자동 호환</li>
</ul>

<h4>(4) 레이싱을 위한 실제적 성능</h4>
<ul class="section-text">
  <li>최대 약 <strong>5–10 m/s</strong> 속도로 주행 가능</li>
  <li>실내 코너링·급가속·급제동에서도 제어 알고리즘 성능 차이가 명확히 관찰됨</li>
  <li>오버스티어/언더스티어 현상까지 재현되므로 고속 제어 실험이 가능</li>
</ul>

<div class="image-container full-width">
  <img src="{{ '/research/robot-racing/roboracer/RoboRacer_env.png' | relative_url }}" alt="RoboRacer Environment" class="content-image">
  <p class="image-caption">RoboRacer Racing Environment</p>
</div>

<hr class="section-divider">

<h3>RoboRacer 경기</h3>

<p class="section-text">
  RoboRacer 경기는 단순한 속도 경쟁이 아니라 <strong>자율주행 알고리즘의 종합적인 품질을 평가하는 국제 연구 대회</strong>입니다.
</p>
<p class="section-text">
  경기는 다음 요소들을 상세하게 시험합니다:
</p>

<div class="image-container">
  <img src="{{ '/research/robot-racing/roboracer/roboracer_korea_2023.jpg' | relative_url }}" alt="RoboRacer Korea 2023" class="content-image">
  <p class="image-caption">RoboRacer Korea 2023</p>
</div>

<div class="research-grid">
  <div class="research-card">
    <h4 class="research-card-title">(1) Time-Trial Race</h4>
    <ul class="research-card-list">
      <li>최적 경로 생성 및 속도 프로파일의 품질</li>
      <li>차량 동역학을 이해한 제어 알고리즘 설계 능력</li>
      <li>SLAM drift 보정 및 안정성</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(2) Head-to-Head Race</h4>
    <ul class="research-card-list">
      <li>상대 차량의 행동을 고려한 전략적 주행</li>
      <li>충돌 위험 관리(TTC 기반 안전 판단)</li>
      <li>게임 이론적 상호작용 모델 연구 가능</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(3) Safety & Reliability Challenge</h4>
    <ul class="research-card-list">
      <li>급작스러운 장애물 출현에 대한 긴급 제동(AEB) 성능</li>
      <li>과도한 속도·회전 각속도에서의 안전 제어 능력</li>
      <li>오차 누적 환경에서도 시스템이 안전하게 수렴하는지 평가</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(4) SLAM / Perception Challenge</h4>
    <ul class="research-card-list">
      <li>LiDAR scan 정합 정확도</li>
      <li>실내·동적 환경에서 Localization의 안정성</li>
      <li>multi-frame tracking 최적화</li>
    </ul>
  </div>
</div>

<p class="section-text">
  이 대회는 <strong>연구·교육·산업 검증 플랫폼</strong>으로서 기능하며, 국내에서는 <strong>RoboRacer Korea</strong>가 정기 대회를 개최하여 생태계를 확대하고 있습니다.
</p>

<hr class="section-divider">

<h3>RoboRacer 플랫폼으로 수행 가능한 연구</h3>
<p class="section-text">
  RoboRacer는 단순한 교육용 키트가 아니라, <strong>최신 AI·로보틱스 연구의 실험 장(實驗場)</strong>으로 널리 사용되고 있습니다.
</p>

<div class="research-grid">
  <div class="research-card">
    <h4 class="research-card-title">(1) 인지(Perception)</h4>
    <ul class="research-card-list">
      <li>LiDAR point cloud segmentation / clustering</li>
      <li>scan-to-map localization (ICP, NDT, Fast-LIO2 등 경량화 연구 가능)</li>
      <li>range image 기반 neural perception 연구</li>
      <li>tracking-by-detection / end-to-end BEV 모델 실험</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(2) 경로 계획(Path Planning)</h4>
    <ul class="research-card-list">
      <li>고속 레이싱용 최적 레이싱 라인 생성</li>
      <li>Frenet Frame 기반 속도–위치 최적화</li>
      <li>샘플링 기반 플래너(RRT*, Hybrid A*) + smoothing</li>
      <li>동적 장애물 회피 및 안전한 reachable tube 생성</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(3) 제어(Control)</h4>
    <ul class="research-card-list">
      <li>Pure Pursuit, Stanley, PID</li>
      <li>MPC(MPC-LQR, LMPC, Koopman-based MPC)</li>
      <li>Vehicle dynamic model identification(마찰계수 추정 등)</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(4) 강화학습(RL)</h4>
    <ul class="research-card-list">
      <li>Off-policy RL(SAC, TD3) 기반 주행 정책 학습</li>
      <li>On-policy RL(PPO, TRPO) 기반 레이싱 전략</li>
      <li>Safe RL(Constraint-aware RL, Lagrangian RL, Shielded RL) 적용</li>
      <li>Sim2Real Gap 감소를 위한 Domain Randomization / adversarial training</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(5) 안전성 검증(Safety & Formal Methods)</h4>
    <ul class="research-card-list">
      <li>모델체킹 기반 안전성 보증 제어</li>
      <li>Reachable set 기반 속도 제한 자동 계산</li>
      <li>보험수리 모델(RSS) 적용 실험</li>
      <li>Crash-avoidance 성능을 정량화하는 벤치마크 구축</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(6) 고속 레이싱을 위한 통합 AI</h4>
    <ul class="research-card-list">
      <li>World Model 기반 예측 제어(Dreamer, ViT-based latent dynamics)</li>
      <li>End-to-End neural control</li>
      <li>Multi-sensor fusion(LiDAR + IMU + wheel odometry)</li>
      <li>Self-supervised trajectory prediction</li>
    </ul>
  </div>
</div>

<p class="section-text">
  RoboRacer는 <strong>작고 빠른 플랫폼 덕분에 실험 비용이 매우 낮아</strong>, 고위험 시나리오까지 직접 검증할 수 있다는 장점이 있습니다.
</p>

<hr class="section-divider">

<h3>AiX Lab이 집중하는 연구</h3>

<h4>RL-based Control Synthesis & Dynamic Lookahead Computation</h4>
<p class="section-text">
  AiX Lab은 RoboRacer 플랫폼을 활용해 다음과 같은 프레임워크를 발전시키고 있습니다.
</p>

<div class="research-focus">
  <h4>(1) 강화학습 기반 제어 합성 (RL-based Control Synthesis)</h4>
  <p class="section-text">
    AiX Lab은 기존 제어기(Pure Pursuit, MPC)의 한계를 넘어서는 <strong>학습 기반 제어기</strong>를 구축하고 있습니다.
  </p>
  
  <h5>핵심 연구 개념:</h5>
  <ul class="section-text">
    <li>모델체킹 기반 환경 제약(safety constraints)을 RL 학습 과정에 내재</li>
    <li>reachable tube / safety envelope을 실시간 계산</li>
    <li>RL reward 설계에 TTC·accumulated risk·trajectory curvature 등을 포함</li>
    <li>simulator + real-world loop를 통한 정책 안정성 검증</li>
  </ul>
  
  <p class="section-text highlight-box">
    결과적으로, <strong>"고속에서 빠르면서도 안전을 보장하는 제어기"</strong>를 만드는 것이 목표입니다.
  </p>
</div>

<div class="research-focus">
  <h4>(2) Dynamic Lookahead Computation</h4>
  <p class="section-text">
    Pure Pursuit에서 lookahead는 크게 성능을 좌우합니다.
  </p>
  
  <h5>AiX Lab의 목표:</h5>
  <ul class="section-text">
    <li>LiDAR curvature estimation → 실시간 optimal lookahead 산출</li>
    <li>speed profile + lookahead 간의 상호 최적화</li>
    <li>vehicle dynamics + track geometry를 동시에 고려한 adaptive tuning</li>
    <li>RL/MPC로 lookahead를 학습/최적화하는 구조 개발</li>
  </ul>
  
  <p class="section-text highlight-box">
    이 연구는 next-generation Pure Pursuit으로 볼 수 있으며,
    <strong>Lap Time 최소화 + 고속 안정성 확보</strong>라는 두 요구를 동시에 만족시키는 것을 목표로 합니다.
  </p>
</div>

<div class="related-links">
  <p class="section-text">
    <strong>Related Links:</strong><br>
    • <a href="https://roboracer.or.kr" target="_blank">RoboRacer Korea (roboracer.or.kr)</a><br>
    • <a href="https://roboracer.ai" target="_blank"> Roboracer(F1Tenth) Official Website</a>
  </p>
</div>

