<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-32 bg-dinblu overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      </div>

      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full 
            text-white text-sm font-medium mb-6 gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400"></span>
            Soluções para todos os segmentos
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Transforme seu negócio com nossas soluções
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra o poder da tecnologia aliada à simplicidade. 
            Nossas soluções são desenvolvidas para impulsionar seu crescimento.
          </p>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"></p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="#solutions" 
              class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
              hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              Explorar Soluções
            </a>
            <NuxtLink to="https://https://dinblu.com.br/contato"
              class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
              border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Fale com um Especialista
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section id="solutions" class="py-24 bg-gray-50 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-96 h-96 rounded-full" style="background-color: rgba(0, 74, 173, 0.03); filter: blur(100px);"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full" style="background-color: rgba(0, 74, 173, 0.02); filter: blur(100px);"></div>
      
      <div class="container relative z-10">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto text-center mb-20">
          <span class="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full text-sm font-semibold mb-6" 
            style="background-color: rgba(0, 74, 173, 0.1); color: #004aad; border: 1px solid rgba(0, 74, 173, 0.2);">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Nossas Soluções
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Escolha a solução <span style="color: #004aad;">ideal</span> para você
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Cada solução é pensada para atender às necessidades específicas do seu segmento
          </p>
        </div>

        <!-- Solutions Grid by Category -->
        <div v-for="(solutions, category) in solutionsByCategory" :key="category" class="mb-20 last:mb-0">
          <!-- Category Header -->
          <div class="flex items-center gap-4 mb-8 group/category">
            <!-- Ícone do Grupo com gradiente animado -->
            <div class="relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 
              transition-all duration-500 group-hover/category:scale-110"
              :style="{ 
                background: `linear-gradient(135deg, ${getCategoryIcon(category).bg}, ${getCategoryIcon(category).color}20)`,
                boxShadow: `0 4px 20px ${getCategoryIcon(category).color}20`
              }">
              <svg class="w-8 h-8 transition-transform duration-500 group-hover/category:rotate-12" 
                :style="{ color: getCategoryIcon(category).color }" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  :d="getCategoryIcon(category).path" />
              </svg>
              <!-- Glow effect -->
              <div class="absolute inset-0 rounded-2xl opacity-0 group-hover/category:opacity-100 
                transition-opacity duration-500 blur-xl"
                :style="{ backgroundColor: getCategoryIcon(category).color + '40' }">
              </div>
            </div>
            
            <div class="flex-1">
              <h3 class="text-3xl font-bold text-gray-900 mb-1 transition-colors duration-300 
                group-hover/category:text-dinblu">
                {{ category }}
              </h3>
              <p class="text-base text-gray-600">{{ getCategoryDescription(category) }}</p>
            </div>
            
            <!-- Decorative line -->
            <div class="hidden lg:block flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>
          
          <!-- Cards Grid with stagger animation -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <NuxtLink 
              v-for="(solution, index) in solutions" 
              :key="solution.name"
              :to="solution.path"
              class="group/card relative bg-white/80 backdrop-blur-sm rounded-2xl 
                shadow-sm hover:shadow-2xl p-6 transition-all duration-500 
                hover:-translate-y-2 border border-gray-200/50 hover:border-dinblu/30
                overflow-hidden card-stagger"
              :style="{ animationDelay: `${index * 100}ms` }">
              
              <!-- Gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-dinblu/5 via-transparent to-purple-500/5 
                opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl">
              </div>
              
              <!-- Conteúdo -->
              <div class="relative z-10">
                <h4 class="text-xl font-bold text-gray-900 mb-3 group-hover/card:text-dinblu 
                  transition-colors duration-300 leading-tight">
                  {{ solution.name }}
                </h4>
                <p class="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                  {{ solution.description }}
                </p>

                <!-- Features Tags - máximo 3 -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="(feature, idx) in solution.features.slice(0, 3)" 
                    :key="idx"
                    class="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 
                      rounded-lg text-xs font-medium text-gray-700 
                      border border-gray-200/50 transition-all duration-300
                      hover:border-dinblu/30 hover:shadow-sm">
                    {{ feature }}
                  </span>
                </div>

                <!-- Link com seta e animação -->
                <div class="flex items-center gap-2 text-dinblu font-semibold text-sm">
                  <span class="relative">
                    Saiba mais
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-dinblu 
                      group-hover/card:w-full transition-all duration-300"></span>
                  </span>
                  <svg class="w-5 h-5 transform group-hover/card:translate-x-2 
                    transition-transform duration-300" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              <!-- Corner accent -->
              <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-dinblu/10 to-transparent 
                rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container">
        <div class="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden shadow-2xl" style="background-color: #004aad;">
          
          <!-- Animated Background Pattern -->
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 animate-pulse"></div>
          
          <!-- Decorative circles -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl 
            -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl 
            translate-y-1/2 -translate-x-1/2"></div>

          <!-- Content -->
          <div class="relative z-10">
            <span class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm 
              rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Comece agora mesmo
            </span>
            
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pronto para <span class="text-yellow-300">transformar</span> seu negócio?
            </h2>
            <p class="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NuxtLink to="https://https://dinblu.com.br/contato"
                class="group px-8 py-4 bg-white text-dinblu rounded-full font-bold text-lg
                hover:bg-yellow-300 hover:text-dinblu transition-all duration-300 
                shadow-xl hover:shadow-2xl hover:-translate-y-1 
                flex items-center gap-2 min-w-[250px] justify-center">
                Fale com um Especialista
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              
              <a href="tel:+554198769-4250"
                class="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full 
                font-semibold text-lg border-2 border-white/40 hover:bg-white/20 
                transition-all duration-300 flex items-center gap-2 min-w-[250px] justify-center
                hover:-translate-y-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (41) 98769-4250
              </a>
            </div>
            
            <!-- Trust badges -->
            <div class="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 
              border-t border-white/20">
              <div class="flex items-center gap-2 text-white/90">
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-sm font-medium">+1000 clientes satisfeitos</span>
              </div>
              
              <div class="flex items-center gap-2 text-white/90">
                <svg class="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-medium">Suporte especializado</span>
              </div>
              
              <div class="flex items-center gap-2 text-white/90">
                <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span class="text-sm font-medium">Ativação rápida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const solutions = [
  // Desenvolvimento
  {
    name: 'Desenvolvimento de Sites',
    category: 'Desenvolvimento',
    path: '/solucoes/desenvolvimento-sites',
    description: 'Sites profissionais e modernos para sua empresa.',
    features: [
      'Design responsivo',
      'SEO otimizado',
      'Alta performance'
    ]
  },
  {
    name: 'Soluções Personalizadas',
    category: 'Desenvolvimento',
    path: '/solucoes/desenvolvimentos',
    description: 'Desenvolvimento sob medida para seu negócio.',
    features: [
      'Análise de requisitos',
      'Arquitetura escalável',
      'Suporte completo'
    ]
  },
  {
    name: 'Apps iOS e Android',
    category: 'Desenvolvimento',
    path: '/solucoes/aplicativos-mobile',
    description: 'Aplicativos nativos para dispositivos móveis.',
    features: [
      'iOS e Android',
      'Performance nativa',
      'Design intuitivo'
    ]
  },  

// Sistemas
  {
    name: 'Dinblu WEB',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-web',
    description: 'Sistema completo de gestão empresarial.',
    features: [
      'Controle financeiro',
      'Gestão de estoque',
      'Emissão de NF-e'
    ]
  },
  {
    name: 'Dinblu Food',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-food',
    description: 'Sistema completo para gestão de restaurantes.',
    features: [
      'Cardápio digital',
      'Gestão de delivery',
      'Controle de mesas'
    ]
  },
  {
    name: 'Dinblu Shop',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-shop',
    description: 'E-commerce completo para sua loja virtual.',
    features: [
      'Loja virtual completa',
      'Integração com marketplaces',
      'Gestão de vendas online'
    ]
  },
  {
    name: 'Dinblu Pet',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-pet',
    description: 'Sistema completo para gestão de pet shops.',
    features: [
      'Prontuário digital',
      'Agendamento de serviços',
      'Gestão de estoque'
    ]
  },
  {
    name: 'Dinblu Clinica',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-clinica',
    description: 'Sistema completo para gestão de clínicas.',
    features: [
      'Prontuário eletrônico',
      'Agendamento online',
      'Telemedicina'
    ]
  },
  {
    name: 'Dinblu Agro',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-agro',
    description: 'Sistema completo para gestão do agronegócio.',
    features: [
      'Controle de produção',
      'Gestão de custos',
      'Rastreabilidade'
    ]
  },
  {
    name: 'Dinblu Salão',
    category: 'Sistemas para gestão empresarial',
    path: '/solucoes/dinblu-salao',
    description: 'Sistema completo para gestão de salões de beleza.',
    features: [
      'Agendamento online',
      'Controle financeiro',
      'Gestão de profissionais'
    ]
  },

  // Para Pessoas
  {
    name: 'Dinblu Finanças',
    category: 'Para Pessoas',
    path: '/solucoes/dinblu-financas',
    description: 'Controle suas finanças pessoais de forma simples.',
    features: [
      'Controle de gastos',
      'Gestão de investimentos',
      'Metas financeiras'
    ]
  }
]

// Funções helper para ícones e descrições das categorias
const getCategoryIcon = (category) => {
  const icons = {
    'Sistemas para gestão empresarial': {
      path: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      bg: '#F3E8FF',
      color: '#9333EA'
    },
    'Desenvolvimento': {
      path: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      bg: '#D1FAE5',
      color: '#059669'
    },
    'Para Pessoas': {
      path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      bg: '#DCFCE7',
      color: '#16A34A'
    }
  }
  return icons[category] || icons['Sistemas']
}

const getCategoryDescription = (category) => {
  const descriptions = {
    'Sistemas para gestão empresarial': 'Gestão empresarial',
    'Desenvolvimento': 'Sites, sistemas e apps personalizados para seu negócio',
    'Para Pessoas': 'Sua plataforma para Finanças pessoais'
  }
  return descriptions[category] || ''
}

// Agrupa as soluções por categoria
const solutionsByCategory = computed(() => {
  return solutions.reduce((acc, solution) => {
    if (!acc[solution.category]) {
      acc[solution.category] = []
    }
    acc[solution.category].push(solution)
    return acc
  }, {})
})
  
useHead({
  title: 'Soluções | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Conheça todas as soluções da Dinblu para gestão empresarial, e-commerce e muito mais.'
    }
  ]
})
</script>

<style scoped lang="postcss">
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.page-with-hero {
  padding-top: 80px;
}

/* Limita texto a 2 linhas */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Card stagger animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-stagger {
  animation: fadeInUp 0.6s ease-out backwards;
}

/* Pulse animation for gradient backgrounds */
@keyframes gradientPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Hover glow effect */
@keyframes glowPulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

/* Smooth transitions for all interactive elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 