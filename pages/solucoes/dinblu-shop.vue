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
            Sistema para E-commerce
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sua loja online completa e integrada
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sistema completo para e-commerce. Do cadastro de produtos à gestão de pedidos,
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+15mil</div>
            </div>
            <p class="text-gray-600">Lojas online ativas</p>
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
            <p class="text-gray-600">Integrado com marketplaces</p>
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

    <!-- E-commerce Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Gestão de E-commerce</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Controle total da sua loja online
            </h2>
            <div class="space-y-6">
              <div v-for="feature in ecommerceFeatures" :key="feature"
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
            <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064" 
              alt="Interface E-commerce"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Para o Controle de Tudo Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Gestão Completa</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Para o controle de tudo
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="control in controleTotal" :key="control.title"
            class="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 class="mb-4 text-xl font-bold text-dinblu">{{ control.title }}</h3>
            <p class="text-gray-600">{{ control.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Controle Financeiro Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Controle financeiro
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Menos burocracia, papéis e planilhas para acompanhar receita, despesas e relatórios. Tudo é feito de forma automática e personalizada para atender as necessidades da sua loja.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="finance in controleFinanceiro" :key="finance.title"
            class="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 class="mb-3 text-xl font-bold text-dinblu">{{ finance.title }}</h3>
            <p class="text-gray-600">{{ finance.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Segurança LGPD Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mx-auto max-w-4xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-6 rounded-full border border-green-200 bg-green-50">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="text-sm font-semibold text-green-600">Segurança e Conformidade</span>
          </div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Segurança: atende integralmente à LGPD
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Não se preocupe! A loja conta com mecanismos para evitar fraudes, como a validação de contas e e-mails, e atende todos os quesitos da Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>
      </div>
    </section>

    <!-- Catálogo de Produtos Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="mx-auto max-w-4xl text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Organização</span>
          </div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Catálogo de produtos
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            É possível criar atributos personalizados para cada item da sua loja. Os produtos podem ser agrupados em categorias para facilitar a navegação de seus clientes.
          </p>
        </div>
      </div>
    </section>

    <!-- Marketplaces Section -->
    <section class="py-20 bg-white" id="features">
      <div class="container">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Integração com Marketplaces</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Venda em todos os canais
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Integração completa com os principais marketplaces do mercado
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in marketplaceFeatures" :key="feature.title"
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
            Escolha o plano ideal para sua loja virtual
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis que crescem junto com o seu e-commerce
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
                    <th v-for="plan in plansShop" :key="plan.name" 
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
                      
                      <!-- Price -->
                      <div class="text-lg font-bold mb-1"
                         :class="plan.popular ? 'text-blue-100' : 'text-dinblu'">
                        {{ plan.price }}
                      </div>

                      <!-- Description/Users -->
                      <div class="text-xs"
                        :class="plan.popular ? 'text-white/80' : 'text-gray-500'">
                        {{ plan.products }}
                      </div>
                    </th>
                  </tr>
                </thead>

                <!-- Table Body with Categories -->
                <tbody class="bg-white divide-y divide-gray-200">
                  <template v-for="(group, groupIdx) in featureGroupsShop" :key="groupIdx">
                    <!-- Category Header -->
                    <tr class="bg-gray-100">
                      <td colspan="5" class="py-3 px-6 text-sm font-bold text-gray-900 uppercase tracking-wide">
                        {{ group.category }}
                      </td>
                    </tr>
                    
                    <!-- Features in Category -->
                    <tr v-for="(feature, idx) in group.features" :key="feature"
                      class="transition-colors duration-200 hover:bg-gray-50"
                      :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
                      <!-- Feature Name -->
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {{ feature }}
                      </td>
                      
                      <!-- Feature per Plan -->
                      <td v-for="plan in plansShop" :key="plan.name"
                        class="py-4 px-4 text-center transition-all duration-200"
                        :class="plan.popular ? 'bg-dinblu/5' : ''">
                        <div class="flex justify-center">
                          <svg v-if="isPlanFeatureIncludedShop(plan.name, feature)" 
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
                  </template>
                </tbody>

                <!-- Table Footer with CTAs -->
                <tfoot class="bg-gray-50">
                  <tr>
                    <td class="py-6 px-6"></td>
                    <td v-for="plan in plansShop" :key="plan.name" 
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

    <!-- CTA Section -->
    <!-- <section class="py-20 bg-white">
      <div class="container">
        <div class="relative bg-dinblu rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-dinblu/20 to-blue-600/20 backdrop-blur-sm"></div>

          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Comece a vender online hoje mesmo
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Dinblu Shop pode ajudar seu negócio
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
const ecommerceFeatures = [
  'Gestão de produtos e variações',
  'Controle de estoque multicanal',
  'Gestão de pedidos centralizada',
  'Integração com marketplaces',
  'Automação de preços',
  'Gestão de fretes'
]

const controleTotal = [
  {
    title: 'Controle total do negócio',
    description: 'É possível gerenciar todos os pedidos realizados pelos seus clientes. Você ainda personaliza as etapas do processo de compra e mantém o consumidor informado sobre o andamento do pedido.'
  },
  {
    title: 'Integração completa',
    description: 'Cálculo automático de frete e prazo: a loja é totalmente integrada ao Melhor Envio, fornecendo aos seus clientes o cálculo exato do prazo e preço do serviço de entrega. É possível ainda definir valores específicos de frete para intervalos de CEP.'
  },
  {
    title: 'Integrado ao Mercado Livre, Mercado Pago e WhatsApp',
    description: 'Conecte sua loja aos principais canais de venda e pagamento do mercado brasileiro, aumentando suas oportunidades de negócio.'
  }
]

const controleFinanceiro = [
  {
    title: 'Controle de estoque',
    description: 'Acompanhe o seu estoque em tempo real.'
  },
  {
    title: 'Controle de pedidos',
    description: 'É possível controlar os pedidos feitos pelos seus clientes.'
  },
  {
    title: 'Importação de XML',
    description: 'É possível importar produtos sem esforço, por meio de notas fiscais no formato XML.'
  }
]


const marketplaceFeatures = [
  {
    title: 'Mercado Livre',
    description: 'Integração completa com o maior marketplace da América Latina.'
  },
  {
    title: 'Amazon',
    description: 'Venda seus produtos na maior loja online do mundo.'
  },
  {
    title: 'Shopee',
    description: 'Alcance milhões de compradores na plataforma asiática.'
  }
]

const plansShop = [
  {
    name: 'Básico',
    products: 'Cadastro de até 50 produtos',
    popular: false,
    features: [
      { name: 'Subdomínio gratuito', included: true },
      { name: 'Certificado SSL gratuito', included: true },
      { name: 'Cadastro de produtos XML', included: true },
      { name: 'Gerenciamento de clientes', included: true },
      { name: 'Relatório de vendas', included: true },
      { name: 'Gerenciamento das etapas de venda', included: true },
      { name: 'Gerenciamento das etapas de venda', included: true },
      { name: 'Pedidos manuais', included: false },
      { name: 'Temas gratuitos disponíveis', included: true },
      { name: 'Integração Whatsapp', included: false },
      { name: 'Integração Mercado livre', included: false },
      { name: 'Checkout transparente', included: true },
      { name: 'Mercado Pago', included: true },
      { name: 'Pagamento local', included: false },
      { name: 'Melhor envio', included: false },
      { name: 'Integração Dinblu Web', included: false }
    ]
  },
  {
    name: 'Intermediário',
    products: 'Cadastro de até 100 produtos',
    popular: false,
    features: [
      { name: 'Subdomínio gratuito', included: true },
      { name: 'Certificado SSL gratuito', included: true },
      { name: 'Cadastro de produtos XML', included: true },
      { name: 'Gerenciamento de clientes', included: true },
      { name: 'Relatório de vendas', included: true },
      { name: 'Gerenciamento das etapas de venda', included: true },
      { name: 'Pedidos manuais', included: true },
      { name: 'Temas gratuitos disponíveis', included: true },
      { name: 'Integração Whatsapp', included: true },
      { name: 'Integração Mercado livre', included: true },
      { name: 'Checkout transparente', included: true },
      { name: 'Mercado Pago', included: true },
      { name: 'Pagamento local', included: true },
      { name: 'Melhor envio', included: true },
      { name: 'Integração Dinblu Web', included: true }
    ]
  },
  {
    name: 'Avançado',
    products: 'Cadastro de até 200 produtos',
    popular: true,
    features: [
      { name: 'Subdomínio gratuito', included: true },
      { name: 'Certificado SSL gratuito', included: true },
      { name: 'Cadastro de produtos XML', included: true },
      { name: 'Gerenciamento de clientes', included: true },
      { name: 'Relatório de vendas', included: true },
      { name: 'Gerenciamento das etapas de venda', included: true },
      { name: 'Pedidos manuais', included: true },
      { name: 'Temas gratuitos disponíveis', included: true },
      { name: 'Integração Whatsapp', included: true },
      { name: 'Integração Mercado livre', included: true },
      { name: 'Checkout transparente', included: true },
      { name: 'Mercado Pago', included: true },
      { name: 'Pagamento local', included: true },
      { name: 'Melhor envio', included: true },
      { name: 'Integração Dinblu Web', included: true }
    ]
  },
  {
    name: 'Premium',
    products: 'Cadastro ilimitado de produtos',
    popular: false,
    features: [
      { name: 'Subdomínio gratuito', included: true },
      { name: 'Certificado SSL gratuito', included: true },
      { name: 'Cadastro de produtos XML', included: true },
      { name: 'Gerenciamento de clientes', included: true },
      { name: 'Relatório de vendas', included: true },
      { name: 'Gerenciamento das etapas de venda', included: true },
      { name: 'Pedidos manuais', included: true },
      { name: 'Temas gratuitos disponíveis', included: true },
      { name: 'Integração Whatsapp', included: true },
      { name: 'Integração Mercado livre', included: true },
      { name: 'Checkout transparente', included: true },
      { name: 'Mercado Pago', included: true },
      { name: 'Pagamento local', included: true },
      { name: 'Melhor envio', included: true },
      { name: 'Integração Dinblu Web', included: true }
    ]
  }
]

// Feature Groups for Categorized Display
const featureGroupsShop = [
  {
    category: 'Recursos gerais',
    features: [
      'Subdomínio gratuito',
      'Certificado SSL gratuito',
      'Cadastro de produtos XML',
      'Gerenciamento de clientes',
      'Relatório de vendas',
      'Gerenciamento das etapas de venda',
      'Pedidos manuais',
      'Temas gratuitos disponíveis',
      'Integração Whatsapp',
      'Integração Mercado livre'
    ]
  },
  {
    category: 'Formas de pagamento',
    features: [
      'Checkout transparente',
      'Mercado Pago',
      'Pagamento local'
    ]
  },
  {
    category: 'Formas de envio',
    features: [
      'Melhor envio'
    ]
  },
  {
    category: 'Gestão',
    features: [
      'Integração Dinblu Web'
    ]
  }
]

// Helper function to check if a plan includes a specific feature
const isPlanFeatureIncludedShop = (planName, featureName) => {
  const plan = plansShop.find(p => p.name === planName)
  if (!plan) return false
  
  const feature = plan.features.find(f => f.name === featureName)
  return feature ? feature.included : false
}

useHead({
  title: 'Dinblu Shop - Sistema para E-commerce | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para e-commerce. Gestão de produtos, integração com marketplaces, controle de estoque e muito mais.'
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