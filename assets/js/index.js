document.addEventListener("DOMContentLoaded", function () {
  function typeWriter(elemento) {
    const texto = elemento.innerHTML;
    elemento.innerHTML = "";

    texto.split("").forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 100 * i);
    });
  }

  const titulo = document.querySelector("#animacao");
  typeWriter(titulo);
});

const links = document.querySelectorAll(".apresentacao__links__link");

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    link.style.backgroundColor = "#c81111";
    link.style.color = "#f6f6f6";
  });

  link.addEventListener("mouseout", function () {
    link.style.backgroundColor = "#f6f6f6";
    link.style.color = "#000000";
  });
});

window.addEventListener("load", () => {
  const conteudo = document.querySelector(".apresentacao__conteudo");
  conteudo.style.opacity = 0;
  setTimeout(() => {
    conteudo.style.transition = "opacity 1.5s ease-in-out";
    conteudo.style.opacity = 1;
  }, 500);
});

const imagem = document.querySelector("img");
imagem.addEventListener("click", () => {
  imagem.src = imagem.src.includes("Imagem.png")
    ? "./assets/images/Imagem2.png"
    : "./assets/images/Imagem.png";
});
