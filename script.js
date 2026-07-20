// Interactivity: booking links, muted autoplay, unmute on gesture, gallery click-to-open
document.addEventListener('DOMContentLoaded',()=>{
  const waBtn=document.getElementById('book-whatsapp');
  const emailBtn=document.getElementById('book-email');
  const waLink=document.getElementById('wa-link');
  const phone='996543688231';
  const prefill=encodeURIComponent("Hello, I'd like to book a session at Onsen. Please share availability.");
  if(waBtn) waBtn.href=`https://wa.me/${phone}?text=${prefill}`;
  if(emailBtn) emailBtn.href=`mailto:Onsen0.ksa@gmail.com?subject=${encodeURIComponent('Booking request')}&body=${prefill}`;
  if(waLink) waLink.href=`https://wa.me/${phone}`;

  // Navigation: highlight active link
  const navLinks = document.querySelectorAll('.site-nav a');
  const current = (location.pathname.split('/').pop() || 'index.html');
  navLinks.forEach(a=>{
    const href = a.getAttribute('href').split('#')[0];
    if(href === '' || href === current || (href === 'index.html' && current === '')) a.classList.add('active');
  });

  // Audio: start muted autoplay, unmute on first user gesture
  const audio = document.getElementById('ambient-audio');
  const toggle = document.getElementById('toggle-music');
  if(audio){
    try{
      audio.muted = true; // muted autoplay is widely allowed
      audio.loop = true;
      audio.setAttribute('playsinline','');
      audio.play().catch(()=>{});
    }catch(e){/*ignore*/}

    const unmute = ()=>{
      try{
        audio.muted = false;
        audio.volume = 0.6;
        // Ensure it's playing when unmuted
        audio.play().catch(()=>{});
      }catch(e){/*ignore*/}
    };

    // Unmute on a clear user gesture (click or keydown)
    const onFirstGesture = (ev)=>{ unmute(); document.removeEventListener('click', onFirstGesture); document.removeEventListener('keydown', onFirstGesture); };
    document.addEventListener('click', onFirstGesture, {once:true});
    document.addEventListener('keydown', onFirstGesture, {once:true});
  }

  // Toggle button: play/pause (and reflect mute state)
  if(toggle && audio){
    const updateLabel = ()=>{ toggle.textContent = audio.paused ? 'Play' : (audio.muted ? 'Unmute' : 'Pause'); };
    updateLabel();
    toggle.addEventListener('click', ()=>{
      if(audio.paused) audio.play().catch(()=>{});
      else audio.pause();
      // If audio is playing but muted, unmute when user explicitly interacts with control
      if(audio.muted){ audio.muted = false; audio.volume = 0.6; }
      updateLabel();
    });
  }

  // Simple lightbox: click any gallery image to open in new tab
  document.querySelectorAll('.gallery-grid img').forEach(img=>{ img.addEventListener('click', ()=>{ window.open(img.src,'_blank'); }); });
});