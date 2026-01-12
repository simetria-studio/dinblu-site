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
            Sistema para Clínicas
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gestão completa para sua clínica
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sistema completo para gestão de clínicas médicas. Do agendamento ao prontuário eletrônico,
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
    <!-- <section class="relative -mt-12 mb-20">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
            transform hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 rounded-xl bg-dinblu/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 11a4 4 0 100-8 4 4 0 000 8z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+2mil</div>
            </div>
            <p class="text-gray-600">Clínicas atendidas</p>
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
            <p class="text-gray-600">LGPD Compliant</p>
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
            Soluções especializadas para todos os profissionais da saúde
          </p>
        </div>

        <div class="relative">
          <div class="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>
          <div class="absolute top-0 right-0 bottom-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>

          <div class="flex overflow-hidden mb-4 group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee group-hover/marquee:pause">
              <div v-for="segment in segmentosRow1Clinica" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow1Clinica" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow1Clinica" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>

          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee-reverse group-hover/marquee:pause">
              <div v-for="segment in segmentosRow2Clinica" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow2Clinica" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <div v-for="segment in segmentosRow2Clinica" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Agenda Inteligente Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mx-auto max-w-4xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-6 rounded-full border border-purple-200 bg-purple-50">
            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm font-semibold text-purple-600">Agenda Otimizada</span>
          </div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Agenda inteligente e otimizada
          </h2>
          <p class="mb-8 text-lg text-gray-600 leading-relaxed">
            É possível realizar agendamentos recorrentes, registrar faltas e comunicar com o paciente via WhatsApp.
          </p>
        </div>
      </div>
    </section>

    <!-- Prontuário Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Prontuário Eletrônico</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prontuário eletrônico completo e seguro
            </h2>
            <div class="space-y-6">
              <div v-for="feature in prontuarioFeatures" :key="feature"
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
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
              alt="Interface do Prontuário"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Agendamento Section -->
    <section class="py-20 bg-white relative overflow-hidden" id="features">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Agendamento Online</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agenda inteligente e otimizada
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Controle total dos agendamentos com confirmação automática
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in agendamentoFeatures" :key="feature.title"
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

    <!-- Controle Financeiro Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Controle Financeiro
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Menos burocracia, papéis e planilhas para acompanhar receita, despesas e relatórios
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div class="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="inline-flex gap-2 items-center px-3 py-1 mb-4 rounded-full border border-blue-200 bg-blue-50">
              <span class="text-xs font-semibold text-blue-600">Orçamentos</span>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Orçamentos</h3>
            <p class="text-gray-600">
              Gere orçamentos para seus pacientes avaliarem o tratamento.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="inline-flex gap-2 items-center px-3 py-1 mb-4 rounded-full border border-green-200 bg-green-50">
              <span class="text-xs font-semibold text-green-600">Emissão de NFSe</span>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Emissão de NFSe</h3>
            <p class="text-gray-600">
              Emita NFSe de forma descomplicada.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- E Muito Mais Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            E muito mais pelo seu negócio
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="extra in muitoMaisClinica" :key="extra.title"
            class="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
            Escolha o plano ideal para sua clínica
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis que crescem junto com o seu negócio
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
                    <th v-for="plan in plansClinica" :key="plan.name" 
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
                  <tr v-for="(feature, idx) in allFeaturesClinica" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plansClinica" :key="plan.name"
                      class="py-4 px-4 text-center transition-all duration-200"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncludedClinica(plan.name, feature)" 
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
                    <td v-for="plan in plansClinica" :key="plan.name" 
                      class="py-6 px-2 text-center"
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

          <!-- Note: Duplicated modules to simulate marquee effect since there are only 2 items -->
          
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
               <!-- Duplicate Items Again -->
               <div v-for="module in modulesRow1" :key="`${module.name}-dup3`"
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
               <!-- Duplicate Items Again -->
               <div v-for="module in modulesRow2" :key="`${module.name}-dup3`"
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
              Transforme a gestão da sua clínica
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Dinblu Clínica pode ajudar seu negócio
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
    </section> -->
  </div>
</template>

<script setup>
const prontuarioFeatures = [
  'Prontuário eletrônico completo',
  'Histórico médico detalhado',
  'Prescrição digital',
  'Atestados e laudos',
  'Anexo de exames',
  'Assinatura digital'
]

const agendamentoFeatures = [
  {
    title: 'Agenda online',
    description: 'Agendamento online com confirmação automática via WhatsApp.'
  },
  {
    title: 'Gestão de horários',
    description: 'Controle total dos horários dos profissionais.'
  },
  {
    title: 'Lembretes',
    description: 'Lembretes automáticos de consultas para pacientes.'
  }
]

const segmentosAtendidosClinica = [
    'Clínicas',
    'Consultórios',
    'Médicos',
    'Dentistas',
    'Fisioterapeutas',
    'Fonoaudiólogos',
    'Nutricionistas',
    'Psicólogos',
    'Terapeutas ocupacionais',
    'Esteticistas',
    'Profissionais da saúde'
]

const segmentosRow1Clinica = computed(() => segmentosAtendidosClinica.slice(0, Math.ceil(segmentosAtendidosClinica.length / 2)))
const segmentosRow2Clinica = computed(() => segmentosAtendidosClinica.slice(Math.ceil(segmentosAtendidosClinica.length / 2)))

const muitoMaisClinica = [
    {
        title: 'Controle de caixa',
        description: 'Controle de caixa separado entre clínica e profissional.',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        title: 'Entrada de notas',
        description: 'De forma automática, vinculado ao site da Receita Federal.',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600',
    },
    {
        title: 'Integração',
        description: 'Comunicação discreta entre médicos (as) e secretárias (os) para facilitar e agilizar o atendimento ao cliente.',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
    {
        title: 'Cadastros e permissões',
        description: 'Permite o cadastro ilimitado de colaboradores, define o papel que cada um desempenha e suas respectivas funcionalidades.',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-600',
    },
    {
        title: 'Controle de consultas',
        description: 'Por meio do controle de consultas, você e sua equipe podem fazer uma melhor gestão de horários.',
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-600',
    },
    {
        title: 'Gestão inteligente',
        description: 'Aprimoré sua gestão com uma dashboard interativa, que conta com gráficos e relatórios simples de interpretar.',
        bgColor: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
    },
    {
        title: 'Controle de estoque',
        description: 'Registre a venda de itens que são comercializados pela clínica.',
        bgColor: 'bg-teal-50',
        iconColor: 'text-teal-600',
    }
]

const plansClinica = [
  {
    name: 'Light',
    description: 'Até 2 profissionais',
    popular: false,
    features: [
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Controle de agendas', included: true },
      { name: 'Controle de pacientes', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Personalização de atestados', included: true },
      { name: 'Controle de vendas', included: true },
      { name: 'Controle financeiro', included: true },
      { name: 'Emissão de relatórios', included: true }
    ]
  },
  {
    name: 'Básico',
    description: '4 profissionais',
    popular: false,
    features: [
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Controle de agendas', included: true },
      { name: 'Controle de pacientes', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Personalização de atestados', included: true },
      { name: 'Controle de vendas', included: true },
      { name: 'Controle financeiro', included: true },
      { name: 'Emissão de relatórios', included: true }
    ]
  },
  {
    name: 'Intermediário',
    description: '6 profissionais',
    popular: true,
    features: [
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Controle de agendas', included: true },
      { name: 'Controle de pacientes', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Personalização de atestados', included: true },
      { name: 'Controle de vendas', included: true },
      { name: 'Controle financeiro', included: true },
      { name: 'Emissão de relatórios', included: true }
    ]
  },
  {
    name: 'Avançado',
    description: '8 profissionais',
    popular: false,
    features: [
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Controle de agendas', included: true },
      { name: 'Controle de pacientes', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Personalização de atestados', included: true },
      { name: 'Controle de vendas', included: true },
      { name: 'Controle financeiro', included: true },
      { name: 'Emissão de relatórios', included: true }
    ]
  },
  {
    name: 'Premium',
    description: 'Mais de 8 profissionais',
    popular: false,
    features: [
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Controle de agendas', included: true },
      { name: 'Controle de pacientes', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Personalização de atestados', included: true },
      { name: 'Controle de vendas', included: true },
      { name: 'Controle financeiro', included: true },
      { name: 'Emissão de relatórios', included: true }
    ]
  }
]

// Extract all unique features from all plans
const allFeaturesClinica = computed(() => {
  const featuresSet = new Set()
  plansClinica.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncludedClinica = (planName, featureName) => {
  const plan = plansClinica.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}

// Módulos adicionais
const additionalModules = [
  { name: 'Odontograma' },
  { name: 'NFSe' }
]

// Split modules into 2 rows for marquee
// Duplicate content for row 1 to ensure enough items for marquee
const modulesRow1 = computed(() => {
  const base = additionalModules
  return [...base, ...base, ...base, ...base] // 8 items
})

// Duplicate content for row 2 to ensure enough items for marquee
const modulesRow2 = computed(() => {
  const base = [...additionalModules].reverse()
  return [...base, ...base, ...base, ...base] // 8 items
})

useHead({
  title: 'Dinblu Clínica - Sistema para Clínicas Médicas | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para gestão de clínicas médicas. Prontuário eletrônico, agendamento online, telemedicina e muito mais.'
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