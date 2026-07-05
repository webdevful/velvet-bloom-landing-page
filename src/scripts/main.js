// Velvet Bloom - Main Interactions

document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar scroll effect ---
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Mobile menu toggle ---
  const navButton = document.querySelector('.nav-button');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navOverlay = document.querySelector('.nav-overlay');

  if (navButton && navbarMenu) {
    const toggleMenu = (open) => {
      navbarMenu.classList.toggle('open', open);
      navButton.classList.toggle('open', open);
      if (navOverlay) navOverlay.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    navButton.addEventListener('click', () => {
      const isOpen = navbarMenu.classList.contains('open');
      toggleMenu(!isOpen);
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Close menu on nav link click
    navbarMenu.querySelectorAll('.header-nav-link').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // --- Pricing accordion dropdowns ---
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.contains('open');
      // Close all
      document.querySelectorAll('.dropdown-toggle').forEach(t => {
        t.classList.remove('open');
        t.nextElementSibling?.classList.remove('open');
      });
      // Open clicked if it was closed
      if (!isOpen) {
        toggle.classList.add('open');
        const list = toggle.nextElementSibling;
        if (list) list.classList.add('open');
      }
    });
  });

  // --- Gallery lightbox ---
  const lightbox = document.querySelector('.lightbox-overlay');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-image').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // --- Booking popup modal ---
  const popup = document.querySelector('.popup');
  const popupClose = popup?.querySelector('.popup-close');

  if (popup) {
    document.querySelectorAll('[data-open-popup]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closePopup = () => {
      popup.classList.remove('open');
      document.body.style.overflow = '';
    };

    popupClose?.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
      if (e.target === popup) closePopup();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePopup();
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
