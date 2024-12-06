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

// Navegação automática
setInterval(() => {
    moveToSlide(currentIndex + 1);
}, 5000);  // Muda o slide a cada 5 segundos

// Inicializa o carrossel
moveToSlide(currentIndex);
