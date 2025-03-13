<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-24 bg-dinblu">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Blog Dinblu
          </h1>
          <p class="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Conteúdo relevante sobre gestão empresarial, tecnologia e inovação
          </p>
        </div>
      </div>
    </section>

    <!-- Posts em Destaque -->
    <section class="py-16 bg-white">
      <div class="container">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Em Destaque</h2>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <article v-for="post in featuredPosts" :key="post.slug"
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden
            hover:shadow-xl transition-all duration-300">
            <div class="aspect-[16/9] overflow-hidden">
              <img :src="post.image" :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <span class="px-3 py-1 bg-dinblu/10 text-dinblu rounded-full text-sm font-medium">
                  {{ post.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ post.date }}</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-dinblu transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 mb-6 line-clamp-2">{{ post.excerpt }}</p>
              <NuxtLink :to="`/blog/${post.slug}`"
                class="inline-flex items-center text-dinblu font-medium group-hover:gap-2 transition-all">
                Ler mais
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Lista de Posts -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <!-- Filtros -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 class="text-2xl font-bold text-gray-900">Todos os Posts</h2>
          <div class="flex gap-4">
            <select v-model="selectedCategory" 
              class="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
              focus:outline-none focus:ring-2 focus:ring-dinblu/20">
              <option value="">Todas as categorias</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
            <input type="text" v-model="searchQuery" placeholder="Buscar posts..."
              class="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
              focus:outline-none focus:ring-2 focus:ring-dinblu/20" />
          </div>
        </div>

        <!-- Grid de Posts -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in filteredPosts" :key="post.slug"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="aspect-[16/9] overflow-hidden">
              <img :src="post.image" :alt="post.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <span class="px-3 py-1 bg-dinblu/10 text-dinblu rounded-full text-sm font-medium">
                  {{ post.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ post.date }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-dinblu transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>
              <NuxtLink :to="`/blog/${post.slug}`"
                class="text-dinblu font-medium hover:underline">
                Ler mais
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- Paginação -->
        <div class="flex justify-center mt-12">
          <div class="flex items-center gap-2">
            <button v-for="page in totalPages" :key="page"
              @click="currentPage = page"
              :class="[
                'w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors',
                currentPage === page 
                  ? 'bg-dinblu text-white' 
                  : 'bg-white text-gray-600 hover:bg-dinblu/10'
              ]">
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-white">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Fique por dentro das novidades
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Assine nossa newsletter e receba conteúdo exclusivo sobre gestão empresarial
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-4 max-w-md mx-auto">
            <input type="email" v-model="email" placeholder="Seu melhor e-mail"
              class="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none 
              focus:ring-2 focus:ring-dinblu/20" />
            <button type="submit"
              class="px-6 py-3 bg-dinblu text-white rounded-xl font-medium
              hover:bg-dinblu-600 transition-colors">
              Assinar
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const email = ref('')
const selectedCategory = ref('')
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 9
const totalPages = 5

const categories = [
  'Gestão Empresarial',
  'Tecnologia',
  'Inovação',
  'Finanças',
  'Produtividade'
]

const featuredPosts = [
  {
    title: 'Como a inteligência artificial está transformando a gestão empresarial',
    slug: 'ia-gestao-empresarial',
    excerpt: 'Descubra como a IA está revolucionando a forma como as empresas operam e tomam decisões...',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070',
    category: 'Tecnologia',
    date: '15 Mar 2024'
  },
  {
    title: '10 estratégias para melhorar a produtividade da sua equipe',
    slug: 'estrategias-produtividade',
    excerpt: 'Aprenda técnicas comprovadas para aumentar a eficiência e motivação dos colaboradores...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    category: 'Produtividade',
    date: '12 Mar 2024'
  }
]

const allPosts = [
  // ... posts simulados ...
  {
    title: 'O futuro do trabalho remoto',
    slug: 'futuro-trabalho-remoto',
    excerpt: 'Como as empresas estão se adaptando ao novo modelo de trabalho híbrido...',
    image: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=2070',
    category: 'Gestão Empresarial',
    date: '10 Mar 2024'
  },
  // ... adicionar mais posts
]

const filteredPosts = computed(() => {
  let posts = [...allPosts]
  
  if (selectedCategory.value) {
    posts = posts.filter(post => post.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query)
    )
  }
  
  return posts
})

const subscribeNewsletter = () => {
  // Implementar lógica de inscrição
  console.log('Email inscrito:', email.value)
  email.value = ''
}

useHead({
  title: 'Blog | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Blog da Dinblu com conteúdo sobre gestão empresarial, tecnologia e inovação.'
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
</style> 