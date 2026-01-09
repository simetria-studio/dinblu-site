<template>
  <section class="relative py-20 bg-gray-50">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute right-0 top-0 w-[600px] h-[600px] 
        bg-gradient-to-br from-dinblu/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute -left-40 bottom-0 w-[500px] h-[500px] 
        bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="container relative z-10">
      <!-- Cabeçalho -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Por que escolher a Dinblu?
        </h2>
        <p class="text-lg text-gray-600">
          Descubra como nossa tecnologia pode transformar a gestão do seu negócio
        </p>
      </div>

      <!-- Grid de Benefícios -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(benefit, index) in benefits" :key="index"
          class="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <!-- Ícone -->
          <div class="w-14 h-14 rounded-xl bg-dinblu/10 flex items-center justify-center 
            text-dinblu mb-6">
            <component :is="benefit.icon" class="w-7 h-7" />
          </div>

          <!-- Conteúdo -->
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ benefit.title }}
          </h3>
          <p class="text-gray-600 mb-6">
            {{ benefit.description }}
          </p>

          <!-- Recursos -->
          <ul class="space-y-2">
            <li v-for="(feature, fIndex) in benefit.features" :key="fIndex"
              class="flex items-center gap-2 text-sm text-gray-600">
              <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
          class="inline-flex items-center px-8 py-4 bg-dinblu text-white rounded-full
          font-semibold hover:bg-dinblu-700 transition-all duration-300 group">
          <span>Comece agora</span>
          <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    icon: 'IconCloud',
    title: 'Tecnologia de Ponta',
    description: 'Sistema 100% na nuvem, acessível de qualquer lugar e dispositivo.',
    features: [
      'Atualizações automáticas',
      'Backup em tempo real',
      'Alta disponibilidade'
    ]
  },
  {
    icon: 'IconShield',
    title: 'Segurança Total',
    description: 'Seus dados protegidos com os mais altos padrões de segurança.',
    features: [
      'Criptografia avançada',
      'Conformidade LGPD',
      'Controle de acesso'
    ]
  },
  {
    icon: 'IconSupport',
    title: 'Suporte Especializado',
    description: 'Equipe técnica pronta para ajudar quando você precisar.',
    features: [
      'Atendimento 24/7',
      'Consultoria dedicada',
      'Treinamento completo'
    ]
  }
]
</script> 