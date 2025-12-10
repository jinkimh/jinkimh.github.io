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
    <h2 class="section-title">RoboRacer (F1TENTH)</h2>
    <!-- Content Area -->
    <div id="content-area" class="content-area">
      <!-- Korean Content -->
      <div id="ko-content" class="lang-content" data-lang="ko">
        {% include_relative roboracer-ko.md %}
      </div>
      
      <!-- English Content -->
      <div id="en-content" class="lang-content" data-lang="en">
        {% include_relative roboracer-en.md %}
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
