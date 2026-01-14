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
            <div class="stat-card" style="--delay: 0s">
              <div class="stat-header">
                <span>Crescimento</span>
                <span class="trend">↗</span>
              </div>
              <div class="stat-value">+32.5%</div>
              <div class="stat-chart">
                <div class="bar" style="height: 45%"></div>
                <div class="bar" style="height: 60%"></div>
                <div class="bar" style="height: 75%"></div>
                <div class="bar" style="height: 85%"></div>
              </div>
            </div>
            
            <div class="stat-card" style="--delay: 0.2s">
              <div class="stat-header">
                <span>Economia</span>
                <span>💰</span>
              </div>
              <div class="stat-value">R$ 45.8K</div>
              <p class="stat-label">Este mês</p>
            </div>
            
            <div class="stat-card" style="--delay: 0.4s">
              <div class="stat-header">
                <span>Receita</span>
              </div>
              <div class="stat-value">R$ 127K</div>
              <div class="progress">
                <div class="progress-bar" style="width: 68%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="social-proof">
      <div class="container">
        <div class="proof-grid">
          <div class="proof-item">
            <div class="proof-number">500+</div>
            <div class="proof-label">Empresas Atendidas</div>
          </div>
          <div class="proof-item">
            <div class="proof-number">10 Anos</div>
            <div class="proof-label">de Experiência</div>
          </div>
          <div class="proof-item">
            <div class="proof-number">98%</div>
            <div class="proof-label">Satisfação</div>
          </div>
          <div class="proof-item">
            <div class="proof-number">24h</div>
            <div class="proof-label">Tempo de Resposta</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Nossos Serviços</span>
          <h2>Serviços <span class="highlight">Sob Medida</span> para Sua Empresa</h2>
          <p>Da abertura ao crescimento, oferecemos toda a estrutura contábil que seu negócio precisa</p>
        </div>
        
        <div class="services-grid">
          <div class="liquid-card" v-for="(service, i) in services" :key="i">
            <div class="liquid-glass">
              <div class="card-content">
                <div class="icon-wrapper">
                  <div class="service-icon">{{ service.icon }}</div>
                </div>
                
                <h3>{{ service.title }}</h3>
                <p class="service-desc">{{ service.description }}</p>
                
                <ul class="features-list">
                  <li v-for="(item, j) in service.features" :key="j">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
                      <path d="M5 8L7 10L11 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    {{ item }}
                  </li>
                </ul>
                
                <button class="liquid-btn">
                  <span>Saiba Mais</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, i) in features" :key="i">
            <div class="feature-icon">{{ feature.icon }}</div>
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
definePageMeta({
  layout: 'blank'
});

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

const features = [
  { icon: '⚡', title: 'Atendimento Rápido', description: 'Respondemos suas dúvidas em até 24 horas. Suporte ágil quando você mais precisa.' },
  { icon: '👨‍💼', title: 'Contador Dedicado', description: 'Um profissional exclusivo para sua empresa, que conhece seu negócio a fundo.' },
  { icon: '💰', title: 'Preço Justo', description: 'Planos transparentes e sem taxas ocultas. Você paga pelo que realmente precisa.' },
  { icon: '🎯', title: 'Foco no Seu Sucesso', description: 'Mais que obrigações, oferecemos consultoria para otimizar seus resultados.' }
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
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #a5b4fc;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: slideDown 0.6s ease-out;
}

.dot {
  width: 8px;
  height: 8px;
  background: #6366f1;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.95); }
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
  gap: 0.5rem;
  padding: 1rem 1.75rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #6366f1;
  color: white;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: #4f46e5;
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
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
  gap: 1rem;
}

.stat-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.6s ease-out both;
  animation-delay: var(--delay);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
}

.trend {
  font-size: 1.25rem;
  color: #10b981;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

.stat-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 50px;
}

.bar {
  flex: 1;
  background: #6366f1;
  border-radius: 4px 4px 0 0;
  animation: growBar 1s ease-out both;
}

@keyframes growBar {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

.progress {
  height: 6px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 100px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #6366f1;
  border-radius: 100px;
  animation: fillProgress 1.5s ease-out both;
}

@keyframes fillProgress {
  from { width: 0; }
}

/* Social Proof */
.social-proof {
  padding: 3rem 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.proof-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #6366f1;
  margin-bottom: 0.5rem;
}

.proof-label {
  color: #64748b;
  font-weight: 500;
}

/* Services - Liquid Glass Effect */
.services {
  position: relative;
  padding: 6rem 0;
  background: #f8fafc;
  overflow: hidden;
}

.services-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 25s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: #818cf8;
  top: -200px;
  right: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: #f472b6;
  bottom: -150px;
  left: -100px;
  animation-delay: -10s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: #06b6d4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -20s;
}

.section-header {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 100px;
  color: #6366f1;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-header p {
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.6;
}

.services-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

/* Liquid Glass Card */
.liquid-card {
  position: relative;
  height: 100%;
}

.liquid-glass {
  position: relative;
  height: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.liquid-glass:hover::before {
  opacity: 1;
}

/* Shimmer Effect */
.shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.liquid-glass:hover .shimmer {
  opacity: 1;
  animation: shimmerSlide 1.5s ease-in-out;
}

@keyframes shimmerSlide {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Glow Border */
.glow-border {
  position: absolute;
  inset: -2px;
  border-radius: 24px;
  background: #6366f1;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

.liquid-glass:hover .glow-border {
  opacity: 0.5;
}

/* Card Content */
.card-content {
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.icon-glow {
  position: absolute;
  inset: -10px;
  background: #6366f1;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.liquid-glass:hover .icon-glow {
  opacity: 0.4;
}

.service-icon {
  position: relative;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(99, 102, 241, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.5s ease;
}

.liquid-glass:hover .service-icon {
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

.liquid-glass h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.liquid-glass:hover h3 {
  color: #6366f1;
}

.service-desc {
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.features-list {
  list-style: none;
  margin-bottom: 2rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0;
  color: #334155;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.features-list li:hover {
  color: #6366f1;
  transform: translateX(5px);
}

.features-list svg {
  color: #6366f1;
  flex-shrink: 0;
}

/* Liquid Button */
.liquid-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  color: #6366f1;
  font-weight: 600;
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.liquid-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.liquid-btn:hover::before {
  width: 300px;
  height: 300px;
}

.liquid-btn span,
.liquid-btn svg {
  position: relative;
  z-index: 1;
}

.liquid-btn:hover {
  background: #6366f1;
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

.liquid-btn:hover svg {
  transform: translateX(4px);
}

/* Features */
.features {
  padding: 6rem 0;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
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
  }
  
  .hero-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .cta-group {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .services-grid,
  .features-grid,
  .process-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .proof-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .trust-row {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-benefits {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
