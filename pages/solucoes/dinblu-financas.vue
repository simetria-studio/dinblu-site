<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="overflow-hidden relative py-32 bg-dinblu">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <div class="container relative z-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex gap-2 items-center px-4 py-1 mb-6 text-sm font-medium text-white rounded-full backdrop-blur-sm bg-white/10">
            <span class="w-2 h-2 bg-green-400 rounded-full"></span>
            Finanças Pessoais
          </span>
          <h1 class="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Transforme sua relação com o dinheiro
          </h1>
          <p class="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/90">
            Controle total das suas finanças pessoais. Organize despesas, acompanhe investimentos 
            e conquiste sua liberdade financeira com o app mais completo e fácil de usar.
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center mt-12">
            <a href="https://play.google.com/store/apps/details?id=com.dinblu&pcampaignid=web_share" 
              target="_blank"
              class="flex gap-2 items-center px-8 py-4 font-semibold bg-white rounded-full shadow-lg transition-all duration-300 text-dinblu hover:bg-gray-100 hover:-translate-y-0.5">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.928 2.072L9.072 12l8.856 9.928L5.072 12l12.856-9.928z"/>
              </svg>
              Baixar no Google Play
            </a>
            <NuxtLink to="https://app.dinblu.com.br/login"
              class="px-8 py-4 font-semibold text-white bg-transparent rounded-full border-2 transition-all duration-300 border-white/30 hover:bg-white/10">
              Acessar Dinblu Finanças
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <!-- <section class="relative -mt-12 mb-20">
      <div class="container">
        <div class="grid gap-8 md:grid-cols-3">
          <div class="p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
            <div class="flex gap-4 items-center mb-2">
              <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+100mil</div>
            </div>
            <p class="text-gray-600">Downloads na Play Store</p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
            <div class="flex gap-4 items-center mb-2">
              <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">4.8/5</div>
            </div>
            <p class="text-gray-600">Avaliação dos usuários</p>
          </div>

          <div class="p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
            <div class="flex gap-4 items-center mb-2">
              <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10">
                <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">100%</div>
            </div>
            <p class="text-gray-600">Gratuito</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Recursos principais</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Recursos que colocam você no controle
          </h2>
          <p class="text-lg text-gray-600">
            Ferramentas profissionais com a simplicidade que você precisa para tomar melhores decisões financeiras
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.title"
            class="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div class="flex justify-center items-center mb-6 w-14 h-14 rounded-xl bg-dinblu/10">
              <component :is="feature.icon" class="w-7 h-7 text-dinblu" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-gray-900">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Screenshots -->
    <section class="py-20">
      <div class="container">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Interface intuitiva e moderna
          </h2>
          <p class="text-lg text-gray-600">
            Conheça algumas das telas do aplicativo
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(screenshot, index) in screenshots" :key="index"
            class="overflow-hidden relative rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <img :src="screenshot" :alt="`Screenshot ${index + 1}`"
              class="w-full aspect-[9/16] object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="overflow-hidden relative py-20 bg-dinblu">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <div class="container relative">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
            Sua liberdade financeira começa hoje
          </h2>
          <p class="mb-12 text-xl text-white/90">
            Mais de 100 mil pessoas já transformaram suas finanças com o Dinblu. Baixe grátis e comece agora!
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.dinblu.financas" 
            target="_blank"
            class="inline-flex gap-2 items-center px-8 py-4 font-semibold bg-white rounded-full shadow-lg transition-all duration-300 text-dinblu hover:bg-gray-100 hover:-translate-y-0.5">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.928 2.072L9.072 12l8.856 9.928L5.072 12l12.856-9.928z"/>
            </svg>
            Baixar no Google Play
          </a>
        </div>
      </div>
    </section>

    <!-- Benefícios Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid gap-16 items-center lg:grid-cols-2">
          <div class="order-2 lg:order-1">
            <div class="space-y-8">
              <div class="flex gap-4 items-start">
                <div class="flex justify-center items-center w-12 h-12 bg-green-100 rounded-xl shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold text-gray-900">
                    100% Gratuito para sempre
                  </h3>
                  <p class="text-gray-600">
                    Acesso completo aos recursos essenciais sem pagar nada, nunca. Zero custos ocultos, zero compromisso, zero complicação.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex justify-center items-center w-12 h-12 bg-blue-100 rounded-xl shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold text-gray-900">
                    Segurança bancária para seus dados
                  </h3>
                  <p class="text-gray-600">
                    Criptografia de nível militar, autenticação biométrica e backup automático em nuvem. Suas informações protegidas com a mesma tecnologia dos maiores bancos.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex justify-center items-center w-12 h-12 bg-purple-100 rounded-xl shrink-0">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold text-gray-900">
                    Inteligência financeira automatizada
                  </h3>
                  <p class="text-gray-600">
                    Relatórios visuais poderosos que revelam padrões de gastos, preveem despesas futuras e sugerem onde você pode economizar mais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative order-1 lg:order-2">
            <div class="absolute inset-0 bg-gradient-to-br rounded-3xl opacity-60 blur-3xl from-dinblu/20 to-blue-500/20"></div>
            <img src="/images/5.png" alt="Dashboard do App"
              class="relative w-full rounded-2xl border shadow-2xl border-white/20" />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <!-- <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">O que dizem nossos usuários</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Histórias de sucesso
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="review in reviews" :key="review.name"
            class="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div class="flex gap-2 items-center mb-4">
              <div v-for="i in 5" :key="i"
                class="text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="mb-6 text-gray-600">{{ review.text }}</p>
            <div class="flex gap-4 items-center">
              <img :src="review.avatar" :alt="review.name"
                class="object-cover w-12 h-12 rounded-full" />
              <div>
                <div class="font-medium text-gray-900">{{ review.name }}</div>
                <div class="text-sm text-gray-500">{{ review.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Pricing Section -->
    <section class="py-24">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/10 rounded-full mb-6 border border-dinblu/20">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-semibold text-dinblu">Planos</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Escolha o plano ideal para você
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Comece grátis e evolua quando precisar de mais recursos
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Plano Gratuito -->
          <div class="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Gratuito</h3>
              <div class="flex items-baseline justify-center gap-2 mb-4">
                <span class="text-5xl font-bold text-gray-900">R$ 0</span>
                <span class="text-gray-500">/mês</span>
              </div>
              <p class="text-gray-600">Perfeito para começar</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Apenas 1 conta</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Apenas 1 cartão</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Categorias padrões</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Relatório básico</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">Lançamentos ilimitados</span>
              </li>
            </ul>

            <a href="https://play.google.com/store/apps/details?id=com.dinblu&pcampaignid=web_share" 
              target="_blank"
              class="block w-full text-center px-6 py-4 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300">
              Começe agora mesmo
            </a>
          </div>

          <!-- Plano Premium -->
          <div class="rounded-2xl shadow-2xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300" style="background: linear-gradient(to bottom, #1e40af, #6366f1);">
            <!-- Popular Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-orange-500 rounded-full text-xs font-bold text-white shadow-lg uppercase tracking-wider">
                Mais Popular
              </span>
            </div>

            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Premium</h3>
              <div class="flex items-baseline justify-center gap-2 mb-4">
                <span class="text-5xl font-bold text-white">R$ 9,90</span>
                <span class="text-white/80">/mês</span>
              </div>
              <p class="text-white/90">Recursos ilimitados</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Cadastro ilimitado de contas</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Cadastro ilimitado de cartões</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Cadastro de categorias personalizadas</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Cadastro de subcategorias</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Relatórios avançados</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">DRE Pessoal (Demonstrativo de Resultados)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Importação de lançamentos & Conciliação</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-white font-medium">Lançamentos ilimitados</span>
              </li>
            </ul>

            <a href="https://app.dinblu.com.br/login" 
              target="_blank"
              class="block w-full text-center px-6 py-4 bg-white text-dinblu font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Assinar Premium
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Dúvidas frequentes</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Perguntas e respostas
          </h2>
        </div>

        <div class="mx-auto max-w-3xl space-y-4">
          <div v-for="(faq, index) in faqs" :key="faq.question"
            class="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
            <button
              @click="toggleFaq(index)"
              class="flex justify-between items-center py-5 px-6 w-full text-left transition-colors duration-200 hover:bg-gray-50"
              :aria-expanded="openFaqIndex === index">
              <h3 class="pr-8 text-lg font-semibold text-gray-900">
                {{ faq.question }}
              </h3>
              <svg 
                class="flex-shrink-0 w-6 h-6 text-dinblu transition-transform duration-300"
                :class="{ 'rotate-180': openFaqIndex === index }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div 
              class="overflow-hidden transition-all duration-300"
              :style="{ maxHeight: openFaqIndex === index ? '500px' : '0' }">
              <p class="px-6 pb-5 text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// FAQ Accordion state
const openFaqIndex = ref(null)

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const features = [
  {
    icon: 'IconChart',
    title: 'Comece grátis, evolua quando quiser',
    description: 'Acesso completo na versão gratuita. Desbloqueie recursos avançados como múltiplas contas, relatórios ilimitados e sincronização em nuvem com a versão Premium.'
  },
  {
    icon: 'IconTarget',
    title: 'Metas que você realmente alcança',
    description: 'Defina objetivos financeiros realistas e acompanhe seu progresso em tempo real. Economie para viagens, reserva de emergência ou aquela compra especial.'
  },
  {
    icon: 'IconPieChart',
    title: 'Veja para onde vai seu dinheiro',
    description: 'Categorize automaticamente seus gastos e descubra onde você pode economizar. Gráficos intuitivos mostram exatamente como você está gastando.'
  },
  {
    icon: 'IconTrend',
    title: 'Inteligência financeira na palma da mão',
    description: 'Relatórios detalhados e análises preditivas ajudam você a tomar decisões mais inteligentes sobre seu dinheiro. Compare meses, identifique padrões e otimize seus gastos.'
  },
  {
    icon: 'IconBell',
    title: 'Nunca mais pague juros por atraso',
    description: 'Alertas inteligentes garantem que você nunca esqueça de pagar uma conta. Configure lembretes personalizados para contas recorrentes e investimentos programados.'
  },
  {
    icon: 'IconShield',
    title: 'Suas informações completamente protegidas',
    description: 'Criptografia de ponta a ponta, autenticação biométrica e backup automático em nuvem. Seus dados financeiros seguros com a mesma tecnologia usada por bancos.'
  }
]

const screenshots = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png'
]

const reviews = [
  {
    name: 'Ana Silva',
    title: 'Usuária há 2 meses',
    text: 'O Dinblu Finanças mudou completamente minha relação com dinheiro. Agora consigo ter total controle dos meus gastos e economizar mais.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
  },
  {
    name: 'Carlos Santos',
    title: 'Usuário há 1 mês',
    text: 'App incrível! Interface super intuitiva e recursos que realmente ajudam no controle financeiro. Recomendo muito!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200'
  },
  {
    name: 'Mariana Costa',
    title: 'Usuária há 6 meses',
    text: 'Os relatórios e gráficos são excelentes para visualizar onde o dinheiro está indo. Melhor app de finanças que já usei.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200'
  }
]

const faqs = [
  {
    question: 'O aplicativo é realmente gratuito?',
    answer: 'Sim! O Dinblu Finanças oferece uma versão 100% gratuita com todos os recursos essenciais para controle financeiro pessoal. Você pode usar indefinidamente sem pagar nada. A versão Premium é opcional e desbloqueia recursos avançados.'
  },
  {
    question: 'Meus dados financeiros estão seguros?',
    answer: 'Absolutamente. Utilizamos criptografia de ponta a ponta e todos os dados são armazenados em servidores seguros. Seus dados nunca são compartilhados com terceiros.'
  },
  {
    question: 'Posso usar em mais de um dispositivo?',
    answer: 'Sim! Em qualquer plano você tem acesso e sincronização automática em múltiplos dispositivos Android e através da versão web. Suas informações ficam sempre atualizadas em todos os aparelhos.'
  },
  {
    question: 'Como funciona a sincronização na nuvem?',
    answer: 'Todos os seus dados são automaticamente sincronizados em tempo real com a nuvem. Você pode trocar de celular, acessar pelo navegador ou usar múltiplos dispositivos sem perder nenhuma informação.'
  },
  {
    question: 'Posso conectar minha conta bancária?',
    answer: 'O Dinblu Finanças não conecta diretamente com contas bancárias por questões de segurança e privacidade. No entanto, você pode importar extratos em formato OFX e lançar transações manualmente de forma rápida e intuitiva. Estamos trabalhando em integração Open Banking para futuras versões.'
  }
]

useHead({
  title: 'Dinblu Finanças - App Gratuito de Controle Financeiro Pessoal | Organize Seu Dinheiro',
  meta: [
    {
      name: 'description',
      content: 'Transforme sua relação com o dinheiro! App 100% gratuito para controle de finanças pessoais. +100 mil downloads, avaliação 4.8★. Organize despesas, defina metas e conquiste sua liberdade financeira.'
    },
    {
      name: 'keywords',
      content: 'app finanças pessoais, controle financeiro gratuito, organizar dinheiro, gastos mensais, economia pessoal, planejamento financeiro'
    },
    {
      property: 'og:title',
      content: 'Dinblu Finanças - Transforme sua relação com o dinheiro'
    },
    {
      property: 'og:description',
      content: 'App 100% gratuito para controle de finanças pessoais. Mais de 100 mil downloads. Organize despesas, acompanhe investimentos e conquiste sua liberdade financeira.'
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

/* Melhore as transições */
.transition-all {
  @apply transition-all duration-300 ease-in-out;
}
</style> 