
// Minimal JS for interactions: modals, tabs, search
document.addEventListener('DOMContentLoaded', ()=>{
  // modal open/close
  document.querySelectorAll('[data-open-modal]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.openModal;
      const m = document.getElementById(id);
      if(m) m.classList.add('show');
    });
  });
  document.querySelectorAll('.modal .close').forEach(btn=>{
    btn.addEventListener('click', ()=> btn.closest('.modal').classList.remove('show'));
  });
  document.querySelectorAll('.tab').forEach(t=> t.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const target = t.dataset.tab;
    document.querySelectorAll('.tab-panel').forEach(p=> p.style.display='none');
    document.getElementById(target).style.display='block';
  }));
  // simple search (filter by name)
  const searchInput = document.getElementById('searchInput');
  if(searchInput){
    searchInput.addEventListener('input', (e)=>{
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.dest-card').forEach(card=>{
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(q) ? '' : 'none';
      });
    });
  }
});
