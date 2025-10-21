// =================================
// INTERSECTION OBSERVER PARA ANIMAÇÕES
// =================================
const sections = document.querySelectorAll('.section');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// =================================
// MENU MOBILE
// =================================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuBtn.textContent = '☰';
  });
});

// =================================
// HEADER COM EFEITO DE SCROLL
// =================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.padding = '0.75rem 0';
    header.style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    header.style.padding = '1rem 0';
    header.style.background = 'rgba(255, 255, 255, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// =================================
// SCROLL PROGRESS BAR
// =================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// =================================
// CONTADOR ANIMADO (STATS)
// =================================
const statCards = document.querySelectorAll('.stat-card');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;
      statCards.forEach(card => {
        const target = parseInt(card.getAttribute('data-target'));
        const counter = card.querySelector('.counter');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + (target === 100 ? '%' : '+');
          }
        };

        updateCounter();
      });
    }
  });
}, { threshold: 0.5 });

statCards.forEach(card => statsObserver.observe(card));

// =================================
// FILTRO DE PROJETOS
// =================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active de todos os botões
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.5s ease-out';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// =================================
// SCROLL SUAVE PARA ÂNCORAS
// =================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// =================================
// BOTÃO SCROLL TO TOP
// =================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// =================================
// ANO ATUAL NO FOOTER
// =================================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// =================================
// EFEITO PARALLAX NOS BLOBS
// =================================
const blobs = document.querySelectorAll('.blob');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  blobs.forEach((blob, index) => {
    const speed = 0.5 + (index * 0.2);
    blob.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// =================================
// TOOLTIP PARA HABILIDADES
// =================================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
  tag.addEventListener('click', () => {
    const skill = tag.getAttribute('data-skill');
    
    // Efeito de pulse
    tag.style.animation = 'pulse-ring 0.6s ease-out';
    
    setTimeout(() => {
      tag.style.animation = '';
    }, 600);
  });
});

// =================================
// LAZY LOADING PARA MELHOR PERFORMANCE
// =================================
const lazyElements = document.querySelectorAll('.project-card, .stat-card, .contact-card');

const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

lazyElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  lazyObserver.observe(el);
});

// =================================
// SHAKE EFFECT NOS BOTÕES DE CONTATO
// =================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = 'pulse-ring 0.5s ease';
    }, 10);
  });
});

// =================================
// CONSOLE EASTER EGG
// =================================
console.log('%c👨‍💻 Olá, desenvolvedor curioso!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Se você está vendo isso, talvez queira conferir meu GitHub!', 'color: #3b82f6; font-size: 14px;');
console.log('%c📧 Vamos trabalhar juntos? murilo.rafael.de.oliveira@gmail.com', 'color: #10b981; font-size: 14px;');

// =================================
// PERFORMANCE: DEBOUNCE PARA SCROLL
// =================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Aplicar debounce em eventos de scroll pesados
window.addEventListener('scroll', debounce(() => {
  // Qualquer operação pesada de scroll aqui
}, 10));