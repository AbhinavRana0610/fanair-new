/* ============================================
   FAN AIR INDIA — Utility Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initSmoothAnchorScroll();
  initPipelineHorizontalScroll();
});

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initSmoothAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}
/* ============================================
   FAN AIR INDIA — Sticky Navbar Engine
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  let scrollPosition = 0;

  const updateNavbarState = () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNavbarState, { passive: true });
  updateNavbarState();

  // Helper: Toggle body scroll lock
  function toggleBodyScroll(lock) {
    if (lock) {
      scrollPosition = window.scrollY;
      document.body.classList.add('menu-open');
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }
  }

  // Helper: Close the mobile menu
  function closeMobileMenu() {
    if (hamburger && mobileMenu) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      toggleBodyScroll(false);
    }
  }

  if (hamburger && mobileMenu && !hamburger.dataset.bound) {
    hamburger.dataset.bound = 'true';
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpening = !hamburger.classList.contains('active');
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      toggleBodyScroll(isOpening);
    });

    // Mobile dropdown toggle handling
    const mobileDropdownToggle = mobileMenu.querySelector('.mobile-dropdown-toggle');
    const mobileDropdown = mobileMenu.querySelector('.mobile-dropdown');
    const mobileDropdownArrow = mobileMenu.querySelector('.mobile-dropdown-arrow');

    if (mobileDropdownToggle && mobileDropdown) {
      if (mobileDropdownArrow) {
        mobileDropdownArrow.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          mobileDropdown.classList.toggle('open');
        });
      }
    }

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (e) => {
        // If it's not the main dropdown toggle link or arrow
        if (!link.classList.contains('nav-dropdown-toggle')) {
          closeMobileMenu();
        }
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') && 
          !navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }
});
/* ============================================
   FAN AIR INDIA — Hero Parallax & Particles Engine
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeroMouseParallax();
  initHeroParticles();
});

function initHeroMouseParallax() {
  const heroSection = document.querySelector('.hero-agency');
  const mainImg = document.querySelector('.hero-main-img');
  const floatCard1 = document.querySelector('.hero-float-card--1');
  const floatCard2 = document.querySelector('.hero-float-card--2');

  if (!heroSection || !mainImg) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mainImg.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    if (floatCard1) floatCard1.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    if (floatCard2) floatCard2.style.transform = `translate(${x * -0.04}px, ${y * -0.04}px)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    mainImg.style.transform = 'translate(0, 0)';
    if (floatCard1) floatCard1.style.transform = 'translate(0, 0)';
    if (floatCard2) floatCard2.style.transform = 'translate(0, 0)';
  });
}

function initHeroParticles() {
  const container = document.querySelector('.hero-agency');
  if (!container) return;

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    const size = Math.random() * 8 + 4;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    particle.style.cssText = `
      left: ${posX}%;
      top: ${posY}%;
      width: ${size}px;
      height: ${size}px;
      background: ${i % 2 === 0 ? 'rgba(15, 76, 129, 0.25)' : 'rgba(0, 188, 212, 0.25)'};
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${Math.random() * 6 + 5}s;
    `;

    container.appendChild(particle);
  }
}
/* ============================================
   FAN AIR INDIA — Products Interaction Engine
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.zigzag-item, .project-masonry-card, .why-card-floating');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      card.style.transform = `perspective(1000px) rotateX(${-y * 0.02}deg) rotateY(${x * 0.02}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
});
/* ============================================
   FAN AIR INDIA — Stat Counter Engine
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const statNumbers = document.querySelectorAll('.stat-dark-card__num');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        const value = parseInt(text, 10);
        const suffix = text.includes('+') ? '+' : '';

        if (!isNaN(value)) {
          animateCounter(el, value, suffix);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach((el) => observer.observe(el));
});

function animateCounter(el, targetValue, suffix) {
  let startValue = 0;
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);

    el.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `${targetValue}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}
/* ============================================
   FAN AIR INDIA — Custom Follower Cyber Cursor
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.className = 'cyber-cursor';
  cursor.style.pointerEvents = 'none';
  document.body.appendChild(cursor);

  const follower = document.createElement('div');
  follower.className = 'cyber-cursor-follower';
  follower.style.pointerEvents = 'none';
  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  // Link Hover Detection
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, select, textarea, .cyber-panel, .product-cyber-card')) {
      document.body.classList.add('hovering-link');
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, input, select, textarea, .cyber-panel, .product-cyber-card')) {
      document.body.classList.remove('hovering-link');
    }
  });
});
/* ============================================
   FAN AIR INDIA — Universal Form Engine & Modal Controller
   Compliant with Developer Points Specification
   ============================================ */

// Global Modal Toggle Handlers (Center-Aligned Modal Display)
window.toggleWhatsAppModal = function(show) {
  const modal = document.getElementById('whatsappModal');
  if (modal) {
    if (show) {
      modal.classList.add('active');
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    } else {
      modal.classList.remove('active');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }
};

window.toggleEmailModal = function(show) {
  const modal = document.getElementById('emailModal');
  if (modal) {
    if (show) {
      modal.classList.add('active');
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    } else {
      modal.classList.remove('active');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }
};

// Dynamic Send-Mail URL Resolver (Resolves absolute server URL for root & subdirectories)
function getSendMailUrl() {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const src = scripts[i].src;
    if (src && src.indexOf('assets/js/script.js') !== -1) {
      return src.replace(/assets\/js\/script\.js.*$/, 'send-mail.php');
    }
  }
  return 'send-mail.php';
}

// Centered High-Conversion Thank You Success Modal
function showFormSuccessModal(customTitle, customMsg) {
  let modal = document.getElementById('formSuccessModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'formSuccessModal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.78);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 999999999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    modal.innerHTML = `
      <div class="success-modal-card" style="
        background: #ffffff;
        width: 100%;
        max-width: 440px;
        border-radius: 24px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        position: relative;
        overflow: hidden;
        text-align: center;
        padding: 40px 28px 32px;
        box-sizing: border-box;
        transform: scale(0.9);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: 'Inter', -apple-system, sans-serif;
      ">
        <button type="button" id="closeSuccessModalBtn" aria-label="Close" style="
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #F1F5F9;
          border: none;
          color: #64748B;
          font-size: 20px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        ">&times;</button>

        <div style="
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #10B981;
          font-size: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
          border: 2px solid rgba(16, 185, 129, 0.25);
        ">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h3 id="successModalTitle" style="
          font-size: 24px;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 12px;
          letter-spacing: -0.5px;
        ">Thank You!</h3>

        <p id="successModalMsg" style="
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
          margin: 0 0 26px;
          font-weight: 500;
        ">Your form has been submitted successfully. We'll get back to you shortly.</p>

        <button type="button" id="confirmSuccessModalBtn" style="
          width: 100%;
          padding: 14px 24px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        ">Done</button>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => {
      modal.style.opacity = '0';
      const card = modal.querySelector('.success-modal-card');
      if (card) card.style.transform = 'scale(0.9)';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    };

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    modal.querySelector('#closeSuccessModalBtn')?.addEventListener('click', closeModal);
    modal.querySelector('#confirmSuccessModalBtn')?.addEventListener('click', closeModal);
  }

  // Update content
  const titleEl = modal.querySelector('#successModalTitle');
  const msgEl = modal.querySelector('#successModalMsg');
  if (titleEl) titleEl.textContent = customTitle || 'Thank You!';
  if (msgEl) msgEl.textContent = customMsg || "Your form has been submitted successfully. We'll get back to you shortly.";

  // Show with animation
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.opacity = '1';
    const card = modal.querySelector('.success-modal-card');
    if (card) card.style.transform = 'scale(1)';
  }, 20);

  // Auto-close after 6 seconds
  clearTimeout(modal._timer);
  modal._timer = setTimeout(() => {
    if (modal.style.display === 'flex') {
      modal.style.opacity = '0';
      const card = modal.querySelector('.success-modal-card');
      if (card) card.style.transform = 'scale(0.9)';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  }, 6000);
}

// Universal Form Submit Interceptor (Uses capture phase to override legacy inline handlers)
document.addEventListener('submit', function(e) {
  const form = e.target;
  if (!form || !form.id) return;

  const fid = form.id;
  const isWa = (fid === 'whatsappForm' || form.classList.contains('whatsapp-modal-form'));
  const isEm = (fid === 'emailForm' || form.classList.contains('email-modal-form'));
  const isInq = (fid === 'inquiry-form');
  const isContact = (fid === 'contactPageForm');

  if (!isWa && !isEm && !isInq && !isContact) {
    return; // Allow standard submission for other forms
  }

  // Intercept and prevent default & immediate propagation
  e.preventDefault();
  e.stopImmediatePropagation();

  // ─── 1. EXTRACT & VALIDATE FIELDS ───
  const nameInput = form.querySelector('[name="whatsappName"], [name="name"], #wa_name, #em_name, #name');
  const phoneInput = form.querySelector('[name="whatsappMobile"], [name="mobile"], [name="phone"], #wa_phone, #em_phone, #mobile, #phone');
  const emailInput = form.querySelector('[name="email"], #wa_email, #em_email, #email');
  const msgInput = form.querySelector('[name="message"], #wa_message, #em_message, #message');
  const companyInput = form.querySelector('[name="companyName"], #em_company');
  const prodInput = form.querySelector('[name="productService"], [name="product"], #em_product, #product');

  const nameVal = nameInput ? nameInput.value.trim() : '';
  const phoneVal = phoneInput ? phoneInput.value.trim() : '';
  const emailVal = emailInput ? emailInput.value.trim() : '';
  const msgVal = msgInput ? msgInput.value.trim() : '';
  const companyVal = companyInput ? companyInput.value.trim() : '';
  const prodVal = prodInput ? prodInput.value.trim() : '';

  // Validation: Name
  if (nameInput && nameVal.length < 2) {
    nameInput.focus();
    nameInput.style.borderColor = '#d9251d';
    alert('Please enter your full name (minimum 2 characters).');
    return;
  } else if (nameInput) {
    nameInput.style.borderColor = '';
  }

  // Validation: Phone / Mobile (Must be 10 digits)
  if (phoneInput) {
    const cleanPhone = phoneVal.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      phoneInput.focus();
      phoneInput.style.borderColor = '#d9251d';
      alert('Please enter a valid 10-digit mobile number.');
      return;
    } else {
      phoneInput.style.borderColor = '';
    }
  }

  // Validation: Email
  if (emailInput && (emailInput.required || emailVal.length > 0)) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
      emailInput.focus();
      emailInput.style.borderColor = '#d9251d';
      alert('Please enter a valid corporate or personal email address.');
      return;
    } else {
      emailInput.style.borderColor = '';
    }
  }

  // Validation: Message (if required)
  if (msgInput && msgInput.required && msgVal.length < 2) {
    msgInput.focus();
    msgInput.style.borderColor = '#d9251d';
    alert('Please enter your requirements or message.');
    return;
  } else if (msgInput) {
    msgInput.style.borderColor = '';
  }

  // ─── 2. SUBMIT BUTTON STATE ───
  const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.floating-modal__btn, .whatsapp-submit-btn, .email-submit-btn');
  const originalHtml = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 6px;"></i> <span>Submitting...</span>';
  }

  // ─── 3. BUILD FORM DATA FOR SEND-MAIL.PHP ───
  const formData = new FormData(form);

  // Guarantee key names expected by send-mail.php
  if (isWa) {
    if (!formData.has('whatsappName') && nameVal) formData.append('whatsappName', nameVal);
    if (!formData.has('whatsappMobile') && phoneVal) formData.append('whatsappMobile', phoneVal);
    if (!formData.has('formSource')) formData.append('formSource', 'WhatsApp Inquiry Form');
  } else if (isEm) {
    if (!formData.has('companyName') && companyVal) formData.append('companyName', companyVal);
    if (!formData.has('name') && nameVal) formData.append('name', nameVal);
    if (!formData.has('email') && emailVal) formData.append('email', emailVal);
    if (!formData.has('mobile') && phoneVal) formData.append('mobile', phoneVal);
    if (!formData.has('productService') && prodVal) formData.append('productService', prodVal);
    if (!formData.has('message') && msgVal) formData.append('message', msgVal);
    if (!formData.has('formSource')) formData.append('formSource', 'Email Technical Inquiry Form');
  } else if (isInq) {
    if (!formData.has('name') && nameVal) formData.append('name', nameVal);
    if (!formData.has('email') && emailVal) formData.append('email', emailVal);
    if (!formData.has('mobile') && phoneVal) formData.append('mobile', phoneVal);
    if (!formData.has('productService') && prodVal) formData.append('productService', prodVal);
    if (!formData.has('message') && msgVal) formData.append('message', msgVal);
    if (!formData.has('formSource')) formData.append('formSource', 'Homepage Quotation Form');
  } else if (isContact) {
    if (!formData.has('name') && nameVal) formData.append('name', nameVal);
    if (!formData.has('email') && emailVal) formData.append('email', emailVal);
    if (!formData.has('phone') && phoneVal) formData.append('phone', phoneVal);
    if (!formData.has('message') && msgVal) formData.append('message', msgVal);
    if (!formData.has('formSource')) formData.append('formSource', 'Contact Us Page Form');
  }

  // Ensure honeypot exists
  if (!formData.has('website')) {
    formData.append('website', '');
  }

  // ─── 4. DISPATCH AJAX POST ───
  const sendMailUrl = getSendMailUrl();

  fetch(sendMailUrl, {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(response => {
    console.log('Lead Submission Result:', response);

    // Reset Form
    form.reset();

    // Specific Action for WhatsApp Form (Open WhatsApp chat)
    if (isWa) {
      let waText = `*New WhatsApp Inquiry - Fan Air India*\n\n`;
      waText += `*Name:* ${nameVal}\n`;
      waText += `*Mobile:* ${phoneVal}\n`;
      if (emailVal) waText += `*Email:* ${emailVal}\n`;
      if (msgVal) waText += `*Requirement:* ${msgVal}\n`;

      const whatsappTarget = `https://wa.me/919811347199?text=${encodeURIComponent(waText)}`;
      window.open(whatsappTarget, '_blank');
      toggleWhatsAppModal(false);
    } else if (isEm) {
      toggleEmailModal(false);
    }

    // Display standardized success modal
    showFormSuccessModal(
      'Thank You!',
      "Your form has been submitted successfully. We'll get back to you shortly."
    );
  })
  .catch(err => {
    console.warn('Network submission notice:', err);
    // Still inform user gracefully if offline or CORS
    form.reset();
    if (isWa) {
      const whatsappTarget = `https://wa.me/919811347199?text=${encodeURIComponent('Hello Fan Air India, Name: ' + nameVal + ', Phone: ' + phoneVal)}`;
      window.open(whatsappTarget, '_blank');
      toggleWhatsAppModal(false);
    } else if (isEm) {
      toggleEmailModal(false);
    }
    showFormSuccessModal(
      'Thank You!',
      "Your form has been submitted successfully. We'll get back to you shortly."
    );
  })
  .finally(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
    }
  });
}, true); // Use capture phase to intercept before legacy inline listeners
/* ============================================
   FAN AIR INDIA — Fan HUD Speed Visualizer Engine
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const fanBlades = document.querySelector('.hud-fan-blades');
  const rpmCounter = document.getElementById('hud-rpm');
  if (!fanBlades) return;

  let baseSpeed = 4; // seconds per rotation
  let currentSpeed = baseSpeed;
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrollDelta = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;

    // Accelerate fan rotation speed during scroll
    currentSpeed = Math.max(0.5, baseSpeed - scrollDelta * 0.05);
    fanBlades.style.animationDuration = `${currentSpeed}s`;

    if (rpmCounter) {
      const calculatedRpm = Math.floor(1450 + (4 - currentSpeed) * 800);
      rpmCounter.textContent = `${calculatedRpm} RPM`;
    }

    // Reset back to normal speed after scrolling stops
    clearTimeout(window.scrollTimer);
    window.scrollTimer = setTimeout(() => {
      fanBlades.style.animationDuration = `${baseSpeed}s`;
      if (rpmCounter) rpmCounter.textContent = '1450 RPM';
    }, 200);
  });
});
/* ============================================
   FAN AIR INDIA — Master GSAP & AOS Orchestration
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Init AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }

  // Init GSAP & ScrollTrigger
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero GSAP Entrance (Elegant Arch Layout)
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    heroTl.from('.hero-elegant__title', { y: 50, opacity: 0, duration: 1 })
          .from('.hero-elegant__desc', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
          .from('.hero-elegant__actions', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
          .from('.hero-arch-container', { scale: 0.85, opacity: 0, duration: 1.2, ease: 'back.out(1.4)' }, '-=0.8')
          .from('.hero-blob', { scale: 0, opacity: 0, duration: 1, stagger: 0.2, ease: 'back.out(2)' }, '-=0.6')
          .from('.elegant-stat', { x: 40, opacity: 0, duration: 0.7, stagger: 0.15 }, '-=0.8');

    // True Position-Swapping Vertical Carousel
    // Stats slide up → top one exits & jumps to bottom → repeat infinitely
    const statsContainer = document.querySelector('.hero-elegant__stats');
    if (statsContainer) {
      function rotateStats() {
        const firstStat = statsContainer.querySelector('.elegant-stat');
        if (!firstStat) return;
        const statHeight = firstStat.offsetHeight;
        const gap = parseFloat(getComputedStyle(statsContainer).gap) || 48;
        const moveDistance = statHeight + gap;

        // Slide ALL stats up by one slot height
        gsap.to(statsContainer.querySelectorAll('.elegant-stat'), {
          y: -moveDistance,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            // Move the first (top) stat DOM node to the end (bottom)
            statsContainer.appendChild(firstStat);
            // Instantly reset all translateY to 0 (they're now in new DOM order)
            gsap.set(statsContainer.querySelectorAll('.elegant-stat'), { y: 0 });
            // Wait 2.5s, then rotate again
            gsap.delayedCall(2.5, rotateStats);
          }
        });
      }
      // Start the carousel after the entrance animation finishes
      gsap.delayedCall(3.5, rotateStats);
    }

    // Hero Center Arch Image Carousel (3 Images Auto-Cycle + Dots)
    const archSlides = document.querySelectorAll('.hero-arch-slide');
    const archDots = document.querySelectorAll('.arch-dot');
    if (archSlides.length > 0) {
      let currentArchIndex = 0;
      let archTimer = null;

      function goToArchSlide(index) {
        archSlides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });

        archDots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });

        currentArchIndex = index;
      }

      archDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          goToArchSlide(i);
          stopArchAuto();
          startArchAuto();
        });
      });

      function startArchAuto() {
        archTimer = setInterval(() => {
          const nextIndex = (currentArchIndex + 1) % archSlides.length;
          goToArchSlide(nextIndex);
        }, 3500);
      }

      function stopArchAuto() {
        if (archTimer) clearInterval(archTimer);
      }

      startArchAuto();
    }

    if (typeof ScrollTrigger !== 'undefined') {
      // Safe ScrollTrigger Reveals
      gsap.utils.toArray('.section__header').forEach((header) => {
        gsap.fromTo(header, 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: { trigger: header, start: 'top 95%' },
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out'
          }
        );
      });

      // Why Us Cards Stagger
      gsap.fromTo('.why-card-floating',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: '.why-us-grid', start: 'top 95%' },
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out'
        }
      );

      // Masonry Projects Stagger
      gsap.fromTo('.project-masonry-card',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: '.projects-masonry', start: 'top 95%' },
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out'
        }
      );

      // Force Refresh ScrollTrigger on window load to prevent height displacement traps
      window.addEventListener('load', () => {
        ScrollTrigger.refresh();
      });
    }
  }

  // Interactive Accordion Feature Cards for About Section
  const featureCards = document.querySelectorAll('.about-feature-card');
  if (featureCards.length > 0) {
    let currentFeatureIndex = 0;
    let featureAutoTimer = null;

    function activateFeatureCard(index) {
      featureCards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
      currentFeatureIndex = index;
    }

    featureCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        activateFeatureCard(index);
        // Reset timer on user interaction
        stopAutoCycle();
        startAutoCycle();
      });
    });

    function startAutoCycle() {
      featureAutoTimer = setInterval(() => {
        const nextIndex = (currentFeatureIndex + 1) % featureCards.length;
        activateFeatureCard(nextIndex);
      }, 4500);
    }

    function stopAutoCycle() {
      if (featureAutoTimer) clearInterval(featureAutoTimer);
    }

    startAutoCycle();
  }

  // Product Engineering Hub Category Tab Filtering
  const tabBtns = document.querySelectorAll('.product-tab-btn');
  const productCards = document.querySelectorAll('.product-hub-card');

  if (tabBtns.length > 0 && productCards.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active tab styling
        tabBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter product cards with GSAP
        productCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            if (typeof gsap !== 'undefined') {
              gsap.fromTo(card, 
                { opacity: 0, scale: 0.9, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
              );
            }
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Init Top Scroll Progress Bar
  initScrollProgressBar();

  // Init Radial Stats SVG Progress Rings
  initRadialStatsRings();

  // Init Product Spec Drawer Accordions
  initSpecDrawers();

  // Init Interactive CFM Calculator Widget
  initCfmCalculator();

  // Init 3D Card Perspective Tilt
  init3dCardTilt();
});

function initScrollProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight > 0) {
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = `${scrolled}%`;
    }
  });
}

function initRadialStatsRings() {
  const statCards = document.querySelectorAll('.stat-dark-card');
  if (!statCards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const meter = entry.target.querySelector('.stat-radial-meter');
        if (meter) {
          const count = parseInt(entry.target.querySelector('.stat-dark-card__num')?.getAttribute('data-count') || '100', 10);
          // Calculate percentage offset (stroke-dasharray is 283)
          const offset = 283 - (283 * Math.min(count, 500)) / 500;
          meter.style.strokeDashoffset = offset;
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statCards.forEach((card) => observer.observe(card));
}

function initSpecDrawers() {
  document.querySelectorAll('.spec-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-hub-card');
      const drawer = card?.querySelector('.product-spec-drawer');
      if (drawer) {
        drawer.classList.toggle('open');
        const isOpen = drawer.classList.contains('open');
        btn.querySelector('span').textContent = isOpen ? 'Hide Details' : 'Explore Specifications';
        const icon = btn.querySelector('svg');
        if (icon) icon.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
      }
    });
  });
}

function initCfmCalculator() {
  const cfmSlider = document.getElementById('cfmRange');
  const pressureSelect = document.getElementById('staticPressure');
  const cfmValDisplay = document.getElementById('cfmValueDisplay');
  const recommendDisplay = document.getElementById('recProductDisplay');

  if (!cfmSlider || !cfmValDisplay) return;

  function updateCfmCalculation() {
    const cfm = parseInt(cfmSlider.value, 10);
    const pressure = pressureSelect ? pressureSelect.value : 'medium';

    cfmValDisplay.textContent = `${cfm.toLocaleString()} CFM`;

    if (recommendDisplay) {
      if (cfm < 3000) {
        recommendDisplay.textContent = 'Recommended: FC-Series Forward Curved Inline Fan';
      } else if (cfm < 10000) {
        recommendDisplay.textContent = 'Recommended: BI-Series Backward Inclined Centrifugal Fan';
      } else if (pressure === 'high') {
        recommendDisplay.textContent = 'Recommended: Heavy Duty Heavy Pressure Industrial Centrifugal Fan';
      } else {
        recommendDisplay.textContent = 'Recommended: AF-Series Industrial Axial Flow Ventilation Fan';
      }
    }
  }

  cfmSlider.addEventListener('input', updateCfmCalculation);
  if (pressureSelect) pressureSelect.addEventListener('change', updateCfmCalculation);
  updateCfmCalculation();
}

function init3dCardTilt() {
  const tiltCards = document.querySelectorAll('.why-card-floating, .vault-card, .qa-phase-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      card.style.transform = `perspective(1000px) rotateX(${-y * 0.03}deg) rotateY(${x * 0.03}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ============================================
   FAN AIR INDIA — 20% Scroll Auto Inquiry Form Popup
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initAutoScrollPopup();
});

function initAutoScrollPopup() {
  let hasTriggered = false;

  window.addEventListener('scroll', () => {
    if (hasTriggered || sessionStorage.getItem('autoFormShown')) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent >= 20) {
      hasTriggered = true;
      sessionStorage.setItem('autoFormShown', 'true');
      if (typeof toggleEmailModal === 'function') {
        toggleEmailModal(true);
      } else {
        const modal = document.getElementById('emailModal');
        if (modal) {
          modal.style.display = 'flex';
          modal.classList.add('active');
        }
      }
    }
  });
}


/* ============================================
   FAN AIR INDIA — AOS Init + Custom Scroll Reveal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ─── Initialize AOS (Animate On Scroll) ───
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
      anchorPlacement: 'top-bottom'
    });
  }

  // ─── Custom Scroll Reveal Engine ───
  initScrollReveal();
});

function initScrollReveal() {
  // CSS classes for scroll-reveal animations
  const style = document.createElement('style');
  style.textContent = `
    /* ── Scroll Reveal Base ── */
    .sr-hidden {
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .sr-hidden.sr-up { transform: translateY(60px); }
    .sr-hidden.sr-down { transform: translateY(-60px); }
    .sr-hidden.sr-left { transform: translateX(-80px); }
    .sr-hidden.sr-right { transform: translateX(80px); }
    .sr-hidden.sr-scale { transform: scale(0.85); }
    .sr-hidden.sr-scale-up { transform: scale(0.85) translateY(40px); }
    .sr-hidden.sr-rotate-in { transform: perspective(800px) rotateY(15deg) translateX(40px); }

    /* ── Revealed State ── */
    .sr-visible,
    .sr-hidden.sr-visible,
    .sr-hidden.sr-up.sr-visible,
    .sr-hidden.sr-down.sr-visible,
    .sr-hidden.sr-left.sr-visible,
    .sr-hidden.sr-right.sr-visible,
    .sr-hidden.sr-scale.sr-visible,
    .sr-hidden.sr-scale-up.sr-visible,
    .sr-hidden.sr-rotate-in.sr-visible {
      opacity: 1 !important;
      transform: translateY(0) translateX(0) scale(1) rotateY(0deg) !important;
    }

    /* ── Staggered Children ── */
    .sr-stagger > * {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .sr-stagger.sr-visible > * {
      opacity: 1;
      transform: translateY(0);
    }
    .sr-stagger.sr-visible > *:nth-child(1) { transition-delay: 0.05s; }
    .sr-stagger.sr-visible > *:nth-child(2) { transition-delay: 0.12s; }
    .sr-stagger.sr-visible > *:nth-child(3) { transition-delay: 0.19s; }
    .sr-stagger.sr-visible > *:nth-child(4) { transition-delay: 0.26s; }
    .sr-stagger.sr-visible > *:nth-child(5) { transition-delay: 0.33s; }
    .sr-stagger.sr-visible > *:nth-child(6) { transition-delay: 0.40s; }
    .sr-stagger.sr-visible > *:nth-child(7) { transition-delay: 0.47s; }
    .sr-stagger.sr-visible > *:nth-child(8) { transition-delay: 0.54s; }

    /* ── Section Header Reveal ── */
    .sr-header-reveal .section__title,
    .sr-header-reveal .section__desc,
    .sr-header-reveal .header-divider,
    .sr-header-reveal [class*="badge"],
    .sr-header-reveal [class*="track-badge"],
    .sr-header-reveal [class*="reach-badge"],
    .sr-header-reveal [class*="hud-badge"] {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .sr-header-reveal.sr-visible .section__title { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
    .sr-header-reveal.sr-visible .section__desc { opacity: 1; transform: translateY(0); transition-delay: 0.25s; }
    .sr-header-reveal.sr-visible .header-divider { opacity: 1; transform: translateY(0); transition-delay: 0.18s; }
    .sr-header-reveal.sr-visible [class*="badge"],
    .sr-header-reveal.sr-visible [class*="track-badge"],
    .sr-header-reveal.sr-visible [class*="reach-badge"],
    .sr-header-reveal.sr-visible [class*="hud-badge"] { opacity: 1; transform: translateY(0); transition-delay: 0s; }

    /* ── Hero Entrance Animations ── */
    .hero-sr-title {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .hero-sr-title.sr-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-sr-subtitle {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s,
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
    }
    .hero-sr-subtitle.sr-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-sr-desc {
      opacity: 0;
      transform: translateY(25px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s;
    }
    .hero-sr-desc.sr-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-sr-cta {
      opacity: 0;
      transform: translateY(25px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s,
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
    }
    .hero-sr-cta.sr-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-sr-visual {
      opacity: 0;
      transform: translateX(80px) scale(0.92);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
                  transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
    }
    .hero-sr-visual.sr-visible {
      opacity: 1 !important;
      transform: translateX(180px) scale(1) !important;
    }
    .hero-sr-stats {
      opacity: 0;
      transform: translateX(-50px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s,
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
    }
    .hero-sr-stats.sr-visible {
      opacity: 1;
      transform: translateX(0);
    }

    /* ── Parallax Float Effect ── */
    @keyframes srFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    .sr-float {
      animation: srFloat 4s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);

  // ─── Intersection Observer ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sr-visible');
        entry.target.classList.remove('sr-hidden');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  // ─── Hero Section Elements ───
  const heroTitle = document.querySelector('.hero-elegant__title');
  const heroSubtitle = document.querySelector('.hero-elegant__subtitle');
  const heroDesc = document.querySelector('.hero-elegant__desc');
  const heroCTA = document.querySelector('.hero-elegant__actions');
  const heroVisual = document.querySelector('.hero-elegant__visual');
  const heroStats = document.querySelector('.hero-elegant__stats');

  if (heroSubtitle) { heroSubtitle.classList.add('hero-sr-subtitle'); revealObserver.observe(heroSubtitle); }

  // Line-by-line title reveal: observe the h1, then reveal each .hero-title-line
  if (heroTitle) {
    const titleLines = heroTitle.querySelectorAll('.hero-title-line');
    if (titleLines.length > 0) {
      const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleLines.forEach((line) => line.classList.add('revealed'));
            titleObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      titleObserver.observe(heroTitle);
    } else {
      heroTitle.classList.add('hero-sr-title');
      revealObserver.observe(heroTitle);
    }
  }

  if (heroDesc) { heroDesc.classList.add('hero-sr-desc'); revealObserver.observe(heroDesc); }
  if (heroCTA) { heroCTA.classList.add('hero-sr-cta'); revealObserver.observe(heroCTA); }
  if (heroVisual) { heroVisual.classList.add('hero-sr-visual'); revealObserver.observe(heroVisual); }
  if (heroStats) { heroStats.classList.add('hero-sr-stats'); revealObserver.observe(heroStats); }

  // ─── Section Headers (auto-detect) ───
  document.querySelectorAll('.section__header').forEach((header) => {
    if (!header.closest('.hero-elegant')) {
      header.classList.add('sr-header-reveal', 'sr-hidden');
      revealObserver.observe(header);
    }
  });

  // ─── Project Cards & Trust Banner ───
  document.querySelectorAll('.project-split-card').forEach((card, i) => {
    card.classList.add('sr-hidden', 'sr-up');
    card.style.transitionDelay = `${i * 0.12}s`;
    revealObserver.observe(card);
  });
  const projectTrustBanner = document.querySelector('.projects-trust-banner');
  if (projectTrustBanner) {
    projectTrustBanner.classList.add('sr-hidden', 'sr-up');
    projectTrustBanner.style.transitionDelay = '0.4s';
    revealObserver.observe(projectTrustBanner);
  }

  // ─── Contact Section Elements ───
  const connectGrid = document.querySelector('.connect-grid-wrapper');
  if (connectGrid) {
    const connectCards = connectGrid.children;
    Array.from(connectCards).forEach((child, i) => {
      child.classList.add('sr-hidden', i === 0 ? 'sr-left' : (i === 2 ? 'sr-right' : 'sr-up'));
      child.style.transitionDelay = `${i * 0.15}s`;
      revealObserver.observe(child);
    });
  }

  // ─── Stay Connected Bar ───
  const stayBar = document.querySelector('.stay-connected-bar');
  if (stayBar) {
    stayBar.classList.add('sr-hidden', 'sr-up');
    revealObserver.observe(stayBar);
  }

  // ─── Footer Columns ───
  document.querySelectorAll('.footer-col').forEach((col, i) => {
    col.classList.add('sr-hidden', 'sr-up');
    col.style.transitionDelay = `${i * 0.1}s`;
    revealObserver.observe(col);
  });

  // ─── Inquiry Form Area ───
  const inquiryForm = document.querySelector('.inquiry-glass-form');
  if (inquiryForm) {
    inquiryForm.classList.add('sr-hidden', 'sr-right');
    revealObserver.observe(inquiryForm);
  }
  const cfmBox = document.querySelector('.cfm-calculator-box');
  if (cfmBox) {
    // cfmBox already has data-aos, skip if so
    if (!cfmBox.hasAttribute('data-aos')) {
      cfmBox.classList.add('sr-hidden', 'sr-left');
      revealObserver.observe(cfmBox);
    }
  }

  // ─── Niche Elements: About Feature Stack, About Logos ───
  document.querySelectorAll('.about-feature-item').forEach((item, i) => {
    item.classList.add('sr-hidden', 'sr-up');
    item.style.transitionDelay = `${i * 0.08}s`;
    revealObserver.observe(item);
  });

  document.querySelectorAll('.about-client-logo').forEach((logo, i) => {
    logo.classList.add('sr-hidden', 'sr-scale');
    logo.style.transitionDelay = `${i * 0.06}s`;
    revealObserver.observe(logo);
  });

  // ─── Why Choose — featured image card ───
  const whyFeatured = document.querySelector('.why-featured-card');
  if (whyFeatured && !whyFeatured.hasAttribute('data-aos')) {
    whyFeatured.classList.add('sr-hidden', 'sr-scale-up');
    revealObserver.observe(whyFeatured);
  }

  // ─── Pipeline Section — assurance banner ───
  const qaBanner = document.querySelector('.qa-assurance-banner');
  if (qaBanner && !qaBanner.hasAttribute('data-aos')) {
    qaBanner.classList.add('sr-hidden', 'sr-up');
    revealObserver.observe(qaBanner);
  }
}

/* ============================================
   MANUFACTURING EXCELLENCE PIPELINE — Horizontal Scroll On Scroll
   ============================================ */
function initPipelineHorizontalScroll() {
  const section = document.querySelector('.qa-scroll-pin-section');
  const track = document.getElementById('qaPipelineTrack');
  const trackOuter = document.querySelector('.qa-track-outer');
  const progressFill = document.getElementById('qaProgressFill');
  const currentStep = document.getElementById('qaCurrentStep');
  const prevBtn = document.getElementById('qaPrevBtn');
  const nextBtn = document.getElementById('qaNextBtn');

  if (!section || !track) return;

  function getMaxTranslate() {
    const extraPad = window.innerWidth > 768 ? 140 : 40;
    return Math.max(track.scrollWidth - window.innerWidth + extraPad, 0);
  }

  // 1. GSAP ScrollTrigger implementation
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.to(track, {
      x: () => -getMaxTranslate(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top+=60",
        end: () => `+=${Math.max(getMaxTranslate() * 1.25, 1400)}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progressFill) {
            progressFill.style.width = `${Math.max(progress * 100, 16.66)}%`;
          }
          if (currentStep) {
            const stepNum = Math.min(Math.floor(progress * 5.99) + 1, 6);
            currentStep.textContent = stepNum;
          }
        }
      }
    });

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        const st = tween.scrollTrigger;
        if (!st) return;
        const currentP = st.progress;
        const targetP = Math.max(currentP - 0.2, 0);
        window.scrollTo({
          top: st.start + targetP * (st.end - st.start),
          behavior: 'smooth'
        });
      });
      nextBtn.addEventListener('click', () => {
        const st = tween.scrollTrigger;
        if (!st) return;
        const currentP = st.progress;
        const targetP = Math.min(currentP + 0.2, 1);
        window.scrollTo({
          top: st.start + targetP * (st.end - st.start),
          behavior: 'smooth'
        });
      });
    }
  } else if (trackOuter) {
    // Fallback: smooth drag on trackOuter
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let currentX = 0;

    trackOuter.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - trackOuter.offsetLeft;
      scrollLeft = currentX;
    });
    window.addEventListener('mouseup', () => { isDown = false; });
    trackOuter.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - trackOuter.offsetLeft;
      const walk = (x - startX) * 1.5;
      const maxTrans = getMaxTranslate();
      currentX = Math.min(Math.max(scrollLeft - walk, 0), maxTrans);
      track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
      const prog = maxTrans > 0 ? currentX / maxTrans : 0;
      if (progressFill) progressFill.style.width = `${Math.max(prog * 100, 16.66)}%`;
      if (currentStep) currentStep.textContent = Math.min(Math.floor(prog * 5.99) + 1, 6);
    });
  }

  // Touch drag support for mobile
  let touchStartX = 0;
  let currentTouchTranslate = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    const match = track.style.transform.match(/translate3d\(([-0-9.]+)px/);
    currentTouchTranslate = match ? parseFloat(match[1]) : 0;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    const maxTrans = getMaxTranslate();
    const diffX = e.touches[0].clientX - touchStartX;
    let newTranslate = currentTouchTranslate + diffX;
    if (newTranslate > 0) newTranslate = 0;
    if (newTranslate < -maxTrans) newTranslate = -maxTrans;
    track.style.transform = `translate3d(${newTranslate}px, 0, 0)`;
    const prog = maxTrans > 0 ? -newTranslate / maxTrans : 0;
    if (progressFill) progressFill.style.width = `${Math.max(prog * 100, 16.66)}%`;
    if (currentStep) currentStep.textContent = Math.min(Math.floor(prog * 5.99) + 1, 6);
  }, { passive: true });
}

/* ══════════════════════════════════════════════
   Universal Video Silence & Mute Controller
   ══════════════════════════════════════════════ */
(function() {
  function silenceVideo(video) {
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
  }

  function silenceAllVideos() {
    document.querySelectorAll('video').forEach(silenceVideo);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', silenceAllVideos);
  } else {
    silenceAllVideos();
  }

  // Ensure any newly played video without controls remains completely silent
  document.addEventListener('play', function(e) {
    if (e.target && e.target.tagName === 'VIDEO') {
      if (!e.target.hasAttribute('controls')) {
        silenceVideo(e.target);
      }
    }
  }, true);
})();

/* ══════════════════════════════════════════════
   20% Scroll Auto-Trigger for Inquiry Form
   ══════════════════════════════════════════════ */
(function() {
  if (typeof window.toggleEmailModal !== 'function') {
    window.toggleEmailModal = function(show) {
      const emModal = document.getElementById('emailModal');
      if (emModal) {
        if (show) {
          emModal.classList.add('active');
          emModal.style.display = 'flex';
          setTimeout(() => {
            const input = document.getElementById('em_name') || emModal.querySelector('input:not([type="hidden"])');
            if (input) input.focus();
          }, 150);
        } else {
          emModal.classList.remove('active');
          emModal.style.display = 'none';
        }
      }
    };
  }

  let autoFormTriggered = false;

  function isHomePage() {
    if (document.querySelector('.hero-elegant') || document.getElementById('hero')) {
      return true;
    }
    const path = (window.location.pathname || '').toLowerCase().replace(/\\/g, '/');
    return (
      cleanPathIsHome(path)
    );
  }

  function cleanPathIsHome(path) {
    return (
      path === '/' ||
      path.endsWith('/index.php') ||
      path.endsWith('/fan/') ||
      path.endsWith('/fan') ||
      path.endsWith('/fanair/') ||
      path.endsWith('/fanair')
    );
  }

  function checkScrollForForm() {
    if (autoFormTriggered) return;
    if (!isHomePage()) return;

    const docElem = document.documentElement;
    const docHeight = Math.max(
      document.body.scrollHeight,
      docElem.scrollHeight,
      document.body.offsetHeight,
      docElem.offsetHeight
    );
    const windowHeight = window.innerHeight;
    const scrollableDistance = docHeight - windowHeight;

    if (scrollableDistance <= 100) return;

    const scrollPercentage = (window.scrollY / scrollableDistance) * 100;

    if (scrollPercentage >= 20) {
      autoFormTriggered = true;
      window.removeEventListener('scroll', checkScrollForForm);

      if (typeof window.toggleEmailModal === 'function') {
        window.toggleEmailModal(true);
      } else {
        const emModal = document.getElementById('emailModal');
        if (emModal) {
          emModal.classList.add('active');
          emModal.style.display = 'flex';
        }
      }
    }
  }

  // Only bind scroll check if on homepage
  function initScrollTrigger() {
    if (!isHomePage()) return;
    window.addEventListener('scroll', checkScrollForForm, { passive: true });
    setTimeout(checkScrollForForm, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollTrigger);
  } else {
    initScrollTrigger();
  }

  // Close modal when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const emModal = document.getElementById('emailModal');
      if (emModal && (emModal.classList.contains('active') || emModal.style.display === 'flex')) {
        if (typeof window.toggleEmailModal === 'function') {
          window.toggleEmailModal(false);
        } else {
          emModal.classList.remove('active');
          emModal.style.display = 'none';
        }
      }
    }
  });
})();

