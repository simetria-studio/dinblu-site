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
            <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
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
    <section class="py-24 bg-gray-50">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/10 rounded-full mb-6
            border border-dinblu/20">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-semibold text-dinblu">Planos</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Escolha o plano ideal para você
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Do pequeno ao grande salão, temos o plano perfeito para o seu negócio
          </p>
        </div>

        <!-- Modern Comparison Table -->
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
              <table class="min-w-full divide-y divide-gray-200">
                <!-- Table Header -->
                <thead class="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th scope="col" class="pt-12 pb-6 px-6 text-left">
                      <span class="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Comparativo
                      </span>
                    </th>
                    <th v-for="plan in plans" :key="plan.name" 
                      scope="col" 
                      class="pt-12 pb-6 px-4 text-center relative"
                      :class="plan.popular ? 'bg-dinblu' : ''">
                      <!-- Popular Badge -->
                      <div v-if="plan.popular" 
                        class="absolute top-2 left-1/2 -translate-x-1/2 z-20">
                        <span class="px-3 py-1 bg-orange-500 rounded-full 
                          text-xs font-bold text-white shadow-lg uppercase tracking-wider whitespace-nowrap">
                          Mais Popular
                        </span>
                      </div>
                      
                      <!-- Plan Name -->
                      <div class="text-xl font-bold mb-2"
                        :class="plan.popular ? 'text-white' : 'text-gray-900'">
                        {{ plan.name }}
                      </div>
                      
                      <!-- Description/Users -->
                      <div class="text-sm mb-1"
                        :class="plan.popular ? 'text-white/90' : 'text-gray-600'">
                       <!-- {{ plan.price }} -->
                      </div>
                      <div class="text-xs"
                        :class="plan.popular ? 'text-white/80' : 'text-gray-500'">
                        {{ plan.users }}
                      </div>
                    </th>
                  </tr>
                </thead>

                <!-- Table Body -->
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(feature, idx) in allFeatures" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plans" :key="plan.name"
                      class="py-4 px-4 text-center transition-all duration-200"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncluded(plan.name, feature)" 
                          class="w-6 h-6 text-green-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24">
                          <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2.5" 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <svg v-else
                          class="w-6 h-6 text-gray-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24">
                          <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <!-- Table Footer with CTAs -->
                <tfoot class="bg-gray-50">
                  <tr>
                    <td class="py-6 px-6"></td>
                    <td v-for="plan in plans" :key="plan.name" 
                      class="py-6 px-2 text-center"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
                        class="inline-block px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200
                        hover:shadow-md whitespace-nowrap"
                        :class="plan.popular
                          ? 'bg-dinblu text-white hover:bg-blue-700'
                          : 'bg-dinblu text-white hover:bg-blue-700'">
                        Escolher Plano
                      </NuxtLink>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="text-center mt-12">
          <p class="text-gray-600 mb-4">
            Todos os planos incluem suporte técnico e atualizações gratuitas
          </p>
          <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
            class="inline-flex items-center gap-2 text-dinblu font-semibold hover:gap-3 transition-all duration-300">
            Falar com especialista
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Módulos Adicionais Section - Infinite Marquee -->
    <section class="border-t border-gray-200 pt-16 pb-16 overflow-hidden bg-gray-50">
      <div class="container">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4
            border border-purple-100">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-sm font-semibold text-purple-600">Extras</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Módulos Adicionais
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Personalize seu sistema com funcionalidades extras
          </p>
        </div>

        <!-- Marquee Container -->
        <div class="relative">
          <!-- Fade Edges -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <!-- Row 1: Move Left -->
          <div class="flex overflow-hidden mb-4 group/marquee">
            <div class="flex gap-4 animate-marquee group-hover/marquee:pause whitespace-nowrap py-2">
              <!-- Original Items -->
              <div v-for="module in modulesRow1" :key="module.name"
                class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md 
                transition-all duration-200 flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
              <!-- Duplicate Items -->
              <div v-for="module in modulesRow1" :key="`${module.name}-dup`"
                class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md 
                transition-all duration-200 flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
               <!-- Duplicate Items Again for Safety -->
               <div v-for="module in modulesRow1" :key="`${module.name}-dup2`"
                class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md 
                transition-all duration-200 flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 2: Move Right -->
          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 animate-marquee-reverse group-hover/marquee:pause whitespace-nowrap py-2">
              <!-- Original Items -->
              <div v-for="module in modulesRow2" :key="module.name"
                class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md 
                transition-all duration-200 flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
              <!-- Duplicate Items -->
              <div v-for="module in modulesRow2" :key="`${module.name}-dup`"
                class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md 
                transition-all duration-200 flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
              <!-- Duplicate Items Again -->
              <div v-for="module in modulesRow2" :key="`${module.name}-dup2`"
                class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md 
                transition-all duration-200 flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
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
              <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
                class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
                hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Agendar demonstração
              </NuxtLink>
              <a href="tel:+551140028922"
                class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold
                border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                (41) 98769-4250
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

const plans = [
  {
    name: 'Light',
    users: '1 a 4 profissionais',
    popular: false,
    features: [
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Gerenciamento de comissões', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Link de Agendamento/ Qr Code', included: false },
      { name: 'NFe', included: false },
      { name: 'NFSe', included: false },
      { name: 'NFCe', included: false },
      { name: 'Geração XML', included: false },
      { name: 'Financeiro', included: false },
      { name: 'Ordem de serviço', included: false },
      { name: 'Produção', included: false },
      { name: 'Boleto', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Básico',
    users: '5 a 10 profissionais',
    popular: false,
    features: [
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Gerenciamento de comissões', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Link de Agendamento/ Qr Code', included: true },
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Geração XML', included: true },
      { name: 'Financeiro', included: false },
      { name: 'Ordem de serviço', included: false },
      { name: 'Produção', included: false },
      { name: 'Boleto', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Intermediário',
    users: '11 a 20 profissionais',
    popular: true,
    features: [
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Gerenciamento de comissões', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Link de Agendamento/ Qr Code', included: true },
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Geração XML', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Produção', included: true },
      { name: 'Boleto', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Avançado',
    users: '21 a 30 profissionais',
    popular: false,
    features: [
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Gerenciamento de comissões', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Link de Agendamento/ Qr Code', included: true },
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Geração XML', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Produção', included: true },
      { name: 'Boleto', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Premium',
    users: 'Mais de 30 profissionais',
    popular: false,
    features: [
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Gerenciamento de comissões', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Link de Agendamento/ Qr Code', included: true },
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Geração XML', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Produção', included: true },
      { name: 'Boleto', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Sped Contribuições', included: true },
      { name: 'Sped Fiscal', included: true }
    ]
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

// Extract all unique features from all plans
const allFeatures = computed(() => {
  const featuresSet = new Set()
  plans.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncluded = (planName, featureName) => {
  const plan = plans.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}

// Módulos adicionais
const additionalModules = [
  { name: 'Tef Sitef' },
  { name: 'Adicional Tef' },
  { name: 'Integração Pix' },
  { name: 'Assinador' },
  { name: 'SEUPOS' },
  { name: 'SEUPOS + STONE' },
  { name: 'STONE Connect' },
  { name: 'WhatsApp' },
  { name: 'Boleto' },
  { name: 'VERO Connect' },
  { name: 'Mercado Pago Connect' },
  { name: 'Promoção' }
]

// Split modules into 2 rows for marquee
const modulesRow1 = computed(() => additionalModules.slice(0, Math.ceil(additionalModules.length / 2)))
const modulesRow2 = computed(() => additionalModules.slice(Math.ceil(additionalModules.length / 2)))

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

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-33.33%); }
  100% { transform: translateX(0); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
  will-change: transform;
}

.animate-marquee-reverse {
  animation: marquee-reverse 20s linear infinite;
  will-change: transform;
}

.group\/marquee:hover .animate-marquee,
.group\/marquee:hover .animate-marquee-reverse {
  animation-play-state: paused;
}
</style> 