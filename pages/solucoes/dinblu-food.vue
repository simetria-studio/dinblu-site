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
    <section class="relative -mt-12 mb-20">
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

    <!-- Planos Section - Melhorado -->
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Planos</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Do pequeno ao grande restaurante, temos o plano perfeito para o seu negócio
          </p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="py-6 px-6 text-left font-semibold text-gray-900">Recursos</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Light</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Básico</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Intermediário</th>
                <th class="py-6 px-6 text-center font-semibold text-gray-900">Avançado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(feature, index) in planoFeatures" :key="index"
                class="border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td class="py-4 px-6 font-medium text-gray-900">{{ feature.name }}</td>
                <td v-for="plan in ['light', 'basico', 'intermediario', 'avancado']" 
                  :key="plan"
                  class="py-4 px-6 text-center">
                  <template v-if="typeof feature[plan] === 'boolean'">
                    <svg v-if="feature[plan]" 
                      class="w-6 h-6 text-green-500 mx-auto" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span v-else class="text-gray-300">—</span>
                  </template>
                  <template v-else>
                    <span class="font-medium text-gray-900">{{ feature[plan] }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Section - Melhorado -->
    <section class="py-20 bg-white">
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
    </section>
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

const planoFeatures = [
  {
    name: 'Cadastros gerais',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Controle de mesas',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Comandas',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Cardápio digital',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Pedidos via QR Code',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Painel da cozinha',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Painel do garçom',
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
    name: 'Delivery próprio',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Integração iFood',
    light: false,
    basico: true,
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
    name: 'Financeiro',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Controle de custos',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Comissão de garçons',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Relatórios avançados',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'Multi-filiais',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'Gestão de fornecedores',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'Controle fiscal',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  }
]

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