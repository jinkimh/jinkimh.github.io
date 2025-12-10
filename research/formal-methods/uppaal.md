<style>
.research-result {
  padding: 2rem 0;
}

.research-result .container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.research-result h2.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--accent);
  line-height: 1.3;
}

.research-result h3 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text);
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border);
}

.research-result h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.research-result p {
  line-height: 1.8;
  margin-bottom: 1.25rem;
  color: var(--text);
  font-size: 1.05rem;
}

.research-result ul,
.research-result ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
  line-height: 1.8;
}

.research-result li {
  margin: 0.75rem 0;
  color: var(--text);
  position: relative;
}

.research-result li::marker {
  color: var(--accent);
}

.research-result hr {
  margin: 3rem 0;
  border: 0;
  border-top: 2px solid var(--border);
  opacity: 0.3;
}

.research-result .text-center {
  text-align: center;
  margin: 3rem 0;
}

.research-result img {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border);
  transition: transform 0.3s ease;
}

.research-result img:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(255, 204, 51, 0.2);
}

.research-result .caption {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: var(--muted);
  font-style: italic;
  line-height: 1.6;
}

.research-result code {
  background: rgba(255, 204, 51, 0.15);
  color: var(--accent);
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.research-result pre {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.research-result pre code {
  background: transparent;
  color: var(--text);
  padding: 0;
  font-size: 0.9rem;
}

.research-result strong {
  color: var(--accent);
  font-weight: 600;
}

.research-result a {
  color: var(--accent);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.research-result a:hover {
  color: #ffe799;
}

.research-result em {
  color: var(--muted);
  font-style: italic;
}

@media (max-width: 768px) {
  .research-result .container {
    padding: 0 1rem;
  }
  
  .research-result h2.section-title {
    font-size: 1.6rem;
  }
  
  .research-result h3 {
    font-size: 1.5rem;
  }
  
  .research-result h4 {
    font-size: 1.25rem;
  }
}
</style>

<section id="uppaal" class="section research-result">
  <div class="container">
    <!-- 제목 -->
    <h2 class="section-title">UPPAAL: Real-Time Timed Automata 모델 검증 도구</h2>

    <!-- (선택) 대표 이미지 자리: 필요 시 src 수정 후 사용 -->
    <!--
    <div class="text-center">
      <img src="/assets/images/uppaal-example.png"
           alt="UPPAAL timed automata example">
      <p class="caption">
        UPPAAL에서 모델링한 Timed Automata 네트워크 예시.
      </p>
    </div>
    -->

    <!-- 1. 개요 -->
    <h3>1. UPPAAL 개요</h3>
    <p>
      <strong>UPPAAL</strong>은 덴마크 Aalborg University와 스웨덴 Uppsala University가 개발한
      <strong>실시간 시스템용 Timed Automata 모델링 및 모델 체커</strong>입니다.
      임베디드 제어기, 통신 프로토콜, 사이버-물리 시스템(CPS) 등에서
      <strong>시간 제약을 포함한 동작의 안전성·응답성·데드록 여부</strong>를 분석하는 데 널리 사용됩니다.
    </p>
    <p>
      본 연구에서는 CPS의 소프트웨어 요구사항과 운영 환경을 UPPAAL에서 Timed Automata로 모델링하고,
      여기서 검증된 결과를 기반으로 <strong>TADA → Go 코드 → 런타임 모니터</strong>로 연결하는
      <strong>TA–TADA–to–Go 파이프라인의 출발점</strong>으로 사용합니다.
    </p>

    <hr>

    <!-- 2. 주요 특징 -->
    <h3>2. UPPAAL의 주요 특징</h3>
    <ul>
      <li>
        <strong>그래픽 기반 모델링</strong>:
        위치(location), 전이(transition), clock, invariant를
        GUI에서 직관적으로 편집할 수 있습니다.
      </li>
      <li>
        <strong>Timed Automata 네트워크 지원</strong>:
        여러 automaton 인스턴스를 병렬로 구성하고,
        채널(channel) 동기화를 통해 상호작용을 모델링합니다.
      </li>
      <li>
        <strong>시뮬레이션 &amp; 디버깅</strong>:
        모델을 step-by-step으로 실행해 보고,
        clock 값과 변수 값을 추적하면서 설계 오류를 조기에 발견할 수 있습니다.
      </li>
      <li>
        <strong>모델 체킹(Verification)</strong>:
        TCTL의 부분집합으로 구성된 UPPAAL 쿼리 언어를 통해
        도달 가능성, 안전성, 응답성, 데드록 부재 등을 자동 검증합니다.
      </li>
      <li>
        <strong>CPS 사례에 적합한 확장</strong>:
        integer / bool 변수, urgent / committed location, broadcast channel 등
        실제 시스템에 가까운 모델링을 위한 다양한 확장을 제공합니다.
      </li>
    </ul>

    <hr>

    <!-- 3. 모델링: Timed Automata 네트워크 문법 -->
    <h3>3. 모델링: Timed Automata 네트워크 문법</h3>
    <p>
      UPPAAL에서 하나의 시스템은 <strong>Timed Automata 네트워크</strong>로 표현됩니다.
      각 automaton은 다음 요소로 이루어집니다.
    </p>
    <ul>
      <li><strong>Locations</strong>: 시스템의 추상 상태를 나타내는 노드</li>
      <li><strong>Edges (Transitions)</strong>:
        guard, synchronisation, update를 포함하는 전이</li>
      <li><strong>Clocks</strong>: 실시간 제약을 표현하는 연속 변수</li>
      <li><strong>Invariants</strong>: 각 location에서 허용되는 clock 범위</li>
      <li><strong>Data variables</strong>: int, bool 등 이산 상태 변수</li>
    </ul>

    <p>전이는 다음과 같은 형식으로 구성됩니다.</p>
    <pre><code>// edge: source --[guard, sync, update]--> target
source -- [ x &lt;= 5,   press?,   y := 0 ] --&gt; target</code></pre>
    <ul>
      <li><strong>guard</strong>: 전이가 활성화되기 위한 clock/변수 조건 (예: <code>x &gt; 5</code>)</li>
      <li><strong>sync</strong>: <code>press?</code>, <code>press!</code>와 같은 채널 동기화</li>
      <li><strong>update</strong>: clock reset 및 변수 갱신 (예: <code>y := 0</code>)</li>
    </ul>

    <hr>

    <!-- 4. 검증 쿼리 언어 -->
    <h3>4. 검증 쿼리 언어 (UPPAAL Query Language)</h3>
    <p>
      UPPAAL은 TCTL의 부분집합 기반 쿼리 언어를 사용합니다.
      대표적인 연산자는 다음과 같습니다.
    </p>
    <ul>
      <li><strong>A[] ϕ</strong> : 모든 실행 경로에서 항상 ϕ가 성립 (safety)</li>
      <li><strong>E&lt;&gt; ϕ</strong> : 어떤 실행 경로에서는 언젠가 ϕ에 도달 (reachability)</li>
      <li><strong>A&lt;&gt; ϕ</strong> : 모든 실행 경로에서 언젠가 ϕ에 도달 (liveness)</li>
      <li><strong>E[] ϕ</strong> : 어떤 실행 경로에서는 항상 ϕ가 유지</li>
    </ul>
    <p>
      본 연구에서는 이러한 쿼리를 이용해
      <strong>타이밍 제약, 데드록 부재, 응답 시간 등 CPS 요구사항</strong>을
      TA 모델 수준에서 먼저 검증합니다.
    </p>

    <hr>

    <!-- 5. 의미론과 분석 기능 -->
    <h3>5. 의미론과 분석 기능</h3>
    <p>
      UPPAAL의 의미론은 <strong>Timed Automata 네트워크에 대한 상태 공간</strong>으로 정의됩니다.
      하나의 상태는 각 automaton의 위치와 clock/변수 값을 포함하는 튜플입니다.
    </p>
    <ul>
      <li><strong>상태 = (loc<sub>1</sub>, ..., loc<sub>n</sub>, v)</strong>  
          – 각 <code>loc<sub>i</sub></code>는 i번째 automaton의 location,  
          – <code>v</code>는 모든 clock과 데이터 변수의 값.</li>
      <li>시간 진행과 이산 전이가 결합된 <strong>hybrid transition system</strong>을 구성.</li>
      <li>
        상태 공간을 symbolic하게 표현하기 위해 <strong>zone, DBM</strong>을 사용하여,
        실수 clock에 대해 무한한 시간 영역을 효율적으로 탐색.
      </li>
    </ul>
    <p>
      이러한 의미론과 symbolic 기술 덕분에,
      UPPAAL은 복잡한 CPS 모델에 대해서도
      <strong>시간 관련 속성을 자동으로 검증</strong>할 수 있습니다.
    </p>

    <hr>

    <!-- 6. TA–TADA–to–Go 프레임워크에서의 역할 -->
    <h3>6. TA–TADA–to–Go 프레임워크에서의 UPPAAL 역할</h3>
    <p>
      TA–TADA–to–Go 프레임워크에서 UPPAAL은 다음과 같은 역할을 수행합니다.
    </p>
    <ul>
      <li>
        CPS의 소프트웨어 요구사항과 운영 환경을 <strong>Timed Automata로 모델링</strong>하는
        프런트엔드 도구 역할
      </li>
      <li>
        Timed-CTL 기반 쿼리를 통해 <strong>안전성, 데드록 부재, 응답 시간</strong> 등을
        사전에 검증하고, 모델 수준에서 오류를 제거
      </li>
      <li>
        검증이 끝난 TA 모델을 <strong>TADA 변환기의 입력</strong>으로 제공하여,
        이후 <strong>TADA → Go 코드 → 런타임 모니터</strong>로 이어지는
        자동화된 코딩·모니터링 파이프라인의 신뢰성을 보장
      </li>
    </ul>

    <hr>

    <!-- 7. 결론 -->
    <h3>7. 결론: CPS 신뢰성 검증을 위한 표준 도구</h3>
    <p>
      UPPAAL은 실시간 시스템의 <strong>정형 모델링과 자동 검증을 위한 사실상의 표준 도구</strong>로,
      TA–TADA–to–Go 프레임워크에서도
      <strong>타임드 오토마타 기반 요구사항 검증의 기반</strong>을 제공하는 핵심 구성 요소입니다.
      UPPAAL에서 검증된 모델은 이후 TADA로 정규화되고,
      Go 코드와 런타임 모니터로 자동 변환됨으로써
      <strong>형식 검증에서 실제 실행 환경까지 일관된 신뢰성 보증</strong>을 가능하게 합니다.
    </p>
  </div>
</section>

