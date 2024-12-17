document.addEventListener("DOMContentLoaded", () => {
  // Tab Switching Functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Mock data loading function for VIP history
  function loadVipHistory() {
    const vipHistoryContent = document.querySelector(
      "#vip-history .table-container"
    );
    // Replace this mock data with your real data fetched from the server
    const vipData = [
      { date: "2024-12-01", type: "VIP Bronze", status: "Ativo" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
      { date: "2024-11-15", type: "VIP Silver", status: "Expirado" },
    ];

    if (vipData.length > 0) {
      let table =
        '<table class="vip-table"><thead><tr><th>Data</th><th>Tipo</th><th>Status</th></tr></thead><tbody>';
      vipData.forEach((item) => {
        table += `<tr><td>${item.date}</td><td>${item.type}</td><td>${item.status}</td></tr>`;
      });
      table += "</tbody></table>";
      vipHistoryContent.innerHTML = table;
    } else {
      vipHistoryContent.innerHTML =
        '<p class="no-data">Nenhum histórico VIP encontrado</p>';
    }
  }

  // Initial load of data
  loadVipHistory();
});

// Função para aplicar blur com visibilidade da imagem de fundo
function applyBlurToCards() {
  const userCards = document.querySelectorAll(".user-card");
  const dataCards = document.querySelectorAll(".data-card");

  // Aplicando o efeito de blur nos cards
  userCards.forEach((card) => {
    card.style.position = "relative"; // Necessário para o efeito de blur

    // Adicionando pseudo-elemento para o efeito de blur
    const blurEffect = document.createElement("div");
    blurEffect.style.position = "absolute";
    blurEffect.style.top = "0";
    blurEffect.style.left = "0";
    blurEffect.style.right = "0";
    blurEffect.style.bottom = "0";
    blurEffect.style.background = 'url("/media/images/background.png")'; // Imagem de fundo
    blurEffect.style.backgroundSize = "cover"; // A imagem cobre todo o fundo
    blurEffect.style.filter = "blur(8px)"; // Efeito de blur
    blurEffect.style.zIndex = "-1"; // Coloca o blur atrás do conteúdo do card

    card.appendChild(blurEffect);
  });

  dataCards.forEach((card) => {
    card.style.position = "relative";
    card.style.overflow = "hidden";

    const blurEffect = document.createElement("div");
    blurEffect.style.position = "absolute";
    blurEffect.style.top = "0";
    blurEffect.style.left = "0";
    blurEffect.style.right = "0";
    blurEffect.style.bottom = "0";
    blurEffect.style.background = 'url("/media/images/background.png")'; // Imagem de fundo
    blurEffect.style.backgroundSize = "cover"; // A imagem cobre todo o fundo
    blurEffect.style.filter = "blur(8px)";
    blurEffect.style.zIndex = "-1";

    card.appendChild(blurEffect);
  });

  // Atualizando o estilo do status badge
  const statusBadges = document.querySelectorAll(".status-badge");
  statusBadges.forEach((badge) => {
    badge.style.backgroundColor = "#17202a6c"; // Cor de fundo com leve transparência
    badge.style.color = "var(--color-text)"; // Cor do texto
    badge.style.padding = "0.75rem 1.5rem";
    badge.style.borderRadius = "var(--border-radius)";
    badge.style.marginBottom = "1rem";
    badge.style.width = "100%";
    badge.style.textAlign = "center";
  });
}

// Chamar a função para aplicar o blur quando a página carregar
window.addEventListener("load", applyBlurToCards);
