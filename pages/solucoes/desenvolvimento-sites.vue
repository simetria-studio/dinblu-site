<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-32">
      <div class="absolute inset-0"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-1 bg-black/10 backdrop-blur-sm rounded-full 
            text-black text-sm font-medium mb-6 gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400"></span>
            Desenvolvimento de Sites
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Fazemos sites personalizados
          </h1>
          <p class="text-xl text-black/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Sites institucionais de forma simples, prática e rápida
          </p>
          <p class="text-lg text-black/80 mb-12 max-w-2xl mx-auto">
            Transforme sua presença digital com um site profissional que representa sua marca
          </p>
        </div>
      </div>
    </section>

    <!-- Por que escolher Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p class="text-lg text-black/90 max-w-2xl mx-auto">
            Desenvolvemos sites que convertem visitantes em clientes
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title"
            class="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
              :class="benefit.bgColor">
              <svg class="w-7 h-7" :class="benefit.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.iconPath"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tipos de Sites Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tipos de sites que desenvolvemos
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções personalizadas para cada necessidade
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="tipo in tiposSites" :key="tipo.title"
            class="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"
              :class="tipo.gradient"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6
                group-hover:bg-white transition-colors duration-300">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tipo.iconPath"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {{ tipo.title }}
              </h3>
              <p class="text-gray-600 group-hover:text-white/90 transition-colors">
                {{ tipo.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso processo de trabalho
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Simples, prático e rápido
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div v-for="(step, index) in processoSteps" :key="step.title"
              class="flex gap-6 items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full 
                  flex items-center justify-center text-gray-900 font-bold text-lg shadow-lg">
                  {{ index + 1}}
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const benefits = [
  {
    title: 'Design Profissional',
    description: 'Layouts modernos e responsivos que se adaptam a todos os dispositivos.',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  {
    title: 'SEO Otimizado',
    description: 'Seu site preparado para aparecer no Google e atrair mais visitantes.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    title: 'Entrega Rápida',
    description: 'Desenvolvemos e entregamos seu site em tempo recorde.',
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Totalmente Responsivo',
    description: 'Funciona perfeitamente em celulares, tablets e desktops.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e suporte técnico após a entrega do projeto.',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Segurança Garantida',
    description: 'Certificado SSL e proteção contra ataques e invasões.',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  }
]

const tiposSites = [
  {
    title: 'Site Institucional',
    description: 'Apresente sua empresa de forma profissional com páginas sobre, serviços, contato e muito mais.',
    gradient: 'from-purple-600/10 to-transparent',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Landing Page',
    description: 'Páginas de vendas otimizadas para converter visitantes em clientes.',
    gradient: 'from-blue-600/10 to-transparent',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Portfólio',
    description: 'Mostre seus trabalhos e projetos de forma elegante e profissional.',
    gradient: 'from-cyan-600/10 to-transparent',
    iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    title: 'Blog',
    description: 'Plataforma completa para publicar artigos, notícias e conteúdos.',
    gradient: 'from-green-600/10 to-transparent',
    iconPath: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
  },
  {
    title: 'E-commerce',
    description: 'Loja virtual completa para vender seus produtos online.',
    gradient: 'from-orange-600/10 to-transparent',
    iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Sistema Web',
    description: 'Soluções personalizadas e sistemas sob medida para seu negócio.',
    gradient: 'from-pink-600/10 to-transparent',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  }
]

const processoSteps = [
  {
    title: 'Briefing',
    description: 'Conversamos sobre suas necessidades e objetivos para entender exatamente o que você precisa.'
  },
  {
    title: 'Planejamento',
    description: 'Criamos um plano detalhado com estrutura, funcionalidades e cronograma do projeto.'
  },
  {
    title: 'Design',
    description: 'Desenvolvemos o layout visual do seu site com foco na experiência do usuário.'
  },
  {
    title: 'Desenvolvimento',
    description: 'Codificamos seu site com as melhores tecnologias e práticas do mercado.'
  },
  {
    title: 'Testes e Revisão',
    description: 'Testamos tudo para garantir que está funcionando perfeitamente em todos os dispositivos.'
  },
  {
    title: 'Lançamento',
    description: 'Publicamos seu site e fornecemos todo o suporte necessário.'
  }
]

useHead({
  title: 'Desenvolvimento de Sites Personalizados | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Desenvolvemos sites personalizados e institucionais de forma simples, prática e rápida. Entre em contato e solicite um orçamento.'
    }
  ]
})
</script>

<style scoped>
/* Adicione estilos customizados se necessário */
</style>
