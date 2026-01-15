<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="overflow-hidden relative py-32 bg-dinblu">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <div class="container relative z-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex gap-2 items-center px-4 py-1 mb-6 text-sm font-medium text-white rounded-full backdrop-blur-sm bg-white/10">
            <span class="w-2 h-2 bg-green-400 rounded-full"></span>
            Sistema de Gestão Empresarial
          </span>
          <h1 class="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Tão fácil de mexer que é para todo mundo
          </h1>
          <p class="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/90">
            Sistema web completo para gestão empresarial. Controle suas vendas, 
            estoque, financeiro e documentos fiscais em um só lugar.
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center mt-12">
            <a href="#features" 
              class="px-8 py-4 font-semibold bg-white rounded-full shadow-lg transition-all duration-300 text-dinblu hover:bg-gray-100 hover:-translate-y-0.5">
              Conhecer recursos
            </a>
            <NuxtLink to="https://https://dinblu.com.br/contato"
              class="px-8 py-4 font-semibold text-white bg-transparent rounded-full border-2 transition-all duration-300 border-white/30 hover:bg-white/10">
              Agendar demonstração
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section - NOVA -->
    <!-- <section class="relative -mt-12 mb-20">
      <div class="container">
          <!-- <div class="grid gap-8 md:grid-cols-3">
            <div class="p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
              <div class="flex gap-4 items-center mb-2">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10">
                  <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div class="text-3xl font-bold text-gray-900">+50mil</div>
              </div>
              <p class="text-gray-600">Empresas confiam no Dinblu</p>
            </div>

            <div class="p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
              <div class="flex gap-4 items-center mb-2">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10">
                  <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div class="text-3xl font-bold text-gray-900">98%</div>
              </div>
              <p class="text-gray-600">Prefeituras integradas</p>
            </div>

            <div class="p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
              <div class="flex gap-4 items-center mb-2">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10">
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
            Soluções personalizadas para diversos tipos de negócio
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
              <div v-for="segment in segmentosRow1" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items -->
              <div v-for="segment in segmentosRow1" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items Again -->
              <div v-for="segment in segmentosRow1" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>

          <!-- Row 2: Move Right -->
          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee-reverse group-hover/marquee:pause">
              <!-- Original Items -->
              <div v-for="segment in segmentosRow2" :key="segment"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items -->
              <div v-for="segment in segmentosRow2" :key="`${segment}-dup`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
              <!-- Duplicate Items Again -->
              <div v-for="segment in segmentosRow2" :key="`${segment}-dup2`"
                class="group p-5 w-80 bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-200 flex-shrink-0 hover:bg-gray-800/70 hover:border-dinblu/40 hover:shadow-md cursor-default">
                <span class="text-gray-200 group-hover:text-white transition-colors duration-300">{{ segment }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Overview - Melhorado -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Recursos principais</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Tudo que você precisa em um só lugar
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Simplifique a gestão do seu negócio com nossas soluções integradas
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <div v-for="feature in mainFeatures" :key="feature.title"
            class="overflow-hidden relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
            <div class="absolute inset-0 opacity-0 transition-opacity duration-300 from-dinblu/5 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="flex justify-center items-center mb-6 w-14 h-14 rounded-xl transition-colors duration-300 bg-dinblu/10 group-hover:bg-dinblu/20">
                <component :is="feature.icon" class="w-7 h-7 text-dinblu" />
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-900">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentos Fiscais Section - Melhorado -->
    <section id="features" class="overflow-hidden relative py-20 bg-white">
      <div class="container">
        <div class="grid gap-16 items-center lg:grid-cols-2">
          <div>
            <div class="inline-flex gap-2 items-center px-4 py-2 mb-6 rounded-full bg-dinblu/5">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Documentos Fiscais</span>
            </div>
            <h2 class="mt-2 mb-6 text-3xl font-bold text-gray-900">
              Emissão de notas fiscais e documentos fiscais
            </h2>
            <div class="space-y-8">
              <div class="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 class="mb-6 text-xl font-semibold text-gray-900">Documentos emitidos</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="doc in documentos" :key="doc.sigla"
                    class="flex gap-3 items-start p-4 bg-white rounded-xl transition-shadow hover:shadow-md">
                    <span class="flex justify-center items-center mt-1 w-8 h-8 rounded-xl bg-dinblu/10">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      </svg>
                    </span>
                    <div>
                      <div class="font-medium text-gray-900">{{ doc.sigla }}</div>
                      <div class="text-sm text-gray-500">{{ doc.nome }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 class="mb-6 text-xl font-semibold text-gray-900">Integração completa</h3>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div v-for="item in integracoes" :key="item"
                    class="flex gap-3 items-center p-4 bg-white rounded-xl transition-shadow hover:shadow-md">
                    <span class="flex justify-center items-center w-8 h-8 rounded-xl bg-dinblu/10">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      </svg>
                    </span>
                    <span class="text-gray-600">{{ item }}</span>
                  </div>
                </div>
              </div>

              <div class="p-8 bg-dinblu/5 rounded-2xl border border-dinblu/20">
                <h3 class="mb-4 text-xl font-semibold text-gray-900">Entrada de Notas</h3>
                <p class="text-gray-600">De forma automática, vinculado ao site da Receita Federal.</p>
              </div>
            </div>
          </div>
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r rounded-3xl opacity-0 blur-xl transition-opacity duration-500 from-dinblu/30 to-blue-500/30 group-hover:opacity-100"></div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" 
              alt="Interface fiscal Dinblu WEB"
              class="relative rounded-2xl shadow-2xl" />
            <div class="absolute -right-6 -bottom-6 p-6 bg-white rounded-2xl shadow-xl">
              <div class="text-3xl font-bold text-dinblu">98%</div>
              <div class="text-sm text-gray-500">das prefeituras integradas</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Controle de Vendas Section - Expandido -->
    <section class="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div class="container">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Gestão de Vendas</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Controle de vendas
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Do orçamento à entrega, gerencie todo o processo de vendas em um só lugar
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in vendasFeaturesExpanded" :key="feature.title"
            class="p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 class="mb-3 text-lg font-bold text-dinblu">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Controle Fiscal e Contábil Section - NOVA -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-green-50 border border-green-200">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span class="text-sm font-medium text-green-600">Contabilidade</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Controle fiscal e Contábil
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Desenvolvido para MEI, ME, Simples, Lucro Real e Lucro Presumido. Emissão dos principais documentos fiscais.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div class="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-lg">
            <h3 class="mb-6 text-xl font-bold text-green-600">Documentos emitidos</h3>
            <ul class="space-y-3">
              <li v-for="doc in documentosContabeis" :key="doc"
                class="flex gap-3 items-center p-3 bg-white rounded-xl">
                <span class="flex justify-center items-center w-6 h-6 rounded-full bg-green-50">
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span class="text-gray-700">{{ doc }}</span>
              </li>
            </ul>
          </div>

          <div class="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg">
            <h3 class="mb-6 text-xl font-bold text-dinblu">Painel do Contador</h3>
            <p class="mb-4 text-gray-600">
              Facilite o contato com o seu contador. Ele terá todos os documentos recebidos e enviados pela sua empresa de forma imediata e gratuita.
            </p>
            <div class="flex gap-2 items-center p-4 bg-blue-50 rounded-xl">
              <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-gray-700">Integração automática e gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Frente de Caixa e PDV Section - NOVA -->
    <section class="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div class="container">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-purple-50 border border-purple-200">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-sm font-medium text-purple-600">Ponto de Venda</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Frente de caixa e PDV
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Controle toda a movimentação de caixa da sua loja física e virtual.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="feature in pdvFeatures" :key="feature.title"
            class="p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 class="mb-3 text-lg font-bold text-purple-600">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Recursos Adicionais - Melhorado -->
    <section class="overflow-hidden relative py-20 bg-white">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      <div class="container relative z-10">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Mais recursos</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Funcionalidades completas para seu negócio
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Explore todos os recursos disponíveis para otimizar sua gestão
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div v-for="(categoria, index) in recursosAdicionais" :key="index"
            class="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 class="flex gap-3 items-center mb-6 text-xl font-semibold text-gray-900">
              <span class="flex justify-center items-center w-10 h-10 rounded-xl bg-dinblu/10">
                <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M5 13l4 4L19 7"/>
                </svg>
              </span>
              {{ categoria.titulo }}
            </h3>
            <ul class="space-y-4">
              <li v-for="recurso in categoria.recursos" :key="recurso"
                class="flex gap-3 items-center p-3 bg-gray-50 rounded-xl transition-colors duration-300 hover:bg-gray-100">
                <span class="flex justify-center items-center w-6 h-6 rounded-full bg-dinblu/10">
                  <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                <span class="text-gray-700">{{ recurso }}</span>
              </li>
            </ul>
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
            Do MEI à grande empresa, temos o plano perfeito para o seu negócio
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
                    <th v-for="plan in plansWeb" :key="plan.name" 
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
                      <div class="text-lg font-bold mb-2"
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
                  <tr v-for="(feature, idx) in allFeaturesWeb" :key="feature"
                    class="transition-colors duration-200 hover:bg-gray-50"
                    :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                    <!-- Feature Name -->
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {{ feature }}
                    </td>
                    
                    <!-- Feature per Plan -->
                    <td v-for="plan in plansWeb" :key="plan.name"
                      class="py-4 px-4 text-center transition-all duration-200"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <div class="flex justify-center">
                        <svg v-if="isPlanFeatureIncludedWeb(plan.name, feature)" 
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
                    <td v-for="plan in plansWeb" :key="plan.name" 
                      class="py-6 px-2 text-center"
                      :class="plan.popular ? 'bg-dinblu/5' : ''">
                      <NuxtLink to="https://https://dinblu.com.br/contato"
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

    <!-- Módulos Adicionais Section - Infinite Marquee -->
    <section class="overflow-hidden pt-16 pb-16 bg-gray-50 border-t border-gray-200">
      <div class="container">
        <div class="mb-12 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full border border-purple-100 bg-purple-50">
            <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span class="text-sm font-semibold text-purple-600">Extras</span>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Módulos Adicionais
          </h3>
          <p class="mx-auto max-w-2xl text-gray-600">
            Personalize seu sistema com funcionalidades extras
          </p>
        </div>

        <!-- Marquee Container -->
        <div class="relative">
          <!-- Fade Edges -->
          <div class="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div class="absolute top-0 right-0 bottom-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>

          <!-- Row 1: Move Left -->
          <div class="flex overflow-hidden mb-4 group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee group-hover/marquee:pause">
              <!-- Original Items -->
              <div v-for="module in modulesRow1" :key="module.name"
                class="flex gap-3 items-center p-3 w-64 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 hover:shadow-md">
                <div class="flex justify-center items-center w-10 h-10 rounded-lg flex-shrink-0 bg-purple-50">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
              <!-- Duplicate Items -->
              <div v-for="module in modulesRow1" :key="`${module.name}-dup`"
                class="flex gap-3 items-center p-3 w-64 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 hover:shadow-md">
                <div class="flex justify-center items-center w-10 h-10 rounded-lg flex-shrink-0 bg-purple-50">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
               <!-- Duplicate Items Again for Safety -->
               <div v-for="module in modulesRow1" :key="`${module.name}-dup2`"
                class="flex gap-3 items-center p-3 w-64 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 hover:shadow-md">
                <div class="flex justify-center items-center w-10 h-10 rounded-lg flex-shrink-0 bg-purple-50">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 2: Move Right -->
          <div class="flex overflow-hidden group/marquee">
            <div class="flex gap-4 py-2 whitespace-nowrap animate-marquee-reverse group-hover/marquee:pause">
              <!-- Original Items -->
              <div v-for="module in modulesRow2" :key="module.name"
                class="flex gap-3 items-center p-3 w-64 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 hover:shadow-md">
                <div class="flex justify-center items-center w-10 h-10 rounded-lg flex-shrink-0 bg-blue-50">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
              <!-- Duplicate Items -->
              <div v-for="module in modulesRow2" :key="`${module.name}-dup`"
                class="flex gap-3 items-center p-3 w-64 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 hover:shadow-md">
                <div class="flex justify-center items-center w-10 h-10 rounded-lg flex-shrink-0 bg-blue-50">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-bold text-gray-900 truncate" :title="module.name">
                    {{ module.name }}
                  </h4>
                </div>
              </div>
              <!-- Duplicate Items Again -->
              <div v-for="module in modulesRow2" :key="`${module.name}-dup2`"
                class="flex gap-3 items-center p-3 w-64 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 hover:shadow-md">
                <div class="flex justify-center items-center w-10 h-10 rounded-lg flex-shrink-0 bg-blue-50">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
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

    <!-- CTA Section - Melhorado -->
    <!-- <section class="py-20 bg-white from-gray-50 via-white to-gray-50">
      <div class="container">
        <div class="overflow-hidden relative p-12 text-center rounded-3xl bg-dinblu md:p-16">
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div class="absolute inset-0 bg-gradient-to-r backdrop-blur-sm from-dinblu/20 to-blue-600/20"></div>

          <div class="relative z-10">
            <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
              Comece a usar o Dinblu WEB hoje mesmo
            </h2>
            <p class="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Agende uma demonstração gratuita e descubra como podemos ajudar seu negócio a crescer
            </p>
            <div class="flex flex-wrap gap-4 justify-center items-center">
              <NuxtLink to="https://https://dinblu.com.br/contato"
                class="px-8 py-4 font-semibold bg-white rounded-full shadow-lg transition-all duration-300 text-dinblu hover:bg-gray-100 hover:-translate-y-0.5">
                Agendar demonstração
              </NuxtLink>
              <a href="tel:+551140028922"
                class="px-8 py-4 font-semibold text-white rounded-full border-2 backdrop-blur-sm transition-all duration-300 bg-white/10 border-white/30 hover:bg-white/20">
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
const mainFeatures = [
  {
    icon: 'IconCloud',
    title: 'Sistema 100% Web',
    description: 'Acesse de qualquer lugar, em qualquer dispositivo, sem precisar instalar nada.'
  },
  {
    icon: 'IconShield',
    title: 'Segurança Total',
    description: 'Seus dados protegidos com os mais altos padrões de segurança e backup automático.'
  },
  {
    icon: 'IconSupport',
    title: 'Suporte Especializado',
    description: 'Equipe técnica pronta para ajudar quando você precisar, todos os dias.'
  }
]

const documentos = [
  { sigla: 'NFe', nome: 'Nota Fiscal Eletrônica' },
  { sigla: 'NFCe', nome: 'Nota Fiscal de Consumidor' },
  { sigla: 'NFSe', nome: 'Nota Fiscal de Serviço' },
  { sigla: 'MDFe', nome: 'Manifesto Eletrônico' },
  { sigla: 'CTe', nome: 'Conhecimento de Transporte' },
  { sigla: 'SAT', nome: 'Sistema de Automação' }
]

const integracoes = [
  'Integrado com 98% das Prefeituras do Brasil',
  'Atende a legislação de todos os estados',
  'Importação automática de XML',
  'Validação automática de documentos',
  'Integração com certificado digital'
]

const segmentosAtendidos = [
  'Autopeças e oficinas',
  'Lojas de calçados',
  'Caça e pesca',
  'Lojas de departamentos',
  'Conveniências',
  'Lojas de doces e alimentos',
  'Livrarias e papelarias',
  'Lojas de móveis e eletrodomésticos',
  'Lojas de cosméticos',
  'Lojas de materiais esportivos',
  'Lojas de bijuterias',
  'Lojas de presentes e variedades',
  'Lojas de brinquedos',
  'Materiais de construção e ferragens',
  'Hortifruti e verduraria',
  'Mercados e açougues',
  'Joalherias, óticas e relojoarias',
  'Prestadores de serviços e outros',
  'Panificadoras e cafeterias',
  'Lojas de roupas e acessórios'
]

// Split segments into 2 rows for marquee
const segmentosRow1 = computed(() => segmentosAtendidos.slice(0, Math.ceil(segmentosAtendidos.length / 2)))
const segmentosRow2 = computed(() => segmentosAtendidos.slice(Math.ceil(segmentosAtendidos.length / 2)))


const vendasFeaturesExpanded = [
  {
    title: 'Pedido de venda e OS',
    description: 'Crie sua venda de forma descomplicada e, por meio dela, você pode emitir documentos fiscais. Crie ordem de serviço e tenha controle de tudo que acontece no seu negócio.'
  },
  {
    title: 'Cotações e compras',
    description: 'Elimine desistências e barreiras na hora de formalizar parcerias e negócios, oferecendo uma experiência simples e segura no ato de colher assinaturas.'
  },
  {
    title: 'Orçamento e condicional',
    description: 'Envie orçamentos de forma inteligente. Personalize as informações do seu condicional para o seu cliente e envie do seu e-mail, Whatsapp.'
  },
  {
    title: 'Geração de contratos',
    description: 'Controle e histórico de negociações com cobrança que serão realizadas mês a mês.'
  },
  {
    title: 'Venda externa e futura',
    description: 'Venda para o seu cliente e tenha o controle apurado do que já foi entregue e faturado.'
  },
  {
    title: 'Geração de romaneios',
    description: 'Facilite o carregamento de mercadorias que serão entregues pela sua transportadora.'
  }
]

const documentosContabeis = [
  'Sintegra',
  'Sped Fiscal',
  'Contribuições',
  'Bloco K'
]

const pdvFeatures = [
  {
    title: 'Controle de caixa',
    description: 'Abra e feche seu caixa de forma rápida e tenha os seus resultados de venda de forma simples e apurada.'
  },
  {
    title: 'Venda rápida',
    description: 'Em poucos cliques você consegue efetuar sua venda de forma rápida e descomplicada.'
  },
  {
    title: 'NFCe',
    description: 'Emita NFCe pelo celular e envie por e-mail ou whatsapp com facilidade.'
  },
  {
    title: 'Força de vendas',
    description: 'Potencialize e gerencie sua área comercial com a padronização de vendas. É possível inserir imagens nos produtos e gerar a NFC-e. Realize a venda diretamente com o cliente ou transfira o pedido para ser faturado na empresa.'
  }
]

const recursosAdicionais = [
  {
    titulo: 'Gestão Financeira',
    recursos: [
      'Contas a pagar e receber',
      'Conciliação bancária',
      'Fluxo de caixa',
      'DRE gerencial',
      'Multi-bancos',
      'Controle de cheques'
    ]
  },
  {
    titulo: 'Controle de Estoque',
    recursos: [
      'Controle por lote e validade',
      'Múltiplos locais de estoque',
      'Inventário físico',
      'Código de barras',
      'Composição de produtos',
      'Controle de série'
    ]
  },
  {
    titulo: 'Gestão de Pessoas',
    recursos: [
      'Cadastro de funcionários',
      'Controle de comissões',
      'Metas por vendedor',
      'Níveis de acesso',
      'Registro de atividades',
      'Multi-empresas'
    ]
  },
  {
    titulo: 'Integrações',
    recursos: [
      'Marketplaces',
      'E-commerce',
      'Contabilidade',
      'Bancos',
      'Certificado Digital',
      'APIs disponíveis'
    ]
  }
]

const planoFeatures = [
  {
    name: 'Emissão de documentos mensal',
    light: '40',
    basico: 'Ilimitado',
    intermediario: 'Ilimitado',
    avancado: 'Ilimitado'
  },
  {
    name: 'NFe',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'NFCe',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'CTe',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'MDFe',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'NFSe',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Cadastros gerais',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Relatórios',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Gerenciador de XML',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Orçamento',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Gestão de documentos',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Financeiro',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Controle de estoque',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Ordem de serviço',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Produção',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Boleto',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'Pedido de compra',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'Sped Contribuições',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'Sped Fiscal',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  }
]

// Estrutura de planos para Dinblu Web (6 planos)
const plansWeb = [
  {
    name: 'MEI',
    description: 'Emissão de até 15 documentos fiscais/mês',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'CTe', included: false },
      { name: 'MDFe', included: false },
      { name: 'CTe OS', included: false },
      { name: 'Gerenciador XML', included: false },
      { name: 'Produção', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Contrato', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Boleto', included: false },
      { name: 'Averbação', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Contador',
    description: 'Emissão de até 10 documentos fiscais/mês',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'CTe OS', included: true },
      { name: 'Gerenciador XML', included: false },
      { name: 'Produção', included: false },
      { name: 'Ordem de serviço', included: false },
      { name: 'Financeiro', included: false },
      { name: 'Contrato', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Boleto', included: false },
      { name: 'Averbação', included: false },
      { name: 'Sped Contribuições', included: false },
      { name: 'Sped Fiscal', included: true }
    ]
  },
  {
    name: 'Básico',
    description: 'Emissão ilimitada de documentos fiscais',
    popular: false,
    features: [
      { name: 'NFe', included: true },
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'CTe OS', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Produção', included: false },
      { name: 'Ordem de serviço', included: false },
      { name: 'Financeiro', included: false },
      { name: 'Contrato', included: false },
      { name: 'Pedido de compra', included: false },
      { name: 'Boleto', included: false },
      { name: 'Averbação', included: false },
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
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'CTe OS', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Produção', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Contrato', included: true },
      { name: 'Pedido de compra', included: false },
      { name: 'Boleto', included: false },
      { name: 'Averbação', included: false },
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
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'CTe OS', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Produção', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Contrato', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Boleto', included: true },
      { name: 'Averbação', included: true },
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
      { name: 'NFSe', included: true },
      { name: 'NFCe', included: true },
      { name: 'Cadastro', included: true },
      { name: 'Relatórios', included: true },
      { name: 'Estoque', included: true },
      { name: 'Pedido de venda', included: true },
      { name: 'Orçamento', included: true },
      { name: 'Gestão de Documentos', included: true },
      { name: 'CTe', included: true },
      { name: 'MDFe', included: true },
      { name: 'CTe OS', included: true },
      { name: 'Gerenciador XML', included: true },
      { name: 'Produção', included: true },
      { name: 'Ordem de serviço', included: true },
      { name: 'Financeiro', included: true },
      { name: 'Contrato', included: true },
      { name: 'Pedido de compra', included: true },
      { name: 'Boleto', included: true },
      { name: 'Averbação', included: true },
      { name: 'Sped Contribuições', included: true },
      { name: 'Sped Fiscal', included: true }
    ]
  }
]

// Extract all unique features from all plans
const allFeaturesWeb = computed(() => {
  const featuresSet = new Set()
  plansWeb.forEach(plan => {
    plan.features.forEach(feature => {
      featuresSet.add(feature.name)
    })
  })
  return Array.from(featuresSet)
})

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncludedWeb = (planName, featureName) => {
  const plan = plansWeb.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}


// Módulos adicionais
const additionalModules = [
  { name: 'Força de vendas' },
  { name: 'Tef Sitef' },
  { name: 'Adicional Tef' },
  { name: 'Integração Pix' },
  { name: 'Assinador' },
  { name: 'SEUPOS' },
  { name: 'SEUPOS + STONE' },
  { name: 'STONE Connect' },
  { name: 'Averbação' },
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
  title: 'Dinblu WEB - Sistema de Gestão Empresarial | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema web completo para gestão empresarial. Controle de vendas, documentos fiscais, financeiro e muito mais.'
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

/* Adicione classes de utilidade personalizadas */
.gradient-border {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(to right, theme('colors.dinblu'), theme('colors.blue.500'));
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
}
</style> 