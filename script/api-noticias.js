function fetchNews() {
    const newsData = [
      {
        title: "7.0.0 Notas de Atualização - Grande Evento",
        description: "O evento de inverno chegou com novos mapas, itens colecionáveis e missões especiais.",
        imgUrl: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Novos Recursos no Jogo - Atualização 7.1",
        description: "Adicionados novos personagens e funcionalidades ao sistema de combate.",
        imgUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Correção de Bugs e Melhorias - Atualização 7.2",
        description: "Correções de bugs importantes e melhorias na performance do servidor.",
        imgUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80"
      }
    ];
  
    setTimeout(() => {
      const citiesContainer = document.getElementById('cities-container');
  
      citiesContainer.innerHTML = '';

      newsData.forEach(news => {
        const cityCard = document.createElement('div');
        cityCard.classList.add('city-card');
  
        const img = document.createElement('img');
        img.src = news.imgUrl;
        img.alt = "Patch notes";
  
        // Cria a div .city-info
        const cityInfo = document.createElement('div');
        cityInfo.classList.add('city-info');
  
        // Cria a tag <h3> e define o título
        const title = document.createElement('h3');
        title.textContent = news.title;
  
        // Cria a tag <p> e define a descrição
        const description = document.createElement('p');
        description.textContent = news.description;
  
        // Monta a estrutura do city-card
        cityInfo.appendChild(title);
        cityInfo.appendChild(description);
        cityCard.appendChild(img);
        cityCard.appendChild(cityInfo);
  
        // Adiciona o city-card ao container
        citiesContainer.appendChild(cityCard);
      });
    }, 150); // Simula um atraso de 1 segundo para carregar os dados
  }
  
  // Chama a função para simular a atualização dos textos e criação das city-cards ao carregar a página
  fetchNews();

