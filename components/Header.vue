<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="bg-white/80 backdrop-blur-md border-b border-gray-100">
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
            
            <!-- Dropdown Para Empresas com 2 níveis -->
            <div class="absolute top-full -left-4 w-72 pt-4 hidden group-hover:block">
              <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                <div class="space-y-1">
                  <!-- Sistemas (grupo com submenu) -->
                  <div class="group/sistemas relative">
                    <button class="w-full flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                          <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                          </svg>
                        </div>
                        <div class="text-left">
                          <div class="font-medium text-gray-900">Sistemas</div>
                          <div class="text-xs text-gray-500">Gestão empresarial</div>
                        </div>
                      </div>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                    
                    <!-- Submenu Sistemas -->
                    <div class="absolute left-full top-0 ml-2 w-64 hidden group-hover/sistemas:block">
                      <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                        <div class="space-y-1">
                          <NuxtLink to="/solucoes/dinblu-web"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu WEB</div>
                              <div class="text-xs text-gray-500">Gestão empresarial</div>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/solucoes/dinblu-food"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu Food</div>
                              <div class="text-xs text-gray-500">Restaurantes</div>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/solucoes/dinblu-shop"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu Shop</div>
                              <div class="text-xs text-gray-500">E-commerce</div>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/solucoes/dinblu-pet"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu Pet</div>
                              <div class="text-xs text-gray-500">Pet shops</div>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/solucoes/dinblu-clinica"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu Clínica</div>
                              <div class="text-xs text-gray-500">Clínicas</div>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/solucoes/dinblu-agro"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu Agro</div>
                              <div class="text-xs text-gray-500">Agronegócio</div>
                            </div>
                          </NuxtLink>

                          <NuxtLink to="/solucoes/dinblu-salao"
                            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                              <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"/>
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-900 text-sm">Dinblu Salão</div>
                              <div class="text-xs text-gray-500">Salões</div>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Sites -->
                  <NuxtLink to="/solucoes/desenvolvimento-sites"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                    </div>
                    <div class="text-left">
                      <div class="font-medium text-gray-900">Sites</div>
                      <div class="text-xs text-gray-500">Desenvolvimento web</div>
                    </div>
                  </NuxtLink>

                  <!-- Desenvolvimentos -->
                  <NuxtLink to="/solucoes/desenvolvimentos"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    </div>
                    <div class="text-left">
                      <div class="font-medium text-gray-900">Desenvolvimentos</div>
                      <div class="text-xs text-gray-500">Soluções personalizadas</div>
                    </div>
                  </NuxtLink>

                  <!-- Aplicativos Mobile -->
                  <NuxtLink to="/solucoes/aplicativos-mobile"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div class="text-left">
                      <div class="font-medium text-gray-900">Aplicativos Mobile</div>
                      <div class="text-xs text-gray-500">iOS e Android</div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Links do Menu Principal -->
          <NuxtLink to="/solucoes" 
            class="text-gray-600 hover:text-dinblu transition-colors">
            Soluções
          </NuxtLink>

          <NuxtLink to="/solucoes/dinblu-financas" 
            class="text-gray-600 hover:text-dinblu transition-colors">
            Para Pessoas
          </NuxtLink>

          <NuxtLink to="/sobre" 
            class="text-gray-600 hover:text-dinblu transition-colors">
            Sobre
          </NuxtLink>

          <!-- <NuxtLink to="/blog" 
            class="text-gray-600 hover:text-dinblu transition-colors">
            Blog
          </NuxtLink> -->

          <!-- CTA -->
          <div class="flex items-center gap-4">
            <NuxtLink target="_blank" to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
              class="px-6 py-2.5 bg-dinblu text-white rounded-full font-medium 
              hover:bg-dinblu/90 transition-all duration-300 shadow-lg hover:shadow-xl 
              hover:-translate-y-0.5 hover:shadow-dinblu/20">
              Fale conosco
            </NuxtLink>
            
            <a href="https://https://gestao.dinblu.com.br/user/login/" target="_blank"
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
        </div>

        <!-- Menu Mobile Button -->
        <button class="lg:hidden relative z-50" @click="toggleMenu">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>
    </div>

    <!-- Menu Mobile Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isMenuOpen" 
        class="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
        <div class="container p-4 space-y-4">
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
              <!-- Sistemas (com submenu) -->
              <div>
                <button @click="isSistemasOpen = !isSistemasOpen"
                  class="flex items-center justify-between w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900">Sistemas</div>
                      <div class="text-xs text-gray-500">Gestão empresarial</div>
                    </div>
                  </div>
                  <svg class="w-4 h-4 text-gray-400 transition-transform" :class="{ 'rotate-180': isSistemasOpen }"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                
                <!-- Submenu Sistemas -->
                <div v-if="isSistemasOpen" class="mt-2 space-y-1 pl-4">
                  <NuxtLink to="/solucoes/dinblu-web"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu WEB</div>
                      <div class="text-xs text-gray-500">Gestão empresarial</div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/solucoes/dinblu-food"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu Food</div>
                      <div class="text-xs text-gray-500">Restaurantes</div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/solucoes/dinblu-shop"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu Shop</div>
                      <div class="text-xs text-gray-500">E-commerce</div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/solucoes/dinblu-pet"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu Pet</div>
                      <div class="text-xs text-gray-500">Pet shops</div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/solucoes/dinblu-clinica"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu Clínica</div>
                      <div class="text-xs text-gray-500">Clínicas</div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/solucoes/dinblu-agro"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu Agro</div>
                      <div class="text-xs text-gray-500">Agronegócio</div>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/solucoes/dinblu-salao"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-dinblu/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-dinblu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 text-sm">Dinblu Salão</div>
                      <div class="text-xs text-gray-500">Salões</div>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <!-- Sites -->
              <NuxtLink to="/solucoes/desenvolvimento-sites"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">Sites</div>
                  <div class="text-xs text-gray-500">Desenvolvimento web</div>
                </div>
              </NuxtLink>

              <!-- Desenvolvimentos -->
              <NuxtLink to="/solucoes/desenvolvimentos"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">Desenvolvimentos</div>
                  <div class="text-xs text-gray-500">Soluções personalizadas</div>
                </div>
              </NuxtLink>

              <!-- Aplicativos Mobile -->
              <NuxtLink to="/solucoes/aplicativos-mobile"
                class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-gray-900">Aplicativos Mobile</div>
                  <div class="text-xs text-gray-500">iOS e Android</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Soluções -->
          <NuxtLink to="/solucoes"
            class="block p-4 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            Soluções
          </NuxtLink>

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
          <NuxtLink to="https://https://gestao.dinblu.com.br/user/login/forms/wtl/e605b7caaadb29805f9252cae79a1479?styled=1"
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
    </Transition>
  </header>
</template>

<script setup>
const route = useRoute()
const isMenuOpen = ref(false)
const isEmpresasOpen = ref(false)
const isSistemasOpen = ref(false)

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
  },
  {
    title: 'Dinblu Salão',
    description: 'Gestão de salões',
    path: '/solucoes/dinblu-salao',
    icon: 'IconScissors'
  }
]

// Toggle menu function
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Previne scroll quando menu está aberto
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Fecha o menu mobile ao mudar de rota
watch(() => route.path, () => {
  isMenuOpen.value = false
  isEmpresasOpen.value = false
  isSistemasOpen.value = false
  document.body.style.overflow = ''
})

// Fecha o menu ao pressionar ESC
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      toggleMenu()
    }
  })
})

// Limpa o overflow do body ao desmontar
onUnmounted(() => {
  document.body.style.overflow = ''
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

/* Previne scroll do body quando menu está aberto */
:deep(body) {
  @apply overflow-hidden lg:overflow-auto;
}
</style>
  