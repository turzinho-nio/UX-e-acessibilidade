const yearElement = document.getElementById('year');
const form = document.querySelector('.contact-form');
const statusElement = document.getElementById('form-status');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (form && statusElement) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const interest = form.interest.value;

    if (!name || !email || !interest) {
      statusElement.textContent = 'Preencha todos os campos para continuar.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      statusElement.textContent = 'Informe um e-mail válido.';
      return;
    }

    statusElement.textContent = `Obrigado, ${name}! Receberá nossas dicas em breve.`;
    form.reset();
  });
}
