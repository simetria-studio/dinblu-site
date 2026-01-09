<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-32 bg-dinblu overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full 
            text-white text-sm font-medium mb-6 gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400"></span>
            Sistema para Agronegócio
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gestão completa para o agronegócio
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sistema completo para gestão do agronegócio. Do campo ao financeiro, 
            tudo em uma única plataforma.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 mt-12">
            <a href="#features" 
              class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
              hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              Conhecer recursos
            </a>
            <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
              class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
              border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Tenho interesse
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative -mt-12 mb-20">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
            transform hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 rounded-xl bg-dinblu/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+5mil</div>
            </div>
            <p class="text-gray-600">Produtores atendidos</p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
            transform hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 rounded-xl bg-dinblu/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">100%</div>
            </div>
            <p class="text-gray-600">Integrado com SPED</p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
            transform hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 rounded-xl bg-dinblu/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">24/7</div>
            </div>
            <p class="text-gray-600">Suporte especializado</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gestão Rural Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Gestão Rural</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Controle total da sua produção
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
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070" 
              alt="Gestão Rural"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Controle Financeiro Section -->
    <section class="py-20 bg-white relative overflow-hidden" id="features">
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
            Do pequeno ao grande produtor, temos o plano perfeito para o seu negócio
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
                    <th v-for="plan in plansAgro" :key="plan.name" 
                      scope="col" 
                      class="pt-12 pb-6 px-6 text-center relative"
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
                      
                      <!-- Description -->
                      <div class="text-sm"
                        :class="plan.popular ? 'text-white/90' : 'text-gray-600'">
                        {{ plan.description }}
                      </div>
                    </th>
                  </tr>
                </thead>

                <!-- Table Body -->
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(feature, idx) in allFeaturesAgro" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plansAgro" :key="plan.name"
                      class="py-4 px-6 text-center transition-all duration-200"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncludedAgro(plan.name, feature)" 
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
                    <td v-for="plan in plansAgro" :key="plan.name" 
                      class="py-6 px-4 text-center"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
                        class="inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200
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

    <!-- Planos por Volume Section -->
    <section class="py-24 bg-white">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/10 rounded-full mb-6
            border border-dinblu/20">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-semibold text-dinblu">Planos por Volume</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Escolha por volume de emissão
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis baseados na quantidade de documentos fiscais emitidos mensalmente
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
                    <th scope="col" class="pt-8 pb-6 px-4 text-left">
                      <span class="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Recursos
                      </span>
                    </th>
                    <th v-for="plan in plansVolume" :key="plan.name" 
                      scope="col" 
                      class="pt-8 pb-6 px-3 text-center">
                      <!-- Plan Name -->
                      <div class="text-base font-bold mb-2 text-gray-900">
                        {{ plan.name }}
                      </div>
                      
                      <!-- Description -->
                      <div class="text-xs text-gray-600">
                        {{ plan.description }}
                      </div>
                    </th>
                  </tr>
                </thead>

                <!-- Table Body -->
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(feature, idx) in allFeaturesVolume" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plansVolume" :key="plan.name"
                      class="py-4 px-3 text-center transition-all duration-200">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncludedVolume(plan.name, feature)" 
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
                    <td class="py-6 px-4"></td>
                    <td v-for="plan in plansVolume" :key="plan.name" 
                      class="py-6 px-2 text-center">
                      <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
                        class="inline-block px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200
                        hover:shadow-md whitespace-nowrap bg-dinblu text-white hover:bg-blue-700">
                        Escolher
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
            Todos os planos por volume incluem os recursos básicos de emissão fiscal
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
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
const gestaoFeatures = [
  'Controle de safras e talhões',
  'Gestão de insumos e defensivos',
  'Planejamento de produção',
  'Controle de custos por área',
  'Monitoramento climático',
  'Gestão de maquinário'
]

const financeiroFeatures = [
  {
    title: 'Fluxo de caixa',
    description: 'Controle completo das entradas e saídas financeiras.'
  },
  {
    title: 'Custos de produção',
    description: 'Análise detalhada dos custos por safra e cultura.'
  },
  {
    title: 'Relatórios gerenciais',
    description: 'Dashboards e relatórios personalizados para tomada de decisão.'
  }
]

const planoFeatures = [
  {
    name: 'Gestão de safras',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Controle de insumos',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Relatórios básicos',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Controle financeiro',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Gestão de custos',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Multi-propriedades',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  }
]

// Estrutura de planos para Dinblu Agro (4 planos)
const plansAgro = [
  {
    name: 'Light',
    description: 'Emissão de até 40 documentos fiscais/mês',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Livro Caixa do PR', included: false },
      { name: 'Financeiro', included: false },
      { name: 'Produção', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Boleto', included: false }
    ]
  },
  {
    name: 'Básico',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Livro Caixa do PR', included: false },
      { name: 'Financeiro', included: false },
      { name: 'Produção', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Boleto', included: false }
    ]
  },
  {
    name: 'Intermediário',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: true,
    features: [
      { name: 'NFe', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Livro Caixa do PR', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Produção', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Boleto', included: false }
    ]
  },
  {
    name: 'Avançado',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Livro Caixa do PR', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Produção', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Boleto', included: true }
    ]
  }
]

// Extract all unique features from all plans
const allFeaturesAgro = computed(() => {
  const featuresSet = new Set()
  plansAgro.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncludedAgro = (planName, featureName) => {
  const plan = plansAgro.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}

// Estrutura de planos por volume (10 planos)
const plansVolume = [
  { name: 'A30', description: 'Até 30 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A60', description: 'Até 60 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A160', description: 'Até 160 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A260', description: 'Até 260 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A560', description: 'Até 560 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A900', description: 'Até 900 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A1200', description: 'Até 1200 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A2200', description: 'Até 2200 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'A3200', description: 'Até 3200 docs/mês', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]},
  { name: 'Ilimitado', description: 'Emissão ilimitada', features: [
    { name: 'NFe', included: true },
    { name: 'Cadastros gerais', included: true },
    { name: 'Cadastro de produtores rurais', included: true }
  ]}
]

// Extract all unique features from volume plans
const allFeaturesVolume = computed(() => {
  const featuresSet = new Set()
  plansVolume.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function for volume plans
const isPlanFeatureIncludedVolume = (planName, featureName) => {
  const plan = plansVolume.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}

useHead({
  title: 'Dinblu Agro - Sistema para Agronegócio | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para gestão do agronegócio. Controle de safras, gestão financeira, controle de custos e muito mais.'
    }
  ]
})
</script>

<style scoped lang="postcss">
.page-with-hero {
  padding-top: 80px;
}

/* Adicione animações suaves */
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
</style> 