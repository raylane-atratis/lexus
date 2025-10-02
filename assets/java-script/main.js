// main.js - JavaScript Unificado para Todas as Páginas (ATUALIZADO)

// =============================================
// MÓDULO PRINCIPAL - INICIALIZAÇÃO
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa componentes globais (presentes em todas as páginas)
    initGlobalComponents();
    
    // Inicializa componentes específicos por página
    initPageSpecificComponents();
});

// =============================================
// COMPONENTES GLOBAIS
// =============================================

function initGlobalComponents() {
    initMenuToggle();
    initCarousels();
    initFAQ(); // Adicionado FAQ global
}

// Menu Toggle - Presente em todas as páginas (CORRIGIDO)
function initMenuToggle() {
    const toggle = document.getElementById('menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (toggle && navWrapper) {
        // Remove event listeners anteriores para evitar duplicação
        toggle.replaceWith(toggle.cloneNode(true));
        const newToggle = document.getElementById('menu-toggle');
        
        newToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique propague
            navWrapper.classList.toggle('active');
            
            // Alternar atributo aria-expanded para acessibilidade
            const isExpanded = navWrapper.classList.contains('active');
            newToggle.setAttribute('aria-expanded', isExpanded);
            
            // Prevenir comportamento padrão
            e.preventDefault();
        });

        // Fechar menu ao clicar fora (mais específico)
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-wrapper') && !e.target.closest('#menu-toggle')) {
                navWrapper.classList.remove('active');
                newToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Fechar menu ao pressionar Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navWrapper.classList.contains('active')) {
                navWrapper.classList.remove('active');
                newToggle.setAttribute('aria-expanded', 'false');
                newToggle.focus();
            }
        });
    }
}

// Carrosséis - Presentes em múltiplas páginas
function initCarousels() {
    // Carrossel de Carros (Index e Página 2)
    if ($('.owl-carros').length) {
        initCarrosCarousel();
    }

    // Carrossel Diferenciais (Index e Página 3)
    if ($('.owl-diferenciais').length) {
        $('.owl-diferenciais').owlCarousel({
            loop: false,
            margin: 0,
            dots: true,
            nav: false,
            autoplay: false,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                800: { items: 3 },
                1000: { items: 5 }
            }
        });
    }

    // Carrossel Conheça Serviços (Index)
    if ($('.owl-conheca-servicos').length) {
        $('.owl-conheca-servicos').owlCarousel({
            loop: false,
            margin: 18,
            dots: true,
            nav: false,
            autoplay: false,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 3 }
            }
        });
    }

    // Carrossel Banner Principal (Index e Página 3)
    if ($('.owl-banner-principal').length) {
        $('.owl-banner-principal').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 }
            }
        });
    }

    // Carrossel Serviços (Página 5)
    if ($('.owl-servicos').length) {
        $('.owl-servicos').owlCarousel({
            loop: false,
            margin: 10,
            dots: true,
            nav: false,
            autoplay: false,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });
    }
}

// =============================================
// CARROSSEL DE CARROS COM FILTRO
// =============================================

function initCarrosCarousel() {
    $('.owl-carros').owlCarousel({
        loop: false,
        margin: 20,
        dots: true,
        nav: false,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });

    // Salva os slides originais para o filtro
    window.allItemsHTML = $('.owl-carros .item').map(function() {
        return this.outerHTML;
    }).get();
}

// Função de Filtro de Carros (Global)
function filterCars(type, clickedBtn) {
    // Atualiza botões ativos
    document.querySelectorAll('.filtro-btn, .tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    
    clickedBtn.classList.add('active');
    clickedBtn.setAttribute('aria-selected', 'true');

    // Verifica se existe o array de items
    if (!window.allItemsHTML) {
        console.warn('Array allItemsHTML não encontrado');
        return;
    }

    // Filtra os slides
    const filteredHTML = window.allItemsHTML.filter(html => {
        return type === 'all' || html.includes(`class="item ${type}"`) || html.includes(`class="item ${type} `);
    });

    // Substitui os slides no carrossel
    if (filteredHTML.length > 0) {
        $('.owl-carros').trigger('replace.owl.carousel', [filteredHTML.join('')]).trigger('refresh.owl.carousel');
    }
}

// =============================================
// FAQ - COMPONENTE GLOBAL
// =============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-details');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            // Configura estado inicial
            updateFAQState(item);
            
            // Adiciona listener para mudanças
            item.addEventListener('toggle', function() {
                updateFAQState(this);
            });
        });
    }
}

function updateFAQState(faqElement) {
    const icon = faqElement.querySelector('.faq-icone');
    const textElement = faqElement.querySelector('.faq-texto');
    
    if (faqElement.open) {
        // Estado aberto
        if (icon) icon.src = icon.src.replace('aberto.svg', 'fechado.svg');
        if (textElement) textElement.textContent = 'Fechar resposta';
    } else {
        // Estado fechado
        if (icon) icon.src = icon.src.replace('fechado.svg', 'aberto.svg');
        if (textElement) textElement.textContent = 'Mostrar resposta';
    }
}

// =============================================
// COMPONENTES ESPECÍFICOS POR PÁGINA
// =============================================

function initPageSpecificComponents() {
    // Página 2 - Modelos
    if (document.querySelector('.cabecalho-pagina') && document.querySelector('.carrossel-modelos')) {
        initPage2Components();
    }

    // Página 3 - Detalhes do Modelo
    if (document.querySelector('.potencia') || document.querySelector('.carro-in-ex')) {
        initPage3Components();
    }

    // Página 5 - Serviços
    if (document.getElementById('formulario-agendamento')) {
        initPage5Components();
    }

    // Página 9 - Contatos (NOVO)
    if (document.querySelector('.perguntas-frequentes')) {
        initPage9Components();
    }
}

// =============================================
// PÁGINA 2 - COMPONENTES ESPECÍFICOS
// =============================================

function initPage2Components() {
    console.log('Inicializando componentes da página 2 - Modelos');
    // Componentes específicos da página de modelos podem ser adicionados aqui
}

// =============================================
// PÁGINA 3 - COMPONENTES
// =============================================

function initPage3Components() {
    console.log('Inicializando componentes da página 3 - Detalhes do Modelo');
    
    // Inicializa o filtro de imagens interno/externo
    initImageFilter();
    
    // Inicializa os contadores de potência
    initPotenciaCounters();
}

// Filtro de imagens interno/externo
function initImageFilter() {
    const filterButtons = document.querySelectorAll('.carro-in-ex .filtro-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const type = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                filterCarImages(type, this);
            });
        });
    }
}

// Função para filtrar imagens (interno/externo)
function filterCarImages(type, clickedBtn) {
    // Atualiza botões ativos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    clickedBtn.classList.add('active');
    clickedBtn.setAttribute('aria-selected', 'true');

    // Mostra/oculta imagens
    document.querySelectorAll('.carros-in .item').forEach(item => {
        if (type === 'all' || item.classList.contains(type)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Contadores de potência
function initPotenciaCounters() {
    // Observador para a seção de potência
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    iniciarContadores();
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    const potenciaSection = document.querySelector('.potencia');
    if (potenciaSection) {
        observer.observe(potenciaSection);
    }
}

function iniciarContadores() {
    const contadores = [
        { id: 'contador', target: 2.4, suffix: '' },
        { id: 'contador2', target: 371, suffix: '' },
        { id: 'contador3', target: 55, suffix: '' },
        { id: 'contador4', target: 210, suffix: '' },
        { id: 'contador5', target: 6.2, suffix: '' }
    ];

    contadores.forEach(contador => {
        const element = document.getElementById(contador.id);
        if (element) {
            animateCounter(element, contador.target, 2000, contador.suffix);
        }
    });
}

function animateCounter(element, target, duration, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toFixed(1) + suffix;
    }, 16);
}

// =============================================
// PÁGINA 5 - COMPONENTES
// =============================================

function initPage5Components() {
    const formulario = document.getElementById('formulario-agendamento');
    const formDestaque = document.getElementById('form-destaque');

    if (formulario && formDestaque) {
        document.querySelectorAll('a[href="#formulario-agendamento"]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                formulario.scrollIntoView({ behavior: 'smooth' });

                formDestaque.classList.add('destaque');

                setTimeout(() => {
                    formDestaque.classList.remove('destaque');
                }, 3000);
            });
        });

        const select = document.getElementById('select-cor');
        if (select) {
            select.addEventListener('change', function () {
                if (select.value === '') {
                    select.classList.add('placeholder');
                } else {
                    select.classList.remove('placeholder');
                }
            });
        }
    }
}

// =============================================
// PÁGINA 9 - COMPONENTES ESPECÍFICOS (NOVO)
// =============================================

function initPage9Components() {
    console.log('Inicializando componentes da página 9 - Contatos');
    
    // Inicializa validação do formulário de contato
    initContactFormValidation();
    
    // Inicializa funcionalidades específicas do FAQ
    initPage9FAQ();
}

function initContactFormValidation() {
    const form = document.querySelector('.form-contato');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff4444';
                } else {
                    field.style.borderColor = '#ffffff';
                }
            });
            
            if (isValid) {
                // Simula envio do formulário
                console.log('Formulário enviado com sucesso!');
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
}

function initPage9FAQ() {
    // Funcionalidades específicas do FAQ da página 9
    const faqItems = document.querySelectorAll('.faq-details');
    
    faqItems.forEach((item, index) => {
        // Adiciona IDs únicos para acessibilidade
        item.id = `faq-${index + 1}`;
        
        const summary = item.querySelector('.faq-summary');
        if (summary) {
            summary.setAttribute('aria-controls', `faq-content-${index + 1}`);
        }
        
        const content = item.querySelector('.faq-conteudo');
        if (content) {
            content.id = `faq-content-${index + 1}`;
        }
    });
}

// =============================================
// UTILITÁRIOS
// =============================================

// Função para detectar mudança de página
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('pagina2.html') || path.endsWith('/pagina2')) return 'modelos';
    if (path.includes('pagina3.html') || path.endsWith('/pagina3')) return 'detalhes-modelo';
    if (path.includes('pagina5.html') || path.endsWith('/pagina5')) return 'servicos';
    return 'index';
}