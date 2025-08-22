// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Фильтр для номинантов
const chips = document.querySelectorAll('.chip');
const items = document.querySelectorAll('.nominee');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const f = chip.dataset.filter;
    items.forEach(el => {
      el.style.display = (f === 'all' || el.dataset.cat === f) ? '' : 'none';
    });
  });
});
