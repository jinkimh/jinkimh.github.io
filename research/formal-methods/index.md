---
layout: default
nav: research
title: "Formal Methods Projects"
---

<section class="section">
  <div class="container">
    <h2 class="section-title">Formal Methods for AI and CPS</h2>
    <p class="section-text">
      This page covers projects on <strong>formal methods</strong> of
      <strong>cyber-physical systems (CPS)</strong>, including timing,
      safety, and correctness guarantees.
    </p>

    <div class="research-layout">
      <!-- 좌측 사이드바 메뉴 -->
      <aside class="research-sidebar">
        <nav>
          <ul class="sidebar-menu">
            <li class="sidebar-menu-item">
              <a href="#overview" class="sidebar-menu-link" data-section="overview">Overview</a>
            </li>
            <li class="sidebar-menu-item">
              <a href="#from-uppaal-to-go" class="sidebar-menu-link" data-section="from-uppaal-to-go">From Uppaal to Go</a>
            </li>
            <li class="sidebar-menu-item">
              <a href="#tada" class="sidebar-menu-link" data-section="tada">TADA</a>
            </li>
            <li class="sidebar-menu-item">
              <a href="#uppaal" class="sidebar-menu-link" data-section="uppaal">Uppaal</a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 우측 콘텐츠 영역 -->
      <div class="research-content">
        <!-- Overview / Research Vision 섹션 (기본 표시) -->
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

        <!-- From Uppaal to Go 섹션 -->
        <div id="from-uppaal-to-go" class="research-content-section">
          {% include_relative from-uppaal-to-go.md %}
        </div>

        <!-- TADA 섹션 -->
        <div id="tada" class="research-content-section">
          {% include_relative tada.md %}
        </div>

        <!-- Uppaal 섹션 -->
        <div id="uppaal" class="research-content-section">
          {% include_relative uppaal.md %}
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.sidebar-menu-link');
  const contentSections = document.querySelectorAll('.research-content-section');

  // Main menu links
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

  if (overviewLangRadios.length > 0 && overviewKoContent && overviewEnContent) {
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
  }
});
</script>
