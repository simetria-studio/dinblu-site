<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative min-h-[85vh] flex items-center overflow-hidden" style="background-color: #004aad;">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 animate-pulse"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="container relative z-10">
        <div class="max-w-5xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm 
            rounded-full text-white text-sm font-semibold mb-6 border border-white/30 animate-fadeIn">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Desde 2021
          </span>
          
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Simplificando a <span class="text-yellow-300">gestão empresarial</span>
          </h1>
          <p class="text-xl lg:text-2xl text-white/95 mb-16 leading-relaxed max-w-3xl mx-auto">
            Transformando a maneira como as empresas trabalham através da tecnologia
          </p>
          
          <!-- Stats -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div v-for="(stat, index) in stats" :key="stat.label"
              class="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20
                hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                card-stagger"
              :style="{ animationDelay: `${index * 150}ms` }">
              <div class="text-4xl lg:text-5xl font-bold text-white mb-3 
                group-hover:scale-110 transition-transform duration-300">
                {{ stat.value }}
              </div>
              <div class="text-white/90 text-base font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nossa História -->
    <section class="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute top-20 right-0 w-72 h-72" style="background-color: #004aad; opacity: 0.05; filter: blur(100px);"></div>
      
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <span class="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" 
              style="background-color: rgba(0, 74, 173, 0.1); color: #004aad; border: 1px solid rgba(0, 74, 173, 0.2);">
              Nossa História
            </span>
            
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Inovação que <span style="color: #004aad;">transforma</span>
            </h2>
            
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A Dinblu nasceu da visão de simplificar a gestão empresarial através da tecnologia. 
                Começamos desenvolvendo soluções para pequenos negócios e, com o feedback constante 
                dos nossos clientes, expandimos nossa plataforma.
              </p>
              <p>
                Hoje, somos referência em sistemas de gestão, com soluções específicas para 
                diversos setores e um compromisso inabalável com a inovação e satisfação dos 
                nossos clientes.
              </p>
            </div>
            
            <!-- Achievement badge -->
            <!-- <div class="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl" 
              style="background-color: rgba(0, 74, 173, 0.05); border: 1px solid rgba(0, 74, 173, 0.2);">
              <svg class="w-8 h-8" style="color: #004aad;" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <div class="text-sm text-gray-600">Avaliação média</div>
                <div class="text-2xl font-bold text-gray-900">4.7/5</div>
              </div>
            </div> -->
          </div>
          
          <div class="order-1 lg:order-2 relative group">
            <div class="absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" 
              style="background-color: rgba(0, 74, 173, 0.2);"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
              alt="Equipe Dinblu"
              class="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 
                group-hover:-translate-y-2" />
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-24 lg:py-32 bg-white relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full" style="background-color: rgba(0, 74, 173, 0.05); filter: blur(100px);"></div>
      
      <div class="container relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full text-sm font-semibold mb-6" 
            style="background-color: rgba(0, 74, 173, 0.1); color: #004aad; border: 1px solid rgba(0, 74, 173, 0.2);">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Nossos Valores
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Os princípios que <span style="color: #004aad;">nos guiam</span>
          </h2>
          <p class="text-lg text-gray-600">
            Valores que norteiam cada decisão e ação
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(valor, index) in valores" :key="valor.title"
            class="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-md 
              hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 
              border border-gray-200/50 hover:border-dinblu/30 overflow-hidden card-stagger"
            :style="{ animationDelay: `${index * 150}ms` }">
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              style="background-color: rgba(0, 74, 173, 0.03);"></div>
            
            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300" 
                style="--hover-color: #004aad;">
                {{ valor.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ valor.description }}
              </p>
            </div>
            
            <!-- Corner accent -->
            <div class="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              style="background-color: rgba(0, 74, 173, 0.08);"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full" style="background-color: rgba(0, 74, 173, 0.05); filter: blur(100px);"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-20">
          <span class="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" 
            style="background-color: rgba(0, 74, 173, 0.1); color: #004aad; border: 1px solid rgba(0, 74, 173, 0.2);">
            Timeline
          </span>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nossa <span style="color: #004aad;">jornada</span>
          </h2>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="space-y-12">
            <div v-for="(marco, index) in timeline" :key="marco.ano"
              class="group relative flex gap-8 card-stagger"
              :style="{ animationDelay: `${index * 200}ms` }">
              
              <!-- Year indicator -->
              <div class="relative shrink-0">
                <div class="sticky top-32 w-32 lg:w-40">
                  <div class="text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300" 
                    style="color: #004aad;">
                    {{ marco.ano }}
                  </div>
                </div>
                <!-- Connection line -->
                <div v-if="index < timeline.length - 1" 
                  class="absolute left-8 top-16 bottom-0 w-0.5" style="background-color: rgba(0, 74, 173, 0.2);"></div>
              </div>
              
              <!-- Content card -->
              <div class="flex-1 bg-white p-8 rounded-2xl border border-gray-200/50 
                group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1" 
                style="--hover-border-color: rgba(0, 74, 173, 0.3);">
                <h3 class="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">
                  {{ marco.titulo }}
                </h3>
                <p class="text-gray-600 leading-relaxed text-lg">{{ marco.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 lg:py-32 relative overflow-hidden" style="background-color: #004aad;">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 animate-pulse"></div>
      
      <!-- Decorative circles -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm 
            rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Junte-se a nós
          </span>
          
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Vamos <span class="text-yellow-300">transformar</span> seu negócio?
          </h2>
          <p class="text-xl text-white/95 mb-12 leading-relaxed">
            Conheça nossas soluções e descubra como podemos ajudar sua empresa
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink to="https://https://dinblu.com.br/contato"
              class="group px-8 py-4 bg-white text-dinblu rounded-full font-bold text-lg
                hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl 
                hover:-translate-y-1 flex items-center gap-2 justify-center min-w-[200px]">
              Fale Conosco
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/solucoes"
              class="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full 
                font-semibold text-lg border-2 border-white/40 hover:bg-white/20 
                transition-all duration-300 flex items-center gap-2 justify-center min-w-[200px]
                hover:-translate-y-1">
              Nossas Soluções
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
          
          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div class="flex items-center gap-2 text-white/90">
              <svg class="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm font-medium">+15 empresas atendidas</span>
            </div>
            
            <div class="flex items-center gap-2 text-white/90">
              <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="text-sm font-medium">5 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  {
    value: '+15',
    label: 'Empresas atendidas',
    icon: 'IconBuilding'
  },
  {
    value: '3',
    label: 'Anos no mercado',
    icon: 'IconCalendar'
  },
  {
    value: '4.8/5',
    label: 'Satisfação dos clientes',
    icon: 'IconStar'
  }
]

const valores = [
  {
    title: 'Foco no Cliente',
    description: 'Colocamos nossos clientes em primeiro lugar, buscando sempre superar suas expectativas.'
  },
  {
    title: 'Inovação Constante',
    description: 'Buscamos sempre as melhores soluções tecnológicas para nossos clientes.'
  },
  {
    title: 'Confiança',
    description: 'Construímos relacionamentos duradouros baseados em transparência e segurança.'
  }
]



const timeline = [
  {
    ano: '2021',
    titulo: 'O início da jornada',
    descricao: 'Fundação da Dinblu com foco em criar uma solução acessivel para gestão de gastos pessoais.',
  },
  {
    ano: '2024',
    titulo: 'Expansão do portfólio',
    descricao: 'Expandindo o portfólio para atender a necessidade de gestão empresarial.',
  }
]

useHead({
  title: 'Sobre a Dinblu | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Conheça a história da Dinblu, nossa missão, valores e a equipe que faz acontecer.'
    }
  ]
})
</script>

<style scoped lang="postcss">
.page-with-hero {
  padding-top: 80px;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
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

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 