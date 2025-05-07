<template>
  <main>
    <Hero />
    <Solucoes />
    <WhyDinblu />
    <!-- Outros componentes -->
    <!-- Dinblu Finanças Section -->
    <section class="overflow-hidden relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <div class="container relative">
        <div class="grid gap-16 items-center lg:grid-cols-2">
          <div class="order-2 lg:order-1">
            <div class="inline-flex gap-2 items-center px-4 py-2 mb-6 rounded-full bg-dinblu/5">
              <span class="w-2 h-2 rounded-full bg-dinblu"></span>
              <span class="text-sm font-medium text-dinblu">Para Pessoas</span>
            </div>
            
            <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Controle suas finanças pessoais de forma simples
            </h2>
            
            <p class="mb-8 text-xl leading-relaxed text-gray-600">
              Organize suas despesas, acompanhe investimentos e alcance seus objetivos financeiros 
              com o Dinblu Finanças.
            </p>

            <div class="mb-8 space-y-6">
              <div class="flex gap-4 items-start">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10 shrink-0">
                  <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900">
                    Controle total das suas finanças
                  </h3>
                  <p class="text-gray-600">
                    Acompanhe seus gastos, receitas e investimentos em um só lugar.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10 shrink-0">
                  <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900">
                    Relatórios e gráficos intuitivos
                  </h3>
                  <p class="text-gray-600">
                    Visualize seus dados financeiros de forma clara e objetiva.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex justify-center items-center w-12 h-12 rounded-xl bg-dinblu/10 shrink-0">
                  <svg class="w-6 h-6 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900">
                    Metas e objetivos
                  </h3>
                  <p class="text-gray-600">
                    Defina e acompanhe suas metas financeiras de forma simples.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/solucoes/dinblu-financas"
                class="flex gap-2 items-center px-8 py-4 font-semibold text-white rounded-full shadow-lg transition-all duration-300 bg-dinblu hover:bg-dinblu/90 hover:shadow-xl hover:-translate-y-0.5 hover:shadow-dinblu/20">
                Conhecer mais
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
              
              <a href="https://play.google.com/store/apps/details?id=com.dinblu" 
                target="_blank"
                class="flex gap-2 items-center px-8 py-4 font-semibold bg-white rounded-full border shadow-lg transition-all duration-300 text-dinblu hover:bg-dinblu/5 hover:shadow-xl hover:-translate-y-0.5 border-dinblu/10 hover:border-dinblu/30">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.928 2.072L9.072 12l8.856 9.928L5.072 12l12.856-9.928z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          <div class="relative order-1 lg:order-2 group">
            <div class="absolute -inset-4 bg-gradient-to-r rounded-3xl opacity-0 blur-xl transition-opacity duration-500 from-dinblu/30 to-blue-500/30 group-hover:opacity-100"></div>
            <img src="/images/5.png" 
              alt="Dinblu Finanças App"
              class="relative w-full rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import Solucoes from '~/components/Solucoes.vue'
import WhyDinblu from '~/components/WhyDinblu.vue'
const features = [
  {
    title: 'Acesso em Qualquer Lugar',
    description: 'Acesse suas informações de qualquer dispositivo, a qualquer momento',
    icon: 'IconGlobe'
  },
  {
    title: 'Suporte Especializado',
    description: 'Equipe técnica pronta para ajudar quando você precisar',
    icon: 'IconSupport'
  },
  {
    title: 'Atualização Constante',
    description: 'Sistema sempre atualizado com as últimas tecnologias',
    icon: 'IconRefresh'
  }
]

const solutions = [
  {
    name: 'Dinblu WEB',
    path: '/solucoes/dinblu-web',
    description: 'Sistema web completo para gestão empresarial',
    image: '/images/solutions/web.jpg'
  },
  {
    name: 'Dinblu Food',
    path: '/solucoes/dinblu-food',
    description: 'Gestão completa para restaurantes e delivery',
    image: '/images/solutions/food.jpg'
  },
  {
    name: 'Dinblu Shop',
    path: '/solucoes/dinblu-shop',
    description: 'E-commerce e gestão para lojas',
    image: '/images/solutions/shop.jpg'
  },
  // ... add other solutions
]
</script>

<style scoped lang="postcss">
.shadow-soft {
  @apply shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)];
}

.btn-primary {
  @apply px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 
    transition-all duration-200 text-lg font-medium 
    hover:shadow-lg hover:-translate-y-0.5;
}

.btn-secondary {
  @apply px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-full 
    hover:bg-primary-50 transition-all duration-200 text-lg font-medium 
    hover:shadow-lg hover:-translate-y-0.5;
}
</style> 