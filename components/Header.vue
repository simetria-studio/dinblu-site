<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <nav class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/images/logo.png" alt="Dinblu" class="h-8" />
      </NuxtLink>

      <!-- Menu Principal -->
      <div class="hidden lg:flex items-center gap-8">
        <!-- Soluções Para Empresas (Dropdown) -->
        <div class="relative group">
          <button class="flex items-center gap-2 text-gray-600 hover:text-dinblu transition-colors">
            Para Empresas
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <!-- Dropdown Para Empresas -->
          <div class="absolute top-full -left-4 w-64 pt-4 hidden group-hover:block">
            <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
              <div class="space-y-2">
                <NuxtLink to="/solucoes/dinblu-web"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Dinblu WEB</div>
                    <div class="text-sm text-gray-500">Gestão empresarial</div>
                  </div>
                </NuxtLink>

                <NuxtLink to="/solucoes/dinblu-food"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Dinblu Food</div>
                    <div class="text-sm text-gray-500">Gestão de restaurantes</div>
                  </div>
                </NuxtLink>

                <NuxtLink to="/solucoes/dinblu-shop"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Dinblu Shop</div>
                    <div class="text-sm text-gray-500">Gestão de e-commerce</div>
                  </div>
                </NuxtLink>

                <NuxtLink to="/solucoes/dinblu-pet"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Dinblu Pet</div>
                    <div class="text-sm text-gray-500">Gestão de pet shops</div>
                  </div>
                </NuxtLink>

                <NuxtLink to="/solucoes/dinblu-clinica"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Dinblu Clínica</div>
                    <div class="text-sm text-gray-500">Gestão de clínicas</div>
                  </div>
                </NuxtLink>

                <NuxtLink to="/solucoes/dinblu-agro"
                  class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">Dinblu Agro</div>
                    <div class="text-sm text-gray-500">Gestão do agronegócio</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Soluções Para Pessoas -->
        <NuxtLink to="/solucoes/dinblu-financas" 
          class="text-gray-600 hover:text-dinblu transition-colors">
          Para Pessoas
        </NuxtLink>

        <!-- Outros Links -->
        <NuxtLink to="/sobre" class="text-gray-600 hover:text-dinblu transition-colors">
          Sobre
        </NuxtLink>
        <NuxtLink to="/blog" class="text-gray-600 hover:text-dinblu transition-colors">
          Blog
        </NuxtLink>
      </div>

      <!-- CTA -->
      <div class="hidden lg:flex items-center gap-4">
        <NuxtLink target="_blank" to="https://suporte.dinblu.com.br/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
          class="px-6 py-2.5 bg-dinblu text-white rounded-full font-medium 
          hover:bg-dinblu/90 transition-all duration-300 shadow-lg hover:shadow-xl 
          hover:-translate-y-0.5 hover:shadow-dinblu/20">
          Fale conosco
        </NuxtLink>
        <!-- Área do Cliente -->
        <a href="https://suporte.dinblu.com.br/" target="_blank"
          class="group px-6 py-2.5 bg-white text-dinblu rounded-full font-medium
          hover:bg-dinblu/5 transition-all duration-300 shadow-lg hover:shadow-xl
          hover:-translate-y-0.5 border border-dinblu/10 hover:border-dinblu/30
          flex items-center gap-2">
          Área do Cliente
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Menu Mobile -->
      <button class="lg:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Menu Mobile Dropdown -->
    <div v-if="isMenuOpen" 
      class="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
      <div class="p-4 space-y-4">
        <!-- Para Empresas -->
        <div>
          <button @click="isEmpresasOpen = !isEmpresasOpen"
            class="flex items-center justify-between w-full p-4 text-left text-gray-900 bg-gray-50 rounded-lg">
            <span class="font-medium">Para Empresas</span>
            <svg class="w-5 h-5 transition-transform" :class="{ 'rotate-180': isEmpresasOpen }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <div v-if="isEmpresasOpen" class="mt-2 space-y-2 pl-4">
            <NuxtLink v-for="(solution, index) in empresasSolutions" :key="index"
              :to="solution.path"
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-dinblu/10 flex items-center justify-center">
                <component :is="solution.icon" class="w-5 h-5 text-dinblu"/>
              </div>
              <div>
                <div class="font-medium text-gray-900">{{ solution.title }}</div>
                <div class="text-sm text-gray-500">{{ solution.description }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Para Pessoas -->
        <NuxtLink to="/solucoes/dinblu-financas"
          class="block p-4 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
          Para Pessoas
        </NuxtLink>

        <!-- Outros Links -->
        <NuxtLink to="/sobre"
          class="block p-4 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
          Sobre
        </NuxtLink>
        <NuxtLink to="/blog"
          class="block p-4 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
          Blog
        </NuxtLink>

        <!-- CTA Mobile -->
        <NuxtLink to="/contato"
          class="block p-4 text-center bg-dinblu text-white rounded-xl font-medium
          hover:bg-dinblu/90 transition-all duration-300 shadow-lg hover:shadow-xl
          hover:-translate-y-0.5 hover:shadow-dinblu/20">
          Fale conosco
        </NuxtLink>

        <!-- Área do Cliente Mobile -->
        <a href="https://sistema.dinblu.com.br" target="_blank"
          class="group block p-4 text-center bg-white text-dinblu rounded-xl font-medium
          hover:bg-dinblu/5 transition-all duration-300 shadow-lg hover:shadow-xl
          hover:-translate-y-0.5 border border-dinblu/10 hover:border-dinblu/30
          flex items-center justify-center gap-2">
          Área do Cliente
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const isMenuOpen = ref(false)
const isEmpresasOpen = ref(false)

// Lista de soluções para empresas
const empresasSolutions = [
  {
    title: 'Dinblu WEB',
    description: 'Gestão empresarial',
    path: '/solucoes/dinblu-web',
    icon: 'IconDocument'
  },
  {
    title: 'Dinblu Food',
    description: 'Gestão de restaurantes',
    path: '/solucoes/dinblu-food',
    icon: 'IconRestaurant'
  },
  {
    title: 'Dinblu Shop',
    description: 'Gestão de e-commerce',
    path: '/solucoes/dinblu-shop',
    icon: 'IconShop'
  },
  {
    title: 'Dinblu Pet',
    description: 'Gestão de pet shops',
    path: '/solucoes/dinblu-pet',
    icon: 'IconPet'
  },
  {
    title: 'Dinblu Clínica',
    description: 'Gestão de clínicas',
    path: '/solucoes/dinblu-clinica',
    icon: 'IconClinic'
  },
  {
    title: 'Dinblu Agro',
    description: 'Gestão do agronegócio',
    path: '/solucoes/dinblu-agro',
    icon: 'IconAgro'
  }
]

// Fecha o menu mobile ao mudar de rota
watch(() => route.path, () => {
  isMenuOpen.value = false
  isEmpresasOpen.value = false
})
</script>

<style scoped lang="postcss">
.nav-link {
  @apply px-4 py-2.5 rounded-lg text-gray-600 font-medium transition-all duration-200
    hover:text-dinblu hover:bg-dinblu-50/50 relative overflow-hidden;
}

.nav-link::after {
  @apply content-[''] absolute bottom-0 left-0 w-full h-0.5 bg-dinblu/80
    transform scale-x-0 transition-transform duration-300 origin-left;
}

.nav-link:hover::after {
  @apply scale-x-100;
}

.btn-primary {
  @apply flex items-center px-6 py-2.5 bg-dinblu text-white rounded-full font-medium
    transition-all duration-300 hover:bg-dinblu-600 hover:shadow-lg hover:shadow-dinblu/20
    hover:-translate-y-0.5 group;
}

.btn-secondary {
  @apply flex items-center px-6 py-2.5 text-dinblu bg-dinblu-50/50 rounded-full font-medium
    transition-all duration-300 hover:bg-dinblu-100 hover:-translate-y-0.5
    border border-dinblu/10 hover:border-dinblu/20;
}
</style>
  