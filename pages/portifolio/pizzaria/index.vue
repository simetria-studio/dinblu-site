<template>
  <div class="pizzaria-page">
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
            Delivery Grátis
          </div>
          
          <h1>
            As Melhores
            <span class="highlight">Pizzas</span>
            da Cidade
          </h1>
          
          <p class="lead">
            Massa artesanal, ingredientes frescos e sabor incomparável. 
            Sua pizza favorita quentinha na sua casa em até 30 minutos.
          </p>
          
          <div class="cta-group">
            <button class="btn btn-primary">
              Fazer Pedido Agora
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <NuxtLink to="/portifolio/pizzaria/cardapio" class="btn btn-secondary">
              Ver Cardápio
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4H16M8 10H16M8 16H16M4 4V4.01M4 10V10.01M4 16V16.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </NuxtLink>
          </div>
          
          <div class="trust-row">
            <div class="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Entrega Rápida
            </div>
            <div class="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Ingredientes Premium
            </div>
            <div class="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 4L6 11L3 8" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Massa Artesanal
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="pizza-image">
            🍕
          </div>
        </div>
      </div>
    </section>

    <!-- Destaques -->
    <section class="highlights">
      <div class="container">
        <div class="highlights-grid">
          <div class="highlight-card" v-for="(item, i) in highlights" :key="i" :style="`--delay: ${i * 0.1}s`">
            <div class="highlight-icon">{{ item.icon }}</div>
            <div class="highlight-number">{{ item.number }}</div>
            <div class="highlight-label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pizzas em Destaque -->
    <section class="featured-pizzas">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">✨ Favoritas</span>
          <h2>Pizzas Mais <span class="highlight">Pedidas</span></h2>
          <p>Nossas especialidades que conquistam paladares</p>
        </div>
        
        <div class="pizzas-grid">
          <div class="pizza-card" v-for="(pizza, i) in featuredPizzas" :key="i">
            <div class="pizza-card-inner">
              <div class="pizza-emoji">{{ pizza.emoji }}</div>
              <h3>{{ pizza.name }}</h3>
              <p class="pizza-description">{{ pizza.description }}</p>
              <div class="pizza-price">R$ {{ pizza.price }}</div>
              <button class="pizza-btn">
                <span>Pedir Agora</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 13L11 9L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Por Que Escolher</span>
          <h2>Nossos <span class="highlight">Diferenciais</span></h2>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, i) in features" :key="i">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="final-cta">
      <div class="cta-glow"></div>
      <div class="container">
        <div class="cta-content">
          <div class="badge">
            <span class="dot"></span>
            Promoção Especial
          </div>
          <h2>Peça Agora e Ganhe <span class="highlight">10% OFF</span></h2>
          <p>Use o cupom PRIMEIRA10 no seu primeiro pedido</p>
          
          <button class="btn btn-primary btn-large">
            Fazer Meu Pedido
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <div class="cta-benefits">
            <div class="benefit">Entrega em 30min</div>
            <div class="benefit">Pagamento na Entrega</div>
            <div class="benefit">Garantia de Qualidade</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
});

const highlights = [
  { icon: '⭐', number: '5.0', label: 'Avaliação' },
  { icon: '🍕', number: '500+', label: 'Pizzas/Mês' },
  { icon: '⚡', number: '30min', label: 'Entrega' },
  { icon: '❤️', number: '2000+', label: 'Clientes Felizes' }
];

const featuredPizzas = [
  {
    emoji: '🍕',
    name: 'Margherita',
    description: 'Molho de tomate, mussarela, manjericão e azeite',
    price: '45,90'
  },
  {
    emoji: '🍕',
    name: 'Calabresa',
    description: 'Calabresa especial, cebola, mussarela e azeitonas',
    price: '48,90'
  },
  {
    emoji: '🍕',
    name: 'Portuguesa',
    description: 'Presunto, ovos, cebola, mussarela e azeitonas',
    price: '52,90'
  },
  {
    emoji: '🍕',
    name: 'Quatro Queijos',
    description: 'Mussarela, gorgonzola, parmesão e catupiry',
    price: '55,90'
  }
];

const features = [
  { icon: '🔥', title: 'Forno à Lenha', description: 'Assada em forno tradicional para sabor autêntico' },
  { icon: '🥬', title: 'Ingredientes Frescos', description: 'Selecionamos os melhores produtos diariamente' },
  { icon: '🚀', title: 'Entrega Rápida', description: 'Sua pizza quentinha em até 30 minutos' },
  { icon: '💳', title: 'Várias Formas de Pagamento', description: 'Cartão, PIX, dinheiro e vale-refeição' }
];

useHead({
  title: 'Pizzaria - As Melhores Pizzas da Cidade | Delivery',
  meta: [
    { name: 'description', content: 'Peça as melhores pizzas artesanais com delivery rápido. Massa artesanal, ingredientes frescos e entrega em 30 minutos.' }
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

.pizzaria-page {
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
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
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
  background: #fbbf24;
  top: -100px;
  left: -100px;
}

.blob-2 {
  width: 350px;
  height: 350px;
  background: #f59e0b;
  top: 40%;
  right: -80px;
  animation-delay: -7s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: #fb923c;
  bottom: -80px;
  left: 30%;
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  67% {
    transform: translate(-20px, 20px) rotate(240deg);
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 100px;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.dot {
  width: 9px;
  height: 9px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.highlight {
  color: #fbbf24;
}

.lead {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
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
}

.btn-primary {
  background: white;
  color: #dc2626;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.btn-large {
  padding: 1.375rem 2.75rem;
  font-size: 1.125rem;
}

.trust-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem;
  font-weight: 500;
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pizza-image {
  font-size: 20rem;
  filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.3));
  animation: floatPizza 3s ease-in-out infinite;
}

@keyframes floatPizza {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Highlights */
.highlights {
  padding: 4rem 0;
  background: white;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.05);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.highlight-card {
  padding: 1.5rem;
  animation: slideUp 0.6s ease-out both;
  animation-delay: var(--delay);
}

.highlight-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.highlight-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #dc2626;
  margin-bottom: 0.5rem;
}

.highlight-label {
  color: #64748b;
  font-weight: 600;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Featured Pizzas */
.featured-pizzas {
  padding: 7rem 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.section-badge {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(185, 28, 28, 0.1));
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 100px;
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-header p {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}

.pizzas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.pizza-card {
  animation: slideUp 0.6s ease-out both;
}

.pizza-card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.4s ease;
  text-align: center;
}

.pizza-card:hover .pizza-card-inner {
  transform: translateY(-8px);
  border-color: rgba(220, 38, 38, 0.3);
  box-shadow: 0 20px 50px rgba(220, 38, 38, 0.15);
}

.pizza-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.pizza-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

.pizza-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.pizza-price {
  font-size: 2rem;
  font-weight: 900;
  color: #dc2626;
  margin-bottom: 1.5rem;
}

.pizza-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pizza-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.4);
}

/* Features */
.features {
  padding: 7rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Final CTA */
.final-cta {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%);
  filter: blur(80px);
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
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
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
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .pizza-image {
    font-size: 12rem;
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
  
  .pizza-image {
    font-size: 8rem;
  }
}
</style>
