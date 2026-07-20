// Minimal interactivity: WhatsApp/email booking, music toggle, simple gallery click-to-enlarge
document.addEventListener('DOMContentLoaded',()=>{
  const waBtn=document.getElementById('book-whatsapp');
  const emailBtn=document.getElementById('book-email');
  const waLink=document.getElementById('wa-link');
  const phone='996543688231';
  const prefill=encodeURIComponent("Hello, I'd like to book a session at Onsen. Please share availability.");
  if(waBtn) waBtn.href=`https://wa.me/${phone}?text=${prefill}`;
  if(emailBtn) emailBtn.href=`mailto:Onsen0.ksa@gmail.com?subject=${encodeURIComponent('Booking request')}&body=${prefill}`;
  if(waLink) waLink.href=`https://wa.me/${phone}`;

  const audio=document.getElementById('ambient-audio');
  const toggle=document.getElementById('toggle-music');
  if(toggle && audio){
    toggle.addEventListener('click',()=>{
      if(audio.paused) audio.play().catch(()=>{});
      else audio.pause();
    });
  }

  // Simple lightbox: click any gallery image to open in new tab (keeps JS small)
  document.querySelectorAll('.gallery-grid img').forEach(img=>{
    img.addEventListener('click',()=>{
      window.open(img.src,'_blank');
    });
  });
});