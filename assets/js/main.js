
// Smooth anchor scroll is via CSS (scroll-behavior). Here we add: sticky buy bar and reviews carousel, year.
const buyBar = document.getElementById('buyBar');
let lastKnownScrollY = 0;

function onScroll(){
  const y = window.scrollY || window.pageYOffset;
  const show = y > 500;
  if(show !== (buyBar.dataset.show === '1')){
    buyBar.style.display = show ? 'block' : 'none';
    buyBar.dataset.show = show ? '1' : '0';
  }
  lastKnownScrollY = y;
}
window.addEventListener('scroll', onScroll, {passive:true});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple carousel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;

function updateCarousel(){
  track.style.transform = `translateX(-${index*100}%)`;
}
prevBtn?.addEventListener('click', ()=>{
  index = Math.max(0, index-1);
  updateCarousel();
});
nextBtn?.addEventListener('click', ()=>{
  const items = track.children.length;
  index = Math.min(items-1, index+1);
  updateCarousel();
});
