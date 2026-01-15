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
            <NuxtLink to="https://https://dinblu.com.br/contato"
              class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
              border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Tenho interesse
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <!-- <section class="relative -mt-12 mb-20">
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
    </section> -->

    <!-- Segmentos Atendidos Section -->
    <section class="overflow-hidden py-20 bg-gray-900">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            Segmentos Atendidos
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-300">
            Soluções especializadas para o agronegócio
          </p>
        </div>

        <div class="relative">
          <div class="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>
          <div class="absolute top-0 right-0 bottom-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>

          <div class="flex overflow-hidden mb-4 group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee group-hover/marquee:pause">
              <div v-for="segment in segmentosRow1Agro" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow1Agro" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow1Agro" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>

          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee-reverse group-hover/marquee:pause">
              <div v-for="segment in segmentosRow2Agro" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow2Agro" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow2Agro" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Emissão de Documentos Fiscais Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Emissão de documentos fiscais
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div class="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="mb-6">
              <h3 class="mb-4 text-xl font-bold text-blue-600">Documentos emitidos</h3>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-gray-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  NFe
                </li>
                <li class="flex items-center gap-2 text-gray-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  CTe
                </li>
                <li class="flex items-center gap-2 text-gray-700">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  MDFe
                </li>
              </ul>
            </div>
          </div>

          <div class="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 class="mb-4 text-xl font-bold text-green-600">Integração</h3>
            <p class="text-gray-700">
              Atende a legislação de todos os estados.
            </p>
          </div>

          <div class="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 class="mb-4 text-xl font-bold text-purple-600">Entrada de Notas</h3>
            <p class="text-gray-700">
              De forma automática, vinculado ao site da Receita Federal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Controle Fiscal e Tributário Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Controle Fiscal e Tributário
          </h2>
          <p class="mx-auto max-w-3xl text-lg text-gray-600">
            Chega de acumular papéis ao fazer e gerar controle fiscal. Gerencie sua propriedade de forma integrada com o Livro Caixa Digital, desenvolvido para Pessoa Física (CPF), Lucro Real e Lucro Presumido.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="p-8 bg-white rounded-2xl shadow-xl">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-blue-100">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="mb-3 text-xl font-bold text-gray-900">Painel do Contador gratuito</h3>
                <p class="text-gray-600">
                  Facilite a comunicação com o seu contador. Ele terá todas os documentos recebidos e enviados pela empresa de forma imediata e gratuita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E Muito Mais Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Dinblu Agro vai fazer muito mais para o seu negócio
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="extra in muitoMaisAgro" :key="extra.title"
            class="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-xl transition-colors"
              :class="extra.bgColor">
              <svg class="w-6 h-6" :class="extra.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="extra.iconPath"/>
              </svg>
            </div>
            <h3 class="mb-3 text-lg font-bold text-gray-900">{{ extra.title }}</h3>
            <p class="text-sm text-gray-600">{{ extra.description }}</p>
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
                      <NuxtLink to="https://https://dinblu.com.br/contato"
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
          <NuxtLink to="https://https://dinblu.com.br/contato"
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
                      <NuxtLink to="https://https://dinblu.com.br/contato"
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

    <!-- CTA Section -->
    <!-- <section class="py-20 bg-white">
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
              <NuxtLink to="https://https://dinblu.com.br/contato"
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
    </section> -->
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

const segmentosAtendidosAgro = [
    'Produtor rural',
    'Fazendas',
    'Cooperativas',
    'Associações',
    'Agronegócio em geral'
]

const segmentosRow1Agro = computed(() => segmentosAtendidosAgro.slice(0, 3))
const segmentosRow2Agro = computed(() => segmentosAtendidosAgro.slice(3))

const muitoMaisAgro = [
    {
        title: 'Gestão da safra',
        description: 'Gestão da safra e das culturas de forma simples e eficiente na palma da mão.',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600',
    },
    {
        title: 'Controle financeiro',
        description: 'Controle as suas contas a pagar e receber, realize orçamentos e conciliação bancária, e emita boletos integrados com o seu banco.',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        title: 'Cadastro de imóvel rural',
        description: 'Cadastre proprietários e imóveis rurais e gerencie tudo com facilidade.',
        bgColor: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
    {
        title: 'Controle de estoque',
        description: 'Por meio de todas as suas entradas e saídas de documentos fiscais, o sistema apura todo o seu estoque de forma simples e inteligente.',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
    {
        title: 'Controle de vendas',
        description: 'Descomplique sua venda e emita documentos fiscais em um clique de forma inteligente para os seus clientes.',
        bgColor: 'bg-cyan-50',
        iconColor: 'text-cyan-600',
    },
    {
        title: 'Gestão inteligente',
        description: 'Aprimore sua gestão com uma dashboard interativa que conta com gráficos e relatórios fáceis de interpretar.',
        bgColor: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
    },
    {
        title: 'Controle de produção',
        description: 'Gestão da entrada da matéria-prima até a transformação do produto acabado.',
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-600',
    },
    {
        title: 'Emissão de etiquetas',
        description: 'Emita etiquetas personalizadas com preço, códigos e dados variados.',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-600',
    },
    {
        title: 'Agro Fiscal',
        description: 'Ideal para cooperativas. Você cadastra vários produtores rurais e emite notas fiscais independentes de forma simples e com total controle das emissões.',
        bgColor: 'bg-teal-50',
        iconColor: 'text-teal-600',
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

// Módulos adicionais
const additionalModules = [
  { name: 'Inscrição Estadual' },
  { name: 'SEUPOS' },
  { name: 'SEUPOS + STONE' },
  { name: 'Averbação' },
  { name: 'Assinador' },
  { name: 'WhatsApp' },
  { name: 'Boleto' },
  { name: 'Promoção' }
]

// Split modules into 2 rows for marquee
const modulesRow1 = computed(() => additionalModules.slice(0, Math.ceil(additionalModules.length / 2)))
const modulesRow2 = computed(() => additionalModules.slice(Math.ceil(additionalModules.length / 2)))

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