function fetchNews() {
  const newsData = [
    {
      title: "7.0.0 Notas de Atualização - Grande Evento",
      description:
        "O evento de inverno chegou com novos mapas, itens colecionáveis e missões especiais.",
      description2:
        `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de um mapa temático congelado com clima gelado e condições extremas.</li>
            <li>Novos itens colecionáveis raros, como <b>cristais congelados</b> e <strong>fragmentos de gelo</strong>.</li>
            <li>Missões especiais com recompensas exclusivas.</li>
            <ul>
              <li><strong>Missões Secundárias:</strong> Desafios especiais com itens exclusivos.</li>
              <li><strong>Missões de Coleção:</strong> Colete cristais congelados para recompensas extras.</li>
            </ul>
          </ul>

          <strong>MELHORIAS</strong>
          <ul>
            <li>Adição de uma narrativa imersiva envolvendo um novo inimigo poderoso.</li>
            <li>Capacidade do inimigo manipular o clima e alterar o curso da batalha.</li>
            <ul>
              <li><strong>Alteração Climática:</strong> O inimigo pode alterar o clima durante a batalha.</li>
              <li><strong>Imunidade Temporária:</strong> O inimigo ganha resistência a certos ataques durante o evento.</li>
            </ul>
          </ul>
        `,
      imgUrl:
        "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Novos Recursos no Jogo - Atualização 7.1",
      description:
        "Adicionados novos personagens e funcionalidades ao sistema de combate.",
      description2:
        `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Expansão do elenco de personagens com habilidades especiais e características únicas.</li>
            <li>Novos personagens alteram a dinâmica de combate de maneiras emocionantes.</li>
            <li>Habilidades ofensivas e defensivas que mudam o ritmo das batalhas.</li>
            <ul>
              <li><strong>Personagens de Ataque:</strong> Personagens com habilidades de área.</li>
              <li><strong>Personagens Defensivos:</strong> Personagens com habilidades de escudo e proteção.</li>
            </ul>
          </ul>

          <strong>MELHORIAS</strong>
          <ul>
            <li>Novas funcionalidades para maior personalização das estratégias dos jogadores.</li>
            <li>Adição de <strong>combos mais complexos</strong> e <strong>interações dinâmicas</strong> entre os personagens.</li>
            <ul>
              <li><strong>Combos Especiais:</strong> Combinações de habilidades que criam efeitos adicionais.</li>
              <li><strong>Sinergias de Personagens:</strong> Personagens podem interagir para criar ataques conjuntos.</li>
            </ul>
          </ul>
        `,
      imgUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Correção de Bugs e Melhorias - Atualização 7.2",
      description:
        "Correções de bugs importantes e melhorias na performance do servidor.",
      description2:
        `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Correção de bugs críticos que afetavam o desempenho do jogo.</li>
            <li>Otimização da performance do servidor para tempos de carregamento mais rápidos.</li>
            <li>Matchmaking mais eficiente para partidas equilibradas.</li>
            <ul>
              <li><strong>Matchmaking Avançado:</strong> Algoritmos mais inteligentes para balanceamento de jogadores.</li>
              <li><strong>Melhoria nas Conexões:</strong> Conexões mais estáveis durante o jogo.</li>
            </ul>
          </ul>

          <strong>MELHORIAS</strong>
          <ul>
            <li>Base mais sólida para futuras atualizações do jogo.</li>
            <li>Melhor estabilidade e experiência para os jogadores.</li>
            <ul>
              <li><strong>Melhoramento de Servers:</strong> Servidores mais rápidos e menos propensos a falhas.</li>
              <li><strong>Atualização Contínua:</strong> Atualizações automáticas em segundo plano para melhorias constantes.</li>
            </ul>
          </ul>
        `,
      imgUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    },
  ];
  
  setTimeout(() => {
    const citiesContainer = document.getElementById("cities-container");
    citiesContainer.innerHTML = "";

    newsData.forEach((news) => {
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

      citiesContainer.appendChild(cityCard);
    });
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
