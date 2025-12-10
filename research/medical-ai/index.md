---
layout: default
nav: research
title: "Medical AI Projects"
---

<section class="section">
  <div class="container">
    <h2 class="section-title">Medical AI Projects</h2>

    <div class="research-layout">
      <!-- 좌측 사이드바 메뉴 -->
      <aside class="research-sidebar">
        <nav>
          <ul class="sidebar-menu">
            <li class="sidebar-menu-item">
              <a href="#overview" class="sidebar-menu-link" data-section="overview">Overview</a>
            </li>
            <li class="sidebar-menu-item has-submenu">
              <a href="#medical-llm" class="sidebar-menu-link" data-section="medical-llm">Medical LLM</a>
              <ul class="sidebar-submenu">
                <li class="sidebar-submenu-item">
                  <a href="#ophtimus-v2" class="sidebar-submenu-link" data-section="ophtimus-v2">Ophtimus-V2</a>
                </li>
                <li class="sidebar-submenu-item">
                  <a href="#ophtimus-v2-tx" class="sidebar-submenu-link" data-section="ophtimus-v2-tx">Ophtimus-V2-TX</a>
                </li>
              </ul>
            </li>
            <li class="sidebar-menu-item">
              <a href="#erm-quantification" class="sidebar-menu-link" data-section="erm-quantification">ERM Quantification</a>
            </li>
            <li class="sidebar-menu-item">
              <a href="#gait-anomaly-detection" class="sidebar-menu-link" data-section="gait-anomaly-detection">Gait Anomaly Detection</a>
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

        <!-- Medical LLM 섹션 -->
        <div id="medical-llm" class="research-content-section">
          {% include_relative medical-llm.md %}
        </div>

        <!-- Ophtimus-V2 섹션 -->
        <div id="ophtimus-v2" class="research-content-section">
          {% include_relative ophtimus-v2.md %}
        </div>

        <!-- Ophtimus-V2-TX 섹션 -->
        <div id="ophtimus-v2-tx" class="research-content-section">
          {% include_relative ophtimus-v2-tx.md %}
        </div>

        <!-- ERM Quantification 섹션 -->
        <div id="erm-quantification" class="research-content-section">
          {% include_relative erm-quantification.md %}
        </div>

        <!-- Gait Anomaly Detection 섹션 -->
        <div id="gait-anomaly-detection" class="research-content-section">
          {% include_relative gait-anomaly-detection.md %}
        </div>
      </div>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.sidebar-menu-link');
  const submenuLinks = document.querySelectorAll('.sidebar-submenu-link');
  const contentSections = document.querySelectorAll('.research-content-section');

  // Main menu links
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetSection = this.getAttribute('data-section');
      const menuItem = this.closest('.sidebar-menu-item');
      
      // If it's a submenu parent, toggle the submenu
      if (menuItem && menuItem.classList.contains('has-submenu')) {
        // Close other submenus
        document.querySelectorAll('.sidebar-menu-item.has-submenu').forEach(item => {
          if (item !== menuItem) {
            item.classList.remove('active');
          }
        });
        
        // Toggle active state for this submenu
        menuItem.classList.toggle('active');
        
        // If opening submenu and no submenu item is active, activate first submenu item
        if (menuItem.classList.contains('active')) {
          const activeSubmenuLink = menuItem.querySelector('.sidebar-submenu-link.active');
          if (!activeSubmenuLink) {
            const firstSubmenuLink = menuItem.querySelector('.sidebar-submenu-link');
            if (firstSubmenuLink) {
              // Remove active from all sections first
              contentSections.forEach(s => s.classList.remove('active'));
              // Activate first submenu
              firstSubmenuLink.classList.add('active');
              const firstSection = document.getElementById(firstSubmenuLink.getAttribute('data-section'));
              if (firstSection) {
                firstSection.classList.add('active');
              }
            }
          }
        }
        
        return;
      }
      
      // For non-submenu items, normal behavior
      // Close all submenus
      document.querySelectorAll('.sidebar-menu-item.has-submenu').forEach(item => {
        item.classList.remove('active');
      });
      
      // Remove active class from all links and sections
      menuLinks.forEach(l => l.classList.remove('active'));
      submenuLinks.forEach(l => l.classList.remove('active'));
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

  // Submenu links
  submenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetSection = this.getAttribute('data-section');
      
      // Remove active class from all links and sections
      menuLinks.forEach(l => l.classList.remove('active'));
      submenuLinks.forEach(l => l.classList.remove('active'));
      contentSections.forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked submenu link and corresponding section
      this.classList.add('active');
      // Also activate parent menu item and keep submenu open
      const parentMenuItem = this.closest('.sidebar-menu-item');
      if (parentMenuItem) {
        const parentLink = parentMenuItem.querySelector('.sidebar-menu-link');
        if (parentLink) {
          parentLink.classList.add('active');
        }
        parentMenuItem.classList.add('active');
      }
      
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

