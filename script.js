document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  const waBtn = document.getElementById('book-whatsapp');
  const emailBtn = document.getElementById('book-email');
  const waLink = document.getElementById('wa-link');
  const phone = '996543688231';
  const prefill = encodeURIComponent("Hello, I'd like to book a session at Onsen. Please share availability.");

  if (waBtn) {
    waBtn.href = `https://wa.me/${phone}?text=${prefill}`;
  }

  if (emailBtn) {
    emailBtn.href = `mailto:Onsen0.ksa@gmail.com?subject=${encodeURIComponent('Booking request')}&body=${prefill}`;
  }

  if (waLink) {
    waLink.href = `https://wa.me/${phone}`;
  }

  const navLinks = document.querySelectorAll('.site-nav a');
  const current = (location.pathname.split('/').pop() || 'index.html');

  navLinks.forEach((a) => {
    const href = a.getAttribute('href').split('#')[0];
    if (href === current || (href === 'index.html' && current === '')) {
      a.classList.add('active');
    }
  });

  const audio = document.getElementById('ambient-audio');
  const toggle = document.getElementById('toggle-music');

  if (audio) {
    try {
      audio.muted = true;
      audio.loop = true;
      audio.setAttribute('playsinline', '');
      audio.play().catch(() => {});
    } catch (error) {
      // No-op if browser blocks autoplay.
    }

    const unmute = () => {
      try {
        audio.muted = false;
        audio.volume = 0.6;
        audio.play().catch(() => {});
      } catch (error) {
        // No-op.
      }
    };

    const onFirstGesture = () => {
      unmute();
      document.removeEventListener('click', onFirstGesture);
      document.removeEventListener('keydown', onFirstGesture);
    };

    document.addEventListener('click', onFirstGesture, { once: true });
    document.addEventListener('keydown', onFirstGesture, { once: true });
  }

  if (toggle && audio) {
    const updateLabel = () => {
      toggle.textContent = audio.paused ? 'Play' : (audio.muted ? 'Unmute' : 'Pause');
    };

    updateLabel();

    toggle.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }

      if (audio.muted) {
        audio.muted = false;
        audio.volume = 0.6;
      }

      updateLabel();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));

  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
      window.open(img.src, '_blank');
    });
  });
});
