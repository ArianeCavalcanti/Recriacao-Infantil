// Função para carregar conteúdo HTML em um elemento
function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())  // Obtém o conteúdo HTML como texto
        .then(data => {
            document.getElementById(id).innerHTML = data;  // Insere o conteúdo no elemento
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));  // Tratar erros
}

// Carregar o cabeçalho e o rodapé em cada página
window.onload = function() {
    loadHTML('header-container', './header.html');  // Carrega o cabeçalho
    loadHTML('footer-container', './footer.html');  // Carrega o rodapé
}
// Função para alternar o menu no modo responsivo
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
  
    toggleButton.addEventListener("click", () => {
      navbar.classList.toggle("active"); // Alterna a classe "active" na navbar
    });
  });
  

let currentIndex = 0;  // Índice do slide atual

// Função para mover para o slide específico
function moveToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Atualiza o índice atual e move os slides
    currentIndex = (index + totalSlides) % totalSlides;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza a classe 'active' nos pontos de navegação
    updateNavDots();
}

// Função para atualizar os pontos de navegação
function updateNavDots() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Navegação automática (opcional)
setInterval(() => {
    moveToSlide(currentIndex + 1);
}, 5000);  // Muda o slide a cada 5 segundos

// Função para abrir o modal e carregar o carrossel
function openModal(cardId) {
    const modal = document.getElementById('galeriaModal');
    const carousel = document.querySelector('.carousel');
    const nav = document.querySelector('.carousel-nav');

    // Dados das imagens
    const slidesData = {
        1: ['./img/g1.jpg', './img/g2.jpg', './img/g3.jpg','./img/g4.jpg','./img/g5.jpg',
            './img/g6.jpg','./img/g7.jpg', './img/g8.jpg','./img/g9.jpg','./img/g10.jpg'],
        2: ['./img/b1.jpg', './img/b2.jpg', './img/br8.jpg','./img/br3.jpg','./img/b27.jpg',
          './img/br6.jpg','./img/b22.jpg', './img/br4.jpg','./img/b40.jpg','./img/br1.jpg'],
        3: [ './img/of10.jpg','./img/of19.jpg', './img/of5.jpg','./img/of6.jpg','./img/of8.jpg',
             './img/of9.jpg','./img/of4.jpg', './img/of3.jpg','./img/of12.jpg','./img/of21.jpg'], 
        4: ['./img/a00.jpg', './img/a45.jpg', './img/e2.jpg','img/e3.jpg','./img/a38.jpg',
            './img/a35.jpg','./img/a37.jpg', './img/b11.jpg','./img/a53.jpg','./img/a33.jpg'],
        5: ['./img/fa1.jpg', './img/fa2.jpg', './img/fa3.jpg','img/fa4.jpg','./img/fa6.jpg',
            './img/fa9.jpg','./img/fa11.jpg', './img/fa12.jpg','./img/fa13.jpg','./img/fa14.jpg'],
        6:['./img/fe1.jpg', './img/fe2.jpg', './img/t5.jpg','img/fe4.jpg','./img/t23.jpg',
            './img/fe6.jpg','./img/fe7.jpg', './img/fe8.jpg','./img/fe9.jpg','./img/fe10.jpg'],
    };

    // Limpar conteúdo anterior do modal
    carousel.innerHTML = '';
    nav.innerHTML = '';

    // Adicionar slides e pontos de navegação
    if (slidesData[cardId]) {
        slidesData[cardId].forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `<img src="${src}" alt="Slide ${index + 1}">`;
            carousel.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            dot.onclick = () => moveToSlide(index);
            nav.appendChild(dot);
        });
    }

    // Exibir o modal
    modal.style.display = 'flex';
    moveToSlide(0); // Inicia no primeiro slide
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('galeriaModal').style.display = 'none';
}

// Eventos de fechamento do modal
document.querySelector('.close-modal').addEventListener('click', closeModal);
window.addEventListener('click', function (e) {
    const modal = document.getElementById('galeriaModal');
    if (e.target === modal) {
        closeModal();
    }
});

