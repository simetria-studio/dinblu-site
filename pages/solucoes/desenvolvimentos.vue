<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-32 bg-white overflow-hidden">
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-1 bg-black/10 backdrop-blur-sm rounded-full 
            text-black text-sm font-medium mb-6 gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400"></span>
            Desenvolvimento de Sistemas
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Transforme sua visão em realidade
          </h1>
          <p class="text-xl text-black/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos sistemas sob medida que se adaptam perfeitamente às necessidades do seu negócio. Desde controle de frota até gestão de franquias, criamos a solução ideal para você.
          </p>
          <p class="text-lg text-black/70 max-w-2xl mx-auto">
            100% web • Totalmente seguro • Suporte especializado
          </p>
        </div>
      </div>
    </section>

    <!--Exemplos de Sistemas Section com Marquee -->
    <section class="overflow-hidden py-20 bg-gray-900">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            Exemplos de sistemas que desenvolvemos
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-300">
            Soluções personalizadas para diversos segmentos
          </p>
        </div>

        <div class="relative">
          <div class="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>
          <div class="absolute top-0 right-0 bottom-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>

          <div class="flex overflow-hidden mb-4 group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee group-hover/marquee:pause">
              <div v-for="sistema in sistemasRow1" :key="sistema"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-green-500/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ sistema.name }}</span>
              </div>
              <div v-for="sistema in sistemasRow1" :key="`${sistema}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-green-500/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ sistema.name }}</span>
              </div>
              <div v-for="sistema in sistemasRow1" :key="`${sistema}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-green-500/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ sistema.name }}</span>
              </div>
            </div>
          </div>

          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee-reverse group-hover/marquee:pause">
              <div v-for="sistema in sistemasRow2" :key="sistema"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-green-500/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ sistema.name }}</span>
              </div>
              <div v-for="sistema in sistemasRow2" :key="`${sistema}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-green-500/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ sistema.name }}</span>
              </div>
              <div v-for="sistema in sistemasRow2" :key="`${sistema}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-green-500/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ sistema.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Por que escolher Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nossos desenvolvimentos?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta com atendimento personalizado
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

    <!-- Processo Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona o desenvolvimento
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Processo ágil e transparente
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div v-for="(step, index) in processoSteps" :key="step.title"
              class="flex gap-6 items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg shadow-lg">
                  {{ index + 1 }}
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

    <!-- Tecnologias Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias utilizadas
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            As melhores ferramentas do mercado
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="tech in tecnologias" :key="tech.title"
            class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ tech.title }}</h3>
            <p class="text-gray-600 text-sm">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Exemplos de sistemas
const exemplosSistemas = [
  { name: 'Sistema para Contabilidade' },
  { name: 'Controle de Frota' },
  { name: 'Gestão de Franquias' },
  { name: 'Sistema de Help Desk' },
  { name: 'Gestão de Projetos' },
  { name: 'Sistema ERP Customizado' },
  { name: 'Gestão de RH' },
  { name: 'Sistema de Agendamentos' },
  { name: 'Portal do Cliente' },
  { name: 'Sistema de Delivery' },
  { name: 'Gestão de Leads - CRM' },
  { name: 'Sistema de Ponto Eletrônico' },
  { name: 'Gestão de Documentos' },
  { name: 'Sistema de Reservas' },
  { name: 'E muito mais!' }
]

// Split sistemas into 2 rows for marquee
const sistemasRow1 = computed(() => exemplosSistemas.slice(0, Math.ceil(exemplosSistemas.length / 2)))
const sistemasRow2 = computed(() => exemplosSistemas.slice(Math.ceil(exemplosSistemas.length / 2)))

const benefits = [
  {
    title: 'Totalmente Web',
    description: 'Acesse de qualquer lugar, a qualquer momento, sem necessidade de instalação.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
  },
  {
    title: 'Seguro',
    description: 'Criptografia de ponta a ponta, backup automático e certificado SSL.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    title: 'Suporte Especializado',
    description: 'Equipe dedicada para tirar dúvidas e garantir o funcionamento perfeito.',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Personalização Total',
    description: 'Sistema desenvolvido de acordo com suas necessidades específicas.',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    title: 'Escalável',
    description: 'Seu sistema cresce junto com seu negócio, sem limitações.',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Integração',
    description: 'Conecte com outros sistemas e APIs para automatizar processos.',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    iconPath: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  }
]

const processoSteps = [
  {
    title: 'Levantamento de Requisitos',
    description: 'Reuniões para entender profundamente suas necessidades e processos atuais.'
  },
  {
    title: 'Proposta e Orçamento',
    description: 'Apresentação de proposta técnica detalhada com cronograma e valores.'
  },
  {
    title: 'Desenvolvimento',
    description: 'Codificação do sistema com reuniões periódicas para validação.'
  },
  {
    title: 'Testes',
    description: 'Bateria completa de testes para garantir qualidade e segurança.'
  },
  {
    title: 'Treinamento',
    description: 'Capacitação da sua equipe para uso eficiente do sistema.'
  },
  {
    title: 'Implantação e Suporte',
    description: 'Colocação do sistema em produção com acompanhamento contínuo.'
  }
]

const tecnologias = [
  {
    title: 'Cloud Computing',
    description: 'Hospedagem em nuvem com alta disponibilidade e performance'
  },
  {
    title: 'Banco de Dados Robusto',
    description: 'Para armazenar e gerenciar dados de forma segura e eficiente'
  },
  {
    title: 'APIs RESTful',
    description: 'Integração fácil com outros sistemas e aplicativos'
  },
  {
    title: 'Responsive Design',
    description: 'Interface adaptada para desktop, tablet e mobile'
  }
]

useHead({
  title: 'Desenvolvimento de Sistemas Personalizados | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Desenvolvemos sistemas personalizados sob medida. Contabilidade, controle de frota, franquias e muito mais. Totalmente web, seguro e com suporte.'
    }
  ]
})
</script>

<style scoped>
/* Estilos customizados se necessário */
</style>
