document.addEventListener("DOMContentLoaded", function () {
  // Botão Mostrar Mais (caso exista)
  const btnMostrar = document.getElementById("mostrarMais");
  const maisInfo = document.getElementById("maisInfo");

  if (btnMostrar && maisInfo) {
    btnMostrar.addEventListener("click", function () {
      maisInfo.classList.toggle("escondido");
    });
  }

  // Validação do formulário de contato
  const form = document.getElementById("formContato");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      const msgErro = document.getElementById("mensagemErro");
      const msgSucesso = document.getElementById("mensagemSucesso");

      // Sempre oculta antes
      msgErro.style.display = "none";
      msgSucesso.style.display = "none";

      if (nome === "" || email === "" || mensagem === "") {
        msgErro.style.display = "block";
        // Oculta depois de 3 segundos
        setTimeout(() => {
          msgErro.style.display = "none";
        }, 3000);
      } else {
        msgSucesso.style.display = "block";
        form.reset();
        // Oculta depois de 3 segundos
        setTimeout(() => {
          msgSucesso.style.display = "none";
        }, 3000);
      }
    });
  }
});
