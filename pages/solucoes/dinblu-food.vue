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
            Sistema para Restaurantes
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Atende do delivery à cozinha, até a venda de balcão
          </h1>
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

    <!-- Stats Section - NOVA -->
    <!-- <section class="relative -mt-12 mb-20">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300
            transform hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 rounded-xl bg-dinblu/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+10mil</div>
            </div>
            <p class="text-gray-600">Restaurantes atendidos</p>
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
            <p class="text-gray-600">Integrado com iFood</p>
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

    <!-- Segmentos Atendidos Section - NOVA -->
    <section class="overflow-hidden py-20 bg-gray-900">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            Segmentos Atendidos
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-300">
            Soluções perfeitas para todos os tipos de estabelecimentos
          </p>
        </div>

        <!-- Marquee Container -->
        <div class="relative">
          <!-- Fade Edges -->
          <div class="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>
          <div class="absolute top-0 right-0 bottom-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>

          <!-- Row 1: Move Left -->
          <div class="flex overflow-hidden mb-4 group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee group-hover/marquee:pause">
              <!-- Original Items -->
              <div v-for="segment in segmentosRow1Food" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items -->
              <div v-for="segment in segmentosRow1Food" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items Again -->
              <div v-for="segment in segmentosRow1Food" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>

          <!-- Row 2: Move Right -->
          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee-reverse group-hover/marquee:pause">
              <!-- Original Items -->
              <div v-for="segment in segmentosRow2Food" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items -->
              <div v-for="segment in segmentosRow2Food" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!--Duplicate Items Again -->
              <div v-for="segment in segmentosRow2Food" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comandas Section - Melhorado -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Controle de Comandas</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gestão completa de mesas e comandas
            </h2>
            <div class="space-y-6">
              <div v-for="feature in comandasFeatures" :key="feature"
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
            <img src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070"
              alt="Interface de comandas"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Delivery Section - Melhorado -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Delivery</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivery integrado e eficiente
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Gerencie seus pedidos de delivery com facilidade e integração total
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in deliveryFeatures" :key="feature.title"
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

    <!-- Cozinha Section - Melhorado -->
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative group order-2 lg:order-1">
            <div class="absolute -inset-4 bg-gradient-to-r from-dinblu/30 to-blue-500/30 rounded-3xl 
              blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2069" 
              alt="Interface da cozinha"
              class="relative rounded-2xl shadow-2xl" />
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Gestão de Cozinha</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Controle total da sua cozinha
            </h2>
            <div class="space-y-6">
              <div v-for="feature in cozinhaFeatures" :key="feature"
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
        </div>
      </div>
    </section>

    <!-- Frente de Caixa e PDV Section - NOVA -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid gap-12 items-center lg:grid-cols-2">
          <div class="relative group">
            <div class="absolute -inset-4 rounded-3xl blur-xl opacity-0 transition-opacity duration-500 bg-gradient-to-r from-green-400/30 to-blue-500/30 group-hover:opacity-100"></div>
            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070" 
              alt="Frente de Caixa"
              class="relative rounded-2xl shadow-2xl" />
          </div>
          
          <div>
            <div class="inline-flex gap-2 items-center px-4 py-2 mb-6 rounded-full border border-green-200 bg-green-50">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="text-sm font-semibold text-green-600">Frente de Caixa</span>
            </div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Frente de Caixa e PDV
            </h2>
            <p class="mb-8 text-lg text-gray-600 leading-relaxed">
              Tenha total controle do seu caixa e venda de forma rápida e personalizada. Emita NFCe e envie por e-mail ou WhatsApp.
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3 items-start">
                <svg class="mt-0.5 w-6 h-6 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Controle total do caixa em tempo real</span>
              </li>
              <li class="flex gap-3 items-start">
                <svg class="mt-0.5 w-6 h-6 flex-shrin k-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Venda rápida e personalizada</span>
              </li>
              <li class="flex gap-3 items-start">
                <svg class="mt-0.5 w-6 h-6 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Emissão de NFCe e envio automático</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Recursos Adicionais - Melhorado -->
    <section class="py-20 bg-white relative overflow-hidden" id="features">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Mais recursos</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            E muito mais pelo seu negócio
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore todos os recursos disponíveis para otimizar seu restaurante
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in additionalFeatures" :key="feature.title"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
            border border-gray-100 hover:-translate-y-1">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl bg-dinblu/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M5 13l4 4L19 7"/>
                </svg>
              </span>
              {{ feature.title }}
            </h3>
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
            Do pequeno ao grande restaurante, temos o plano perfeito para o seu negócio
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
                    <th v-for="plan in plansFood" :key="plan.name" 
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
                      <div class="text-xs"
                        :class="plan.popular ? 'text-white/80' : 'text-gray-500'">
                        {{ plan.description }}
                      </div>
                    </th>
                  </tr>
                </thead>

                <!-- Table Body -->
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(feature, idx) in allFeaturesFood" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plansFood" :key="plan.name"
                      class="py-4 px-6 text-center transition-all duration-200"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncludedFood(plan.name, feature)" 
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
                    <td v-for="plan in plansFood" :key="plan.name" 
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
        <div class="text-center mt-12 mb-20">
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

        <!-- Módulos Adicionais Section - Infinite Marquee -->
        <div class="border-t border-gray-200 pt-16 pb-16 overflow-hidden">
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
            <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <!-- Row 1: Move Left -->
            <div class="flex overflow-hidden mb-4 group/marquee">
              <div class="flex gap-4 animate-marquee group-hover/marquee:pause whitespace-nowrap py-2">
                <!-- Original Items -->
                <div v-for="module in modulesRow1" :key="module.name"
                  class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
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
                    <p class="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {{ module.type }}
                    </p>
                  </div>
                </div>
                <!-- Duplicate Items for Smooth Loop -->
                <div v-for="module in modulesRow1" :key="`${module.name}-dup`"
                  class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
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
                    <p class="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {{ module.type }}
                    </p>
                  </div>
                </div>
                 <!-- Duplicate Items Again for Safety on Large Screens -->
                 <div v-for="module in modulesRow1" :key="`${module.name}-dup2`"
                  class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
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
                    <p class="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {{ module.type }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: Move Right -->
            <div class="flex overflow-hidden group/marquee">
              <div class="flex gap-4 animate-marquee-reverse group-hover/marquee:pause whitespace-nowrap py-2">
                <!-- Original Items -->
                <div v-for="module in modulesRow2" :key="module.name"
                  class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
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
                    <p class="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {{ module.type }}
                    </p>
                  </div>
                </div>
                <!-- Duplicate Items -->
                <div v-for="module in modulesRow2" :key="`${module.name}-dup`"
                  class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
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
                    <p class="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {{ module.type }}
                    </p>
                  </div>
                </div>
                <!-- Duplicate Items Again -->
                <div v-for="module in modulesRow2" :key="`${module.name}-dup2`"
                  class="flex-shrink-0 w-64 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
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
                    <p class="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                      {{ module.type }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section - Melhorado -->
    <!-- <section class="py-20 bg-white">
      <div class="container">
        <div class="relative bg-dinblu rounded-3xl p-12 md:p-16 
          text-center overflow-hidden">
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-dinblu/20 to-blue-600/20 backdrop-blur-sm"></div>

          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme a gestão do seu restaurante
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Dinblu Food pode ajudar seu negócio
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
const comandasFeatures = [
  'Divisão de conta por pessoa ou produto',
  'Controle de mesas e comandas individuais',
  'Gestão de garçons e comissões',
  'Impressão de comandas e comprovantes',
  'Histórico completo de pedidos'
]

const deliveryFeatures = [
  {
    icon: 'IconTruck',
    title: 'Painel do entregador',
    description: 'O entregador controla tudo em tempo real em uma tela de fácil visualização. Ele acessa o resumo de todos os pedidos, entregues ou não.'
  },
  {
    icon: 'IconBrandIfood',
    title: 'Integração com ifood',
    description: 'Todos os pedidos feitos pelo aplicativo do Ifood são enviados diretamente para o sistema Food, agilizando filas e ampliando sua rede de clientes.'
  },
  {
    icon: 'IconDeviceMobile',
    title: 'Cardápio Digital',
    description: 'Tenha seu cardápio virtual para seus clientes solicitarem pedidos na hora e quando quiserem.'
  }
]

const cozinhaFeatures = [
  'Visualização em tempo real dos pedidos',
  'Organização de filas de preparo',
  'Controle de tempo de preparo',
  'Comunicação com garçons',
  'Gestão de estoque integrada'
]

const additionalFeatures = [
  {
    title: 'Cardápio Digital',
    description: 'Tenha seu cardápio virtual para seus clientes solicitarem pedidos na hora e quando quiserem.'
  },
  {
    title: 'Gestão financeira',
    description: 'Controle suas contas a pagar e receber, além de orçamentos e conciliação bancária. Organize seu crediário e emita boletos registrados.'
  },
  {
    title: 'Controle fiscal e tributário',
    description: 'Desenvolvido para MEI, ME, Simples, Lucro Real e Lucro Presumido. Emissão dos principais documentos fiscais.'
  },
  {
    title: 'Controle de estoque',
    description: 'Por meio de todas as suas entradas e saídas de documentos fiscais, o sistema Food apura todo o seu estoque de forma simples e inteligente.'
  },
  {
    title: 'Pedido com QR Code',
    description: 'Sem baixar nenhum aplicativo, basta que o cliente abra a câmera do celular para escanear. Processos e pedidos organizados.'
  },
  {
    title: 'Painel do garçom',
    description: 'Possibilita a abertura e fechamento de comandas, inserção de produtos e visualização da resposta da cozinha e bar. Tudo na palma da mão.'
  }
]

// Módulos adicionais
const additionalModules = [
  { name: 'QR Code' },
  { name: 'Painel do Garçom' },
  { name: 'Cardápio Digital (Delivery)' },
  { name: 'Integração iFood' },
  { name: 'Tef Sitef' },
  { name: 'Adicional Tef' },
  { name: 'Frete por KM' },
  { name: 'Integração Pix' },
  { name: 'Assinador' },
  { name: 'SEUPOS' },
  { name: 'SEUPOS + STONE' },
  { name: 'STONE Connect' },
  { name: 'Anota aí' },
  { name: 'WhatsApp' },
  { name: 'Boleto' },
  { name: 'VERO Connect' },
  { name: 'Mercado Pago Connect' },
  { name: 'Promoção' }
]

// Split modules into 2 rows for marquee
const modulesRow1 = computed(() => additionalModules.slice(0, Math.ceil(additionalModules.length / 2)))
const modulesRow2 = computed(() => additionalModules.slice(Math.ceil(additionalModules.length / 2)))

// Segmentos Atendidos Food
const segmentosAtendidosFood = [
  'Bares',
  'Restaurantes',
  'Pizzarias',
  'Delivery',
  'Padarias',
  'Docerias',
  'Lanchonetes',
  'Food Trucks'
]

// Split segments into 2 rows for marquee
const segmentosRow1Food = computed(() => segmentosAtendidosFood.slice(0, Math.ceil(segmentosAtendidosFood.length / 2)))
const segmentosRow2Food = computed(() => segmentosAtendidosFood.slice(Math.ceil(segmentosAtendidosFood.length / 2)))


// Estrutura de planos para Dinblu Food (4 planos)
const plansFood = [
  {
    name: 'Básico',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Produção', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de mesas', included: true },
      { name: 'Controle do entregador', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Financeiro', included: false },
      { name: 'Boleto', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Intermediário',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: true,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Produção', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de mesas', included: true },
      { name: 'Controle do entregador', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Boleto', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Avançado',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Produção', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de mesas', included: true },
      { name: 'Controle do entregador', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Boleto', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Premium',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastros gerais', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Produção', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Controle de comandas', included: true },
      { name: 'Controle de mesas', included: true },
      { name: 'Controle do entregador', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Boleto', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Sped Contribuições', included: true },
      { name: 'Sped Fiscal', included: true }
    ]
  }
]

// Extract all unique features from all plans
const allFeaturesFood = computed(() => {
  const featuresSet = new Set()
  plansFood.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncludedFood = (planName, featureName) => {
  const plan = plansFood.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}




useHead({
  title: 'Dinblu Food - Sistema para Restaurantes | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para gestão de restaurantes. Controle de comandas, delivery, cardápio digital e muito mais.'
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

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-33.33%); }
  100% { transform: translateX(0); }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
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

/* Utilities */
.gradient-border {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(to right, theme('colors.dinblu'), theme('colors.blue.500'));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
}
</style>