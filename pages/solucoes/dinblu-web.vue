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
            <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
              class="px-8 py-4 font-semibold text-white bg-transparent rounded-full border-2 transition-all duration-300 border-white/30 hover:bg-white/10">
              Agendar demonstração
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section - NOVA -->
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
            <div class="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 from-dinblu/5 group-hover:opacity-100"></div>
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
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent"></div>
      
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    <span class="text-gray-600">{{ item }}</span>
                  </div>
                </div>
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

    <!-- Controle de Vendas Section - Melhorado -->
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container">
        <div class="mb-16 text-center">
          <span class="text-sm font-medium text-dinblu">Gestão de Vendas</span>
          <h2 class="mt-2 mb-4 text-3xl font-bold text-gray-900">
            Controle completo das suas vendas
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Do orçamento à entrega, gerencie todo o processo de vendas em um só lugar
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in vendasFeatures" :key="feature.title"
            class="p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl">
            <div class="flex gap-4 items-start mb-4">
              <span class="flex justify-center items-center w-10 h-10 rounded-lg bg-dinblu/10">
                <component :is="feature.icon" class="w-5 h-5 text-dinblu" />
              </span>
              <h3 class="pt-1.5 text-lg font-semibold text-gray-900">{{ feature.title }}</h3>
            </div>
            <p class="text-gray-600">{{ feature.description }}</p>
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

    <!-- Planos Section com design moderno -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="mb-16 text-center">
          <div class="inline-flex gap-2 items-center px-4 py-2 mb-4 rounded-full bg-dinblu/5">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Planos</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-gray-900">
            Escolha o plano ideal para você
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            Do MEI à grande empresa, temos o plano perfeito para o seu negócio
          </p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-6 font-semibold text-left text-gray-900">Recursos</th>
                <th class="px-6 py-6 font-semibold text-center text-gray-900">Light</th>
                <th class="px-6 py-6 font-semibold text-center text-gray-900">Básico</th>
                <th class="px-6 py-6 font-semibold text-center text-gray-900">Intermediário</th>
                <th class="px-6 py-6 font-semibold text-center text-gray-900">Avançado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(feature, index) in planoFeatures" :key="index"
                class="border-t border-gray-100 transition-colors hover:bg-gray-50/50">
                <td class="px-6 py-4 font-medium text-gray-900">{{ feature.name }}</td>
                <td v-for="plan in ['light', 'basico', 'intermediario', 'avancado']" 
                  :key="plan"
                  class="px-6 py-4 text-center">
                  <template v-if="typeof feature[plan] === 'boolean'">
                    <svg v-if="feature[plan]" 
                      class="mx-auto w-6 h-6 text-green-500" 
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
    <section class="py-20 bg-white from-gray-50 via-white to-gray-50">
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
              <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
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
    </section>
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

const vendasFeatures = [
  {
    icon: 'IconShoppingCart',
    title: 'PDV Completo',
    description: 'Frente de caixa completa com controle de vendas, produtos, clientes e formas de pagamento.'
  },
  {
    icon: 'IconClipboard',
    title: 'Orçamentos',
    description: 'Crie e envie orçamentos profissionais para seus clientes por e-mail ou WhatsApp.'
  },
  {
    icon: 'IconTruck',
    title: 'Pedidos e Entregas',
    description: 'Controle seus pedidos e entregas com facilidade, do início ao fim do processo.'
  },
  {
    icon: 'IconUsers',
    title: 'Comissões',
    description: 'Controle de comissões por vendedor, com relatórios detalhados e pagamentos.'
  },
  {
    icon: 'IconChart',
    title: 'Relatórios',
    description: 'Relatórios detalhados de vendas, produtos, clientes e muito mais.'
  },
  {
    icon: 'IconMobile',
    title: 'App de Vendas',
    description: 'Aplicativo para seus vendedores realizarem vendas externas com facilidade.'
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