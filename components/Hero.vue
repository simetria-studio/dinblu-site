<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-32">
    <!-- Background complexo com múltiplas camadas -->
    <div class="absolute inset-0">
      <!-- Base gradient mais vibrante -->
      <div class="absolute inset-0 bg-gradient-to-br from-dinblu-100 via-white to-dinblu-200"></div>
      
      <!-- Círculos coloridos de fundo -->
      <div class="absolute right-0 top-0 w-[800px] h-[800px] 
        bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -left-40 top-40 w-[600px] h-[600px] 
        bg-gradient-to-tr from-dinblu/30 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] 
        bg-gradient-to-bl from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

      <!-- Efeito de luz pulsante -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full 
          filter blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full 
          filter blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
      </div>

      <!-- Grid colorido -->
      <div class="absolute inset-0 opacity-[0.05]"
        style="background-image: 
          linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px);
        background-size: 40px 40px;"></div>
    </div>

    <!-- Partículas coloridas -->
    <div class="particles">
      <div v-for="n in 30" :key="n" 
        class="particle"
        :style="{
          '--delay': `${Math.random() * 10}s`,
          '--size': `${Math.random() * 12 + 4}px`,
          '--left': `${Math.random() * 100}%`,
          '--color': `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          '--opacity': Math.random() * 0.3 + 0.1
        }">
      </div>
    </div>

    <!-- Formas geométricas coloridas -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-20 w-40 h-40 border-4 border-blue-400/20 
        rounded-3xl rotate-12 backdrop-blur-sm animate-float-diagonal"></div>
      <div class="absolute bottom-40 left-20 w-32 h-32 border-4 border-purple-400/20 
        rounded-full backdrop-blur-sm animate-float-diagonal-reverse"></div>
      <div class="absolute top-1/3 right-1/3 w-24 h-24 
        bg-gradient-to-br from-cyan-400/20 to-transparent rounded-xl rotate-45"></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Conteúdo -->
        <div class="max-w-2xl">
          <!-- Badge/Tag Animada -->
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r 
            from-dinblu/10 to-dinblu/5 text-dinblu text-sm font-medium mb-8 
            animate-fade-in group cursor-pointer hover:scale-105 transition-transform
            border border-dinblu/10 backdrop-blur-sm">
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-dinblu animate-pulse mr-2"></div>
              <span class="mr-2">Destaque</span>
              <span class="text-gray-600">|</span>
              <span class="ml-2">Software líder em gestão empresarial</span>
            </div>
          </div>

          <!-- Título Principal Reformulado -->
          <div class="space-y-4 mb-8">
            <h1 class="text-5xl lg:text-7xl font-bold text-gray-900">
              <div class="mb-2">Gestão</div>
              <div class="bg-gradient-to-r from-blue-900 via-dinblu to-blue-800 
                bg-clip-text text-transparent">
                Inteligente
              </div>
              <div class="text-4xl lg:text-5xl mt-2">para seu negócio</div>
            </h1>
          </div>

          <!-- Subtítulo Melhorado -->
          <div class="space-y-6 mb-10">
            <p class="text-xl text-gray-600 leading-relaxed">
              Transforme sua empresa com soluções que integram 
              <span class="text-dinblu font-medium">tecnologia avançada</span> e 
              <span class="text-dinblu font-medium">simplicidade</span> em um único lugar.
            </p>

            <!-- Features em linha -->
            <div class="flex flex-wrap items-center gap-6 text-sm">
              <div class="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg
                border border-gray-100 hover:border-dinblu/20 transition-colors">
                <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="font-medium text-gray-700">100% Seguro</span>
              </div>
              <div class="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg
                border border-gray-100 hover:border-dinblu/20 transition-colors">
                <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span class="font-medium text-gray-700">Alta Performance</span>
              </div>
              <div class="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg
                border border-gray-100 hover:border-dinblu/20 transition-colors">
                <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-medium text-gray-700">Suporte 24/7</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons Melhorados -->
          <div class="flex flex-wrap gap-4 animate-fade-in-delayed-2">
            <NuxtLink to="/contato" 
              class="relative group overflow-hidden px-8 py-4 bg-dinblu rounded-xl
              text-white font-medium transition-all duration-300
              hover:shadow-lg hover:shadow-dinblu/20 hover:-translate-y-0.5">
              <span class="relative z-10">Iniciar Agora</span>
              <div class="absolute inset-0 bg-gradient-to-r from-dinblu-600 to-dinblu 
                opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute right-4 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </NuxtLink>
            
            <a href="#demo" 
              class="group px-8 py-4 rounded-xl text-dinblu font-medium
              border-2 border-dinblu/10 hover:border-dinblu/20
              transition-all duration-300 hover:bg-dinblu/5">
              <span>Ver Demo</span>
              <svg class="w-5 h-5 ml-2 inline-block transform group-hover:translate-y-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

   
        </div>

        <!-- Lado direito com cards flutuantes -->
        <div class="relative lg:h-[600px] hidden lg:block">
          <!-- Cards flutuantes -->
          <div class="absolute inset-0">
            <!-- Card Principal -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              w-[450px] bg-white rounded-2xl shadow-2xl p-6 animate-float-slow">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">Painel de Controle</h3>
                  <p class="text-sm text-gray-500">Gestão completa em tempo real</p>
                </div>
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-dinblu to-dinblu-600 
                  flex items-center justify-center text-white shadow-lg shadow-dinblu/20">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>

              <!-- Gráfico e Métricas -->
              <div class="space-y-4">
                <!-- Gráfico simulado -->
                <div class="relative h-36 bg-gradient-to-r from-dinblu-50/50 to-dinblu-100/50 
                  rounded-xl overflow-hidden p-4">
                  <div class="absolute bottom-0 left-0 right-0 h-24">
                    <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0 40 L20 30 L40 35 L60 15 L80 25 L100 20 L100 40 L0 40" 
                        fill="url(#grad)" />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style="stop-color:rgb(0,73,175);stop-opacity:0.2" />
                          <stop offset="100%" style="stop-color:rgb(0,73,175);stop-opacity:0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div class="relative z-10 flex justify-between text-xs text-gray-600">
                    <div>Jan</div>
                    <div>Fev</div>
                    <div>Mar</div>
                    <div>Abr</div>
                    <div>Mai</div>
                    <div>Jun</div>
                  </div>
                </div>

                <!-- Métricas em linha -->
                <div class="grid grid-cols-3 gap-3">
                  <div class="p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                    <div class="text-sm text-gray-500">Vendas</div>
                    <div class="text-lg font-semibold text-gray-800">R$ 45.5k</div>
                    <div class="text-xs text-green-500 flex items-center">
                      <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      +12.5%
                    </div>
                  </div>
                  <div class="p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                    <div class="text-sm text-gray-500">Clientes</div>
                    <div class="text-lg font-semibold text-gray-800">2.4k</div>
                    <div class="text-xs text-green-500 flex items-center">
                      <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      +8.2%
                    </div>
                  </div>
                  <div class="p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                    <div class="text-sm text-gray-500">Pedidos</div>
                    <div class="text-lg font-semibold text-gray-800">1.8k</div>
                    <div class="text-xs text-green-500 flex items-center">
                      <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      +15.3%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Flutuante Superior -->
            <div class="absolute right-0 top-20 bg-white rounded-2xl p-4 shadow-xl animate-float">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-800">Vendas</div>
                  <div class="text-green-500 text-sm font-medium">+27.4%</div>
                </div>
              </div>
            </div>

            <!-- Card Flutuante Inferior -->
            <div class="absolute left-0 bottom-20 bg-white rounded-2xl p-4 shadow-xl animate-float-delay">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-dinblu-50 flex items-center justify-center text-dinblu">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-800">Receita</div>
                  <div class="text-dinblu text-sm font-medium">R$ 42.5k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-15px) translateX(5px); }
}

@keyframes float-delay {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.2; }
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
}

@keyframes orbit-reverse {
  0% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
  100% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
}

@keyframes float-diagonal {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

@keyframes float-diagonal-reverse {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
}

@keyframes particle-float {
  0%, 100% { 
    transform: translateY(0) translateX(0); 
    opacity: 0;
  }
  25% { opacity: var(--opacity); }
  75% { opacity: var(--opacity); }
  100% { 
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 4s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-orbit {
  animation: orbit 20s linear infinite;
}

.animate-orbit-reverse {
  animation: orbit-reverse 25s linear infinite;
}

.animate-float-diagonal {
  animation: float-diagonal 8s ease-in-out infinite;
}

.animate-float-diagonal-reverse {
  animation: float-diagonal-reverse 8s ease-in-out infinite;
}

/* Estilos das partículas */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: linear-gradient(to right, var(--color), transparent);
  border-radius: 50%;
  left: var(--left);
  bottom: -20px;
  opacity: var(--opacity);
  animation: particle-float 12s linear infinite;
  animation-delay: var(--delay);
  filter: blur(1px);
}

/* Adicione essas classes para melhorar o visual dos cards */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 73, 175, 0.08);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 73, 175, 0.05),
              0 10px 10px -5px rgba(0, 73, 175, 0.02);
}

/* Efeito de glassmorphism nos cards */
.bg-white {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 4px 6px -1px rgba(0, 73, 175, 0.1),
    0 2px 4px -1px rgba(0, 73, 175, 0.06),
    inset 0 0 30px rgba(255, 255, 255, 0.6),
    inset 0 2px 2px rgba(255, 255, 255, 0.8);
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-fade-in-delayed {
  animation: fade-in 0.6s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.animate-fade-in-delayed-2 {
  animation: fade-in 0.6s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.animate-fade-in-delayed-3 {
  animation: fade-in 0.6s ease-out forwards;
  animation-delay: 0.9s;
  opacity: 0;
}

/* Efeito de Typing */
.typing-container {
  display: inline-block;
  position: relative;
}

.typing-container::after {
  content: '|';
  position: absolute;
  right: -4px;
  width: 1px;
  height: 100%;
  animation: cursor 1s infinite;
}

.typing {
  display: inline-block;
  overflow: hidden;
  animation: typing 3s steps(8) infinite;
  white-space: nowrap;
}

@keyframes cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes typing {
  0%, 90%, 100% { width: 0; }
  30%, 60% { width: 8ch; }
}

/* Melhorias nos cards */
.metric-card {
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 
    0 8px 16px -4px rgba(0, 73, 175, 0.1),
    0 4px 8px -4px rgba(0, 73, 175, 0.06),
    inset 0 0 20px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 12px 20px -4px rgba(0, 73, 175, 0.15),
    0 8px 12px -4px rgba(0, 73, 175, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.7);
  border-color: rgba(0, 73, 175, 0.1);
}

/* Efeito de brilho nos botões */
.btn-glow {
  position: relative;
  overflow: hidden;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: glow 2s linear infinite;
}

@keyframes glow {
  0% { transform: rotate(45deg) translateX(-100%); }
  100% { transform: rotate(45deg) translateX(100%); }
}

/* Gradientes mais vibrantes para textos */
.text-gradient {
  background: linear-gradient(135deg, #0049AF, #4F46E5, #06B6D4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style> 