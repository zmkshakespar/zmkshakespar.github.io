(() => {
  'use strict';
  const toolbar = document.querySelector('.publication-toolbar');
  const list = document.querySelector('#publication-list');
  if (toolbar && list) {
    toolbar.hidden = false;
    const filters = [...toolbar.querySelectorAll('[data-filter]')];
    const papers = [...list.querySelectorAll('.publication')];
    const status = document.querySelector('#filter-status');
    filters.forEach(button => button.addEventListener('click', () => {
      filters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      papers.forEach(paper => {
        paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter;
      });
      status.textContent = `${papers.filter(paper => !paper.hidden).length} ${status.dataset.resultLabel}`;
    }));
    const toggle = toolbar.querySelector('.view-toggle');
    toggle.addEventListener('click', () => {
      const compact = list.classList.toggle('is-compact');
      toggle.setAttribute('aria-pressed', String(compact));
      toggle.querySelector('.view-label').textContent = compact ? toggle.dataset.detailLabel : toggle.dataset.listLabel;
    });
  }
  const navLinks = [...document.querySelectorAll('.main-nav a')];
  if ('IntersectionObserver' in window) {
    const visible = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visible.set(entry.target.id, entry.isIntersecting));
      const active = navLinks.find(link => visible.get(link.hash.slice(1)));
      if (active) navLinks.forEach(link => {
        link.classList.toggle('active', link === active);
        if (link === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, {rootMargin: '-110px 0px -45% 0px', threshold: 0});
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();
