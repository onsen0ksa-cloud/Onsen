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

  const translations = {
    common: {
      nav: [['Home', 'الرئيسية'], ['Services', 'الخدمات'], ['Gallery', 'المعرض'], ['Booking', 'الحجز'], ['Contact', 'تواصل معنا']],
      brand: ['Onsen', 'أونسن'],
    },
    home: {
      '.eyebrow': ['Japanese calm, modern luxury', 'هدوء ياباني وفخامة عصرية'],
      'h1': ['You deserve to be treated with luxury.', 'أنت تستحق أن تُعامل برفاهية.'],
      '.tagline': ['Experience bamboo serenity, restorative hot springs, and professionally guided rituals designed for true rest in the heart of Saudi Arabia.', 'استمتع بسكينة البامبو والينابيع الدافئة وطقوس العافية المصممة للراحة الحقيقية في قلب المملكة العربية السعودية.'],
      '.section-header h2': [['Wellness, designed to slow you down', 'عافية مصممة لتمنحك وقتاً للهدوء']],
      '.section-header p': [['Every detail at Onsen is shaped to feel calm, elevated, and restorative — from the warm mineral baths to the soft, ambient atmosphere.', 'كل تفصيل في أونسن صُمم ليمنحك الهدوء والرقي والاسترخاء، من الحمامات المعدنية الدافئة إلى الأجواء الناعمة.']],
      '.feature-card h3': [['Mineral rituals', 'طقوس المعادن'], ['Botanical calm', 'سكينة الطبيعة'], ['Luxury ambience', 'أجواء فاخرة']],
      '.feature-card p': [['Traditional hot spring experiences with a refined, modern wellness perspective.', 'تجارب ينابيع ساخنة تقليدية برؤية عصرية راقية.'], ['Natural aromatics, grounded body therapies, and carefully chosen restorative ingredients.', 'روائح طبيعية وعلاجات جسدية ومكونات مختارة بعناية.'], ['Soft lighting, cedar tones, and immersive design to support deep relaxation and renewal.', 'إضاءة ناعمة ونغمات خشبية وتصميم يساعد على الاسترخاء والتجدد.']],
      '.callout h3': [['Created for deep rest.', 'صُمم للراحة العميقة.']],
      '.callout p': [['Our spa is placed around the idea of intentional pause: fewer distractions, more balance, and a stronger sense of wellbeing for busy professionals and wellness seekers alike.', 'صُمم منتجعنا حول فكرة التوقف الواعي: مشتتات أقل وتوازن أكبر وإحساس أعمق بالعافية.']],
      '#gallery .section-header h2': [['Moments of stillness', 'لحظات من السكينة']],
      '#gallery .section-header p': [['Explore the atmosphere, textures, and rituals that define the Onsen experience.', 'اكتشف الأجواء والتفاصيل والطقوس التي تميز تجربة أونسن.']],
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
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('onsen-language', button.dataset.language);
      setTranslated(button.dataset.language);
    });
  });

  const audio = document.getElementById('ambient-audio');

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

    setTranslated(localStorage.getItem('onsen-language') || 'ar');
  });
});
