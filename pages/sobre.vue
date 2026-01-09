<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center bg-dinblu">
      <!-- Overlay sutil -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Simplificando a gestão empresarial
          </h1>
          <p class="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Desde 2021 desenvolvendo soluções que transformam a maneira como as empresas trabalham
          </p>
          
          <!-- Stats -->
          <div class="grid md:grid-cols-4 gap-8 mt-16">
            <div v-for="stat in stats" :key="stat.label"
              class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div class="text-3xl font-bold text-white mb-2">{{ stat.value }}</div>
              <div class="text-white/80 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nossa História -->
    <section class="py-24 bg-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-8">
              Nossa História
            </h2>
            <div class="space-y-6 text-lg text-gray-600">
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
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
              alt="Equipe Dinblu"
              class="rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-24 bg-gray-50">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Nossos Valores
          </h2>
          <p class="text-lg text-gray-600">
            Os princípios que guiam nossas decisões e ações
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="valor in valores" :key="valor.title"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center mb-6">
              <component :is="valor.icon" class="w-7 h-7 text-dinblu" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              {{ valor.title }}
            </h3>
            <p class="text-gray-600">
              {{ valor.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-24 bg-white">
      <div class="container">
        <h2 class="text-4xl font-bold text-gray-900 mb-16 text-center">
          Nossa Jornada
        </h2>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-16">
            <div v-for="marco in timeline" :key="marco.ano"
              class="flex gap-8">
              <div class="w-32 shrink-0">
                <div class="text-2xl font-bold text-dinblu">{{ marco.ano }}</div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">
                  {{ marco.titulo }}
                </h3>
                <p class="text-gray-600">{{ marco.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-dinblu">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-8">
            Vamos transformar seu negócio?
          </h2>
          <p class="text-xl text-white/90 mb-12">
            Conheça nossas soluções e descubra como podemos ajudar sua empresa
          </p>
          <div class="flex justify-center gap-6">
            <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
              class="px-8 py-4 bg-white text-dinblu rounded-xl font-semibold
              hover:bg-gray-100 transition-all duration-300">
              Fale Conosco
            </NuxtLink>
            <NuxtLink to="/solucoes"
              class="px-8 py-4 bg-transparent text-white rounded-xl font-semibold
              border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Nossas Soluções
            </NuxtLink>
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
    icon: 'IconHeart',
    title: 'Foco no Cliente',
    description: 'Colocamos nossos clientes em primeiro lugar, buscando sempre superar suas expectativas.'
  },
  {
    icon: 'IconLightBulb',
    title: 'Inovação Constante',
    description: 'Buscamos sempre as melhores soluções tecnológicas para nossos clientes.'
  },
  {
    icon: 'IconShield',
    title: 'Confiança',
    description: 'Construímos relacionamentos duradouros baseados em transparência e segurança.'
  }
]



const timeline = [
  {
    ano: '2021',
    titulo: 'O início da jornada',
    descricao: 'Fundação da Dinblu com foco em soluções para pequenas empresas.',
    imagem: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070'
  },
  {
    ano: '2024',
    titulo: 'Expansão do portfólio',
    descricao: 'Adaptação rápida para atender as necessidades do mercado durante a pandemia.',
    imagem: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070'
  },
  {
    ano: '2025',
    titulo: 'Lançamento do Dinblu Atendimento',
    descricao: 'Lançamento de novas soluções e expansão para novos mercados.',
    imagem: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070'
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

/* Transições suaves */
.transition-all {
  @apply transition-all duration-300 ease-in-out;
}
</style> 