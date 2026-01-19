(function () {
  emailjs.init("SUA_PUBLIC_KEY");
  console.log("EmailJS OK");
})();

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Tentando enviar...");

  emailjs.sendForm(
    "SEU_SERVICE_ID",
    "SEU_TEMPLATE_ID",
    this
  )
  .then((res) => {
    console.log("ENVIADO:", res);
    alert("Email enviado!");
  })
  .catch((err) => {
    console.error("ERRO EMAILJS:", err);
    alert("Erro ao enviar, veja o console");
  });
});
