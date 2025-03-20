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
            <NuxtLink to="https://suporte.dinblu.com.br/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
              class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
              border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Tenho interesse
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative -mt-12 mb-20">
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

    <!-- Planos Section -->
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
            Da pequena à grande clínica, temos o plano perfeito para o seu negócio
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

    <!-- CTA Section -->
    <section class="py-20 bg-white">
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
              <NuxtLink to="https://suporte.dinblu.com.br/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
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

const planoFeatures = [
  {
    name: 'Prontuário eletrônico',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Agendamento online',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Prescrição digital',
    light: true,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Assinatura digital',
    light: false,
    basico: true,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Telemedicina',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Gestão financeira',
    light: false,
    basico: false,
    intermediario: true,
    avancado: true
  },
  {
    name: 'Multi-unidades',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  },
  {
    name: 'API de integração',
    light: false,
    basico: false,
    intermediario: false,
    avancado: true
  }
]

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
</style> 