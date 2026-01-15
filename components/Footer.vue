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
          <NuxtLink to="https://https://dinblu.com.br/contato"
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
                hover:bg-dinblu hover:text-white hover:scale-110 
                transition-all duration-300 shadow-lg hover:shadow-dinblu/20">
                <svg v-if="social.name === 'LinkedIn'" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <svg v-else-if="social.name === 'Instagram'" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg v-else-if="social.name === 'Facebook'" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
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
    url: 'https://www.instagram.com/dinbluu',
    icon: 'IconInstagram'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61553691382861',
    icon: 'IconFacebook'
  }
]

const quickLinks = [
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Soluções', path: '/solucoes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: 'https://https://dinblu.com.br/contato' }
]

const solutions = [
  // Sistemas
  { name: 'Dinblu WEB', path: '/solucoes/dinblu-web' },
  { name: 'Dinblu Food', path: '/solucoes/dinblu-food' },
  { name: 'Dinblu Shop', path: '/solucoes/dinblu-shop' },
  { name: 'Dinblu Pet', path: '/solucoes/dinblu-pet' },
  { name: 'Dinblu Clínica', path: '/solucoes/dinblu-clinica' },
  { name: 'Dinblu Agro', path: '/solucoes/dinblu-agro' },
  { name: 'Dinblu Salão', path: '/solucoes/dinblu-salao' },
  // Outros
  { name: 'Desenvolvimento de Sites', path: '/solucoes/desenvolvimento-sites' },
  { name: 'Desenvolvimentos', path: '/solucoes/desenvolvimentos' },
  { name: 'Aplicativos Mobile', path: '/solucoes/aplicativos-mobile' }
]

const contacts = [
  {
    icon: 'IconMapPin',
    label: 'Endereço',
    value: 'Curitiba - PR'
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