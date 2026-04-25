const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelectorAll('[data-interest]').forEach(button => {
  button.addEventListener('click', () => {
    const select = document.querySelector('#interest');
    if (select) select.value = button.dataset.interest;
  });
});

document.querySelector('#inquiryForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const interest = data.get('interest') || '';
  const message = data.get('message') || '';
  const subject = encodeURIComponent(`Just Natural Fit Inquiry - ${interest}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`);
  window.location.href = `mailto:JustNaturalllc@gmail.com?subject=${subject}&body=${body}`;
});
