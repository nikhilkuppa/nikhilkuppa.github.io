document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const tabs = document.querySelectorAll('.tab-btn');
  if (tabs.length) {
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        document.querySelectorAll('.tab-panel').forEach(p => p.hidden = true);
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        document.getElementById('tab-' + btn.dataset.tab).hidden = false;
      });
    });
  }
});
