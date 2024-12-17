window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  const popupContent = document.querySelector(".popup-content");
  const scrollPosition = window.scrollY;

  // Ajuste dinâmico do blur na navbar
  let blurValue = Math.min(scrollPosition / 50, 30); // Aumenta o blur até 30px
  let opacity = Math.min(scrollPosition / 300, 0.5); // Aumenta a opacidade até 0.5

  navbar.style.backgroundColor = `rgba(10, 15, 20, ${opacity})`;
  navbar.style.backdropFilter = `blur(${blurValue}px)`; // Aplica o blur na navbar

  // Aplicando o efeito de rolagem para o popup-content
  let additionalBlur = Math.min(scrollPosition / 50, 10); // Incrementa até 10px adicionais
  let totalBlur = 10 + additionalBlur; // Total do blur é inicial + adicional
  let backgroundOpacity = 0.95 - Math.min(scrollPosition / 300, 0.3); // Reduz até 0.65 de opacidade

  // Aplica o blur e a opacidade ao popup-content
  popupContent.style.backdropFilter = `blur(${totalBlur}px)`; // Total do blur no popup
  popupContent.style.backgroundColor = `rgba(13, 17, 23, ${backgroundOpacity})`; // Ajusta a opacidade do popup

  // Adiciona ou remove a classe 'shrink' na navbar, dependendo da rolagem
  if (scrollPosition > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
