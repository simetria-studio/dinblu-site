<template>
  <footer class="relative bg-dinblu">
    <!-- Overlay Pattern -->
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>

    <!-- Principal -->
    <div class="container relative z-10">
      <!-- CTA Section -->
      <div class="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Transforme seu negócio com a Dinblu
        </h2>
        <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Descubra como nossas soluções podem impulsionar seus resultados.
          Agende uma demonstração gratuita.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/contato"
            class="px-8 py-4 bg-white text-dinblu rounded-full font-semibold
            hover:bg-gray-100 transition-all duration-300 
            shadow-xl shadow-black/10">
            Fale com um Especialista
          </NuxtLink>
          <a href="tel:+551140028922"
            class="px-8 py-4 bg-transparent text-white rounded-full font-semibold
            border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
            (41) 98850-9971
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/10"></div>

      <!-- Links Grid -->
      <div class="py-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <!-- Logo e Sobre -->
          <div class="col-span-2 md:col-span-1 space-y-6">
            <img src="/images/logo.png" alt="Dinblu" class="h-8" />
            <p class="text-white/70 text-sm leading-relaxed">
              Soluções inteligentes para a gestão do seu negócio. Tecnologia que transforma resultados.
            </p>
            <!-- Redes Sociais -->
            <div class="flex items-center gap-3">
              <a v-for="social in socials" :key="social.name"
                :href="social.url" target="_blank" rel="noopener"
                class="w-9 h-9 rounded-full bg-white/10 
                flex items-center justify-center text-white/70 
                hover:bg-white hover:text-dinblu transition-all duration-300">
                <component :is="social.icon" class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Links Rápidos -->
          <div>
            <h3 class="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              <li v-for="link in quickLinks" :key="link.path">
                <NuxtLink :to="link.path" 
                  class="text-white/70 hover:text-white text-sm transition-colors">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Soluções -->
          <div>
            <h3 class="text-white font-semibold mb-4">Soluções</h3>
            <ul class="space-y-2">
              <li v-for="solution in solutions" :key="solution.name">
                <NuxtLink :to="solution.path" 
                  class="text-white/70 hover:text-white text-sm transition-colors">
                  {{ solution.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contato -->
          <div>
            <h3 class="text-white font-semibold mb-4">Contato</h3>
            <ul class="space-y-3">
              <li v-for="contact in contacts" :key="contact.value"
                class="flex items-start gap-3">
                <component :is="contact.icon" class="w-4 h-4 text-white/40 mt-1" />
                <div>
                  <div class="text-xs text-white/50">{{ contact.label }}</div>
                  <a v-if="contact.link" :href="contact.link"
                    class="text-sm text-white/80 hover:text-white transition-colors">
                    {{ contact.value }}
                  </a>
                  <div v-else class="text-sm text-white/80 whitespace-pre-line">
                    {{ contact.value }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="py-6 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/50 text-sm">
            © {{ new Date().getFullYear() }} Dinblu. Todos os direitos reservados.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink to="/privacidade" 
              class="text-white/50 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </NuxtLink>
            <NuxtLink to="/termos" 
              class="text-white/50 hover:text-white text-sm transition-colors">
              Termos de Uso
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/dinblu',
    icon: 'IconLinkedin'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/dinblu',
    icon: 'IconInstagram'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/dinblu',
    icon: 'IconFacebook'
  }
]

const quickLinks = [
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Soluções', path: '/solucoes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' }
]

const solutions = [
  { name: 'Dinblu WEB', path: '/solucoes/dinblu-web' },
  { name: 'Dinblu Food', path: '/solucoes/dinblu-food' },
  { name: 'Dinblu Shop', path: '/solucoes/dinblu-shop' },
  { name: 'Dinblu Agro', path: '/solucoes/dinblu-agro' },
  { name: 'Dinblu Pet', path: '/solucoes/dinblu-pet' },
  { name: 'Dinblu Clinica', path: '/solucoes/dinblu-clinica' }
]

const contacts = [
  {
    icon: 'IconMapPin',
    label: 'Endereço',
    value: 'Av. Principal, 1000\nCentro, Cidade - UF\nCEP 00000-000'
  },
  {
    icon: 'IconMail',
    label: 'Email',
    value: 'suporte@dinblu.com.br',
    link: 'mailto:suporte@dinblu.com.br'
  },
  {
    icon: 'IconPhone',
    label: 'Telefone',
    value: '(41) 98850-9971',
    link: 'tel:+5541988509971'
  }
]
</script>

<style scoped lang="postcss">
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style> 