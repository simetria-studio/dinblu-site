<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative min-h-[40vh] flex items-center overflow-hidden" style="background-color: #004aad;">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 animate-pulse"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm 
            rounded-full text-white text-xs font-semibold mb-3 border border-white/30 animate-fadeIn">
            <svg class="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Entre em Contato
          </span>
          
          <h1 class="text-3xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Vamos <span class="text-white">conversar</span>?
          </h1>
          <p class="text-base lg:text-lg text-white/95 mb-3 leading-relaxed max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer. Preencha o formulário abaixo e entraremos em contato em breve.
          </p>
        </div>
      </div>
    </section>

    <!-- Formulário de Contato -->
    <section class="py-6 lg:py-8 bg-gray-50 relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute top-20 right-0 w-72 h-72" style="background-color: #004aad; opacity: 0.05; filter: blur(100px);"></div>
      
      <div class="container relative z-10">
        <div class="max-w-2xl mx-auto">
          <!-- Card do Formulário -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-5 lg:p-6 border border-gray-200/50">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Nome -->
              <div>
                <label for="nome" class="block text-xs font-semibold text-gray-900 mb-1.5">
                  Nome <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.nome"
                  type="text"
                  id="nome"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-dinblu 
                    focus:ring-2 focus:ring-dinblu/20 transition-all duration-300 outline-none
                    bg-white text-gray-900 placeholder-gray-400 text-sm"
                  placeholder="Seu nome completo"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-xs font-semibold text-gray-900 mb-1.5">
                  Email para contato <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-dinblu 
                    focus:ring-2 focus:ring-dinblu/20 transition-all duration-300 outline-none
                    bg-white text-gray-900 placeholder-gray-400 text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <!-- Empresa -->
              <div>
                <label for="empresa" class="block text-xs font-semibold text-gray-900 mb-1.5">
                  Empresa
                </label>
                <input
                  v-model="formData.empresa"
                  type="text"
                  id="empresa"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-dinblu 
                    focus:ring-2 focus:ring-dinblu/20 transition-all duration-300 outline-none
                    bg-white text-gray-900 placeholder-gray-400 text-sm"
                  placeholder="Nome da sua empresa (opcional)"
                />
              </div>

              <!-- Solução de Interesse -->
              <div>
                <label for="solucao" class="block text-xs font-semibold text-gray-900 mb-1.5">
                  Solução de Interesse <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="formData.solucao"
                  id="solucao"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-dinblu 
                    focus:ring-2 focus:ring-dinblu/20 transition-all duration-300 outline-none
                    bg-white text-gray-900 text-sm"
                >
                  <option value="">Selecione uma solução</option>
                  <option value="Dúvidas">Dúvidas</option>
                  <option value="Site">Site</option>
                  <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                  <option value="Desenvolvimento Mobile">Desenvolvimento Mobile</option>
                  <option value="Dinblu WEB">Dinblu Web</option>
                  <option value="Dinblu Food">Dinblu Food</option>
                  <option value="Dinblu Salão">Dinblu Salão</option>
                  <option value="Dinblu Shop">Dinblu Shop</option>
                  <option value="Dinblu Pet">Dinblu Pet</option>
                  <option value="Dinblu Clínica">Dinblu Clínica</option>
                  <option value="Dinblu AGRO">Dinblu Agro</option>
                </select>
              </div>

              <!-- Mensagem -->
              <div>
                <label for="mensagem" class="block text-xs font-semibold text-gray-900 mb-1.5">
                  Mensagem <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.mensagem"
                  id="mensagem"
                  required
                  rows="4"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-dinblu 
                    focus:ring-2 focus:ring-dinblu/20 transition-all duration-300 outline-none
                    bg-white text-gray-900 placeholder-gray-400 resize-none text-sm"
                  placeholder="Como podemos ajudar sua empresa?"
                ></textarea>
              </div>

              <!-- Status Messages -->
              <div v-if="submitStatus.message" 
                class="p-2.5 rounded-lg text-sm"
                :class="{
                  'bg-green-50 text-green-800 border border-green-200': submitStatus.type === 'success',
                  'bg-red-50 text-red-800 border border-red-200': submitStatus.type === 'error'
                }">
                <p class="font-medium">{{ submitStatus.message }}</p>
              </div>

              <!-- Botão de Envio -->
              <div class="pt-1">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="group w-full px-6 py-2.5 bg-dinblu text-white rounded-full font-bold
                    hover:bg-dinblu/90 transition-all duration-300 shadow-lg hover:shadow-xl 
                    hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50
                    disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style="background-color: #004aad;"
                >
                  <span v-if="!isSubmitting">Enviar Mensagem</span>
                  <span v-else>Enviando...</span>
                  <svg v-if="!isSubmitting" class="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              <!-- Informações adicionais -->
              <p class="text-xs text-gray-500 text-center pt-1">
                Os campos marcados com <span class="text-red-500">*</span> são obrigatórios.
              </p>
            </form>
          </div>

          <!-- Informações de Contato Adicionais -->
          <div class="mt-4 grid md:grid-cols-2 gap-3">
            <div class="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50">
              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style="background-color: rgba(0, 74, 173, 0.1);">
                  <svg class="w-4 h-4" style="color: #004aad;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Email</h3>
                  <a href="mailto:contato@dinblu.com.br" class="text-gray-600 hover:text-dinblu transition-colors text-xs">
                    contato@dinblu.com.br
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50">
              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style="background-color: rgba(0, 74, 173, 0.1);">
                  <svg class="w-4 h-4" style="color: #004aad;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Horário de Atendimento</h3>
                  <p class="text-gray-600 text-xs">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const formData = ref({
  nome: '',
  email: '',
  empresa: '',
  solucao: '',
  mensagem: ''
})

const isSubmitting = ref(false)
const submitStatus = ref({
  type: null,
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = { type: null, message: '' }

  try {
    // Enviar para o endpoint de API
    const response = await $fetch('/api/contato', {
      method: 'POST',
      body: {
        nome: formData.value.nome,
        email: formData.value.email,
        empresa: formData.value.empresa,
        solucao: formData.value.solucao,
        mensagem: formData.value.mensagem
      }
    })
    
    if (response.success) {
      // Sucesso
      submitStatus.value = {
        type: 'success',
        message: response.message
      }
      
      // Limpar formulário
      formData.value = {
        nome: '',
        email: '',
        empresa: '',
        solucao: '',
        mensagem: ''
      }
    } else {
      // Erro retornado pela API
      submitStatus.value = {
        type: 'error',
        message: response.message
      }
    }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    submitStatus.value = {
      type: 'error',
      message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
    }
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contato | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato com a Dinblu. Estamos prontos para ajudar sua empresa a crescer com nossas soluções de gestão empresarial.'
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

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
