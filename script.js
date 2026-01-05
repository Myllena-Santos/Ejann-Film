// script.js - Funções básicas para o site

// Função para inicializar tudo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Studio Visual - Site carregado');
    
    // 1. Inicializar carrossel
    initCarrossel();
    
    // 2. Configurar botões de navegação
    initBotoesNavegacao();
    
    // 3. Atualizar ano no copyright
    atualizarAno();
});

// ======================
// 1. CARROSSEL SIMPLES
// ======================
function initCarrossel() {
    const slides = document.querySelectorAll('.slide');
    const indicadores = document.querySelectorAll('.indicador');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    
    if (slides.length === 0) return;
    
    let slideAtual = 0;
    const totalSlides = slides.length;
    
    // Função para mostrar um slide específico
    function mostrarSlide(index) {
        // Esconder todos os slides
        slides.forEach(slide => {
            slide.classList.remove('ativo');
        });
        
        // Remover ativo dos indicadores
        indicadores.forEach(indicador => {
            indicador.classList.remove('ativo');
        });
        
        // Mostrar slide atual
        slides[index].classList.add('ativo');
        indicadores[index].classList.add('ativo');
        
        slideAtual = index;
    }
    
    // Próximo slide
    function proximoSlide() {
        let novoIndex = slideAtual + 1;
        if (novoIndex >= totalSlides) {
            novoIndex = 0;
        }
        mostrarSlide(novoIndex);
    }
    
    // Slide anterior
    function slideAnterior() {
        let novoIndex = slideAtual - 1;
        if (novoIndex < 0) {
            novoIndex = totalSlides - 1;
        }
        mostrarSlide(novoIndex);
    }
    
    // Configurar eventos
    if (btnProximo) {
        btnProximo.addEventListener('click', proximoSlide);
    }
    
    if (btnAnterior) {
        btnAnterior.addEventListener('click', slideAnterior);
    }
    
    // Configurar indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', function() {
            mostrarSlide(index);
        });
    });
    
    // Auto-play básico (opcional)
    setInterval(proximoSlide, 5000);
}

// ======================
// 2. BOTÕES DE NAVEGAÇÃO
// ======================
function initBotoesNavegacao() {
    // Botão "SOBRE"
    const btnSobre = document.querySelector('.sobre-btn');
    if (btnSobre) {
        btnSobre.addEventListener('click', function() {
            const sobreSection = document.getElementById('sobre');
            if (sobreSection) {
                window.scrollTo({
                    top: sobreSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Botão "CONTATO"
    const btnContato = document.querySelector('.contato-btn');
    if (btnContato) {
        btnContato.addEventListener('click', function() {
            const contatoSection = document.getElementById('contato');
            if (contatoSection) {
                window.scrollTo({
                    top: contatoSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ======================
// 3. ATUALIZAR ANO NO COPYRIGHT
// ======================
function atualizarAno() {
    const anoElement = document.getElementById('ano-atual');
    if (anoElement) {
        const anoAtual = new Date().getFullYear();
        anoElement.textContent = anoAtual;
    }
}

// ======================
// 4. NAVEGAÇÃO POR TECLADO (extra simples)
// ======================
document.addEventListener('keydown', function(event) {
    // Tecla seta esquerda: slide anterior
    if (event.key === 'ArrowLeft') {
        const btnAnterior = document.querySelector('.anterior');
        if (btnAnterior) btnAnterior.click();
    }
    
    // Tecla seta direita: próximo slide
    if (event.key === 'ArrowRight') {
        const btnProximo = document.querySelector('.proximo');
        if (btnProximo) btnProximo.click();
    }
});