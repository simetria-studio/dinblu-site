<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-b from-transparent to-gray-50/50">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute right-0 top-0 w-[600px] h-[600px] 
        bg-gradient-to-br from-dinblu/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute -left-40 bottom-0 w-[500px] h-[500px] 
        bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="container relative z-10">
      <!-- Cabeçalho da Seção -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Nossas Soluções
        </h2>
        <p class="text-lg text-gray-600">
          Conheça as ferramentas que vão transformar a gestão do seu negócio
        </p>
      </div>

      <!-- Carousel de Soluções -->
      <div class="max-w-7xl mx-auto px-4">
        <Carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" :transition="1000">
          <Slide v-for="solution in solutions" :key="solution.name">
            <div class="carousel__item px-4">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <!-- Imagem -->
                <div class="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                  <img :src="solution.image" :alt="solution.name"
                    class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <!-- Badge -->
                  <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full 
                    text-sm font-medium text-dinblu backdrop-blur-sm">
                    Novo
                  </div>
                </div>

                <!-- Conteúdo -->
                <div class="p-6">
                  <h3 class="text-3xl font-bold text-gray-900 mb-4">
                    {{ solution.name }}
                  </h3>
                  <p class="text-lg text-gray-600 mb-6">
                    {{ solution.description }}
                  </p>
                  
                  <!-- Features -->
                  <div class="flex flex-wrap gap-2 mb-8">
                    <span v-for="(feature, index) in solution.features" :key="index"
                      class="px-4 py-2 bg-dinblu/5 rounded-full text-sm font-medium text-dinblu">
                      {{ feature }}
                    </span>
                  </div>

                  <!-- Screenshots em miniatura -->
                  <div class="grid grid-cols-3 gap-4 mb-8">
                    <div v-for="(screenshot, index) in solution.screenshots" :key="index"
                      class="relative rounded-lg overflow-hidden cursor-pointer
                        hover:scale-105 transition-transform">
                      <img :src="screenshot" :alt="`Screenshot ${index + 1}`"
                        class="w-full aspect-video object-cover" />
                    </div>
                  </div>
                  
                  <!-- CTA -->
                  <NuxtLink :to="solution.path" 
                    class="inline-flex items-center px-6 py-3 bg-dinblu text-white rounded-xl
                    hover:bg-dinblu-600 transition-colors group">
                    <span>Conhecer solução</span>
                    <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </Slide>

          <!-- Navegação -->
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const solutions = [
  {
    name: 'Dinblu WEB',
    path: '/solucoes/dinblu-web',
    description: 'Sistema web completo para gestão empresarial. Controle total das suas operações em uma única plataforma.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
    features: ['Gestão Completa', 'Multi-empresa', 'Cloud'],
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800',
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    name: 'Dinblu Food',
    path: '/solucoes/dinblu-food',
    description: 'Gestão completa para restaurantes e delivery. Controle de pedidos, mesas, delivery e muito mais.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000',
    features: ['Cardápio Digital', 'Delivery', 'PDV'],
    screenshots: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800',
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800'
    ]
  },
  {
    name: 'Dinblu Shop',
    path: '/solucoes/dinblu-shop',
    description: 'E-commerce e gestão para lojas. Venda online e controle seu estoque em tempo real.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000',
    features: ['E-commerce', 'Marketplace', 'Estoque'],
    screenshots: [
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=800',
      'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800',
      'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=800'
    ]
  },
  {
    name: 'Dinblu Agro',
    path: '/solucoes/dinblu-agro',
    description: 'Gestão completa para o agronegócio. Controle de produção, custos, estoque e rastreabilidade.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000',
    features: ['Rastreabilidade', 'Gestão Rural', 'Produção'],
    screenshots: [
      'https://images.unsplash.com/photo-1632723893457-47e3abc47526?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800'
    ]
  },
  {
    name: 'Dinblu Pet',
    path: '/solucoes/dinblu-pet',
    description: 'Sistema completo para pet shops e clínicas veterinárias. Gestão de serviços, vendas e prontuário animal.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2000',
    features: ['Prontuário Digital', 'Agendamento', 'Gestão de Vendas'],
    screenshots: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800',
      'https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=800',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800'
    ]
  },
  {
    name: 'Dinblu Clinica',
    path: '/solucoes/dinblu-clinica',
    description: 'Sistema especializado para clínicas médicas e consultórios. Gestão completa de pacientes, agendamentos e prontuários.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000',
    features: ['Prontuário Eletrônico', 'Agendamento Online', 'Telemedicina'],
    screenshots: [
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000',
      'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=2000',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000'
    ]
  }
]
</script>

<style scoped>
.carousel__item {
  min-height: 500px;
  width: 100%;
}

:deep(.carousel__track) {
  padding-top: 20px;
  padding-bottom: 20px;
}

:deep(.carousel__pagination) {
  padding-top: 20px;
}

:deep(.carousel__pagination-button::after) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e2e8f0;
  transition: all 0.3s;
}

:deep(.carousel__pagination-button--active::after) {
  background-color: #0049AF;
  transform: scale(1.2);
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #0049AF;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  border-color: #0049AF;
  transform: scale(1.1);
}
</style>
