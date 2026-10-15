const filters = document.querySelector('.filters');
const buttons = [...document.querySelectorAll('.filter')];
const publications = [...document.querySelectorAll('.publication')];
const count = document.querySelector('.result-count');
filters.hidden = false;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    publications.forEach(paper => {
      paper.hidden = category !== 'all' && paper.dataset.category !== category;
    });
    const visible = publications.filter(paper => !paper.hidden).length;
    count.textContent = `${visible} selected publication${visible === 1 ? '' : 's'}`;
  });
});
