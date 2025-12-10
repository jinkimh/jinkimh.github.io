<div class="intro-section">
  <p class="section-text">
    <strong>RoboRacer(F1TENTH)</strong> (<a href="https://roboracer.or.kr" target="_blank">roboracer.or.kr</a>) is a <strong>standardized research platform</strong> that scales down and refines the development pipeline of real autonomous vehicles to enable reproduction in research and educational settings.
  </p>
  <p class="section-text">
    This platform is not a simple small-scale RC car but a <strong>scaled-down version of a complete autonomous driving system</strong> that includes all of the following elements:
  </p>
  <ul class="feature-highlights">
    <li>High-precision LiDAR sensor-based perception</li>
    <li>Real-time computation (embedded computing)</li>
    <li>Differentiable dynamics-based control</li>
    <li>Path planning and optimization</li>
    <li>Safety assessment and verification (formal verification)</li>
  </ul>
  <p class="section-text">
    RoboRacer has an experiment-friendly structure where <em>researchers can immediately verify algorithm changes through actual driving results</em>, making it a <strong>general benchmark platform</strong> for autonomous driving research adopted by universities, research institutes, and companies worldwide.
  </p>
</div>

<div class="image-container">
  <img src="{{ '/research/robot-racing/roboracer/f1tenth.png' | relative_url }}" alt="F1TENTH RoboRacer Platform" class="content-image">
  <p class="image-caption">F1TENTH RoboRacer Platform</p>
</div>

<hr class="section-divider">

<h3>Features and Performance of the RoboRacer Platform</h3>

<h4>(1) Precision Sensor and Dynamics-Based Structure</h4>
<ul class="section-text">
  <li>Application of <strong>Ackermann or track-based dynamics</strong> identical to real vehicles</li>
  <li>Clear implementation of vehicle dynamics characteristics such as tire friction, cornering, oversteer/understeer</li>
  <li><strong>2D LiDAR</strong>: 270°+ FOV, 0.25° resolution, approximately 40Hz scan frequency</li>
  <li>Real-time application of advanced algorithms such as SLAM, ICP, NDT</li>
</ul>

<h4>(2) High-Performance Embedded System</h4>
<ul class="section-text">
  <li>High-performance computing based on <strong>NVIDIA Jetson Xavier/Orin</strong> or <strong>Intel NUC</strong></li>
  <li>Use of <strong>ROS2</strong> communication structure ensures structural consistency with industrial robot systems as well as researchers and students</li>
  <li>Stable maintenance of control cycle at <strong>20–50Hz</strong> enables high-speed racing</li>
</ul>

<h4>(3) Complete Simulation–Reality Compatibility</h4>
<ul class="section-text">
  <li>Support for <strong>F1TENTH Gym (PyBullet)</strong>, <strong>Gazebo</strong>, and <strong>NVIDIA Isaac Sim</strong></li>
  <li>Sim2Real research using <strong>Domain Randomization</strong></li>
  <li>Automatic compatibility between simulator and real vehicle code through identical ROS interface</li>
</ul>

<h4>(4) Practical Performance for Racing</h4>
<ul class="section-text">
  <li>Capable of driving at maximum speed of approximately <strong>5–10 m/s</strong></li>
  <li>Clear observation of control algorithm performance differences in indoor cornering, rapid acceleration, and emergency braking</li>
  <li>Reproduction of oversteer/understeer phenomena enables high-speed control experiments</li>
</ul>

<div class="image-container full-width">
  <img src="{{ '/research/robot-racing/roboracer/RoboRacer_env.png' | relative_url }}" alt="RoboRacer Environment" class="content-image">
  <p class="image-caption">RoboRacer Racing Environment</p>
</div>

<hr class="section-divider">

<h3>RoboRacer Competitions</h3>
<p class="section-text">
  RoboRacer competitions are not simple speed races but <strong>international research competitions that comprehensively evaluate the quality of autonomous driving algorithms</strong>.
</p>
<p class="section-text">
  Competitions test the following elements in detail:
</p>

<div class="image-container">
  <img src="{{ '/research/robot-racing/roboracer/roboracer_korea_2023.jpg' | relative_url }}" alt="RoboRacer Korea 2023" class="content-image">
  <p class="image-caption">RoboRacer Korea 2023</p>
</div>

<div class="research-grid">
  <div class="research-card">
    <h4 class="research-card-title">(1) Time-Trial Race</h4>
    <ul class="research-card-list">
      <li>Quality of optimal path generation and speed profiles</li>
      <li>Ability to design control algorithms that understand vehicle dynamics</li>
      <li>SLAM drift correction and stability</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(2) Head-to-Head Race</h4>
    <ul class="research-card-list">
      <li>Strategic driving considering opponent vehicle behavior</li>
      <li>Collision risk management (TTC-based safety assessment)</li>
      <li>Research on game-theoretic interaction models</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(3) Safety & Reliability Challenge</h4>
    <ul class="research-card-list">
      <li>Emergency braking (AEB) performance for sudden obstacle appearance</li>
      <li>Safe control capability at excessive speed and angular velocity</li>
      <li>Evaluation of whether the system safely converges even in error-accumulating environments</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(4) SLAM / Perception Challenge</h4>
    <ul class="research-card-list">
      <li>LiDAR scan matching accuracy</li>
      <li>Localization stability in indoor and dynamic environments</li>
      <li>Multi-frame tracking optimization</li>
    </ul>
  </div>
</div>

<p class="section-text">
  These competitions function as a <strong>research, education, and industry verification platform</strong>, and in Korea, <strong>RoboRacer Korea</strong> regularly hosts competitions to expand the ecosystem.
</p>

<hr class="section-divider">

<h3>Research Enabled by the RoboRacer Platform</h3>
<p class="section-text">
  RoboRacer is not a simple educational kit but is widely used as a <strong>testing ground for cutting-edge AI and robotics research</strong>.
</p>

<div class="research-grid">
  <div class="research-card">
    <h4 class="research-card-title">(1) Perception</h4>
    <ul class="research-card-list">
      <li>LiDAR point cloud segmentation / clustering</li>
      <li>Scan-to-map localization (enables lightweight research such as ICP, NDT, Fast-LIO2)</li>
      <li>Range image-based neural perception research</li>
      <li>Tracking-by-detection / end-to-end BEV model experiments</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(2) Path Planning</h4>
    <ul class="research-card-list">
      <li>Optimal racing line generation for high-speed racing</li>
      <li>Frenet Frame-based speed–position optimization</li>
      <li>Sampling-based planners (RRT*, Hybrid A*) + smoothing</li>
      <li>Dynamic obstacle avoidance and safe reachable tube generation</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(3) Control</h4>
    <ul class="research-card-list">
      <li>Pure Pursuit, Stanley, PID</li>
      <li>MPC (MPC-LQR, LMPC, Koopman-based MPC)</li>
      <li>Vehicle dynamic model identification (friction coefficient estimation, etc.)</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(4) Reinforcement Learning (RL)</h4>
    <ul class="research-card-list">
      <li>Off-policy RL (SAC, TD3)-based driving policy learning</li>
      <li>On-policy RL (PPO, TRPO)-based racing strategies</li>
      <li>Safe RL application (Constraint-aware RL, Lagrangian RL, Shielded RL)</li>
      <li>Domain Randomization / adversarial training for Sim2Real gap reduction</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(5) Safety & Formal Methods</h4>
    <ul class="research-card-list">
      <li>Model checking-based safety-guaranteed control</li>
      <li>Automatic speed limit calculation based on reachable sets</li>
      <li>Responsibility-sensitive safety (RSS) model application experiments</li>
      <li>Benchmark construction for quantifying crash-avoidance performance</li>
    </ul>
  </div>

  <div class="research-card">
    <h4 class="research-card-title">(6) Integrated AI for High-Speed Racing</h4>
    <ul class="research-card-list">
      <li>World Model-based predictive control (Dreamer, ViT-based latent dynamics)</li>
      <li>End-to-End neural control</li>
      <li>Multi-sensor fusion (LiDAR + IMU + wheel odometry)</li>
      <li>Self-supervised trajectory prediction</li>
    </ul>
  </div>
</div>

<p class="section-text">
  RoboRacer has the advantage that <strong>experimental costs are very low due to its small and fast platform</strong>, allowing direct verification of even high-risk scenarios.
</p>

<hr class="section-divider">

<h3>Research Focus at AiX Lab</h3>

<h4>RL-based Control Synthesis & Dynamic Lookahead Computation</h4>
<p class="section-text">
  At AiX Lab, we are advancing the following frameworks using the RoboRacer platform.
</p>

<div class="research-focus">
  <h4>(1) Reinforcement Learning-Based Control Synthesis</h4>
  <p class="section-text">
    AiX Lab is building <strong>learning-based controllers</strong> that go beyond the limitations of existing controllers (Pure Pursuit, MPC).
  </p>
  
  <h5>Core Research Concepts:</h5>
  <ul class="section-text">
    <li>Embedding model checking-based environmental constraints (safety constraints) into the RL learning process</li>
    <li>Real-time calculation of reachable tubes / safety envelopes</li>
    <li>Including TTC, accumulated risk, trajectory curvature, etc. in RL reward design</li>
    <li>Policy stability verification through simulator + real-world loop</li>
  </ul>
  
  <p class="section-text highlight-box">
    As a result, the goal is to create a <strong>"controller that is fast at high speeds while guaranteeing safety"</strong>.
  </p>
</div>

<div class="research-focus">
  <h4>(2) Dynamic Lookahead Computation</h4>
  <p class="section-text">
    In Pure Pursuit, lookahead significantly affects performance.
  </p>
  
  <h5>AiX Lab's Goals:</h5>
  <ul class="section-text">
    <li>LiDAR curvature estimation → real-time optimal lookahead calculation</li>
    <li>Mutual optimization between speed profile + lookahead</li>
    <li>Adaptive tuning simultaneously considering vehicle dynamics + track geometry</li>
    <li>Development of structures that learn/optimize lookahead with RL/MPC</li>
  </ul>
  
  <p class="section-text highlight-box">
    This research can be viewed as next-generation Pure Pursuit, aiming to simultaneously satisfy two requirements: <strong>minimizing Lap Time + ensuring high-speed stability</strong>.
  </p>
</div>

<div class="related-links">
  <p class="section-text">
    <strong>Related Links:</strong><br>
    • <a href="https://roboracer.or.kr" target="_blank">RoboRacer Korea (roboracer.or.kr)</a><br>
    • <a href="https://roboracer.ai" target="_blank"> Roboracer(F1Tenth) Official Website</a>
  </p>
</div>

