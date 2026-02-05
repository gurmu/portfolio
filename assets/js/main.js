// ========================================
// MODERN PORTFOLIO JAVASCRIPT
// Enhanced with Dark Mode, Smooth Scroll, Animations
// ========================================

// Mobile Navigation Toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking on a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========================================
// DARK MODE TOGGLE
// ========================================

const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

// Update theme toggle icon
function updateThemeIcon() {
  if (themeToggle) {
    const currentTheme = htmlElement.getAttribute('data-theme');
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }
}

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
  });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optionally unobserve after revealing
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================

function updateScrollProgress() {
  const scrollProgress = document.querySelector('.scroll-progress');
  if (!scrollProgress) return;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  scrollProgress.style.width = `${scrollPercentage}%`;
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTop = document.querySelector('.back-to-top');

function toggleBackToTop() {
  if (!backToTop) return;
  
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', toggleBackToTop);

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.querySelector('.site-header');

function updateHeader() {
  if (!header) return;
  
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeader);

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if it's just '#'
    if (href === '#') return;
    
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// ANIMATED COUNTER FOR STATISTICS
// ========================================

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Observe stat numbers and animate when visible
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const target = entry.target;
      const text = target.textContent;
      const numberMatch = text.match(/(\d+)/);
      
      if (numberMatch) {
        const number = parseInt(numberMatch[0]);
        target.dataset.animated = 'true';
        
        // Store the original text format
        const prefix = text.split(numberMatch[0])[0];
        const suffix = text.split(numberMatch[0])[1];
        
        let current = 0;
        const increment = number / 60;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            target.textContent = prefix + number + suffix;
            clearInterval(timer);
          } else {
            target.textContent = prefix + Math.floor(current) + suffix;
          }
        }, 30);
      }
    }
  });
}, { threshold: 0.5 });

// Animate statistics in highlights and metrics
document.querySelectorAll('.highlight-number, .metric-value').forEach(el => {
  statObserver.observe(el);
});

// ========================================
// ANIMATED CHART BARS
// ========================================

const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector('span');
      if (bar && !bar.dataset.animated) {
        bar.dataset.animated = 'true';
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.chart-bar').forEach(chart => {
  chartObserver.observe(chart);
});

// ========================================
// TYPING EFFECT FOR HERO HEADLINE
// ========================================

function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Check if hero headline exists and add typing effect
window.addEventListener('load', () => {
  const heroHeadline = document.querySelector('.hero h1');
  if (heroHeadline && heroHeadline.dataset.typewriter) {
    const originalText = heroHeadline.textContent;
    typeWriter(heroHeadline, originalText, 40);
  }
});

// ========================================
// LAZY LOAD IMAGES
// ========================================

if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========================================
// FORM VALIDATION & ENHANCEMENT
// ========================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
    
    // Real-time validation
    input.addEventListener('input', () => {
      if (input.validity.valid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    // Add your custom form handling here if needed
    // For now, it will use the default FormSubmit behavior
  });
});

// ========================================
// SPARKLINE ANIMATION
// ========================================

const sparklineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('span');
      bars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.opacity = '0';
          bar.style.transform = 'scaleY(0)';
          setTimeout(() => {
            bar.style.transition = 'all 0.6s ease';
            bar.style.opacity = '1';
            bar.style.transform = 'scaleY(1)';
          }, 50);
        }, index * 100);
      });
      sparklineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.sparkline').forEach(sparkline => {
  sparklineObserver.observe(sparkline);
});

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================

function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  let currentSection = '';
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);

// ========================================
// CUSTOM CURSOR (Optional - shows on hover)
// ========================================

// Uncomment if you want a custom cursor effect
/*
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
*/

// ========================================
// PERFORMANCE: Reduce animations on low power mode
// ========================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable heavy animations
  document.body.classList.add('reduced-motion');
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================

window.addEventListener('load', () => {
  // Initial calls
  updateScrollProgress();
  toggleBackToTop();
  updateHeader();
  highlightActiveSection();
  
  // Add loaded class to body for any CSS transitions
  document.body.classList.add('loaded');
  
  console.log('🚀 Portfolio loaded successfully!');
});

// ========================================
// SERVICE WORKER (Optional - for PWA)
// ========================================

if ('serviceWorker' in navigator) {
  // Uncomment to enable service worker
  /*
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.log('Service Worker registration failed'));
  });
  */
}
