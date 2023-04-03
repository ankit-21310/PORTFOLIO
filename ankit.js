const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  alert('Thank you for your message!');
  form.reset();
});

// JavaScript code for the design grid
const designGrid = document.querySelector('.design-grid');

designGrid.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.target.nextElementSibling.classList.toggle('show');
  }
});
