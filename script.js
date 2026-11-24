/**
 * SRI HRUDAY PREETHAM PERIKA — JAVA FULL-STACK PORTFOLIO
 * Interactivity, Theme Toggling, Smooth Filtering & Dynamic Resume Print Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCopyTriggers();
  initSkillFilters();
  initMetricCounters();
  initScrollAnimations();
});

/* ==========================================================================
   THEME TOGGLE (Dark / Light with LocalStorage & OS Preference)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
  const htmlEl = document.documentElement;

  // Retrieve saved or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark for tech aesthetics

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark 🌙' : 'Light ☀️'} mode`);
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* ==========================================================================
   ONE-CLICK COPY TRIGGER WITH TOAST NOTIFICATION
   ========================================================================== */
function initCopyTriggers() {
  const triggers = document.querySelectorAll('.copy-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = trigger.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const badge = trigger.querySelector('.copy-badge');
        if (badge) {
          const originalText = badge.textContent;
          badge.textContent = 'Copied! ✨';
          setTimeout(() => { badge.textContent = originalText; }, 2000);
        }
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   INTERACTIVE SKILL CATEGORY FILTERING
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillGroups = document.querySelectorAll('.skill-group');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter skill cards with smooth fade
      skillGroups.forEach(group => {
        const category = group.getAttribute('data-category');
        if (targetFilter === 'all' || category === targetFilter) {
          group.style.display = 'block';
          group.style.opacity = '0';
          group.style.transform = 'translateY(10px)';
          setTimeout(() => {
            group.style.transition = 'all 0.25s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
          }, 30);
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   METRIC COUNTERS ANIMATION
   ========================================================================== */
function initMetricCounters() {
  const metricCards = document.querySelectorAll('.metric-card');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('counted');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  metricCards.forEach(card => observer.observe(card));
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS (IntersectionObserver for 60fps)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.project-card, .skill-group, .experience-card, .edu-card, .cert-card');

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   DYNAMIC ATS RESUME PRINT ENGINE
   ========================================================================== */
window.handlePrintResume = function() {
  showToast('Opening print dialog: Save as PDF for vector ATS resume 📄');
  setTimeout(() => {
    window.print();
  }, 300);
};
