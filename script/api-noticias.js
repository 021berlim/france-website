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
        "imgUrl": "https://images.unsplash.com/photo-1571903985624-4d3d06fa3215?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Rework do Sistema de Progressão - Atualização 8.0",
        "description": "Reestruturação do sistema de progressão com novas formas de personalizar o personagem.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Reformulação do sistema de níveis e habilidades dos personagens.</li>
            <li>Adição de novas árvores de habilidades com especializações únicas.</li>
            <li>Novas opções de personalização, como talentos e poderes passivos.</li>
            <ul>
              <li><strong>Árvores de Habilidades:</strong> Escolha entre diferentes ramos de habilidades que alteram o estilo de jogo.</li>
              <li><strong>Talentos Passivos:</strong> Novos poderes que oferecem benefícios sem ações diretas no combate.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Revisão de balanceamento para garantir maior diversidade nas escolhas de progressão.</li>
            <li>Novas ferramentas de visualização do progresso do personagem e suas conquistas.</li>
            <ul>
              <li><strong>Balanceamento de Progressão:</strong> Aumento da variedade de estratégias viáveis para diferentes tipos de jogador.</li>
              <li><strong>Interface de Progressão:</strong> Novo painel para visualizar habilidades e talentos desbloqueados.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1522075469757-8f3d5a3f2e0f?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Novos Modos de Jogo - Atualização 8.1",
        "description": "Adição de novos modos de jogo com mecânicas inovadoras e desafios extras.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de um modo competitivo de equipe com regras exclusivas.</li>
            <li>Adição de um modo cooperativo com desafios contra inimigos poderosos.</li>
            <li>Novos mapas exclusivos para os modos de jogo.</li>
            <ul>
              <li><strong>Modo Competitivo:</strong> Compita contra outras equipes em partidas intensas com regras específicas.</li>
              <li><strong>Modo Cooperativo:</strong> Trabalhe com amigos para derrotar chefões poderosos e enfrentar desafios difíceis.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Rebalanceamento dos modos de jogo para garantir uma experiência mais justa e divertida.</li>
            <li>Adição de novos sistemas de recompensas baseados no desempenho nos modos de jogo.</li>
            <ul>
              <li><strong>Recompensas de Performance:</strong> Ganhe itens exclusivos e títulos ao completar desafios com sucesso.</li>
              <li><strong>Balanceamento de Modos:</strong> Ajustes para garantir que os modos sejam acessíveis a jogadores de todos os níveis.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1591012152762-507946d9f900?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Correção de Bugs e Melhorias - Atualização 8.2",
        "description": "Correções de bugs críticos e melhorias de qualidade de vida.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Correção de bugs que afetavam a jogabilidade e o progresso dos jogadores.</li>
            <li>Otimização do sistema de inventário para facilitar o gerenciamento de itens.</li>
            <li>Aprimoramento da IA dos inimigos para proporcionar batalhas mais desafiadoras.</li>
            <ul>
              <li><strong>Correções de Bugs:</strong> Solução de problemas com o sistema de missões e recompensas.</li>
              <li><strong>Gerenciamento de Itens:</strong> Agora é mais fácil gerenciar e organizar o inventário.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Melhor desempenho geral e tempos de resposta mais rápidos.</li>
            <li>Ajustes na interface para uma navegação mais intuitiva.</li>
            <ul>
              <li><strong>Desempenho Otimizado:</strong> Menor tempo de carregamento e maior fluidez.</li>
              <li><strong>Interface Aprimorada:</strong> Menus e telas mais fáceis de navegar e com melhor visibilidade.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1501594857350-48f35bc82b35?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Novos Mapas e Cenários - Atualização 8.3",
        "description": "Novos mapas com temáticas variadas e interatividade aprimorada.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de novos mapas com ambientes dinâmicos e interativos.</li>
            <li>Adição de elementos de destruição nos cenários que afetam a jogabilidade.</li>
            <li>Novos obstáculos e mecânicas de mapa para desafiar os jogadores.</li>
            <ul>
              <li><strong>Ambientes Dinâmicos:</strong> Mapas com condições climáticas e elementos que mudam ao longo do tempo.</li>
              <li><strong>Obstáculos Interativos:</strong> Elementos de mapa que podem ser destruídos ou utilizados em batalha.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Aprimoramento das texturas e dos efeitos visuais para criar uma experiência mais imersiva.</li>
            <li>Novos caminhos e áreas secretas para exploração nos mapas.</li>
            <ul>
              <li><strong>Efeitos Visuais:</strong> Melhoria nas sombras, luzes e reflexos nos cenários.</li>
              <li><strong>Exploração:</strong> Áreas escondidas com recompensas e desafios exclusivos.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1561432380-dc35d3ad2257?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Atualizações no Sistema de Recompensas - Atualização 8.4",
        "description": "Reformulação do sistema de recompensas com novos tipos de prêmios e mecânicas de progressão.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Novas recompensas baseadas no desempenho e no tempo de jogo.</li>
            <li>Adição de um sistema de prêmios diários e semanais.</li>
            <li>Recompensas mais personalizáveis, com itens exclusivos para cada jogador.</li>
            <ul>
              <li><strong>Recompensas Diárias:</strong> Ganhe prêmios por completar tarefas diárias.</li>
              <li><strong>Prêmios Personalizados:</strong> Escolha os itens que deseja receber como recompensa.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Aprimoramento da variedade de itens de recompensa, incluindo cosméticos e recursos raros.</li>
            <li>Novas formas de acompanhar o progresso nas recompensas com metas específicas.</li>
            <ul>
              <li><strong>Itens Raros:</strong> Novo sistema de recompensas para itens limitados e exclusivos.</li>
              <li><strong>Metas de Recompensa:</strong> Sistema de metas com prêmios especiais conforme o progresso do jogador.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1515878069786-0578e4e1be9d?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Melhorias no Sistema de Combate - Atualização 8.5",
        "description": "Novas mecânicas e balanceamento no sistema de combate para tornar as batalhas mais emocionantes.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Reformulação do sistema de habilidades e ataques dos personagens.</li>
            <li>Adição de novos combos e interações entre personagens.</li>
            <li>Otimização do combate em grupos, com mais sinergia entre as habilidades dos jogadores.</li>
            <ul>
              <li><strong>Combos Aprimorados:</strong> Novos combos que criam efeitos espectaculares durante a batalha.</li>
              <li><strong>Sinergia entre Personagens:</strong> Personagens agora podem combinar suas habilidades para ataques mais poderosos.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Aprimoramento na IA dos inimigos para um combate mais desafiador.</li>
            <li>Balanceamento das habilidades para tornar as batalhas mais justas e estratégicas.</li>
            <ul>
              <li><strong>Inteligência Artificial:</strong> Inimigos mais inteligentes e com comportamentos variados durante as lutas.</li>
              <li><strong>Balanceamento de Habilidades:</strong> Ajustes para garantir que todas as habilidades sejam viáveis e impactantes no combate.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1518749823837-f7e0b05ed2f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        "title": "Atualização no Sistema de Clãs - Atualização 8.6",
        "description": "Novas funcionalidades para os clãs, com mais opções de interação e desafios em grupo.",
        "description2": `
          <strong>FUNCIONALIDADES</strong>
          <ul>
            <li>Introdução de novos sistemas de interação entre membros de clãs.</li>
            <li>Novos desafios cooperativos e competitivos para clãs.</li>
            <li>Expansão das recompensas e benefícios exclusivos para clãs.</li>
            <ul>
              <li><strong>Desafios de Clãs:</strong> Tarefas e missões especiais que devem ser completadas em grupo.</li>
              <li><strong>Benefícios de Clãs:</strong> Recompensas para clãs com desempenho destacado.</li>
            </ul>
          </ul>
    
          <strong>MELHORIAS</strong>
          <ul>
            <li>Interface do sistema de clãs melhorada para facilitar a navegação.</li>
            <li>Balanceamento das recompensas para garantir uma progressão justa para todos os clãs.</li>
            <ul>
              <li><strong>Interface Aprimorada:</strong> Tela mais amigável para gerenciamento de clãs.</li>
              <li><strong>Recompensas Balanceadas:</strong> Novo sistema de recompensas para clãs, baseado na participação e progresso coletivo.</li>
            </ul>
          </ul>
        `,
        "imgUrl": "https://images.unsplash.com/photo-1600366365479-51706216987e?auto=format&fit=crop&w=800&q=80"
      }
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
