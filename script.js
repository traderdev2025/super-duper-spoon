// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Project modal open
const openBtns = document.querySelectorAll('.open-project');
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLive = document.getElementById('modalLive');
const modalCode = document.getElementById('modalCode');
const modalClose = document.getElementById('modalClose');

openBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const img = card.dataset.img || card.querySelector('img').src;
    modalImg.src = img;
    modalTitle.textContent = card.dataset.title || 'Project';
    modalDesc.textContent = card.dataset.desc || '';
    modalLive.href = card.dataset.live || '#';
    modalCode.href = '#';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
});

// close modal on click outside
modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }
});

// Smooth scroll for nav links
document.querySelectorAll('.nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    if(nav.classList.contains('show')) nav.classList.remove('show');
  });
});

// tiny reveal on scroll
const reveal = () =>{
  document.querySelectorAll('.card, .section-title, .about-grid > div').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60){
      el.style.opacity=1;
      el.style.transform='translateY(0)';
    } else {
      el.style.opacity=0;
      el.style.transform='translateY(10px)';
    }
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
