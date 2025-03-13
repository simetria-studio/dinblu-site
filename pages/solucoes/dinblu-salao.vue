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
            Sistema para Salões de Beleza
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Para o cliente, os profissionais e o gestor do salão
          </h1>
          <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sistema completo para gestão de salões de beleza. Do agendamento ao controle financeiro, 
            tudo em uma única plataforma.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 mt-12">
            <a href="#features" 
              class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
              hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              Conhecer recursos
            </a>
            <NuxtLink to="/contato"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div class="text-3xl font-bold text-gray-900">+8mil</div>
            </div>
            <p class="text-gray-600">Salões atendidos</p>
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
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section id="features" class="py-20 bg-gray-50">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Gestão inteligente</h3>
            <p class="text-gray-600">
              Aprimore sua gestão com uma dashboard interativa que conta com gráficos e relatórios 
              simples de interpretar, e tenha em tempo real relatórios personalizados.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Histórico de clientes</h3>
            <p class="text-gray-600">
              Acesse todos os atendimentos realizados, consulte aniversariantes e ainda deixe uma 
              mensagem automática via notificação a eles.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Pedido de compras</h3>
            <p class="text-gray-600">
              Acesse o catálogo de produtos de seu distribuidor e gerencie os pedidos diretamente 
              dentro da plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gestão Fiscal Section -->
    <section class="py-20 bg-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-sm font-medium text-dinblu">Gestão Fiscal</span>
            <h2 class="text-3xl font-bold text-gray-900 mt-2 mb-6">
              Documentos fiscais e controle tributário
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Leve sua empresa aos melhores caminhos quando o assunto é legislação. Emita notas, 
              livros fiscais e carta de correção. Entrada de mercadorias de forma manual ou via 
              importação de arquivo XML5.
            </p>
            <ul class="space-y-4">
              <li v-for="doc in documentosFiscais" :key="doc"
                class="flex items-center gap-3 text-gray-600">
                <span class="w-6 h-6 rounded-full bg-dinblu/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                {{ doc }}
              </li>
            </ul>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000" 
              alt="Gestão Fiscal"
              class="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Agendamento Section - Melhorado -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Agendamento Online</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Agenda inteligente e otimizada
            </h2>
            <div class="space-y-6">
              <div v-for="feature in agendaFeatures" :key="feature"
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
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087" 
              alt="Interface de agendamento"
              class="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Gestão de Clientes Section - Melhorado -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-4">
            <span class="w-2 h-2 rounded-full bg-dinblu"></span>
            <span class="text-sm font-medium text-dinblu">Gestão de Clientes</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Histórico completo e fidelização
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantenha um relacionamento próximo com seus clientes
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

    <!-- Comissões Section - Melhorado -->
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative group order-2 lg:order-1">
            <div class="absolute -inset-4 bg-gradient-to-r from-dinblu/30 to-blue-500/30 rounded-3xl 
              blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074" 
              alt="Interface de comissões"
              class="relative rounded-2xl shadow-2xl" />
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-dinblu/5 rounded-full mb-6">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Gestão de Comissões</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Controle de comissões e profissionais
            </h2>
            <div class="space-y-6">
              <div v-for="feature in comissoesFeatures" :key="feature"
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
    <section class="py-20 bg-white relative overflow-hidden">
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
            Explore todos os recursos disponíveis para otimizar seu salão
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para você
          </h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-4 px-6 text-left">Recursos</th>
                <th class="py-4 px-6 text-center">Light</th>
                <th class="py-4 px-6 text-center">Básico</th>
                <th class="py-4 px-6 text-center">Intermediário</th>
                <th class="py-4 px-6 text-center">Avançado</th>
                <th class="py-4 px-6 text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6">Profissionais</td>
                <td class="py-4 px-6 text-center">4</td>
                <td class="py-4 px-6 text-center">10</td>
                <td class="py-4 px-6 text-center">20</td>
                <td class="py-4 px-6 text-center">30</td>
                <td class="py-4 px-6 text-center">Mais de 30</td>
              </tr>
              <tr v-for="(feature, index) in planoFeatures" :key="index"
                class="border-b border-gray-100">
                <td class="py-4 px-6">{{ feature.name }}</td>
                <td v-for="plan in ['light', 'basico', 'intermediario', 'avancado', 'premium']" 
                  :key="plan"
                  class="py-4 px-6 text-center">
                  <template v-if="feature[plan] === true">
                    <svg class="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </template>
                  <template v-else>
                    <span class="text-gray-300">-</span>
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
        <div class="relative bg-dinblu rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-dinblu/20 to-blue-600/20 backdrop-blur-sm"></div>

          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme a gestão do seu salão
            </h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Dinblu Salão pode ajudar seu negócio
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <NuxtLink to="/contato"
                class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
                hover:bg-gray-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Agendar demonstração
              </NuxtLink>
              <a href="tel:+551140028922"
                class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold
                border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                (11) 4002-8922
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const documentosFiscais = [
  'NFe',
  'NFCe',
  'Livros fiscais'
]

const agendaFeatures = [
  'Agendamento online para clientes',
  'Confirmação automática via WhatsApp',
  'Controle de horários dos profissionais',
  'Histórico de agendamentos',
  'Bloqueio de horários',
  'Gestão de filas de espera'
]

const clientesFeatures = [
  {
    title: 'Cadastro completo',
    description: 'Mantenha todos os dados e preferências dos seus clientes organizados.'
  },
  {
    title: 'Histórico de serviços',
    description: 'Acompanhe todos os serviços realizados e produtos utilizados.'
  },
  {
    title: 'Fidelização',
    description: 'Programa de pontos e descontos para fidelizar seus clientes.'
  }
]

const comissoesFeatures = [
  'Cálculo automático de comissões',
  'Diferentes tipos de comissionamento',
  'Relatórios por profissional',
  'Metas e objetivos',
  'Controle de pagamentos',
  'Dashboard de desempenho'
]

const planoFeatures = [
  {
    name: 'Cadastro',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Relatórios',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Estoque',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Pedido de venda',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Controle de comandas',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Controle de agenda',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Gerenciamento de comissões',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Orçamento',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Gestão de Documentos',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Link de Agendamento | QR Code',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'NFe',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'NFSe',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'NFCe',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Gerenciador de XML',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Financeiro',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Ordem de serviço',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Produção',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true,
    premium: true
  },
  {
    name: 'Boleto',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true,
    premium: true
  },
  {
    name: 'Pedido de compra',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true,
    premium: true
  },
  {
    name: 'Sped Contribuições',
    light: false,
    basico: false,
    intermediario: false,
    avancado: false,
    premium: true
  },
  {
    name: 'Sped Fiscal',
    light: false,
    basico: false,
    intermediario: false,
    avancado: false,
    premium: true
  }
]

const additionalFeatures = [
  {
    title: 'Integração com ERP',
    description: 'Integre o sistema com seu ERP para uma gestão integrada.'
  },
  {
    title: 'Integração com CRM',
    description: 'Integre o sistema com seu CRM para uma gestão integrada.'
  },
  {
    title: 'Integração com E-commerce',
    description: 'Integre o sistema com seu e-commerce para uma gestão integrada.'
  },
  {
    title: 'Integração com SMS',
    description: 'Integre o sistema com sua plataforma de SMS para uma gestão integrada.'
  },
  {
    title: 'Integração com WhatsApp',
    description: 'Integre o sistema com sua plataforma de WhatsApp para uma gestão integrada.'
  },
  {
    title: 'Integração com Email',
    description: 'Integre o sistema com sua plataforma de email para uma gestão integrada.'
  },
  {
    title: 'Integração com Chatbot',
    description: 'Integre o sistema com seu chatbot para uma gestão integrada.'
  },
  {
    title: 'Integração com Google Maps',
    description: 'Integre o sistema com o Google Maps para uma gestão integrada.'
  },
  {
    title: 'Integração com Google Analytics',
    description: 'Integre o sistema com o Google Analytics para uma gestão integrada.'
  },
  {
    title: 'Integração com Facebook Ads',
    description: 'Integre o sistema com o Facebook Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Instagram Ads',
    description: 'Integre o sistema com o Instagram Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com TikTok Ads',
    description: 'Integre o sistema com o TikTok Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com LinkedIn Ads',
    description: 'Integre o sistema com o LinkedIn Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Twitter Ads',
    description: 'Integre o sistema com o Twitter Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Pinterest Ads',
    description: 'Integre o sistema com o Pinterest Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com YouTube Ads',
    description: 'Integre o sistema com o YouTube Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Snapchat Ads',
    description: 'Integre o sistema com o Snapchat Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Reddit Ads',
    description: 'Integre o sistema com o Reddit Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Telegram Ads',
    description: 'Integre o sistema com o Telegram Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com WhatsApp Ads',
    description: 'Integre o sistema com o WhatsApp Ads para uma gestão integrada.'
  },
  {
    title: 'Integração com Instagram Stories',
    description: 'Integre o sistema com o Instagram Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com TikTok Stories',
    description: 'Integre o sistema com o TikTok Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com LinkedIn Stories',
    description: 'Integre o sistema com o LinkedIn Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com Twitter Stories',
    description: 'Integre o sistema com o Twitter Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com Pinterest Stories',
    description: 'Integre o sistema com o Pinterest Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com YouTube Stories',
    description: 'Integre o sistema com o YouTube Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com Snapchat Stories',
    description: 'Integre o sistema com o Snapchat Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com Reddit Stories',
    description: 'Integre o sistema com o Reddit Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com Telegram Stories',
    description: 'Integre o sistema com o Telegram Stories para uma gestão integrada.'
  },
  {
    title: 'Integração com WhatsApp Stories',
    description: 'Integre o sistema com o WhatsApp Stories para uma gestão integrada.'
  }
]

useHead({
  title: 'Dinblu Salão - Sistema para Salões de Beleza | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Sistema completo para gestão de salões de beleza. Agendamento online, controle financeiro, gestão de profissionais e muito mais.'
    }
  ]
})
</script>

<style scoped lang="postcss">
.page-with-hero {
  padding-top: 80px;
}
</style> 