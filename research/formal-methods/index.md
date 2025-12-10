---
layout: default
nav: research
title: "Formal Methods Projects"
---

<section class="section">
  <div class="container">
    <h2 class="section-title">Formal Methods of CPS</h2>
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
              <a href="#uppaal2go" class="sidebar-menu-link active" data-section="uppaal2go">Uppaal2Go</a>
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
        <!-- Uppaal2Go 섹션 -->
        <div id="uppaal2go" class="research-content-section active">
          <h3>Uppaal2Go</h3>
          <p class="section-text">
            <em>To be Updated</em>
          </p>
        </div>

        <!-- TADA 섹션 -->
        <div id="tada" class="research-content-section">
          <h3>TADA</h3>
          <p class="section-text">
            <em>To be Updated</em>
          </p>
        </div>

        <!-- Uppaal 섹션 -->
        <div id="uppaal" class="research-content-section">
          <h3>Uppaal</h3>
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
        // Scroll to top of content area
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Handle hash navigation on page load
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.replace('#', '');
    if (sectionId === 'uppaal2go' || sectionId === 'tada' || sectionId === 'uppaal') {
      const link = document.querySelector(`[data-section="${sectionId}"]`);
      if (link) {
        link.click();
      }
    }
  }
});
</script>

