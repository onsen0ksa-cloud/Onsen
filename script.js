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
      '.minor-card .minor-title': ['Authentic Onsen rituals', 'طقوس أونسن الأصيلة'],
      '.minor-card .minor-copy': ['Japanese warmth and calm to restore your balance.', 'دفء ياباني وهدوء يعيد إليك توازنك.'],
      '.cta-row .btn': [['Book your visit', 'احجز زيارتك'], ['Explore services', 'استكشف الخدمات']],
      'main > section.section:nth-of-type(1) .section-header h2': [['A quiet space to restore your balance', 'مساحة هادئة لاستعادة توازنك']],
      'main > section.section:nth-of-type(1) .section-header p': [['Every detail at Onsen is shaped to feel calm, elevated, and restorative — from the warm mineral baths to the soft, ambient atmosphere.', 'كل تفصيل في أونسن صُمم ليمنحك الهدوء والرقي والاسترخاء، من الحمامات المعدنية الدافئة إلى الأجواء الناعمة.']],
      '.feature-card h3': [['Mineral rituals', 'طقوس المعادن'], ['Botanical calm', 'سكينة الطبيعة'], ['Luxury ambience', 'أجواء فاخرة']],
      '.feature-card p': [['Traditional hot spring experiences with a refined, modern wellness perspective.', 'تجارب ينابيع ساخنة تقليدية برؤية عصرية راقية.'], ['Natural aromatics, grounded body therapies, and carefully chosen restorative ingredients.', 'روائح طبيعية وعلاجات جسدية ومكونات مختارة بعناية.'], ['Soft lighting, cedar tones, and immersive design to support deep relaxation and renewal.', 'إضاءة ناعمة ونغمات خشبية وتصميم يساعد على الاسترخاء والتجدد.']],
      '.callout h3': [['Created for deep rest.', 'صُمم للراحة العميقة.']],
      '.callout p': [['Our spa is placed around the idea of intentional pause: fewer distractions, more balance, and a stronger sense of wellbeing for busy professionals and wellness seekers alike.', 'صُمم منتجعنا حول فكرة التوقف الواعي: مشتتات أقل وتوازن أكبر وإحساس أعمق بالعافية.']],
      '#gallery .section-header h2': [['Details that keep calm close', 'تفاصيل تُبقي الهدوء قريباً']],
      '#gallery .section-header p': [['Explore the atmosphere, textures, and rituals that define the Onsen experience.', 'اكتشف الأجواء والتفاصيل والطقوس التي تميز تجربة أونسن.']],
      '#gallery .gallery-subtitle': [['Store atmosphere', 'أجواء المتجر'], ['Onsen products', 'منتجات أونسن']],
      '#reviews .section-header h2': [['Words from our guests', 'كلمات تضيء تجربة ضيوفنا']],
      '#reviews .section-header p': [['Read guest reviews directly on Google Maps.', 'اطّلع على آراء الضيوف المنشورة من مصدرها مباشرة على Google Maps.']],
      '.google-review-link': ['Read authentic reviews on Google Maps', 'اقرأ التقييمات الحقيقية على Google Maps'],
      '.reviews-note': ['Guest reviews are shown on Onsen’s official Google Maps listing.', 'تظهر المراجعات الأصلية من الضيوف على صفحة أونسن في Google Maps.'],
      '#ambient-status': ['Rain, wind and Japanese bells are ready', 'صوت المطر والرياح والأجراس اليابانية جاهز'],
      '#ambient-toggle': ['Play rain, wind and Japanese bells', 'تشغيل المطر والرياح والأجراس'],
      '#contact .section-header h2': [['Plan your visit', 'خطط لزيارتك']],
      '#contact .section-header p': [['Reserve a retreat, ask about private experiences, or enquire about group sessions.', 'احجز تجربتك أو اسأل عن الجلسات الخاصة أو المواعيد الجماعية.']],
    },
    services: {
      '.section-header h1': ['Onsen treatments and prices', 'قائمة أونسن الجديدة'],
      '.section-header h2': ['A complete care experience', 'تجربة عناية متكاملة'],
      '.section-header p': [['Explore our massage sessions, care rituals, and wellness packages.', 'اكتشف جلسات المساج وطقوس العناية وباقات العافية.']],
      '.callout h3': [['Ready to reserve your ritual?', 'هل أنت مستعد لحجز طقسك؟']],
      '.callout p': [['We’d love to help you choose the right treatment for your schedule and wellness goals.', 'يسعدنا مساعدتك في اختيار العلاج المناسب لجدولك وأهدافك.']],
    },
    menu: {
      '.section-header .eyebrow': ['Onsen Spa', 'أونسن سبا'],
      '.section-header h1': ['Onsen treatments and prices', 'قائمة أونسن الجديدة'],
      '.section-header p': ['Explore our massage sessions, care rituals, and wellness packages.', 'اكتشف جلسات المساج وطقوس العناية وباقات العافية.'],
      '.callout h2': ['You deserve a moment of luxury.', 'أنت تستحق أن تعامل نفسك برفاهية.'],
      '.callout p': ['Book a session and let our team help you choose the right experience.', 'احجز جلستك ودع فريق أونسن يرشح لك التجربة الأقرب لاحتياجك.'],
      '.callout .btn': ['Start booking', 'ابدأ الحجز'],
    },
    booking: {
      'main > .section .section-header h1': ['Reserve your experience', 'احجز تجربتك'],
      '.section-header > p:not(.booking-menu-link)': ['Choose the channel that feels easiest for you. Our concierge will help you plan the perfect wellness moment.', 'اختر الطريقة الأسهل لك وسيساعدك فريقنا في التخطيط للحظة العافية المثالية.'],
      '.booking-card h3': [['WhatsApp concierge', 'خدمة واتساب'], ['Email inquiry', 'استفسار عبر البريد'], ['Call or message', 'اتصل أو راسلنا']],
      '.booking-card p': [['Share your preferred treatment, date, and any special requests for a quick reply.', 'شارك العلاج والتاريخ المفضل وأي طلبات خاصة لتحصل على رد سريع.'], ['Perfect for custom plans, gifting, or longer requests with details about your preferred visit.', 'مناسب للخطط الخاصة والهدايا والطلبات المفصلة.'], ['For faster confirmations, reach our team directly via WhatsApp or phone.', 'للتأكيد السريع تواصل مع فريقنا عبر واتساب أو الهاتف.']],
      'main > .section:nth-child(2) .section-header h2': [['What to expect', 'ماذا تتوقع']],
    },
  };

  const page = document.body.dataset.page;
  let syncAmbientControl = () => {};
  let syncGoogleReviews = () => {};
  const setTranslated = (language) => {
    const common = translations.common;
    const navByHref = new Map([
      ['index.html', common.nav[0]],
      ['menu.html', common.nav[1]],
      ['services.html', common.nav[2]],
      ['#gallery', common.nav[3]],
      ['index.html#gallery', common.nav[3]],
      ['booking.html', common.nav[4]],
      ['#contact', common.nav[5]],
      ['index.html#contact', common.nav[5]],
    ]);
    document.querySelectorAll('.site-nav a, .footer-nav a').forEach((link) => {
      const label = navByHref.get(link.getAttribute('href'));
      if (label) link.textContent = label[language === 'ar' ? 1 : 0];
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
    document.querySelectorAll('[data-ar][data-en]').forEach((node) => {
      node.textContent = node.dataset[language];
    });
    syncAmbientControl();
    syncGoogleReviews(language);
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('onsen-language', button.dataset.language);
      setTranslated(button.dataset.language);
    });
  });

  const mapsApiKey = document.querySelector('meta[name="google-maps-api-key"]')?.content.trim();
  const placeId = document.querySelector('meta[name="google-place-id"]')?.content.trim();
  const reviewsList = document.getElementById('google-review-list');
  const reviewsStatus = document.getElementById('google-reviews-status');
  const reviewsAttribution = document.getElementById('google-reviews-attribution');
  const googleMapsUrl = 'https://maps.app.goo.gl/XB1RgDi8UA3HwiJ76?g_st=aw';
  let googlePlaceData = null;
  let googleReviewData = [];
  let googleReviewsStatus = 'loading';
  const googleReviewsMessages = {
    ar: {
      loading: 'جارٍ تحميل المراجعات من Google Maps…',
      missingKey: 'تعذّر تحميل المراجعات داخل الموقع حالياً. يمكنك الاطلاع على التقييمات مباشرة عبر Google Maps.',
      missingPlaceId: 'تعذّر تحميل المراجعات داخل الموقع حالياً. يمكنك الاطلاع على التقييمات مباشرة عبر Google Maps.',
      failed: 'تعذّر تحميل المراجعات الآن. يمكنك الاطلاع على التقييمات مباشرة عبر Google Maps.',
    },
    en: {
      loading: 'Loading reviews from Google Maps…',
      missingKey: 'Reviews cannot be displayed here right now. Read the latest guest reviews directly on Google Maps.',
      missingPlaceId: 'Reviews cannot be displayed here right now. Read the latest guest reviews directly on Google Maps.',
      failed: 'Reviews could not load right now. Read the latest guest reviews directly on Google Maps.',
    },
  };

  syncGoogleReviews = (language) => {
    if (!reviewsList || !reviewsStatus) return;
    if (!googlePlaceData) {
      reviewsStatus.textContent = googleReviewsMessages[language][googleReviewsStatus];
      return;
    }

    reviewsList.replaceChildren();
    googleReviewData.forEach((review) => {
      const card = document.createElement('article');
      card.className = 'testimonial';
      const stars = document.createElement('span');
      const roundedRating = Math.max(0, Math.min(5, Math.round(review.rating || 0)));
      stars.className = 'review-stars';
      stars.setAttribute('aria-label', `${review.rating || 0} / 5`);
      stars.textContent = `${'★'.repeat(roundedRating)}${'☆'.repeat(5 - roundedRating)}`;
      const quote = document.createElement('blockquote');
      quote.textContent = review.text;
      const author = document.createElement('cite');
      const authorLink = document.createElement('a');
      authorLink.href = review.authorAttribution?.uri || googleMapsUrl;
      authorLink.target = '_blank';
      authorLink.rel = 'noopener noreferrer';
      authorLink.textContent = review.authorAttribution?.displayName || 'Google Maps';
      author.append(authorLink);
      const source = document.createElement('a');
      source.href = review.googleMapsURI || googleMapsUrl;
      source.target = '_blank';
      source.rel = 'noopener noreferrer';
      source.textContent = language === 'en' ? 'View on Google Maps' : 'عرض المراجعة على Google Maps';
      card.append(stars, quote, author, source);
      reviewsList.append(card);
    });

    if (reviewsAttribution) reviewsAttribution.hidden = false;
    const rating = googlePlaceData.rating ? ` · ${googlePlaceData.rating} / 5` : '';
    const count = googlePlaceData.userRatingCount
      ? language === 'en' ? ` · ${googlePlaceData.userRatingCount} reviews` : ` · ${googlePlaceData.userRatingCount} تقييم`
      : '';
    reviewsStatus.textContent = `${googlePlaceData.displayName || 'Onsen'}${rating}${count}`;
    if (!googleReviewData.length) {
      reviewsStatus.textContent += language === 'en'
        ? ' · No written reviews are available right now.'
        : ' · لا توجد مراجعات نصية متاحة حالياً.';
    }
  };

  const showGoogleReviews = async () => {
    if (!reviewsList || !reviewsStatus) return;
    const language = document.documentElement.lang === 'en' ? 'en' : 'ar';
    if (!mapsApiKey) {
      googleReviewsStatus = 'missingKey';
      syncGoogleReviews(language);
      return;
    }
    if (!placeId) {
      googleReviewsStatus = 'missingPlaceId';
      syncGoogleReviews(language);
      return;
    }
    googleReviewsStatus = 'loading';
    syncGoogleReviews(language);

    try {
      const mapsScript = document.createElement('script');
      mapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(mapsApiKey)}&libraries=places&v=weekly&language=${language}&region=SA`;
      mapsScript.async = true;
      mapsScript.referrerPolicy = 'strict-origin-when-cross-origin';
      const scriptLoaded = new Promise((resolve, reject) => {
        mapsScript.onload = resolve;
        mapsScript.onerror = () => reject(new Error('Google Maps JavaScript API failed to load'));
      });
      document.head.append(mapsScript);
      await scriptLoaded;

      const { Place } = await window.google.maps.importLibrary('places');
      const place = new Place({ id: placeId });
      await place.fetchFields({ fields: ['displayName', 'rating', 'userRatingCount', 'reviews'] });

      googlePlaceData = place;
      googleReviewData = (place.reviews || []).filter((review) => review.text).slice(0, 5);
      syncGoogleReviews(document.documentElement.lang === 'en' ? 'en' : 'ar');
    } catch (error) {
      console.error('Unable to load Google Maps reviews:', error);
      googleReviewsStatus = 'failed';
      syncGoogleReviews(document.documentElement.lang === 'en' ? 'en' : 'ar');
    }
  };

  const audio = document.getElementById('ambient-audio');
  const bellsAudio = document.getElementById('bells-audio');
  const windAudio = document.getElementById('wind-audio');
  const ambientToggle = document.getElementById('ambient-toggle');
  const ambientStatus = document.getElementById('ambient-status');
  if (audio) {
    const tracks = [audio, bellsAudio, windAudio].filter(Boolean);
    const messages = {
      ar: {
        play: 'تشغيل المطر والرياح والأجراس',
        pause: 'إيقاف الأجواء الصوتية',
        playing: 'المطر والرياح والأجراس اليابانية تعمل',
        ready: 'الصوت جاهز؛ اضغط للاستماع',
        paused: 'الأجواء الصوتية متوقفة',
        error: 'تعذر تحميل الصوت. حاول مرة أخرى لاحقاً.',
      },
      en: {
        play: 'Play rain, wind and Japanese bells',
        pause: 'Pause ambient sound',
        playing: 'Rain, wind and Japanese bells are playing',
        ready: 'Sound is ready; tap to listen',
        paused: 'Ambient sound is paused',
        error: 'Audio could not load. Please try again later.',
      },
    };
    let statusKey = 'ready';

    syncAmbientControl = (nextStatus) => {
      if (nextStatus) statusKey = nextStatus;
      const language = document.documentElement.lang === 'en' ? 'en' : 'ar';
      const isPlaying = tracks.some((track) => !track.paused);
      const isAudible = tracks.some((track) => !track.paused && !track.muted);
      if (ambientToggle) {
        ambientToggle.textContent = isAudible ? messages[language].pause : messages[language].play;
        ambientToggle.setAttribute('aria-pressed', String(isAudible));
      }
      if (ambientStatus) ambientStatus.textContent = isAudible
        ? messages[language].playing
        : isPlaying ? messages[language].ready : messages[language][statusKey];
    };

    const usableTracks = () => tracks.filter((track) => track.dataset.failed !== 'true');
    const startAmbient = async () => {
      const availableTracks = usableTracks();
      if (!availableTracks.length) {
        syncAmbientControl('error');
        return false;
      }

      availableTracks.forEach((track) => {
        track.muted = false;
        track.volume = track === audio ? 0.48 : track === bellsAudio ? 0.62 : 0.48;
      });
      const audibleResults = await Promise.allSettled(availableTracks.map((track) => track.play()));
      if (availableTracks.some((track) => !track.paused && !track.muted)) {
        syncAmbientControl('playing');
        return true;
      }

      availableTracks.forEach((track) => { track.muted = true; });
      const mutedResults = await Promise.allSettled(availableTracks.map((track) => track.play()));
      if (availableTracks.some((track) => !track.paused)) {
        syncAmbientControl('ready');
        return false;
      }

      const failedToLoad = availableTracks.every((track) => track.dataset.failed === 'true');
      syncAmbientControl(failedToLoad || mutedResults.every((result) => result.status === 'rejected') && audibleResults.every((result) => result.status === 'rejected')
        ? 'error'
        : 'paused');
      return false;
    };

    tracks.forEach((track) => {
      track.loop = true;
      track.preload = 'auto';
      track.setAttribute('playsinline', '');
      track.muted = true;
      track.load();
      track.addEventListener('error', () => {
        track.dataset.failed = 'true';
        syncAmbientControl(usableTracks().length ? 'ready' : 'error');
      });
      track.addEventListener('play', () => syncAmbientControl());
      track.addEventListener('pause', () => syncAmbientControl());
    });

    ambientToggle?.addEventListener('click', async () => {
      const isAudible = tracks.some((track) => !track.paused && !track.muted);
      if (isAudible) {
        tracks.forEach((track) => {
          track.pause();
          track.muted = true;
        });
        syncAmbientControl('paused');
        return;
      }
      await startAmbient();
    });

    const enableAfterGesture = (event) => {
      if (ambientToggle?.contains(event.target)) return;
      if (tracks.every((track) => track.muted || track.paused)) startAmbient();
      window.removeEventListener('keydown', enableAfterGesture);
    };
    window.addEventListener('pointerdown', enableAfterGesture, { once: true, passive: true });
    window.addEventListener('keydown', enableAfterGesture, { once: true });
    startAmbient();
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
  showGoogleReviews();
});
