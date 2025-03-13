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
            <NuxtLink to="/contato"
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
    <section id="solutions" class="py-20 bg-gray-50">
      <div class="container">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="inline-block px-4 py-1 bg-dinblu/5 text-dinblu rounded-full text-sm font-medium mb-4">
            Nossas Soluções
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha a solução ideal para você
          </h2>
          <p class="text-lg text-gray-600">
            Cada solução é pensada para atender às necessidades específicas do seu segmento
          </p>
        </div>

        <!-- Solutions Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="solution in solutions" :key="solution.name"
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden
            hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <!-- Badge -->
            <div class="absolute top-4 left-4 z-20">
              <span class="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-white/95 
                text-dinblu rounded-full shadow-sm backdrop-blur-sm gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-dinblu"></span>
                {{ solution.category }}
              </span>
            </div>

            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img :src="solution.image" :alt="solution.name"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">
                {{ solution.name }}
              </h3>
            </div>

            <!-- Content -->
            <div class="p-6">
              <p class="text-gray-600 mb-6 min-h-[48px] leading-relaxed">
                {{ solution.description }}
              </p>

              <!-- Features -->
              <ul class="space-y-3 mb-8">
                <li v-for="(feature, index) in solution.features" :key="index"
                  class="flex items-center gap-3 text-sm text-gray-600 bg-gray-50/80 
                  p-2.5 rounded-xl group-hover:bg-dinblu/5 transition-colors">
                  <span class="w-6 h-6 rounded-full bg-dinblu/10 flex items-center justify-center
                    group-hover:bg-dinblu/20 transition-colors">
                    <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {{ feature }}
                </li>
              </ul>

              <!-- CTA -->
              <NuxtLink :to="solution.path"
                class="group relative inline-flex items-center justify-center w-full px-6 py-3.5 
                bg-gray-50 text-dinblu rounded-xl font-medium overflow-hidden">
                <span class="relative z-10 group-hover:text-white transition-colors duration-300">
                  Saiba mais
                </span>
                <div class="absolute inset-0 bg-dinblu transform scale-x-0 group-hover:scale-x-100 
                  transition-transform origin-left duration-300"></div>
                <svg class="relative z-10 w-5 h-5 ml-2 text-dinblu group-hover:text-white 
                  transform group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="relative bg-dinblu rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

          <!-- Content -->
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <NuxtLink to="/contato"
                class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
                hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Fale com um Especialista
              </NuxtLink>
              <a href="tel:+551140028922"
                class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
                border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                (11) 4002-8922
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const solutions = [
  {
    name: 'Dinblu WEB',
    path: '/solucoes/dinblu-web',
    category: 'Sistema de Gestão',
    description: 'Tão fácil de mexer que é pra todo mundo. Sistema web completo para gestão empresarial.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
    features: [
      'Gestão financeira completa',
      'Controle de estoque',
      'Emissão de NF-e'
    ]
  },
  {
    name: 'Dinblu Food',
    path: '/solucoes/dinblu-food',
    category: 'Sistema de Gestão',
    description: 'Atende do delivery à cozinha, até a venda de balcão.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000',
    features: [
      'Cardápio digital',
      'Gestão de delivery',
      'Controle de mesas'
    ]
  },
  {
    name: 'Dinblu Shop',
    path: '/solucoes/dinblu-shop',
    category: 'E-commerce',
    description: 'Para o empreendedor brasileiro. E-commerce e gestão para lojas.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000',
    features: [
      'Loja virtual completa',
      'Integração com marketplaces',
      'Gestão de vendas online'
    ]
  },
  {
    name: 'Dinblu Agro',
    path: '/solucoes/dinblu-agro',
    category: 'Sistema de Gestão',
    description: 'Para pequenos e grandes produtores.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000',
    features: [
      'Controle de produção',
      'Gestão de custos',
      'Rastreabilidade'
    ]
  },
  {
    name: 'Dinblu Salão',
    path: '/solucoes/dinblu-salao',
    category: 'Sistema de Gestão',
    description: 'Para o cliente, os profissionais e o dono do salão.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000',
    features: [
      'Agendamento online',
      'Comissionamento',
      'Controle financeiro'
    ]
  },
  {
    name: 'Dinblu Pet',
    path: '/solucoes/dinblu-pet',
    category: 'Sistema de Gestão',
    description: 'Para o pet shop, os veterinários e os donos de pet.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2000',
    features: [
      'Prontuário digital',
      'Agendamento de serviços',
      'Gestão de estoque'
    ]
  },
  {
    name: 'Dinblu Clinica',
    path: '/solucoes/dinblu-clinica',
    category: 'Sistema de Gestão',
    description: 'Para o paciente, os profissionais e o gestor.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000',
    features: [
      'Prontuário eletrônico',
      'Agendamento online',
      'Telemedicina'
    ]
  },
  {
    name: 'Dinblu Finanças',
    path: '/solucoes/dinblu-financas',
    category: 'Finanças Pessoais',
    description: 'Seu sistema de finanças pessoais.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000',
    features: [
      'Controle de gastos',
      'Planejamento financeiro',
      'Relatórios detalhados'
    ]
  }
]

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

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style> 