document.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) window.scrollTo(0, 0);
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  const waBtn = document.getElementById('book-whatsapp');
  const emailBtn = document.getElementById('book-email');
  const waLink = document.getElementById('wa-link');
  const phone = '966543688231';
  const prefill = encodeURIComponent("السلام عليكم، أرغب في حجز جلسة في أونسن. فضلاً شاركوني المواعيد المتاحة.");

  if (waBtn) {
    waBtn.href = `https://wa.me/${phone}?text=${prefill}`;
  }

  if (emailBtn) {
    emailBtn.href = `mailto:Onsen0.ksa@gmail.com?subject=${encodeURIComponent('Booking request')}&body=${prefill}`;
  }

  if (waLink) {
    waLink.href = `https://wa.me/${phone}`;
    waLink.textContent = '@onsen0.ksa';
  }

  const navLinks = document.querySelectorAll('.site-nav a');
  const current = (location.pathname.split('/').pop() || 'index.html');

  navLinks.forEach((a) => {
    const href = a.getAttribute('href').split('#')[0];
    if (href === current || (href === 'index.html' && current === '')) {
      a.classList.add('active');
    }
  });

  const translations = {
    common: {
      nav: [['Home', 'الرئيسية'], ['Menu', 'القائمة'], ['Services', 'الخدمات'], ['Gallery', 'المعرض'], ['Booking', 'الحجز'], ['Contact', 'تواصل معنا']],
      brand: ['Onsen', 'أونسن'],
    },
    home: {
      '.hero-copy .eyebrow': ['Japanese calm, modern luxury', 'هدوء ياباني وفخامة عصرية'],
      '.callout .eyebrow': ['Your pause starts here', 'لحظتك تبدأ هنا'],
      'h1': ['You deserve to be treated with luxury.', 'أنت تستحق أن تُعامل برفاهية.'],
      '.hero-signature': ['You deserve a moment for yourself.', 'أنت تستحق أن تعامل نفسك برفاهية.'],
      '.tagline': ['Experience bamboo serenity, restorative hot springs, and professionally guided rituals designed for true rest in Riyadh.', 'استمتع بسكينة البامبو والينابيع الدافئة وطقوس العافية المصممة للراحة الحقيقية في الرياض.'],
      '.minor-card span': [['The signature Onsen experience', 'تجربة الأونسن المميزة'], ['A private hot bath at sunset', 'حمام ساخن خاص عند الغروب']],
      '.minor-card strong': ['60 minutes', '60 دقيقة'],
      '.cta-row .btn': [['Book your visit', 'احجز زيارتك'], ['Explore services', 'استكشف الخدمات']],
      'main > section.section:nth-of-type(1) .section-header h2': [['A quiet space to restore your balance', 'مساحة هادئة لاستعادة توازنك']],
      '.section-header p': [['Every detail at Onsen is shaped to feel calm, elevated, and restorative — from the warm mineral baths to the soft, ambient atmosphere.', 'كل تفصيل في أونسن صُمم ليمنحك الهدوء والرقي والاسترخاء، من الحمامات المعدنية الدافئة إلى الأجواء الناعمة.']],
      '.feature-card h3': [['Mineral rituals', 'طقوس المعادن'], ['Botanical calm', 'سكينة الطبيعة'], ['Luxury ambience', 'أجواء فاخرة']],
      '.feature-card p': [['Traditional hot spring experiences with a refined, modern wellness perspective.', 'تجارب ينابيع ساخنة تقليدية برؤية عصرية راقية.'], ['Natural aromatics, grounded body therapies, and carefully chosen restorative ingredients.', 'روائح طبيعية وعلاجات جسدية ومكونات مختارة بعناية.'], ['Soft lighting, cedar tones, and immersive design to support deep relaxation and renewal.', 'إضاءة ناعمة ونغمات خشبية وتصميم يساعد على الاسترخاء والتجدد.']],
      '.callout h3': [['Created for deep rest.', 'صُمم للراحة العميقة.']],
      '.callout p': [['Our spa is placed around the idea of intentional pause: fewer distractions, more balance, and a stronger sense of wellbeing for busy professionals and wellness seekers alike.', 'صُمم منتجعنا حول فكرة التوقف الواعي: مشتتات أقل وتوازن أكبر وإحساس أعمق بالعافية.']],
      '#gallery .section-header h2': [['Details that keep calm close', 'تفاصيل تُبقي الهدوء قريباً']],
      '#gallery .section-header p': [['Explore the atmosphere, textures, and rituals that define the Onsen experience.', 'اكتشف الأجواء والتفاصيل والطقوس التي تميز تجربة أونسن.']],
      '#gallery .gallery-subtitle': [['Store gallery', 'صور المتجر'], ['Product gallery', 'صور المنتجات']],
      '#reviews .section-header h2': [['Words from our guests', 'كلمات تضيء تجربة ضيوفنا']],
      '#reviews .section-header p': [['Selected reflections on calm, privacy, and thoughtful care.', 'انطباعات مختارة عن الهدوء والخصوصية والعناية المتقنة.']],
      '.google-review-link': ['See Onsen on Google Maps', 'شاهد تقييمات أونسن على Google Maps'],
      '.testimonial blockquote': [
        ['“A wonderfully calm experience, from arrival to the end of the session. The little details made all the difference.”', '“تجربة هادئة جداً، من الاستقبال إلى نهاية الجلسة. التفاصيل الصغيرة صنعت فرقاً كبيراً.”'],
        ['“The atmosphere is soothing and the scents are gentle. I left feeling genuinely rested.”', '“الأجواء مريحة والروائح لطيفة، خرجت وأنا أشعر بخفة وراحة حقيقية.”'],
        ['“An elegant, private place. I will definitely come back for another relaxing ritual.”', '“مكان أنيق وخصوصية ممتازة، وسأعود بالتأكيد لطقس استرخائي آخر.”'],
        ['“Thoughtful service and clear attention to detail. The session was a real chance to unwind.”', '“خدمة راقية واهتمام واضح بالتفاصيل، كانت الجلسة فرصة حقيقية للراحة.”'],
        ['“The cleanliness, privacy, and peaceful atmosphere made the whole visit special.”', '“النظافة والخصوصية والأجواء الهادئة جعلت التجربة مميزة من البداية للنهاية.”'],
        ['“A warm, relaxing experience with a team that makes you feel cared for.”', '“تجربة دافئة ومريحة، والطاقم متعاون ويمنحك إحساساً بالاهتمام.”'],
      ],
      '.testimonial cite': ['Onsen guest', 'ضيف من أونسن'],
      '.ambient-player span': ['Ambient sound', 'الأجواء الصوتية هادئة'],
      '#ambient-toggle': ['Play sound', 'تشغيل الصوت'],
      '#contact .section-header h2': [['Plan your visit', 'خطط لزيارتك']],
      '#contact .section-header p': [['Reserve a retreat, ask about private experiences, or enquire about group sessions.', 'احجز تجربتك أو اسأل عن الجلسات الخاصة أو المواعيد الجماعية.']],
    },
    services: {
      '.section-header h2': [['Signature wellness experiences', 'قائمة خدمات أونسن'], ['What is included', 'ما الذي تتضمنه الجلسة']],
      '.section-header p': [['Each ritual is created to nurture the body, calm the mind, and restore your sense of ease.', 'كل طقس صُمم للعناية بالجسد وتهدئة العقل واستعادة راحتك.']],
      '.callout h3': [['Ready to reserve your ritual?', 'هل أنت مستعد لحجز طقسك؟']],
      '.callout p': [['We’d love to help you choose the right treatment for your schedule and wellness goals.', 'يسعدنا مساعدتك في اختيار العلاج المناسب لجدولك وأهدافك.']],
    },
    booking: {
      'main > .section:first-child .section-header h2': [['Reserve your experience', 'احجز تجربتك']],
      '.section-header p': [['Choose the channel that feels easiest for you. Our concierge will help you plan the perfect wellness moment.', 'اختر الطريقة الأسهل لك وسيساعدك فريقنا في التخطيط للحظة العافية المثالية.']],
      '.booking-card h3': [['WhatsApp concierge', 'خدمة واتساب'], ['Email inquiry', 'استفسار عبر البريد'], ['Call or message', 'اتصل أو راسلنا']],
      '.booking-card p': [['Share your preferred treatment, date, and any special requests for a quick reply.', 'شارك العلاج والتاريخ المفضل وأي طلبات خاصة لتحصل على رد سريع.'], ['Perfect for custom plans, gifting, or longer requests with details about your preferred visit.', 'مناسب للخطط الخاصة والهدايا والطلبات المفصلة.'], ['For faster confirmations, reach our team directly via WhatsApp or phone.', 'للتأكيد السريع تواصل مع فريقنا عبر واتساب أو الهاتف.']],
      'main > .section:nth-child(2) .section-header h2': [['What to expect', 'ماذا تتوقع']],
    },
  };

  const page = document.body.dataset.page;
  const setTranslated = (language) => {
    const common = translations.common;
    document.querySelectorAll('.site-nav a').forEach((link, index) => {
      if (common.nav[index]) link.textContent = common.nav[index][language === 'ar' ? 1 : 0];
    });
    document.querySelectorAll('.footer-nav a').forEach((link, index) => {
      if (common.nav[index]) link.textContent = common.nav[index][language === 'ar' ? 1 : 0];
    });
    const pageTranslations = translations[page] || {};
    Object.entries(pageTranslations).forEach(([selector, values]) => {
      const nodes = document.querySelectorAll(selector);
      const entries = Array.isArray(values[0]) ? values : [values];
      nodes.forEach((node, index) => {
        const entry = entries[index] || entries[0];
        if (entry) node.textContent = entry[language === 'ar' ? 1 : 0];
      });
    });
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.classList.toggle('active', button.dataset.language === language);
    });
    const ambientToggle = document.getElementById('ambient-toggle');
    const ambientAudio = document.getElementById('ambient-audio');
    if (ambientToggle && ambientAudio && !ambientAudio.muted) {
      ambientToggle.textContent = language === 'ar' ? 'كتم الصوت' : 'Mute sound';
    }
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('onsen-language', button.dataset.language);
      setTranslated(button.dataset.language);
    });
  });

  const audio = document.getElementById('ambient-audio');
  const ambientToggle = document.getElementById('ambient-toggle');
  const ambientStatus = document.getElementById('ambient-status');
  if (audio) {
    audio.muted = true;
    audio.loop = true;
    audio.preload = 'auto';
    audio.setAttribute('playsinline', '');
    audio.load();

    const syncAmbientControl = (message) => {
      const englishMessages = {
        'الأجواء الصوتية جاهزة': 'Ambient sound is ready',
        'اضغط لتشغيل الأجواء الصوتية': 'Click to play ambient sound',
        'الأجواء الصوتية مكتومة': 'Ambient sound is muted',
        'الأجواء الصوتية تعمل': 'Ambient sound is playing',
        'تعذر التشغيل، حاول مرة أخرى': 'Unable to play sound. Try again.',
      };
      const isEnglish = document.documentElement.lang === 'en';
      if (ambientToggle) {
        ambientToggle.textContent = isEnglish
          ? (audio.muted ? 'Play sound' : 'Mute sound')
          : (audio.muted ? 'تشغيل الصوت' : 'كتم الصوت');
        ambientToggle.setAttribute('aria-pressed', String(!audio.muted));
      }
      if (ambientStatus && message) ambientStatus.textContent = isEnglish ? (englishMessages[message] || message) : message;
    };

    audio.play()
      .then(() => syncAmbientControl('الأجواء الصوتية جاهزة'))
      .catch(() => syncAmbientControl('اضغط لتشغيل الأجواء الصوتية'));

    ambientToggle?.addEventListener('click', async () => {
      if (!audio.muted) {
        audio.muted = true;
        syncAmbientControl('الأجواء الصوتية مكتومة');
        return;
      }

      audio.muted = false;
      audio.volume = 0.55;
      try {
        await audio.play();
        syncAmbientControl('الأجواء الصوتية تعمل');
      } catch {
        audio.muted = true;
        syncAmbientControl('تعذر التشغيل، حاول مرة أخرى');
      }
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImage = lightbox?.querySelector('.lightbox-image');
  const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
  const lightboxCloseButton = lightbox?.querySelector('.lightbox-close');
  let galleryIndex = 0;
  let lastGalleryTrigger = null;

  const showGalleryImage = (index, trigger) => {
    if (!lightbox || !lightboxImage || !lightboxCaption || !galleryImages.length) return;
    if (trigger) lastGalleryTrigger = trigger;
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[galleryIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.alt;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    lightboxCloseButton?.focus();
  };

  const closeGallery = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    lastGalleryTrigger?.focus();
  };

  galleryImages.forEach((image, index) => {
    const trigger = image.closest('.gallery-item') || image;
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-label', `عرض الصورة: ${image.alt}`);
    image.addEventListener('click', () => showGalleryImage(index, trigger));
    trigger.addEventListener('keydown', (event) => {
      if (event.target !== image && event.key === 'Enter') {
        event.preventDefault();
        showGalleryImage(index, trigger);
      }
      if (event.target !== image && event.key === ' ') {
        event.preventDefault();
        showGalleryImage(index, trigger);
      }
    });
  });
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeGallery);
  lightbox?.querySelector('.lightbox-prev')?.addEventListener('click', () => showGalleryImage(galleryIndex - 1));
  lightbox?.querySelector('.lightbox-next')?.addEventListener('click', () => showGalleryImage(galleryIndex + 1));
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeGallery();
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') showGalleryImage(galleryIndex - 1);
    if (event.key === 'ArrowRight') showGalleryImage(galleryIndex + 1);
  });

  setTranslated(localStorage.getItem('onsen-language') || 'ar');
});
