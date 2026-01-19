/**
 * =====================================================
 * contact.js
 * Responsável pelo envio do formulário de contato
 * usando EmailJS (sem backend)
 *
 * Autor: Kirito.dev
 * =====================================================
 */

(function () {
  "use strict";

  /**
   * ===============================
   * CONFIGURAÇÕES DO EMAILJS
   * ===============================
   * ⚠️ Use APENAS a PUBLIC KEY
   */
  const EMAILJS_PUBLIC_KEY = "ta3XDN0pvE82RL4LF";
  const EMAILJS_SERVICE_ID = "service_jdmv6bx";
  const EMAILJS_TEMPLATE_ID = "template_bwb1ntd";

  /**
   * ===============================
   * INICIALIZAÇÃO
   * ===============================
   */
  document.addEventListener("DOMContentLoaded", () => {
    // Verificação básica
    if (typeof emailjs === "undefined") {
      console.error("EmailJS NÃO foi carregado.");
      return;
    }

    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS inicializado com sucesso");

    const form = document.getElementById("contact-form");

    if (!form) {
      console.error("Formulário #contact-form não encontrado.");
      return;
    }

    /**
     * ===============================
     * SUBMIT DO FORMULÁRIO
     * ===============================
     */
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      console.log("Tentando enviar formulário...");

      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          this
        )
        .then(
          function (response) {
            console.log("Email enviado com sucesso!", response);

            // Reset visual do formulário
            form.reset();

            alert("Mensagem enviada com sucesso 🚀");
          },
          function (error) {
            console.error("Erro ao enviar email:", error);

            alert(
              "Erro ao enviar a mensagem 😕\n" +
              "Verifique as configurações e tente novamente."
            );
          }
        );
    });
  });
})();
