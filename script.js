function initScrollSuave() {
  const linksInternos = document.querySelectorAll("a[href^='#']");

  if (linksInternos.length) {
    function handleClick(event) {
      event.preventDefault();

      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", handleClick);
    });
  }
}

initScrollSuave();

function iniciarAnimacaoScroll() {
  // Seleciona todos os elementos que devem ser animados ao scroll
  const animacaoLeft = document.querySelectorAll(".js-scroll-left");

  // Verifica se existem elementos antes de continuar
  if (animacaoLeft.length) {
    // Calcula o ponto de ativação (60% da altura da janela)
    const metadeTela = window.innerHeight * 0.8;

    // Função que verifica e aplica animação nas seções conforme scroll
    function animacaoScroll() {
      animacaoLeft.forEach((elemento) => {
        // Obtém a posição relativa do elemento em relação à viewport
        const elementoTop = elemento.getBoundingClientRect().top;

        // Verifica se o elemento está dentro da área visível de ativação
        const elementoEVisivel = elementoTop - metadeTela < 0;

        // Se o elemento está visível, adiciona a classe de animação
        if (elementoEVisivel) {
          elemento.classList.add("left");
        }
        // Caso queira remover a classe quando sair da tela, descomente abaixo:
        // else {
        //   elemento.classList.remove('left');
        // }
      });
    }

    // Executa a função uma vez ao carregar a página
    animacaoScroll();

    // Adiciona o evento de scroll
    window.addEventListener("scroll", animacaoScroll);
  }
}

// Inicializa a animação ao scroll
iniciarAnimacaoScroll();

function iniciarAnimacaoScrollRight() {
  // Seleciona todos os elementos que devem ser animados ao scroll
  const animacaoLeft = document.querySelectorAll(".js-scroll-right");

  // Verifica se existem elementos antes de continuar
  if (animacaoLeft.length) {
    // Calcula o ponto de ativação (80% da altura da janela)
    const metadeTela = window.innerHeight * 0.8;

    // Função que verifica e aplica animação nas seções conforme scroll
    function animacaoScroll() {
      animacaoLeft.forEach((elemento) => {
        // Obtém a posição relativa do elemento em relação à viewport
        const elementoTop = elemento.getBoundingClientRect().top;

        // Verifica se o elemento está dentro da área visível de ativação
        const elementoEVisivel = elementoTop - metadeTela < 0;

        // Se o elemento está visível, adiciona a classe de animação
        if (elementoEVisivel) {
          elemento.classList.add("right");
        }
        // Caso queira remover a classe quando sair da tela, descomente abaixo:
        // else {
        //   elemento.classList.remove('left');
        // }
      });
    }

    // Executa a função uma vez ao carregar a página
    animacaoScroll();

    // Adiciona o evento de scroll
    window.addEventListener("scroll", animacaoScroll);
  }
}

// Inicializa a animação ao scroll
iniciarAnimacaoScrollRight();
