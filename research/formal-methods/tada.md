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

.research-result table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
}

.research-result table thead {
  background: rgba(255, 204, 51, 0.1);
}

.research-result table th {
  padding: 1rem;
  text-align: left;
  color: var(--accent);
  font-weight: 600;
  border-bottom: 2px solid var(--border);
}

.research-result table td {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text);
  line-height: 1.6;
}

.research-result table tbody tr:last-child td {
  border-bottom: none;
}

.research-result table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
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
  
  .research-result table {
    font-size: 0.9rem;
  }
  
  .research-result table th,
  .research-result table td {
    padding: 0.75rem 0.5rem;
  }
}
</style>

<section id="tada" class="section research-result">
  <div class="container">
    <!-- 제목 -->
    <h2 class="section-title">TADA: Timed Automata with Disjoint Actions</h2>

    <!-- 대표 이미지 + 설명 -->
    <div class="text-center">
      <img src="/research/formal-methods/tada_lamp.jpg"
           alt="Lamp example modeled in TADA">
      <p class="caption">
        그림: 두 단계 밝기 램프(Lamp)를 TADA로 모델링한 예.<br>
        <strong>Off</strong> 상태에서 버튼 <code>press?</code> 입력이 들어오면 <strong>Low</strong> 모드의
        <strong>Low_0 → Low_1 → Low_2</strong>로 시간이 흘러가며,
        각 sub-location은 <code>y &gt; 5</code>, <code>y == 60</code>, <code>y &gt; 60</code>과 같은 시간 조건을 명시적으로 나타낸다.
        아래쪽의 <strong>Bright_1, Bright_2</strong>는 밝기 증가 모드를 나타내며,
        검은 점(●)은 <code>y &gt; 60</code> 등 시간 제약을 위반했을 때 도달하는 <em>violation sub-location</em>을 의미한다.
      </p>
    </div>

    <!-- 개념/배경 -->
    <h3>1. TADA의 등장 배경</h3>
    <p>
      기존 Timed Automata(TA)는
      <strong>시간 진행(time progression)</strong>이 암묵적(implicit)이고,
      위치(location)에 붙은 <strong>invariant와 guard가 뒤섞여</strong> 있어서
      실제 코드로 변환할 때 <strong>시간 의미가 모호해지는 문제</strong>가 있다.
    </p>
    <ul>
      <li>action transition이 가능한데 시간도 동시에 흐르는 상황</li>
      <li>invariant (예: <code>x ≤ n</code>)를 어겼는지 런타임에서 감지하기 어려움</li>
      <li>시간 조건(<code>x == n</code> 등)을 코드로 정확히 매핑하기 어려움</li>
    </ul>
    <p>
      이를 해결하기 위해 논문에서는 <strong>TADA라는 새로운 중간 표현(Intermediate Formalism)</strong>을 도입한다.
      TADA의 목적은 다음 두 가지이다.
    </p>
    <ol>
      <li><strong>TA의 시간 의미를 완전히 드러내고(explicit) 구조화</strong>한다.</li>
      <li><strong>코드 생성(특히 Go로의 자동 변환)이 가능한 형태</strong>로 정규화한다.</li>
    </ol>

    <hr>

    <!-- 핵심 특징 -->
    <h3>2. TADA의 핵심 특징</h3>

    <h4>2-1. 위치(Location)를 Sub-location 단위로 분해</h4>
    <p>
      각 TA의 location을 시간 조건에 따라 여러 개의 <strong>sub-location</strong>으로 쪼갠다.
      예를 들어 invariant가 <code>x ≤ 60</code>이고 guard가 <code>x ≥ 5</code>인 경우:
    </p>

    <table>
      <thead>
        <tr>
          <th>원래 location</th>
          <th>TADA sub-location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low</td>
          <td>
            Low_0: 0 ≤ x &lt; 5<br>
            Low_1: 5 ≤ x &lt; 60<br>
            Low_2: x = 60<br>
            Low_3: x &gt; 60 (violation)
          </td>
        </tr>
      </tbody>
    </table>

    <p>이와 같이 분해하면 <strong>시간 흐름이 단계별로 명확하게 드러난다</strong>.</p>

    <h4>2-2. 시간 전이(Time transitions)와 동작 전이(Action transitions)의 완전 분리</h4>
    <p>
      기존 TA에서는 시간 전이와 동작 전이가 한 위치에서 얽혀 있어 모호하다.
      TADA에서는 다음과 같이 분리한다.
    </p>
    <ul>
      <li><strong>Time transition</strong>: 오직 clock 조건 <code>ec</code>에 의해 발생</li>
      <li><strong>Action transition</strong>: channel 동작 <code>a(!/?)</code>, reset 집합 <code>r</code>에 의해 발생</li>
    </ul>
    <p>
      시간과 동작의 책임이 분리되므로 구현이 단순해지고 의미가 명확해진다.
    </p>

    <h4>2-3. 시간 경계 조건의 명시화</h4>
    <p>
      TADA는 <code>x == n</code>, <code>x &gt; n</code>, <code>x ≤ n</code> 등 TA 조건을
      <strong>명시적인 sub-location 간 전이</strong>로 변환한다.
      예를 들어 <code>x == n</code>은 "<code>x</code>가 정확히 <code>n</code>이 되는 그 순간"을 나타내는
      별도의 sub-location으로 모델링된다.
    </p>

    <h4>2-4. Invariant 위반을 명시적 error state로 표현</h4>
    <p>
      TA에서는 invariant 위반이 "허용되지 않는 상태"로만 표현되지만,
      TADA에서는 <strong>violation sub-location</strong>을 명시적으로 생성한다.
      실행 중 이곳에 도달하면 시간 제약 위반으로 인식하고,
      Go 모니터가 이를 감지하여 알람을 발생시키도록 설계한다.
    </p>

    <h4>2-5. Trace equivalence 유지</h4>
    <p>
      TADA로 변환하더라도 원래 TA와 <strong>동일한 observable trace</strong>를 보장한다.
      따라서 형식적 검증 결과가 코드 생성 후에도 의미를 잃지 않는다.
    </p>

    <hr>

    <!-- 문법 -->
    <h3>3. TADA의 문법 (Syntax)</h3>
    <p>
      논문 정의(Definition 2)에 따르면 TADA는 다음과 같은 튜플로 정의된다.
    </p>
    <p><strong>TADA = ⟨L, l₀, X, A, E⟩</strong></p>
    <ul>
      <li><strong>L</strong>: location들의 집합 (각 location은 여러 sub-location을 가진다)</li>
      <li><strong>l₀</strong>: 초기 location</li>
      <li><strong>X</strong>: clocks</li>
      <li><strong>A</strong>: actions</li>
      <li><strong>E</strong>: 전이 집합
        <ul>
          <li><strong>E<sub>A</sub></strong>: action transitions</li>
          <li><strong>E<sub>T</sub></strong>: time transitions</li>
        </ul>
      </li>
    </ul>

    <h4>3-1. Action Transition</h4>
    <pre><code>sl ─a,r→ l'</code></pre>
    <ul>
      <li><code>sl</code>: sub-location</li>
      <li><code>a</code>: action (τ, <code>ch!</code>, <code>ch?</code>)</li>
      <li><code>r</code>: reset set</li>
      <li><code>l'</code>: 도착 location</li>
    </ul>

    <h4>3-2. Time Transition</h4>
    <pre><code>sl ─ec→ sl'</code></pre>
    <ul>
      <li><code>sl</code>, <code>sl'</code>: 같은 원래 location에서 파생된 sub-location</li>
      <li><code>ec</code>: enabling condition (예: <code>x == n</code>, <code>x &gt; n</code>)</li>
    </ul>

    <h4>3-3. Sub-location 메타 정보</h4>
    <p>각 sub-location <code>sl</code>은 다음 정보를 가진다.</p>
    <ul>
      <li><strong>location(sl)</strong>: 원래 location</li>
      <li><strong>clock(sl)</strong>: 이 sub-location을 지배하는 clock</li>
      <li><strong>interval(sl)</strong>: 머무를 수 있는 시간 구간 (예: <code>interval(Low_1) = (5,60)</code>)</li>
    </ul>

    <hr>

    <!-- 의미론 -->
    <h3>4. TADA 의미론 (Semantics)</h3>
    <p>
      TADA의 의미론은 Labeled Transition System(LTS)으로 정의된다 (Definition 3).
      상태는 다음과 같은 쌍이다.
    </p>
    <pre><code>State = (sl, v)</code></pre>
    <ul>
      <li><code>sl</code>: sub-location</li>
      <li><code>v</code>: clock valuation</li>
      <li><code>v(clock(sl))</code>는 반드시 <code>interval(sl)</code> 안에 있어야 한다.</li>
    </ul>

    <h4>4-1. 액션 전이 (Action Transition Rule)</h4>
    <pre><code>(sl, v) ─a→ (sl', v')</code></pre>
    <ul>
      <li><code>sl'</code>는 action의 target location에 속하는 sub-location</li>
      <li><code>v' = v[r]</code> (reset 수행)</li>
      <li><code>v'</code>가 <code>interval(sl')</code> 안에 있어야 함</li>
    </ul>

    <h4>4-2. 시간 진행 (Time Progression Rule)</h4>
    <pre><code>(sl, v) ─d→ (sl, v + d)</code></pre>
    <ul>
      <li><code>d &gt; 0</code> 동안 <code>interval(sl)</code> 조건이 유지되면 언제든 시간은 흐를 수 있음</li>
      <li>TA의 시간 진행 semantics를 보존</li>
    </ul>

    <h4>4-3. 시간 경계 전이 (Time Boundary Transition Rule)</h4>
    <pre><code>(sl, v) ─d→ (sl', v')   (0 &lt; d &lt; ε)</code></pre>
    <ul>
      <li>ec = <code>x &gt; n</code>인 경우: <code>v(x) = n</code>일 때 전이가 발생하고, <code>v'(x) = n + d</code></li>
      <li>ec = <code>x == n</code>인 경우: <code>v(x) + d = n</code>이 되는 순간 전이가 발생</li>
    </ul>
    <p>
      이를 통해 TA에서 암묵적이던 "<code>x</code>가 정확히 <code>n</code>이 되는 순간"을
      정밀하게 모델링할 수 있다.
    </p>

    <hr>

    <!-- 장점 -->
    <h3>5. TADA의 장점 (TA 대비)</h3>
    <table>
      <thead>
        <tr>
          <th>TA</th>
          <th>TADA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>시간 진행이 암묵적</td>
          <td>시간 진행이 sub-location 전이로 명시화</td>
        </tr>
        <tr>
          <td>invariant &amp; guard가 섞여 있음</td>
          <td>시간 조건과 행동 조건을 완전히 분리</td>
        </tr>
        <tr>
          <td>invariant 위반을 코드에서 감지하기 어려움</td>
          <td>violation sub-location 자동 생성</td>
        </tr>
        <tr>
          <td><code>x == n</code>을 정확한 시점에서 처리하기 어려움</td>
          <td>각 경계값을 sub-location으로 구조화</td>
        </tr>
        <tr>
          <td>코드 생성 시 의미적 모호성</td>
          <td>코드 생성이 직접적이고 deterministic</td>
        </tr>
      </tbody>
    </table>
    <p>
      TADA는 결국 <strong>시간 모델을 정규화(normalization)</strong>하여
      <strong>Go 코드로의 자동 변환을 가능하게 만드는 핵심 매개체</strong>이다.
    </p>

    <hr>

    <!-- 코드 생성 관점 -->
    <h3>6. 코드 생성(Go Translation) 관점에서 TADA의 의의</h3>
    <p>
      TADA를 거치면 다음과 같은 변환이 매우 단순해진다.
    </p>

    <table>
      <thead>
        <tr>
          <th>TADA</th>
          <th>Go Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>sub-location</td>
          <td>Go label 블록</td>
        </tr>
        <tr>
          <td>time transition (<code>x == n</code>)</td>
          <td><code>&lt;- time.After(n*T - cur - ε)</code></td>
        </tr>
        <tr>
          <td>time transition (<code>x &gt; n</code>)</td>
          <td><code>&lt;- time.After(n*T - cur)</code></td>
        </tr>
        <tr>
          <td>action transition (<code>ch?</code>)</td>
          <td><code>&lt;- ch</code></td>
        </tr>
        <tr>
          <td>action transition (<code>ch!</code>)</td>
          <td><code>ch &lt;- true</code></td>
        </tr>
        <tr>
          <td>reset r</td>
          <td><code>x = time.Now()</code></td>
        </tr>
      </tbody>
    </table>

    <p>
      즉, <strong>TADA의 구조가 곧 Go 코드의 구조</strong>가 된다.
      논문에서 제시한 파이프라인은
      <strong>TA → TADA → Go</strong>로 자연스럽게 매핑되며,
      최종적으로 <strong>시간 불변식 모니터링까지 자동 내장</strong>된다.
    </p>

    <hr>

    <!-- 결론 -->
    <h3>7. 결론: 코드 생성 수준까지 의미를 보존하는 정규화된 중간 모델</h3>
    <p>
      TADA는 다음을 동시에 만족하는 형식 모델이다.
    </p>
    <ul>
      <li>TA의 의미와 trace equivalence 유지</li>
      <li>시간 경계 조건 및 invariant를 명시적으로 모델링</li>
      <li>action과 time을 완전히 분리</li>
      <li>violation state를 통해 런타임 모니터 가능</li>
      <li>CSP 스타일 Go 코드와 매끄럽게 매핑</li>
    </ul>
    <p>
      즉, <strong>TA의 수학적 모델을 실제 실행 가능한 코드로 안전하게 변환하기 위한 최적의 중간 표현(IR)</strong>이다.
    </p>
  </div>
</section>

