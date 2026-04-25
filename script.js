const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-interest]').forEach(link => {
  link.addEventListener('click', () => {
    const interest = link.getAttribute('data-interest');
    const select = document.querySelector('#interest');
    const message = document.querySelector('textarea[name="message"]');
    if (select && interest) select.value = interest;
    if (message && interest && !message.value.trim()) {
      message.value = `Hi, I am interested in ${interest}. Please send me more information.`;
    }
  });
});

const form = document.querySelector('#inquiry-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const interest = data.get('interest') || '';
  const message = data.get('message') || '';
  const subject = encodeURIComponent(`Just Natural Fit inquiry - ${interest}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`);
  window.location.href = `mailto:JustNaturalllc@gmail.com?subject=${subject}&body=${body}`;
});
