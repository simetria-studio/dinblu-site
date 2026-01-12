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
            Sistema para Pet Shops
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gestão completa para seu Pet Shop
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sistema completo para gestão de pet shops. Do agendamento à gestão financeira,
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
                    d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+3mil</div>
            </div>
            <p class="text-gray-600">Pet Shops atendidos</p>
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
            <p class="text-gray-600">Satisfação dos clientes</p>
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

    <!-- Agenda Inteligente Section - NOVA -->
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
            É possível realizar agendamentos recorrentes, registrar faltas e comunicar com o cliente via WhatsApp.
          </p>
        </div>
      </div>
    </section>

    <!-- Para o Controle de Tudo Section - NOVA -->
    <section class="py-20 bg-blue-50">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Para o controle de tudo
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div class="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="inline-flex gap-2 items-center px-3 py-1 mb-4 rounded-full border border-blue-200 bg-blue-50">
              <span class="text-xs font-semibold text-blue-600">Prontuário eletrônico</span>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Prontuário eletrônico</h3>
            <p class="mb-4 text-gray-600">
              Registre informações, anexe imagens e exames para acompanhar todo o histórico do pet.
            </p>
            <p class="text-sm text-gray-600">
              Compartilhe o prontuário com outros profissionais do pet shop para um atendimento mais completo e eficaz.
            </p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="inline-flex gap-2 items-center px-3 py-1 mb-4 rounded-full border border-green-200 bg-green-50">
              <span class="text-xs font-semibold text-green-600">Controle de atendimento</span>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Controle de atendimento</h3>
            <p class="mb-4 text-gray-600">
              Mantenha o registro completo dos atendimentos, vacinações, exames, cirurgias, banho e tosa.
            </p>
            <p class="text-sm text-gray-600">
              Envie lembretes para os seus clientes via WhatsApp para evitar esquecimentos e faltas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Controle Fiscal e Contábil Section - NOVA -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid gap-12 items-center lg:grid-cols-2">
          <div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Controle Fiscal e Contábil
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Emita NFe, NFCe, CTe e NFSe de forma descomplicada.
            </p>
          </div>

          <div class="p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-lg">
            <div class="inline-flex gap-2 items-center px-3 py-1 mb-4 rounded-full border border-orange-200 bg-orange-50">
              <span class="text-xs font-semibold text-orange-600">Painel do Contador</span>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Painel do Contador</h3>
            <p class="text-gray-600">
              Facilite o contato com o seu contador. Ele terá todas as documentos recebidos e enviados pela sua empresa de forma imediata e gratuita.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Agendamento Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Agendamento Online</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Agenda inteligente para seu Pet Shop
            </h2>
            <div class="space-y-6">
              <div v-for="feature in agendamentoFeatures" :key="feature"
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
            <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071" 
              alt="Interface de Agendamento"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Gestão de Clientes Section -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Gestão de Clientes</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Controle completo dos pets e tutores
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantenha um histórico detalhado de cada pet e seu tutor
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in clientesFeatures" :key="feature.title"
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

    <!-- E Muito Mais Section - NOVA -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            E muito mais pelo seu negócio
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="extra in muitoMaisPet" :key="extra.title"
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
            Escolha o plano ideal para seu Pet Shop
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
                    <th v-for="plan in plansPet" :key="plan.name" 
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
                  <tr v-for="(feature, idx) in allFeaturesPet" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plansPet" :key="plan.name"
                      class="py-4 px-4 text-center transition-all duration-200"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncludedPet(plan.name, feature)" 
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
                    <td v-for="plan in plansPet" :key="plan.name" 
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
              Transforme a gestão do seu Pet Shop
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Dinblu Pet pode ajudar seu negócio
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
const agendamentoFeatures = [
  'Agendamento online para tutores',
  'Confirmação automática via WhatsApp',
  'Controle de horários dos profissionais',
  'Histórico de atendimentos',
  'Bloqueio de horários',
  'Gestão de filas de espera'
]

const clientesFeatures = [
  {
    title: 'Cadastro completo',
    description: 'Mantenha todos os dados dos pets e tutores organizados.'
  },
  {
    title: 'Histórico médico',
    description: 'Acompanhe todo o histórico de atendimentos e vacinas.'
  },
  {
    title: 'Fidelização',
    description: 'Programa de pontos e descontos para fidelizar seus clientes.'
  }
]

const plansPet = [
  {
    name: 'Básico',
    users: 'Até 10 profissionais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'NFSe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Controle de estoque', included: true },
      { name: 'Gerenciamento de vendas', included: true },
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Anamnese', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Controle de atendimento', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Controle Financeiro', included: false },
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
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'NFSe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Controle de estoque', included: true },
      { name: 'Gerenciamento de vendas', included: true },
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Anamnese', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Controle de atendimento', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Controle Financeiro', included: true },
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
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'NFSe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Controle de estoque', included: true },
      { name: 'Gerenciamento de vendas', included: true },
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Anamnese', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Controle de atendimento', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Controle Financeiro', included: true },
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
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'NFSe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Controle de agenda', included: true },
      { name: 'Controle de estoque', included: true },
      { name: 'Gerenciamento de vendas', included: true },
      { name: 'Prontuário eletrônico', included: true },
      { name: 'Anamnese', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Personalização de receitas', included: true },
      { name: 'Controle de atendimento', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Controle Financeiro', included: true },
      { name: 'Boleto', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Sped Contribuições', included: true },
      { name: 'Sped Fiscal', included: true }
    ]
  }
]

// Extract all unique features from all plans
const allFeaturesPet = computed(() => {
  const featuresSet = new Set()
  plansPet.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncludedPet = (planName, featureName) => {
  const plan = plansPet.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}

// Módulos adicionais
const additionalModules = [
  { name: 'Hospedagem do animal' },
  { name: 'Controle de vacinas' },
  { name: 'Combos' },
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

// E Muito Mais pelo seu negócio
const muitoMaisPet = [
  {
    title: 'Internações',
    description: 'Para assegurar as hospedagens dos pets, todas as reservas ficam registradas no sistema, para que você tenha controle de tudo.',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Hospedagem do pet',
    description: 'Para assegurar as hospedagens dos pets, todas as reservas ficam registradas no sistema.',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Cadastro de raça, espécie e pet',
    description: 'Permite o cadastro completo do pet, espécie ou raça. Cada perfil possibilita adicionar raça de preferência, aniversário, vacinas e fotos.',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Vacinas',
    description: 'Possibilita aos veterinários coletar e inserir informações sobre animais internados, incluindo histórico de atendimentos, exames e prescrições de medicamentos.',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Modelo de documento',
    description: 'Controle de caixa separado entre clínica e pet shop.',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  }
]


useHead({
  title: 'Dinblu Pet - Sistema para Pet Shops | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para gestão de pet shops. Agendamento online, controle de vacinas, gestão financeira e muito mais.'
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