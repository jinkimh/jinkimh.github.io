---
layout: default
nav: research
title: "AI Robot Projects"
---

<section class="section">
  <div class="container">
    <h2 class="section-title">AI Robot Projects</h2>

    <div class="research-layout">
      <!-- 좌측 사이드바 메뉴 -->
      <aside class="research-sidebar">
        <nav>
          <ul class="sidebar-menu">
            <li class="sidebar-menu-item">
              <a href="#overview" class="sidebar-menu-link" data-section="overview">Overview</a>
            </li>
            <li class="sidebar-menu-item">
              <a href="#robot-racing" class="sidebar-menu-link" data-section="robot-racing">RoboRacer (F1Tenth)</a>
            </li>
            <li class="sidebar-menu-item">
              <a href="#rl-racing-optimization" class="sidebar-menu-link" data-section="rl-racing-optimization">RL Racing Optimization</a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 우측 콘텐츠 영역 -->
      <div class="research-content">
        <!-- Overview 섹션 (기본 표시) -->
        <div id="overview" class="research-content-section active">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <input type="radio" id="overview-lang-ko" name="overview-language" value="ko" checked>
            <label for="overview-lang-ko" class="lang-tab">한국어</label>
            <input type="radio" id="overview-lang-en" name="overview-language" value="en">
            <label for="overview-lang-en" class="lang-tab">English</label>
          </div>

          <!-- Content Area -->
          <div id="overview-content-area" class="content-area">
            <!-- Korean Content -->
            <div id="overview-ko-content" class="lang-content" data-lang="ko" style="display: block;">
              {% include_relative overview-ko.md %}
            </div>
            
            <!-- English Content -->
            <div id="overview-en-content" class="lang-content" data-lang="en" style="display: none;">
              {% include_relative overview-en.md %}
            </div>
          </div>
        </div>

        <!-- RoboRacer 섹션 - 동적으로 로드됨 -->
        <div id="robot-racing" class="research-content-section">
          <div class="loading-placeholder" style="text-align: center; padding: 2rem; color: #b8b8b8;">
            <p>Loading RoboRacer content...</p>
          </div>
        </div>

        <!-- RL Racing Optimization 섹션 -->
        <div id="rl-racing-optimization" class="research-content-section">
          <h3>RL Racing Optimization</h3>
          <p class="section-text">
            <em>To be Updated</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.sidebar-menu-link');
  const contentSections = document.querySelectorAll('.research-content-section');
  
  // 동적 콘텐츠 로드 함수
  const loadContent = async (sectionId, url) => {
    const section = document.getElementById(sectionId);
    if (!section || section.dataset.loaded === 'true') {
      return; // 이미 로드되었으면 다시 로드하지 않음
    }
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to load content');
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // .section .container 내부의 language-tabs와 content-area 부분만 추출
      const container = doc.querySelector('.section .container');
      if (container) {
        // language-tabs와 content-area를 찾아서 포함
        const languageTabs = container.querySelector('.language-tabs');
        const contentArea = container.querySelector('#content-area');
        
        let contentHTML = '';
        if (languageTabs) {
          contentHTML += languageTabs.outerHTML;
        }
        if (contentArea) {
          contentHTML += contentArea.outerHTML;
        } else {
          // content-area가 없으면 container의 전체 내용 사용
          contentHTML = container.innerHTML;
        }
        
        section.innerHTML = contentHTML;
        section.dataset.loaded = 'true';
        
        // 언어 탭 스크립트 재실행
        const langRadios = section.querySelectorAll('input[name="language"]');
        const koContent = section.querySelector('#ko-content');
        const enContent = section.querySelector('#en-content');
        
        if (langRadios.length > 0 && koContent && enContent) {
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
        }
      }
    } catch (error) {
      console.error('Error loading content:', error);
      section.innerHTML = '<p class="section-text" style="color: #b8b8b8;">Failed to load content. Please refresh the page.</p>';
    }
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetSection = this.getAttribute('data-section');
      
      // Remove active class from all links and sections
      menuLinks.forEach(l => l.classList.remove('active'));
      contentSections.forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked link and corresponding section
      this.classList.add('active');
      const section = document.getElementById(targetSection);
      if (section) {
        section.classList.add('active');
        
        // RoboRacer 섹션인 경우 동적으로 콘텐츠 로드
        if (targetSection === 'robot-racing') {
          // 현재 페이지 경로를 기준으로 상대 경로 계산
          const currentPath = window.location.pathname;
          const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
          const roboracerUrl = basePath + '/roboracer/';
          loadContent('robot-racing', roboracerUrl);
        }
        
        // Don't scroll - let CSS handle the alignment
        // This prevents the sidebar from moving
      }
    });
  });

  // Handle hash navigation on page load
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.replace('#', '');
    const link = document.querySelector(`[data-section="${sectionId}"]`);
    if (link) {
      link.click();
    }
  } else {
    // If no hash, show overview section by default
    // Activate overview menu link
    const overviewLink = document.querySelector('[data-section="overview"]');
    if (overviewLink) {
      overviewLink.classList.add('active');
    }
    // The overview section already has 'active' class in HTML
  }

  // Language tab switching for Overview section
  const overviewLangRadios = document.querySelectorAll('input[name="overview-language"]');
  const overviewKoContent = document.getElementById('overview-ko-content');
  const overviewEnContent = document.getElementById('overview-en-content');

  overviewLangRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'ko') {
        overviewKoContent.style.display = 'block';
        overviewEnContent.style.display = 'none';
      } else if (this.value === 'en') {
        overviewKoContent.style.display = 'none';
        overviewEnContent.style.display = 'block';
      }
    });
  });

});
</script>

