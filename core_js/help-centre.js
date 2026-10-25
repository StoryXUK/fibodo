const searchInput = document.getElementById('helpSearch');
const searchForm = document.querySelector('.search-card');
const categoryCards = [...document.querySelectorAll('.category-card')];
const faqItems = [...document.querySelectorAll('.faq-item')];

function normalise(value){
  return value.toLowerCase().trim();
}

function filterHelp(term){
  const query = normalise(term);
  if(!query){
    categoryCards.forEach(card => card.classList.remove('is-hidden','is-match'));
    faqItems.forEach(item => item.classList.remove('is-hidden'));
    return;
  }

  categoryCards.forEach(card => {
    const haystack = normalise(`${card.textContent} ${card.dataset.category || ''}`);
    const match = haystack.includes(query);
    card.classList.toggle('is-hidden', !match);
    card.classList.toggle('is-match', match);
  });

  faqItems.forEach(item => {
    const haystack = normalise(`${item.textContent} ${item.dataset.faq || ''}`);
    const match = haystack.includes(query);
    item.classList.toggle('is-hidden', !match);
    if(match) item.classList.add('is-open');
  });
}

if(searchInput){
  searchInput.addEventListener('input', event => filterHelp(event.target.value));
}
if(searchForm){
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    filterHelp(searchInput.value);
    document.getElementById('questions')?.scrollIntoView({behavior:'smooth'});
  });
}

document.querySelectorAll('[data-search]').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.search;
    searchInput.value = value;
    filterHelp(value);
    document.getElementById('questions')?.scrollIntoView({behavior:'smooth'});
  });
});

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');
  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    faqItems.forEach(faq => faq.classList.remove('is-open'));
    if(!isOpen) item.classList.add('is-open');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.16});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if(navToggle && nav){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'flex';
  });
}
