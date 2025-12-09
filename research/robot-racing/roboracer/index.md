---
layout: default
title: "RoboRacer (F1TENTH)"
---

<section class="section">
  <div class="container">

    <!-- Language Tabs -->
    <div class="language-tabs">
      <input type="radio" id="lang-ko" name="language" value="ko" checked>
      <label for="lang-ko" class="lang-tab">한국어</label>
      <input type="radio" id="lang-en" name="language" value="en">
      <label for="lang-en" class="lang-tab">English</label>
    </div>

    <!-- Content Area -->
    <div id="content-area" class="content-area">
      <!-- Korean Content -->
      <div id="ko-content" class="lang-content" data-lang="ko" style="display: block;">
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

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

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
        <div style="background: rgba(255, 204, 51, 0.1); border-left: 4px solid var(--accent); padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0.25rem;">
          <p class="section-text" style="margin: 0;">
            <strong>핵심 목표:</strong><br />
            "학습 및 제어 알고리즘이 안전 제약을 위반하지 않도록 보장하는 <strong>검증 기반(verification-aware) Embodied AI 자율주행 프레임워크</strong> 개발."
          </p>
        </div>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

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

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

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

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>5. 경량 AI / 세계 모델(World Models)의 자율주행 적용</h3>
        <p class="section-text">
          LLM·World Model 기술을 자율주행 환경에 맞게 <strong>경량화하고 실시간성 요구에 부합하도록 구현</strong>합니다.
        </p>
        <ul class="section-text">
          <li>World Model 기반 환경 예측 및 미래 trajectory 샘플링</li>
          <li>불확실성을 고려한 planning 및 제어</li>
          <li>Multi-modal state representation 학습</li>
        </ul>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>6. 교육·오픈소스 기반 자율주행 생태계 구축</h3>
        <p class="section-text">
          RoboRacer Korea를 중심으로 <strong>교육–연구–경진대회</strong> 생태계를 구축합니다.
        </p>
        <ul class="section-text">
          <li>ROS2 기반 랩 과제 및 실습 자료(Lab-06~Lab-12) 개발</li>
          <li>초급~고급 워크숍 및 실차 실습 기반 교육 커리큘럼 운영</li>
          <li>전국 RoboRacer 네트워크 및 오픈소스 프로젝트 활성화</li>
        </ul>
      </div>
      
      <!-- English Content -->
      <div id="en-content" class="lang-content" data-lang="en" style="display: none;">
        <h2>RoboRacer & Autonomous Driving Research Themes</h2>

        <h3>1. Algorithm Research Based on Small-Scale Autonomous Driving Platform (RoboRacer, 1/10-scale)</h3>
        <p class="section-text">
          We conduct research to <strong>scale down and implement real-world autonomous driving algorithms in an experimentally feasible form</strong> using RoboRacer (F1TENTH) vehicles.
        </p>
        <ul class="section-text">
          <li>SLAM, Localization, Mapping</li>
          <li>Obstacle avoidance (Follow-The-Gap, AEB), Pure Pursuit-based path following</li>
          <li>Optimal trajectory generation and high-speed racing</li>
        </ul>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>2. Embodied AI–World Model + Model Checking-based Simulation Safety & Reliability Research</h3>
        <p class="section-text">
          In an <strong>Embodied AI environment where autonomous agents interact with the environment to learn and reason</strong>,
          we combine <strong>World Model</strong> and <strong>Formal Verification (Model Checking)</strong> to research <strong>stable and reliable simulation and driving control</strong>.
        </p>
        <ul class="section-text">
          <li>Environment dynamics prediction and future state simulation through World Model</li>
          <li>Safety verification of environment and situation models based on Timed Automata</li>
          <li>Integration of safety constraints derived from model checking into RL and planning</li>
          <li>Minimization of risk situations that may occur during sim-to-real transfer</li>
          <li>Enhancement of stability and consistency in scenario generation within simulators</li>
        </ul>
        <div style="background: rgba(255, 204, 51, 0.1); border-left: 4px solid var(--accent); padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0.25rem;">
          <p class="section-text" style="margin: 0;">
            <strong>Core Objective:</strong><br />
            "Development of a <strong>verification-aware Embodied AI autonomous driving framework</strong> that ensures learning and control algorithms do not violate safety constraints."
          </p>
        </div>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>3. Simulator-based Autonomous Driving Learning and Evaluation</h3>
        <p class="section-text">
          To reduce the risks and costs of real vehicle experiments, we repeatedly validate algorithms in <strong>Gazebo / Isaac / custom simulator</strong> environments.
        </p>
        <ul class="section-text">
          <li>RL and imitation learning policy training</li>
          <li>Automatic generation of challenging scenarios and stress-testing</li>
          <li>Continuous learning combined with World Model-based predictive simulation</li>
          <li>Design to minimize sim-to-real performance gap</li>
        </ul>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>4. Safe Autonomous Driving with Formal Verification</h3>
        <p class="section-text">
          We systematize <strong>safety and reliability assurance of autonomous driving algorithms through formal methods</strong>.
        </p>
        <ul class="section-text">
          <li>Modeling of driving, collision, and braking scenarios based on Timed Automata</li>
          <li>Model checking of safety properties for collision/braking conditions</li>
          <li>Design of verification-guided control and runtime shielding</li>
          <li>Automatic defensive action control for safety non-compliance situations</li>
        </ul>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>5. Application of Lightweight AI / World Models to Autonomous Driving</h3>
        <p class="section-text">
          We <strong>lightweight LLM and World Model technologies and implement them to meet real-time requirements</strong> for autonomous driving environments.
        </p>
        <ul class="section-text">
          <li>Environment prediction and future trajectory sampling based on World Model</li>
          <li>Planning and control considering uncertainty</li>
          <li>Multi-modal state representation learning</li>
        </ul>

        <hr style="margin:2.5rem 0; border:0.5px solid #333;" />

        <h3>6. Building an Education and Open-Source-based Autonomous Driving Ecosystem</h3>
        <p class="section-text">
          We build an <strong>education–research–competition</strong> ecosystem centered around RoboRacer Korea.
        </p>
        <ul class="section-text">
          <li>Development of ROS2-based lab assignments and practice materials (Lab-06~Lab-12)</li>
          <li>Operation of beginner to advanced workshops and real vehicle practice-based educational curriculum</li>
          <li>Activation of nationwide RoboRacer network and open-source projects</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Language tab switching
  const langRadios = document.querySelectorAll('input[name="language"]');
  const koContent = document.getElementById('ko-content');
  const enContent = document.getElementById('en-content');

  langRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'ko') {
        koContent.style.display = 'block';
        enContent.style.display = 'none';
      } else if (this.value === 'en') {
        koContent.style.display = 'none';
        enContent.style.display = 'block';
      }
    });
  });
});
</script>
