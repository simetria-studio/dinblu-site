<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-24 bg-dinblu">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <NuxtLink to="/blog" 
              class="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Voltar para o Blog
            </NuxtLink>
            <span class="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm">
              {{ post.category }}
            </span>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {{ post.title }}
          </h1>
          <div class="flex items-center gap-6 text-white/80">
            <div class="flex items-center gap-3">
              <img :src="post.author.avatar" :alt="post.author.name"
                class="w-10 h-10 rounded-full" />
              <span>{{ post.author.name }}</span>
            </div>
            <span>{{ post.date }}</span>
            <span>{{ post.readTime }} min de leitura</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Conteúdo -->
    <section class="py-16">
      <div class="container">
        <div class="grid lg:grid-cols-12 gap-12">
          <!-- Artigo Principal -->
          <article class="lg:col-span-8">
            <!-- Imagem Principal -->
            <img :src="post.image" :alt="post.title"
              class="w-full rounded-2xl mb-12 shadow-xl" />
            
            <!-- Conteúdo do Post -->
            <div class="prose prose-lg max-w-none">
              <div v-html="post.content"></div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-12">
              <span v-for="tag in post.tags" :key="tag"
                class="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                #{{ tag }}
              </span>
            </div>

            <!-- Autor -->
            <div class="mt-16 p-8 bg-gray-50 rounded-2xl">
              <div class="flex items-center gap-6">
                <img :src="post.author.avatar" :alt="post.author.name"
                  class="w-16 h-16 rounded-full" />
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ post.author.name }}
                  </h3>
                  <p class="text-gray-600">{{ post.author.bio }}</p>
                </div>
              </div>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="lg:col-span-4">
            <!-- Posts Relacionados -->
            <div class="sticky top-24">
              <h2 class="text-xl font-bold text-gray-900 mb-6">
                Posts Relacionados
              </h2>
              <div class="space-y-6">
                <article v-for="related in relatedPosts" :key="related.slug"
                  class="group">
                  <NuxtLink :to="`/blog/${related.slug}`"
                    class="flex gap-4">
                    <img :src="related.image" :alt="related.title"
                      class="w-24 h-24 rounded-xl object-cover" />
                    <div>
                      <span class="text-sm text-dinblu">{{ related.category }}</span>
                      <h3 class="text-gray-900 font-medium group-hover:text-dinblu transition-colors">
                        {{ related.title }}
                      </h3>
                    </div>
                  </NuxtLink>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Gostou do conteúdo?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Assine nossa newsletter e receba mais artigos como este
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
const route = useRoute()
const email = ref('')

// Simular dados do post
const post = {
  title: 'Como a inteligência artificial está transformando a gestão empresarial',
  slug: 'ia-gestao-empresarial',
  category: 'Tecnologia',
  date: '15 Mar 2024',
  readTime: 8,
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070',
  author: {
    name: 'Ana Silva',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    bio: 'Especialista em tecnologia e inovação empresarial. Escreve sobre as últimas tendências em gestão e transformação digital.'
  },
  content: `
    <p>A inteligência artificial está revolucionando a forma como as empresas operam...</p>
    <h2>O Impacto da IA na Gestão</h2>
    <p>Com o avanço da tecnologia, as empresas estão descobrindo novas maneiras...</p>
    <h3>1. Automação de Processos</h3>
    <p>Uma das principais aplicações da IA é na automação de tarefas repetitivas...</p>
    <!-- Mais conteúdo HTML aqui -->
  `,
  tags: ['Inteligência Artificial', 'Gestão', 'Inovação', 'Tecnologia']
}

// Posts relacionados
const relatedPosts = [
  {
    title: '10 estratégias para melhorar a produtividade da sua equipe',
    slug: 'estrategias-produtividade',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    category: 'Produtividade'
  },
  {
    title: 'O futuro do trabalho remoto',
    slug: 'futuro-trabalho-remoto',
    image: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=2070',
    category: 'Gestão Empresarial'
  }
]

const subscribeNewsletter = () => {
  console.log('Email inscrito:', email.value)
  email.value = ''
}

useHead({
  title: `${post.title} | Blog Dinblu`,
  meta: [
    {
      name: 'description',
      content: post.excerpt || 'Leia mais sobre gestão empresarial, tecnologia e inovação no Blog Dinblu.'
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

/* Estilização do conteúdo do post */
.prose {
  @apply text-gray-700;
}

.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-12 mb-6;
}

.prose h3 {
  @apply text-xl font-bold text-gray-900 mt-8 mb-4;
}

.prose p {
  @apply mb-6;
}

.prose ul {
  @apply list-disc list-inside mb-6;
}

.prose img {
  @apply rounded-xl shadow-lg my-8;
}
</style> 