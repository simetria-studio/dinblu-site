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
            Controle suas finanças de forma simples
          </h1>
          <p class="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/90">
            Organize suas despesas, acompanhe investimentos e alcance seus objetivos financeiros 
            com o Dinblu Finanças.
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
    <section class="relative -mt-12 mb-20">
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
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Recursos principais</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Tudo que você precisa para organizar suas finanças
          </h2>
          <p class="text-lg text-gray-600">
            Ferramentas poderosas e intuitivas para ajudar você a alcançar seus objetivos financeiros
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
            Comece agora mesmo a organizar suas finanças
          </h2>
          <p class="mb-12 text-xl text-white/90">
            Comece gratuitamente e evolua com nossos planos premium
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
                    100% Gratuito
                  </h3>
                  <p class="text-gray-600">
                    Todas as funcionalidades disponíveis gratuitamente, sem custos ocultos ou mensalidades.
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
                    Seus dados seguros
                  </h3>
                  <p class="text-gray-600">
                    Criptografia de ponta a ponta e backup automático na nuvem para sua tranquilidade.
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
                    Relatórios detalhados
                  </h3>
                  <p class="text-gray-600">
                    Gráficos e análises para entender seus gastos e tomar melhores decisões financeiras.
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
    <section class="py-20 bg-gray-50">
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

        <div class="mx-auto max-w-3xl">
          <div v-for="faq in faqs" :key="faq.question"
            class="py-6 border-b border-gray-200">
            <h3 class="mb-2 text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    icon: 'IconChart',
    title: 'Versão gratuita e premium',
    description: 'Comece gratuitamente e desbloqueie recursos avançados com nossa assinatura premium.'
  },
  {
    icon: 'IconTarget',
    title: 'Metas financeiras',
    description: 'Defina e acompanhe suas metas de economia e investimentos.'
  },
  {
    icon: 'IconPieChart',
    title: 'Categorização',
    description: 'Organize seus gastos em categorias e veja onde seu dinheiro está indo.'
  },
  {
    icon: 'IconTrend',
    title: 'Relatórios detalhados',
    description: 'Análises e gráficos para entender seus hábitos financeiros.'
  },
  {
    icon: 'IconBell',
    title: 'Lembretes',
    description: 'Nunca mais esqueça de pagar uma conta ou fazer um investimento.'
  },
  {
    icon: 'IconShield',
    title: 'Segurança',
    description: 'Seus dados protegidos com as mais avançadas tecnologias de criptografia.'
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
    question: 'O aplicativo possui versão gratuita?',
    answer: 'Sim, o Dinblu Finanças possui uma versão gratuita com funcionalidades essenciais para o controle financeiro. Para recursos avançados, oferecemos planos de assinatura com benefícios exclusivos.'
  },
  {
    question: 'Quais são as diferenças entre a versão gratuita e premium?',
    answer: 'A versão gratuita inclui controle de despesas, receitas e categorização básica. A versão premium adiciona relatórios avançados, metas financeiras, backup na nuvem, múltiplas contas e outras funcionalidades exclusivas.'
  },
  {
    question: 'Meus dados financeiros estão seguros?',
    answer: 'Absolutamente. Utilizamos criptografia de ponta a ponta e os mais altos padrões de segurança para proteger suas informações.'
  },
  {
    question: 'Posso usar em mais de um dispositivo?',
    answer: 'Sim! Com a versão premium, você pode acessar sua conta em múltiplos dispositivos Android. Seus dados são sincronizados automaticamente entre todos os dispositivos.'
  }
]

useHead({
  title: 'Dinblu Finanças - App de Controle Financeiro | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Aplicativo gratuito para controle de finanças pessoais. Organize despesas, defina metas e acompanhe investimentos.'
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