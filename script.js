// Alerta simples no envio do formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada! Em breve entraremos em contato.");
});
