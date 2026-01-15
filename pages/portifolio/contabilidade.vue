<template>
  <div class="contabilidade-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>
      
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="badge">
            <span class="dot"></span>
            Abertura 100% Gratuita
          </div>
          
          <h1>
            Contabilidade que
            <span class="highlight">Impulsiona</span>
            seu Negócio
          </h1>
          
          <p class="lead">
            Esqueça a burocracia. Oferecemos soluções contábeis completas com tecnologia, 
            transparência e atendimento personalizado para você focar no crescimento da sua empresa.
          </p>
          
          <div class="cta-group">
            <button class="btn btn-primary">
              Começar Gratuitamente
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="M8 7L12 10L8 13V7Z" fill="currentColor"/>
              </svg>
              Ver Como Funciona
            </button>
          </div>
          
          <div class="trust-row">
            <div class="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Sem Taxas Ocultas
            </div>
            <div class="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Suporte em 24h
            </div>
            <div class="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Migração Gratuita
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="stats-grid">
            <!-- Card Principal - Crescimento -->
            <div class="stat-card stat-card-featured" style="--delay: 0s" data-tilt>
              <div class="card-shine"></div>
              <div class="stat-header">
                <span>Crescimento</span>
                <span class="trend trend-animated">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 12L8 8L12 12L16 4" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
                    <path d="M13 4H16V7" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </span>
              </div>
              <div class="stat-value" data-counter="32.5">+32.5%</div>
              <div class="stat-chart">
                <div class="bar" style="--bar-height: 45%; --bar-delay: 0s"></div>
                <div class="bar" style="--bar-height: 60%; --bar-delay: 0.1s"></div>
                <div class="bar" style="--bar-height: 75%; --bar-delay: 0.2s"></div>
                <div class="bar" style="--bar-height: 85%; --bar-delay: 0.3s"></div>
              </div>
              <p class="stat-sublabel">↑ 12% vs mês anterior</p>
            </div>
            
            <!-- Card Economia -->
            <div class="stat-card stat-card-compact" style="--delay: 0.15s" data-tilt>
              <div class="card-shine"></div>
              <div class="stat-header">
                <span>Economia</span>
                <span class="icon-pulse">💰</span>
              </div>
              <div class="stat-value stat-value-highlight" data-counter="45800">R$ 45.8K</div>
              <p class="stat-label">Este mês</p>
              <div class="micro-trend positive">+22%</div>
            </div>
            
            <!-- Card Receita -->
            <div class="stat-card" style="--delay: 0.3s" data-tilt>
              <div class="card-shine"></div>
              <div class="stat-header">
                <span>Receita</span>
                <span class="icon-success">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#10b981" stroke-width="2"/>
                    <path d="M5 8L7 10L11 6" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </span>
              </div>
              <div class="stat-value" data-counter="127000">R$ 127K</div>
              <div class="progress">
                <div class="progress-bar" style="--progress-width: 68%"></div>
              </div>
              <p class="stat-sublabel">68% da meta mensal</p>
            </div>
            
            <!-- Micro Card - Clientes -->
            <div class="stat-card stat-card-micro" style="--delay: 0.45s" data-tilt>
              <div class="card-shine"></div>
              <div class="micro-icon">👥</div>
              <div class="micro-value" data-counter="248">248</div>
              <div class="micro-label">Clientes Ativos</div>
            </div>
            
            <!-- Micro Card - Satisfação -->
            <div class="stat-card stat-card-micro stat-card-success" style="--delay: 0.6s" data-tilt>
              <div class="card-shine"></div>
              <div class="micro-icon">⭐</div>
              <div class="micro-value" data-counter="4.9">4.9</div>
              <div class="micro-label">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="social-proof">
      <div class="container">
        <div class="proof-grid">
          <div class="proof-item" style="--delay: 0s">
            <div class="proof-icon">🏢</div>
            <div class="proof-number" data-counter="500">500+</div>
            <div class="proof-label">Empresas Atendidas</div>
            <div class="proof-bar"></div>
          </div>
          <div class="proof-item" style="--delay: 0.15s">
            <div class="proof-icon">📅</div>
            <div class="proof-number" data-counter="10">10 Anos</div>
            <div class="proof-label">de Experiência</div>
            <div class="proof-bar"></div>
          </div>
          <div class="proof-item" style="--delay: 0.3s">
            <div class="proof-icon">⭐</div>
            <div class="proof-number" data-counter="98">98%</div>
            <div class="proof-label">Satisfação</div>
            <div class="proof-bar"></div>
          </div>
          <div class="proof-item" style="--delay: 0.45s">
            <div class="proof-icon">⚡</div>
            <div class="proof-number" data-counter="24">24h</div>
            <div class="proof-label">Tempo de Resposta</div>
            <div class="proof-bar"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">✨ Soluções Completas</span>
          <h2>Transforme Sua <span class="highlight">Contabilidade</span> em Vantagem Competitiva</h2>
          <p class="section-subtitle">Mais que números: estratégia, economia e crescimento para o seu negócio</p>
          <div class="header-benefits">
            <div class="benefit-pill">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>Sem Burocracia</span>
            </div>
            <div class="benefit-pill">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>Economia Garantida</span>
            </div>
            <div class="benefit-pill">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>Suporte Dedicado</span>
            </div>
          </div>
        </div>
        
        <!-- Services Carousel -->
        <div class="services-carousel-wrapper">
          <!-- Navigation Buttons -->
          <button class="carousel-nav carousel-nav-prev" @click="scrollCarousel('prev')" aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <div class="services-carousel" ref="servicesCarousel">
            <div class="service-card" v-for="(service, i) in services" :key="i">
              <div class="service-card-inner">
                
                <!-- Content -->
                <div class="service-content">
                  <h3 class="service-title">{{ service.title }}</h3>
                  <p class="service-description">{{ service.description }}</p>
                  
                  <!-- Features -->
                  <ul class="service-features">
                    <li v-for="(feature, j) in service.features" :key="j">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.5" opacity="0.2"/>
                        <path d="M6 9L8 11L12 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- CTA -->
                <div class="service-footer">
                  <button class="service-cta">
                    <span>Saiba Mais</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M7 13L11 9L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <button class="carousel-nav carousel-nav-next" @click="scrollCarousel('next')" aria-label="Próximo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
          <button 
            v-for="(service, i) in services" 
            :key="i"
            class="indicator-dot"
            :class="{ active: currentSlide === i }"
            @click="goToSlide(i)"
            :aria-label="`Ir para serviço ${i + 1}`"
          ></button>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, i) in features" :key="i" :style="`--delay: ${i * 0.1}s`">
            <div class="feature-icon-wrapper">
              <div class="feature-icon-bg"></div>
              <div class="feature-icon" v-html="feature.iconSvg"></div>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="process">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Como Funciona</span>
          <h2>Processo <span class="highlight">Simples</span> e Rápido</h2>
        </div>
        
        <div class="process-grid">
          <div class="process-step" v-for="(step, i) in steps" :key="i">
            <div class="step-number">{{ i + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Depoimentos</span>
          <h2>O Que Nossos <span class="highlight">Clientes</span> Dizem</h2>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(testimonial, i) in testimonials" :key="i">
            <div class="quote">"</div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="author">
              <div class="avatar">{{ testimonial.initials }}</div>
              <div>
                <div class="author-name">{{ testimonial.name }}</div>
                <div class="author-role">{{ testimonial.role }}</div>
              </div>
            </div>
            <div class="rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta">
      <div class="cta-glow"></div>
      <div class="container">
        <div class="cta-content">
          <div class="badge">
            <span class="dot"></span>
            Oferta por Tempo Limitado
          </div>
          <h2>Pronto para <span class="highlight">Simplificar</span> Sua Contabilidade?</h2>
          <p>Fale com um especialista e descubra como podemos ajudar sua empresa a crescer com segurança</p>
          
          <button class="btn btn-primary btn-large">
            Agendar Consultoria Gratuita
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <div class="cta-benefits">
            <div class="benefit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Sem Compromisso
            </div>
            <div class="benefit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Resposta em 1 Dia
            </div>
            <div class="benefit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              100% Online
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

definePageMeta({
  layout: 'blank'
});

const servicesCarousel = ref(null);
const currentSlide = ref(0);
let autoPlayInterval = null;
let pauseTimeout = null;

const services = [
  {
    icon: '🏢',
    title: 'Abrir Empresa Grátis',
    description: 'Abertura de empresa sem custos. Cuidamos de todo o processo burocrático para você começar seu negócio.',
    features: ['Consultoria gratuita', 'Registro na Junta Comercial', 'CNPJ e inscrições', 'Alvarás e licenças']
  },
  {
    icon: '📊',
    title: 'Contabilidade Completa',
    description: 'Gestão contábil completa com relatórios gerenciais e suporte dedicado para seu negócio crescer.',
    features: ['Escrituração fiscal e contábil', 'Balanços e demonstrativos', 'Departamento pessoal', 'Apuração de impostos']
  },
  {
    icon: '💼',
    title: 'Assessoria Contábil',
    description: 'Consultoria estratégica para tomada de decisões e planejamento tributário do seu negócio.',
    features: ['Planejamento tributário', 'Análise de indicadores', 'Consultoria estratégica', 'Redução de custos']
  },
  {
    icon: '🔄',
    title: 'Trocar de Contador',
    description: 'Migração simples e sem burocracia. Fazemos toda a transição da sua contabilidade atual.',
    features: ['Transição sem custo', 'Análise da situação fiscal', 'Migração de dados', 'Suporte completo']
  },
  {
    icon: '📈',
    title: 'Deixar de Ser MEI',
    description: 'Desenquadramento do MEI e migração para ME ou EPP de forma simples e orientada.',
    features: ['Análise do melhor regime', 'Processo de desenquadramento', 'Regularização fiscal', 'Acompanhamento total']
  }
];

// Auto-play functions
const startAutoPlay = () => {
  stopAutoPlay(); // Limpa qualquer intervalo existente
  autoPlayInterval = setInterval(() => {
    autoAdvance();
  }, 3000); // 3 segundos
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

const pauseAutoPlay = () => {
  stopAutoPlay();
  
  // Retoma após 5 segundos de inatividade
  if (pauseTimeout) {
    clearTimeout(pauseTimeout);
  }
  pauseTimeout = setTimeout(() => {
    startAutoPlay();
  }, 5000);
};

const autoAdvance = () => {
  if (!servicesCarousel.value) return;
  
  const nextSlide = (currentSlide.value + 1) % services.length;
  goToSlide(nextSlide);
};

const scrollCarousel = (direction) => {
  pauseAutoPlay(); // Pausa quando usuário interage
  
  if (!servicesCarousel.value) return;
  
  const carousel = servicesCarousel.value;
  const cardWidth = carousel.querySelector('.service-card').offsetWidth;
  const gap = 32; // 2rem gap
  const scrollAmount = cardWidth + gap;
  
  if (direction === 'prev') {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    currentSlide.value = Math.max(0, currentSlide.value - 1);
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    currentSlide.value = Math.min(services.length - 1, currentSlide.value + 1);
  }
};

const goToSlide = (index) => {
  if (!servicesCarousel.value) return;
  
  const carousel = servicesCarousel.value;
  const cardWidth = carousel.querySelector('.service-card').offsetWidth;
  const gap = 32;
  const scrollPosition = (cardWidth + gap) * index;
  
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  currentSlide.value = index;
};

// Lifecycle hooks
onMounted(() => {
  startAutoPlay();
  
  // Pausa ao passar o mouse sobre o carrossel
  if (servicesCarousel.value) {
    servicesCarousel.value.addEventListener('mouseenter', stopAutoPlay);
    servicesCarousel.value.addEventListener('mouseleave', startAutoPlay);
  }
});

onUnmounted(() => {
  stopAutoPlay();
  if (pauseTimeout) {
    clearTimeout(pauseTimeout);
  }
});

const features = [
  { 
    iconSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L18.5 11.5L26 14L18.5 16.5L16 24L13.5 16.5L6 14L13.5 11.5L16 4Z" fill="url(#grad1)" stroke="url(#grad1)" stroke-width="2"/>
      <path d="M24 8L25 11L28 12L25 13L24 16L23 13L20 12L23 11L24 8Z" fill="url(#grad1)" opacity="0.6"/>
      <defs>
        <linearGradient id="grad1" x1="6" y1="4" x2="28" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6366f1"/>
          <stop offset="1" stop-color="#a855f7"/>
        </linearGradient>
      </defs>
    </svg>`,
    title: 'Atendimento Rápido', 
    description: 'Respondemos suas dúvidas em até 24 horas. Suporte ágil quando você mais precisa.' 
  },
  { 
    iconSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="4" fill="url(#grad2)"/>
      <path d="M24 26C24 21.5817 20.4183 18 16 18C11.5817 18 8 21.5817 8 26" stroke="url(#grad2)" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 10C20 12.2091 18.2091 14 16 14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      <defs>
        <linearGradient id="grad2" x1="8" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8b5cf6"/>
          <stop offset="1" stop-color="#6366f1"/>
        </linearGradient>
      </defs>
    </svg>`,
    title: 'Contador Dedicado', 
    description: 'Um profissional exclusivo para sua empresa, que conhece seu negócio a fundo.' 
  },
  { 
    iconSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="url(#grad3)" stroke-width="2"/>
      <path d="M16 8V16L20 20" stroke="url(#grad3)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="2" fill="url(#grad3)"/>
      <defs>
        <linearGradient id="grad3" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stop-color="#10b981"/>
          <stop offset="1" stop-color="#059669"/>
        </linearGradient>
      </defs>
    </svg>`,
    title: 'Preço Justo', 
    description: 'Planos transparentes e sem taxas ocultas. Você paga pelo que realmente precisa.' 
  },
  { 
    iconSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" fill="url(#grad4)"/>
      <path d="M16 10L18 14L22 15L19 18L20 22L16 20L12 22L13 18L10 15L14 14L16 10Z" fill="white" opacity="0.3"/>
      <defs>
        <linearGradient id="grad4" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f59e0b"/>
          <stop offset="1" stop-color="#ea580c"/>
        </linearGradient>
      </defs>
    </svg>`,
    title: 'Foco no Seu Sucesso', 
    description: 'Mais que obrigações, oferecemos consultoria para otimizar seus resultados.' 
  }
];

const steps = [
  { title: 'Contato Inicial', description: 'Entre em contato conosco e receba uma consultoria gratuita sobre suas necessidades.' },
  { title: 'Análise Personalizada', description: 'Analisamos sua situação atual e criamos uma proposta sob medida.' },
  { title: 'Migração Sem Burocracia', description: 'Cuidamos de toda a transição. Você não precisa se preocupar com nada.' },
  { title: 'Gestão Contínua', description: 'Acompanhamos mensalmente seu negócio com relatórios e consultoria estratégica.' }
];

const testimonials = [
  { text: 'Trocar de contador nunca foi tão fácil! O processo foi rápido e sem complicação. Hoje tenho muito mais clareza sobre as finanças da minha empresa.', name: 'Carlos Mendes', role: 'Proprietário, Loja Tech', initials: 'CM' },
  { text: 'Abri minha empresa gratuitamente e o suporte foi excepcional. Eles me orientaram em cada etapa e hoje meu negócio está crescendo!', name: 'Ana Paula Silva', role: 'Fundadora, Studio Criativo', initials: 'AS' },
  { text: 'Quando precisei sair do MEI, eles cuidaram de tudo. Processo tranquilo e com total transparência. Recomendo!', name: 'Ricardo Oliveira', role: 'Empresário', initials: 'RO' }
];

useHead({
  title: 'Contabilidade Moderna e Estratégica | Transforme Seus Números',
  meta: [
    { name: 'description', content: 'Soluções contábeis completas que vão além dos números. Tecnologia de ponta combinada com expertise humana para impulsionar o crescimento do seu negócio.' }
  ]
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contabilidade-page {
  font-family: 'Inter', -apple-system, sans-serif;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #0f172a;
  overflow: hidden;
  padding: 6rem 0 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: #6366f1;
  top: -100px;
  left: -100px;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: #ec4899;
  top: 40%;
  right: -80px;
  animation-delay: -7s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: #06b6d4;
  bottom: -80px;
  left: 30%;
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
    border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
  }
  67% {
    transform: translate(-20px, 20px) rotate(240deg);
    border-radius: 50% 70% 30% 40% / 60% 30% 70% 40%;
  }
}

.hero-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  max-width: 600px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 100px;
  color: #c7d2fe;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 
    0 4px 12px rgba(99, 102, 241, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.badge::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  animation: badgeShimmer 3s ease-in-out infinite;
}

@keyframes badgeShimmer {
  0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
  50% { transform: translateX(100%) translateY(100%) rotate(30deg); }
}

.dot {
  width: 9px;
  height: 9px;
  background: radial-gradient(circle, #8b5cf6, #6366f1);
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
}

@keyframes dotPulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
    box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
  }
  50% { 
    opacity: 0.6; 
    transform: scale(0.85);
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.8);
  }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  animation: slideUp 0.6s ease-out 0.2s both;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.highlight {
  color: #818cf8;
}

.lead {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin-bottom: 2rem;
  animation: slideUp 0.6s ease-out 0.4s both;
}

.cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  animation: slideUp 0.6s ease-out 0.6s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 2rem;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:active::before {
  width: 400px;
  height: 400px;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 
    0 10px 30px rgba(99, 102, 241, 0.4),
    0 4px 12px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 20px 50px rgba(99, 102, 241, 0.5),
    0 8px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary svg {
  transition: transform 0.3s ease;
}

.btn-primary:hover svg {
  transform: translateX(4px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.35);
}

.btn-large {
  padding: 1.375rem 2.75rem;
  font-size: 1.125rem;
  border-radius: 16px;
}

.trust-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: slideUp 0.6s ease-out 0.8s both;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Hero Visual */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
}

.stat-card {
  position: relative;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(30px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: var(--delay);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.stat-card-featured {
  grid-column: 1 / 3;
  background: rgba(15, 23, 42, 0.7);
}

.stat-card-compact {
  grid-row: 2;
}

.stat-card-micro {
  padding: 1.25rem;
  text-align: center;
}

.stat-card-success {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.4);
}

/* Card Tilt Effect on Hover */
.stat-card[data-tilt]:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.4),
    0 5px 15px rgba(99, 102, 241, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Card Shine Effect */
.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.6s;
  pointer-events: none;
}

.stat-card:hover .card-shine {
  opacity: 1;
  animation: shine 1.5s ease-in-out;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(30deg); }
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trend {
  font-size: 1.25rem;
  color: #10b981;
}

.trend-animated {
  animation: trendPulse 2s ease-in-out infinite;
}

@keyframes trendPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.8; }
}

.icon-pulse {
  animation: iconPulse 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.icon-success {
  display: inline-flex;
  animation: successPop 1s ease-out;
}

@keyframes successPop {
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  60% { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.stat-value-highlight {
  background: linear-gradient(135deg, #a5b4fc, #c7d2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.stat-sublabel {
  font-size: 0.8rem;
  color: #10b981;
  font-weight: 600;
  margin-top: 0.5rem;
  text-shadow: 0 1px 4px rgba(16, 185, 129, 0.4);
}

/* Micro Cards */
.micro-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.micro-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.25rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.micro-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.micro-trend {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.micro-trend.positive {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
}

/* Chart Improvements */
.stat-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 60px;
  margin-top: 1rem;
}

.bar {
  flex: 1;
  height: var(--bar-height, 50%);
  background: linear-gradient(180deg, #8b5cf6, #6366f1);
  border-radius: 6px 6px 0 0;
  box-shadow: 0 -2px 8px rgba(99, 102, 241, 0.3);
  animation: growBar 1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: calc(var(--delay) + var(--bar-delay, 0s));
  position: relative;
  overflow: hidden;
}

.bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent);
  border-radius: 6px 6px 0 0;
}

@keyframes growBar {
  from { 
    transform: scaleY(0);
    opacity: 0;
  }
  to { 
    transform: scaleY(1);
    opacity: 1;
  }
}

/* Progress Bar */
.progress {
  height: 8px;
  background: rgba(99, 102, 241, 0.15);
  border-radius: 100px;
  overflow: hidden;
  margin-top: 1rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.progress-bar {
  height: 100%;
  width: var(--progress-width, 0%);
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 100px;
  box-shadow: 0 0 8px rgba(99, 102, 241, 0.6);
  animation: fillProgress 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progressShimmer 2s ease-in-out infinite;
}

@keyframes fillProgress {
  from { width: 0; }
}

@keyframes progressShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

/* Social Proof */
.social-proof {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
  position: relative;
  overflow: hidden;
}

.social-proof::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.social-proof::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  filter: blur(60px);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.proof-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.proof-item {
  position: relative;
  text-align: center;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: var(--delay);
  overflow: hidden;
}

.proof-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    transparent 50%,
    rgba(139, 92, 246, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.5s;
}

.proof-item:hover {
  transform: translateY(-12px) scale(1.05);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 
    0 20px 60px rgba(99, 102, 241, 0.3),
    0 8px 16px rgba(139, 92, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.proof-item:hover::before {
  opacity: 1;
}

.proof-icon {
  position: relative;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
}

.proof-number {
  position: relative;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a5b4fc 0%, #c7d2fe 50%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
  margin-bottom: 1rem;
  line-height: 1;
  text-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
  letter-spacing: -0.02em;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.proof-item:hover .proof-number {
  animation: gradientShift 1.5s ease infinite, numberPulse 0.6s ease;
}

@keyframes numberPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.proof-label {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.03em;
  line-height: 1.4;
  transition: all 0.3s ease;
}

.proof-item:hover .proof-label {
  color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
}

.proof-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
}

.proof-item:hover .proof-bar {
  transform: scaleX(1);
  animation: barShimmer 2s linear infinite;
}

@keyframes barShimmer {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

/* Particle Effect */
.proof-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: all 0.6s ease;
}

.proof-item:hover::after {
  transform: translate(-50%, -50%) scale(3);
  opacity: 0.5;
}

/* Services Section */
.services {
  position: relative;
  padding: 7rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Section Header */
.section-header {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-badge {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 100px;
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
  animation: slideDown 0.6s ease-out;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
  line-height: 1.15;
  animation: slideUp 0.6s ease-out 0.2s both;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 500;
  animation: slideUp 0.6s ease-out 0.4s both;
}

/* Benefit Pills */
.header-benefits {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: slideUp 0.6s ease-out 0.6s both;
}

.benefit-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 100px;
  color: #059669;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1);
}

.benefit-pill:hover {
  background: rgba(16, 185, 129, 0.12);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.benefit-pill svg {
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3));
}

/* Carousel Wrapper */
.services-carousel-wrapper {
  position: relative;
  z-index: 10;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 60px;
}

/* Carousel Container */
.services-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  padding: 0.5rem;
  margin: -0.5rem;
}

.services-carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

/* Service Card */
.service-card {
  flex: 0 0 auto;
  width: 380px;
  scroll-snap-align: start;
  animation: none; /* Remove slideUp animation for carousel */
}

.service-card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem 2rem;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-card-inner {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 
    0 20px 50px rgba(99, 102, 241, 0.15),
    0 8px 20px rgba(99, 102, 241, 0.08);
}

.service-card:hover .service-card-inner::before {
  transform: scaleX(1);
}

/* Icon Badge */
.service-icon-badge {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.4s ease;
}

.service-card:hover .icon-bg {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
  border-color: rgba(99, 102, 241, 0.4);
  transform: rotate(10deg) scale(1.05);
}

.service-emoji {
  position: relative;
  font-size: 2.5rem;
  z-index: 1;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  transition: transform 0.4s ease;
}

.service-card:hover .service-emoji {
  transform: scale(1.15);
}

/* Content */
.service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.service-card:hover .service-title {
  color: #6366f1;
}

.service-description {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Features List */
.service-features {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  text-align: left;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: #475569;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.3s ease;
}

.service-features li:hover {
  color: #0f172a;
  transform: translateX(4px);
}

.service-features li svg {
  flex-shrink: 0;
  margin-top: 0.125rem;
  color: #6366f1;
  transition: transform 0.3s ease;
}

.service-features li:hover svg {
  transform: scale(1.1);
}

/* Footer CTA */
.service-footer {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
}

.service-cta {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  color: #6366f1;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-cta::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.service-cta:hover::before {
  width: 300px;
  height: 300px;
}

.service-cta span,
.service-cta svg {
  position: relative;
  z-index: 1;
}

.service-cta:hover {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.service-cta svg {
  transition: transform 0.3s ease;
}

.service-cta:hover svg {
  transform: translateX(4px);
}

/* Carousel Navigation Buttons */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  color: #6366f1;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.carousel-nav:hover {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-color: transparent;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.carousel-nav-prev {
  left: 0;
}

.carousel-nav-next {
  right: 0;
}

/* Carousel Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator-dot:hover {
  background: #94a3b8;
  transform: scale(1.2);
}

.indicator-dot.active {
  width: 32px;
  border-radius: 5px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
}

/* Features */
.features {
  padding: 7rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.features::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.features-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: slideUp 0.6s ease-out both;
  animation-delay: var(--delay);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-12px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 
    0 20px 50px rgba(99, 102, 241, 0.15),
    0 8px 20px rgba(99, 102, 241, 0.08);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
  border-radius: 50%;
  transition: all 0.4s ease;
}

.feature-card:hover .feature-icon-bg {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
  transform: scale(1.1);
}

.feature-icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.feature-card:hover h3 {
  color: #6366f1;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Process */
.process {
  padding: 6rem 0;
  background: white;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  text-align: center;
  padding: 1.5rem;
}

.step-number {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  background: #6366f1;
  color: white;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.process-step h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.process-step p {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Testimonials */
.testimonials {
  padding: 6rem 0;
  background: #f8fafc;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  padding: 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.quote {
  font-size: 3rem;
  color: rgba(99, 102, 241, 0.2);
  line-height: 1;
  font-family: Georgia, serif;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #0f172a;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6366f1;
  color: white;
  border-radius: 50%;
  font-weight: 700;
}

.author-name {
  font-weight: 700;
  color: #0f172a;
}

.author-role {
  font-size: 0.875rem;
  color: #64748b;
}

.rating {
  font-size: 1rem;
}

/* Final CTA */
.final-cta {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.cta-content p {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-benefits {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e2e8f0;
  font-weight: 500;
}

.benefit svg {
  color: #10b981;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-card-featured {
    grid-column: 1 / 3;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero {
    padding: 4rem 0 3rem;
  }
  
  .cta-group {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
  
  .stat-card-featured,
  .stat-card-compact {
    grid-column: auto;
    grid-row: auto;
  }
  
  .stat-card {
    padding: 1.25rem;
  }
  
  .stat-value {
    font-size: 1.875rem;
  }
  
  /* Carousel Mobile Adjustments */
  .services-carousel-wrapper {
    padding: 0 40px;
  }
  
  .service-card {
    width: 320px;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
  }
  
  .carousel-nav svg {
    width: 20px;
    height: 20px;
  }
  
  .services-grid,
  .features-grid,
  .process-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .header-benefits {
    flex-direction: column;
    align-items: stretch;
  }
  
  .benefit-pill {
    justify-content: center;
  }
  
  .proof-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .proof-item {
    padding: 1.5rem 1rem;
  }
  
  .proof-number {
    font-size: 2.25rem;
  }
  
  .trust-row {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .cta-benefits {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1rem;
  }
  
  .stat-chart {
    height: 50px;
  }
  
  .proof-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header h2 {
    font-size: 1.75rem;
  }
}

/* Performance Optimizations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* GPU Acceleration */
.stat-card,
.btn,
.liquid-glass,
.proof-item {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
