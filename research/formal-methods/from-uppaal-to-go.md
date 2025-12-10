<style>
.research-result {
  padding: 2rem 0;
  background-color: #000000;
  color: #ffffff;
}

.research-result .container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.research-result h2.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffcc33;
  line-height: 1.3;
}

.research-result h3 {
  font-size: 1.9rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #444444;
}

.research-result h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #ffcc33;
}

.research-result p {
  line-height: 1.8;
  margin-bottom: 1.25rem;
  color: #e6e6e6;
  font-size: 1.1rem;
}

.research-result ul,
.research-result ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
  line-height: 1.8;
}

.research-result li {
  margin: 0.75rem 0;
  color: #e6e6e6;
  position: relative;
  font-size: 1.05rem;
}

.research-result li::marker {
  color: #ffcc33;
}

.research-result hr {
  margin: 3rem 0;
  border: 0;
  border-top: 2px solid #444444;
  opacity: 0.5;
}

.research-result .text-center {
  text-align: center;
  margin: 3rem 0;
}

.research-result img {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  border: 1px solid #444444;
  transition: transform 0.3s ease;
}

.research-result img:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(255, 204, 51, 0.3);
}

.research-result .caption {
  margin-top: 1rem;
  font-size: 1rem;
  color: #aaaaaa;
  font-style: italic;
  line-height: 1.6;
}

.research-result code {
  background: rgba(255, 204, 51, 0.25);
  color: #ffcc33;
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 1em;
  font-weight: 500;
}

.research-result pre {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #444444;
  border-left: 4px solid #ffcc33;
  border-radius: 0.5rem;
  padding: 1.25rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.research-result pre code {
  background: transparent;
  color: #e6e6e6;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
}

.research-result strong {
  color: #ffcc33;
  font-weight: 600;
}

.research-result a {
  color: #5ab4ff;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.research-result a:hover {
  color: #ffe799;
}

.research-result em {
  color: #aaaaaa;
  font-style: italic;
}

@media (max-width: 768px) {
  .research-result .container {
    padding: 0 1rem;
  }
  
  .research-result h2.section-title {
    font-size: 1.8rem;
  }
  
  .research-result h3 {
    font-size: 1.6rem;
  }
  
  .research-result h4 {
    font-size: 1.35rem;
  }
  
  .research-result p {
    font-size: 1.05rem;
  }
  
  .research-result li {
    font-size: 1rem;
  }
  
  .research-result code {
    font-size: 0.95em;
  }
  
  .research-result pre code {
    font-size: 0.9rem;
  }
}
</style>

<section id="ta-tada-to-go" class="section research-result">
  <div class="container">
    <!-- 제목 -->
    <h2 class="section-title">형식 검증 기반 CPS 신뢰성 확보: TA–TADA–to–Go 프레임워크</h2>

    <!-- 대표 이미지 -->
    <div class="text-center">
      <img src="/research/formal-methods/access-gagraphic-3608215.jpg"
           alt="TA–TADA–to–Go: Ensuring CPS Reliability">
      <p class="caption">
        TA–TADA–to–Go 파이프라인: 형식 검증 &rarr; 자동 코드 생성 &rarr; 런타임 모니터링
      </p>
    </div>

    <!-- 개요 -->
    <p>
      본 연구는 자율주행, 산업 자동화 등과 같은 <strong>안전 필수(Critical) 사이버-물리 시스템(CPS)</strong>에서 요구되는
      <strong>정확성·안전성·시간적 제약 준수</strong>를 보장하기 위한 새로운 통합 접근법을 제안한다.
      기존 Timed Automata(TA) 및 UPPAAL 기반 <strong>오프라인 형식 검증</strong>은 이론적으로 강력하지만,
      이를 실제 실행 가능한 코드로 변환하는 과정에서 의미 손실이 발생하거나,
      <strong>레거시 ROS 시스템·센서 지연·스케줄링 변동</strong>으로 인해 런타임 위반이 발생할 위험이 남아 있다.
    </p>

    <p>
      이를 해결하기 위해 본 연구는 그림과 같이
      <strong>형식 검증(Verification) → TADA 기반 자동 코드 생성(Implementation) → Go 실행 및 런타임 모니터링(Execution)</strong>으로 이어지는
      3단계 파이프라인 <strong>TA–TADA–to–Go</strong>를 제안한다.
    </p>

    <hr>

    <!-- 1. 형식 검증 단계 -->
    <h3>1. 형식 검증 단계: Timed Automata 기반 안전성 검증</h3>
    <p>
      첫 단계에서는 UPPAAL을 사용해 CPS의 안전 필수 컴포넌트를 Timed Automata로 모델링하고,
      <strong>Timed-CTL 기반 속성 검증</strong>을 수행한다.
    </p>
    <ul>
      <li>시간 제약을 포함한 소프트웨어 요구사항, 환경 모델, 상호작용 구조를 TA로 모델링</li>
      <li>안전성(safety), 도달성(reachability), 응답성(bounded response) 등의 속성을 Timed-CTL로 명세</li>
      <li>모델 체킹을 통해 <strong>시간적 무결성 및 논리적 안전성</strong>을 사전에 보장</li>
    </ul>

    <hr>

    <!-- 2. TADA 기반 자동 코드 생성 -->
    <h3>2. TADA 기반 자동 코드 생성: 의미를 잃지 않는 중간 표현</h3>
    <p>
      TA 모델을 직접 코드로 변환하면 시간 의미(semantics)가 모호해지기 쉽다.
      이를 해소하기 위해 본 연구는 새로운 형식 모델인
      <strong>TADA (Timed Automata with Disjoint Actions)</strong>를 도입한다.
    </p>
    <ul>
      <li>
        각 TA 위치(location)를 여러 개의 <strong>sub-location</strong>으로 분해하여
        <strong>시간 흐름(time progression)을 명시적으로 표현</strong>
      </li>
      <li>
        <strong>시간 전이(time transition)</strong>와 <strong>동작 전이(action transition)</strong>를 분리해
        실행 타이밍의 비결정성을 제거하고 구현 용이성을 확보
      </li>
      <li>
        <code>x == n</code>, <code>x &gt; n</code> 등 시간 경계 조건을 명시적으로 모델링하여
        Go의 <code>select</code> 문, <code>time.After()</code>와 자연스럽게 매핑
      </li>
      <li>
        원래 TA와 <strong>추적(trace) 동등성</strong>을 유지하여,
        UPPAAL에서 검증된 의미를 손실 없이 실행 코드 수준으로 전달
      </li>
    </ul>
    <p>
      이 과정을 통해 <strong>TA → TADA → Go</strong>로 이어지는
      <strong>완전 자동화 코드 생성 파이프라인</strong>을 구축하였다.
    </p>

    <hr>

    <!-- 3. 실행 단계 -->
    <h3>3. 실행 단계: Go 기반 실행 및 런타임 시간제약 모니터링</h3>
    <p>
      TADA로부터 생성된 Go 코드는 다음 두 가지 구성 요소를 포함한다.
    </p>

    <h4>3-1. 기능적 소프트웨어 코드 (Behavior Code)</h4>
    <ul>
      <li>각 (sub-)location을 Go의 라벨(label) 블록으로 구현하고 <code>goto</code>를 이용해 전이 구현</li>
      <li><strong>goroutine</strong>과 <strong>channel</strong>을 활용하여 TA/TADA의 병렬 실행 semantics를 CSP 스타일로 충실히 구현</li>
      <li><code>time.Now()</code>, <code>time.Since()</code>, <code>time.After()</code>를 이용해
          논리적 clock을 실제 시간으로 매핑</li>
    </ul>

    <h4>3-2. 내장 런타임 모니터 (Time-Invariant Monitors)</h4>
    <ul>
      <li>TA/TADA에서 정의된 <strong>시간 불변식(time invariant)</strong>을 Go 코드 내부 모니터로 함께 생성</li>
      <li>실행 중 <code>x ≤ n</code>, <code>x == n</code> 등의 제약 위반이 발생하면
          <strong>위반 채널(violation channel)</strong>을 통해 알람 전송</li>
      <li>ROS, DDS, 스케줄링 지연, GC 지연 등으로 인한 실제 타이밍 문제를
          <strong>런타임에서 직접 감지하고 안전 복귀(safe recovery)를 트리거</strong></li>
    </ul>
    <p>
      이와 같이 <strong>오프라인 형식 검증 + 온라인 모니터링</strong>을 결합함으로써,
      순수 모델 검증만으로는 잡기 어려운 실행 시 타이밍 문제까지 포착할 수 있다.
    </p>

    <hr>

    <!-- 사례 연구 -->
    <h3>4. 사례 연구: ROS 기반 산업 제어 시스템 적용</h3>
    <p>
      제안 프레임워크를 ROS 기반 산업 제어 시스템에 적용하여 다음과 같은 결과를 확인하였다.
    </p>
    <ul>
      <li>레거시 노드 및 통신 지연으로 인해 발생하는 <strong>타이밍 위반을 자동 감지 및 차단</strong></li>
      <li>Jetson TX2와 같은 임베디드 플랫폼에서도 <strong>모델 기반 Go 실행 환경이 실용적인 성능</strong>을 보임</li>
      <li>
        순수 오프라인 검증 방법에 비해,
        <strong>형식 검증 + 런타임 관측(hybrid approach)</strong>이
        전체 시스템의 안전성·탄력성을 유의미하게 향상시킴
      </li>
    </ul>

    <hr>

    <!-- 핵심 기여 요약 -->
    <h3>5. 본 연구의 핵심 기여</h3>
    <ul>
      <li>
        형식 검증에서 실제 실행 코드까지 이어지는
        <strong>완전 자동화 파이프라인
        (Verification → Implementation → Execution)</strong> 제시
      </li>
      <li>
        시간 의미를 명확히 보존하는 중간 모델
        <strong>TADA (Timed Automata with Disjoint Actions)</strong> 제안
      </li>
      <li>
        정형 모델 기반 Go 코드 생성과
        <strong>런타임 시간제약 모니터링</strong>을 결합한
        CPS 신뢰성 강화 기법 제시
      </li>
      <li>
        ROS 등 레거시 환경에서 발생하는 지연·지터를
        <strong>실행 시점에서 감지·대응</strong>하는 메커니즘 구현
      </li>
      <li>
        실제 CPS 사례 연구를 통해
        <strong>안전성 및 신뢰성 향상 효과</strong>를 정량·정성적으로 실증
      </li>
    </ul>

    <hr>

    <!-- 논문 인용 -->
    <h3>6. 논문 인용 (Citation)</h3>

    <p><strong>IEEE Access (2025)</strong></p>
    <p style="margin-bottom: 4px;">
      Soomin Cho, Inhye Kang, and Jin Hyun Kim,<br>
      <strong>&ldquo;From Timed Automata to Go: Formally Verified Code Generation and Runtime Monitoring for Cyber-Physical Systems,&rdquo;</strong><br>
      <em>IEEE Access</em>, vol. 13, pp. 161729–1617xx, 2025.<br>
      doi: <a href="https://doi.org/10.1109/ACCESS.2025.3608215" target="_blank" rel="noopener">
        10.1109/ACCESS.2025.3608215
      </a>
    </p>

    <p style="margin-top: 10px; font-size: 0.9em; color: var(--muted);">
      HTML용 간단 표기:<br>
      Cho, S., Kang, I., &amp; Kim, J. H. (2025).
      &ldquo;From Timed Automata to Go: Formally Verified Code Generation and Runtime Monitoring for Cyber-Physical Systems.&rdquo;
      <em>IEEE Access</em>, 13, 161729–1617xx.
      <a href="https://doi.org/10.1109/ACCESS.2025.3608215" target="_blank" rel="noopener">
        https://doi.org/10.1109/ACCESS.2025.3608215
      </a>
    </p>
  </div>
</section>

