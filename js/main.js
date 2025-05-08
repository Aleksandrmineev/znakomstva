// ======================JSFORMTELEGRAM============================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim().replace(/\D/g, '');
    const email = form.email.value.trim();

    if (!name || phone.length < 10 || !email.includes('@')) {
      alert('Please fill in all fields correctly');
      return;
    }

    const TOKEN = '8042188223:AAGiQLFwnSYK86FX0O3dMUbsj6dPK-1xwLc'; // insert here token from BotFather
    const CHAT_ID = '303648524'; // your chat_id
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `<b>New Client</b>
<b>Name:</b> ${name}
<b>Telefon:</b> ${phone}
<b>Email:</b> ${email}`;

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })
    .then(() => {
      successMessage.style.display = 'block';
      form.reset();
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    })
    .catch(error => {
      console.error('Telegram send error:', error);
      alert('An error occurred while sending.');
    });
  });
});