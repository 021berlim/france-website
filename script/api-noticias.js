function fetchNews() {
  const newsData = [
      {
        "title": "Eventos Sazonais - Atualização 7.3",
        "description": "Novos eventos sazonais com recompensas exclusivas e desafios únicos.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de um evento temático de fim de ano com decorações especiais.</li>
            <li>Novos desafios sazonais com recompensas exclusivas.</li>
            <li>Adição de itens cosméticos limitados para personalização de personagens.</li>
            <ul>
              <li><strong>Desafios de Fim de Ano:</strong> Complete tarefas especiais para obter recompensas exclusivas.</li>
              <li><strong>Itens Cosméticos:</strong> Roupas e acessórios especiais para o período festivo.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Novos efeitos visuais e sonoros para criar uma atmosfera mais imersiva.</li>
            <li>Melhorias nos eventos de coleta, tornando-os mais dinâmicos e recompensadores.</li>
            <ul>
              <li><strong>Ambientes Temáticos:</strong> Novos cenários e músicas ambientando o clima do evento.</li>
              <li><strong>Eventos de Coleta:</strong> Nova mecânica de recompensas para a coleta de itens sazonais.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "../media/images/patchnotes.png"
      },
      {
        "title": "Eventos Sazonais - Atualização 7.3",
        "description": "Novos eventos sazonais com recompensas exclusivas e desafios únicos.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de um evento temático de fim de ano com decorações especiais.</li>
            <li>Novos desafios sazonais com recompensas exclusivas.</li>
            <li>Adição de itens cosméticos limitados para personalização de personagens.</li>
            <ul>
              <li><strong>Desafios de Fim de Ano:</strong> Complete tarefas especiais para obter recompensas exclusivas.</li>
              <li><strong>Itens Cosméticos:</strong> Roupas e acessórios especiais para o período festivo.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Novos efeitos visuais e sonoros para criar uma atmosfera mais imersiva.</li>
            <li>Melhorias nos eventos de coleta, tornando-os mais dinâmicos e recompensadores.</li>
            <ul>
              <li><strong>Ambientes Temáticos:</strong> Novos cenários e músicas ambientando o clima do evento.</li>
              <li><strong>Eventos de Coleta:</strong> Nova mecânica de recompensas para a coleta de itens sazonais.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "../media/images/patchnotes.png"
      },
      {
        "title": "Eventos Sazonais - Atualização 7.3",
        "description": "Novos eventos sazonais com recompensas exclusivas e desafios únicos.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de um evento temático de fim de ano com decorações especiais.</li>
            <li>Novos desafios sazonais com recompensas exclusivas.</li>
            <li>Adição de itens cosméticos limitados para personalização de personagens.</li>
            <ul>
              <li><strong>Desafios de Fim de Ano:</strong> Complete tarefas especiais para obter recompensas exclusivas.</li>
              <li><strong>Itens Cosméticos:</strong> Roupas e acessórios especiais para o período festivo.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Novos efeitos visuais e sonoros para criar uma atmosfera mais imersiva.</li>
            <li>Melhorias nos eventos de coleta, tornando-os mais dinâmicos e recompensadores.</li>
            <ul>
              <li><strong>Ambientes Temáticos:</strong> Novos cenários e músicas ambientando o clima do evento.</li>
              <li><strong>Eventos de Coleta:</strong> Nova mecânica de recompensas para a coleta de itens sazonais.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "../media/images/patchnotes.png"
      },

  ];

  setTimeout(() => {
    const citiesContainer = document.getElementById("cities-container");
    citiesContainer.innerHTML = "";

    newsData.forEach((news, index) => {
      const cityCard = document.createElement("div");
      cityCard.classList.add("city-card");

      const img = document.createElement("img");
      img.src = news.imgUrl;
      img.alt = "Patch notes";

      const cityInfo = document.createElement("div");
      cityInfo.classList.add("city-info");

      const title = document.createElement("h3");
      title.textContent = news.title;

      const description = document.createElement("p");
      description.textContent = news.description;

      cityInfo.appendChild(title);
      cityInfo.appendChild(description);
      cityCard.appendChild(img);
      cityCard.appendChild(cityInfo);

      // Adiciona um evento de clique para abrir o pop-up
      cityCard.addEventListener("click", () => {
        openPopup(news);
      });

      // Exibe apenas os 3 primeiros cards
      if (index < 3) {
        cityCard.classList.add("show");
      }

      citiesContainer.appendChild(cityCard);
    });

    // Lógica de navegação (esquerda/direita)
    let currentIndex = 0;
    const totalCards = newsData.length;
    const prevButton = document.getElementById("prev-arrow");
    const nextButton = document.getElementById("next-arrow");

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCards();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex + 3 < totalCards) {
        currentIndex++;
        updateCards();
      }
    });

    function updateCards() {
      const allCityCards = document.querySelectorAll(".city-card");
      allCityCards.forEach((card, index) => {
        // Aplica a suavidade ao mostrar/ocultar os cards
        if (index >= currentIndex && index < currentIndex + 3) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    }
  }, 150);
}

// Função para abrir o pop-up com as informações adicionais
function openPopup(news) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDetails = document.getElementById("popup-details");
  const popupHeaderImage = document.getElementById("popup-header-image");

  // Preenche as informações do pop-up
  popupTitle.textContent = news.title;
  popupDetails.innerHTML = news.description2;  // Usar innerHTML para renderizar as listas e títulos
  popupHeaderImage.src = news.imgUrl; // A imagem será usada no header

  // Exibe o pop-up
  popup.style.display = "flex";

  // Fecha o pop-up quando o usuário clicar no "x"
  const closeButton = document.getElementById("popup-close");
  closeButton.removeEventListener("click", closePopup); // Remover listener anterior para evitar múltiplos eventos
  closeButton.addEventListener("click", closePopup); // Adiciona novo listener de fechamento

  // Função para fechar o pop-up
  function closePopup() {
    popup.style.display = "none";
  }
}

// Chama a função para simular a atualização dos textos e criação das city-cards ao carregar a página
fetchNews();
