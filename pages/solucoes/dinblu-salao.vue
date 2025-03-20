<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-32 bg-dinblu overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      <!-- Círculos decorativos -->
      <div class="absolute right-0 top-0 w-[800px] h-[800px] 
        bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -left-40 top-40 w-[600px] h-[600px] 
        bg-gradient-to-tr from-dinblu/30 to-cyan-400/20 rounded-full blur-3xl"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full 
            text-white text-sm font-medium mb-6 gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Sistema para Salões de Beleza
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            Gestão completa para seu salão de beleza
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-100">
            Do agendamento ao controle financeiro, tudo em uma única plataforma.
            Simplifique a gestão do seu salão e encante seus clientes.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fadeInUp delay-200">
            <a href="#recursos" 
              class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
              hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5
              hover:shadow-xl hover:shadow-white/20">
              Conhecer recursos
            </a>
            <NuxtLink to="https://suporte.dinblu.com.br/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
              class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
              border-2 border-white/30 hover:bg-white/10 transition-all duration-300
              hover:border-white/50">
              Agendar demonstração
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative -mt-12 mb-20">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(stat, index) in stats" :key="index"
            class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
            transform hover:-translate-y-1 group">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 rounded-xl bg-dinblu/10 flex items-center justify-center
                group-hover:bg-dinblu/20 transition-colors">
                <component :is="stat.icon" class="w-6 h-6 text-dinblu"/>
              </div>
              <div class="text-3xl font-bold text-gray-900">{{ stat.value }}</div>
            </div>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gestão do Salão Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Gestão do Salão</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Controle total do seu salão
            </h2>
            <div class="space-y-6">
              <div v-for="feature in gestaoFeatures" :key="feature"
                class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg 
                transition-all duration-300">
                <span class="w-10 h-10 rounded-xl bg-dinblu/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-dinblu/30 to-blue-500/30 rounded-3xl 
              blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069" 
              alt="Gestão do Salão"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Controle Financeiro Section -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Controle Financeiro</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gestão financeira completa
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Controle total das suas finanças com relatórios detalhados
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in financeiroFeatures" :key="feature.title"
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
            hover:-translate-y-1 relative overflow-hidden border border-gray-100">
            <div class="absolute inset-0 bg-gradient-to-r from-dinblu/5 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center mb-6
                group-hover:bg-dinblu/20 transition-colors duration-300">
                <component :is="feature.icon" class="w-7 h-7 text-dinblu" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="recursos" class="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute right-0 top-0 w-[600px] h-[600px] 
          bg-gradient-to-br from-dinblu/5 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute -left-40 bottom-0 w-[500px] h-[500px] 
          bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div class="container relative">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Recursos</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p class="text-lg text-gray-600">
            Recursos pensados para facilitar a gestão do seu salão
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="feature.title"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
            hover:-translate-y-1 group"
            :class="{'animate-fadeInUp': true}"
            :style="`animation-delay: ${index * 100}ms`">
            <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center mb-6
              group-hover:bg-dinblu/20 transition-colors">
              <component :is="feature.icon" class="w-7 h-7 text-dinblu"/>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Planos Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Planos</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Do pequeno ao grande salão, temos o plano perfeito para o seu negócio
          </p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="py-6 px-6 text-left font-semibold text-gray-900">Recursos</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Light</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Pro</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Premium</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(feature, index) in planoFeatures" :key="index"
                class="border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td class="py-4 px-6 font-medium text-gray-900">{{ feature.name }}</td>
                <td v-for="plan in ['light', 'pro', 'premium', 'enterprise']" 
                  :key="plan"
                  class="py-4 px-6 text-center">
                  <template v-if="typeof feature[plan] === 'boolean'">
                    <svg v-if="feature[plan]" 
                      class="w-6 h-6 text-green-500 mx-auto" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span v-else class="text-gray-300">—</span>
                  </template>
                  <template v-else>
                    <span class="font-medium text-gray-900">{{ feature[plan] }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container">
        <div class="relative bg-dinblu rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-dinblu/20 to-blue-600/20 backdrop-blur-sm"></div>

          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme a gestão do seu agronegócio
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Dinblu Agro pode ajudar seu negócio
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <NuxtLink to="https://suporte.dinblu.com.br/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
                class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
                hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Agendar demonstração
              </NuxtLink>
              <a href="tel:+551140028922"
                class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold
                border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
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
const stats = [
  {
    value: '+8mil',
    label: 'Salões atendidos',
    icon: 'IconUsers'
  },
  {
    value: '98%',
    label: 'Satisfação dos clientes',
    icon: 'IconHeart'
  },
  {
    value: '24/7',
    label: 'Suporte especializado',
    icon: 'IconSupport'
  }
]

const features = [
  {
    title: 'Agendamento Online',
    description: 'Sistema completo de agendamento com confirmação automática por WhatsApp.',
    icon: 'IconCalendar'
  },
  {
    title: 'Controle Financeiro',
    description: 'Gestão completa de caixa, comissões e relatórios financeiros.',
    icon: 'IconMoney'
  },
  {
    title: 'Gestão de Clientes',
    description: 'Cadastro completo com histórico de atendimentos e preferências.',
    icon: 'IconUser'
  },
  {
    title: 'Controle de Estoque',
    description: 'Gestão de produtos e alertas de estoque baixo.',
    icon: 'IconStock'
  },
  {
    title: 'Comissionamento',
    description: 'Cálculo automático de comissões por profissional e serviço.',
    icon: 'IconCommission'
  },
  {
    title: 'Marketing Digital',
    description: 'Ferramentas para fidelização e campanhas de marketing.',
    icon: 'IconMarketing'
  },
  {
    title: 'Multi-unidades',
    description: 'Gestão centralizada para redes de salões.',
    icon: 'IconMultiUnits'
  },
  {
    title: 'Relatórios Gerenciais',
    description: 'Dashboards e relatórios detalhados para tomada de decisão.',
    icon: 'IconReports'
  },
  {
    title: 'App do Cliente',
    description: 'Aplicativo personalizado para seus clientes agendarem serviços.',
    icon: 'IconApp'
  }
]

const planoFeatures = [
  {
    name: 'Profissionais',
    light: 'Até 2',
    pro: 'Até 5',
    premium: 'Até 10',
    enterprise: 'Ilimitado'
  },
  {
    name: 'Agendamento online',
    light: true,
    pro: true,
    premium: true,
    enterprise: true
  },
  {
    name: 'Controle financeiro',
    light: true,
    pro: true,
    premium: true,
    enterprise: true
  },
  {
    name: 'Gestão de clientes',
    light: true,
    pro: true,
    premium: true,
    enterprise: true
  },
  {
    name: 'Controle de estoque',
    light: false,
    pro: true,
    premium: true,
    enterprise: true
  },
  {
    name: 'Comissionamento',
    light: false,
    pro: true,
    premium: true,
    enterprise: true
  },
  {
    name: 'Marketing digital',
    light: false,
    pro: true,
    premium: true,
    enterprise: true
  },
  {
    name: 'Multi-unidades',
    light: false,
    pro: false,
    premium: true,
    enterprise: true
  },
  {
    name: 'API de integração',
    light: false,
    pro: false,
    premium: true,
    enterprise: true
  },
  {
    name: 'Suporte prioritário',
    light: false,
    pro: false,
    premium: true,
    enterprise: true
  },
  {
    name: 'Personalização total',
    light: false,
    pro: false,
    premium: false,
    enterprise: true
  }
]

const gestaoFeatures = [
  'Agendamento online integrado com WhatsApp',
  'Controle de agenda por profissional',
  'Gestão de comissões personalizada',
  'Cadastro completo de clientes',
  'Controle de estoque e produtos',
  'Histórico de atendimentos'
]

const financeiroFeatures = [
  {
    title: 'Fluxo de Caixa',
    description: 'Controle completo de entradas e saídas, com categorização e relatórios detalhados.',
    icon: 'IconChart'
  },
  {
    title: 'Comissionamento',
    description: 'Cálculo automático de comissões por profissional, serviço ou produto vendido.',
    icon: 'IconMoney'
  },
  {
    title: 'Relatórios Gerenciais',
    description: 'Dashboards e indicadores para acompanhamento do desempenho do seu salão.',
    icon: 'IconPieChart'
  }
]

useHead({
  title: 'Dinblu Salão - Sistema para Salões de Beleza | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para gestão de salões de beleza. Agendamento online, controle financeiro, gestão de profissionais e muito mais.'
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

/* Adiciona rolagem suave */
html {
  scroll-behavior: smooth;
}

/* Ajusta o offset da âncora para compensar o header fixo */
#recursos {
  scroll-margin-top: 100px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

/* Adiciona efeito de hover suave nos cards */
.hover\:shadow-xl {
  transition: box-shadow 0.3s ease-in-out;
}

/* Melhora a interatividade dos botões */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style> 