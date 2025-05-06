<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-20 bg-dinblu">
      <!-- Overlay sutil -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      <div class="container relative z-10">
        <h1 class="mb-6 text-4xl font-bold text-white lg:text-5xl">
          Política de Privacidade
        </h1>
        <p class="text-lg text-white/90">
          Última atualização: {{ new Date().toLocaleDateString() }}
        </p>
      </div>
    </section>

    <!-- Conteúdo -->
    <section class="py-16">
      <div class="container">
        <div class="mx-auto max-w-4xl prose prose-lg">
          <h2>1. Introdução</h2>
          <p>
            A Dinblu está comprometida em proteger sua privacidade. Esta Política de Privacidade 
            descreve como coletamos, usamos e protegemos suas informações pessoais quando você 
            utiliza nossos serviços.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul>
            <li>Informações de cadastro (nome, e-mail, telefone)</li>
            <li>Informações da empresa</li>
            <li>Dados de uso do sistema</li>
            <li>Informações de pagamento</li>
          </ul>

          <h2>3. Como Usamos suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Processar pagamentos</li>
            <li>Enviar comunicações importantes</li>
            <li>Fornecer suporte técnico</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais. Compartilhamos dados apenas quando necessário 
            para fornecer nossos serviços ou quando exigido por lei.
          </p>

          <h2>5. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
            informações contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>6. Seus Direitos</h2>
          <p>Você tem direito a:</p>
          <ul>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Retirar seu consentimento</li>
            <li>Receber seus dados em formato estruturado</li>
          </ul>

          <h2>7. Cookies e Tecnologias Similares</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
            analisar o tráfego e personalizar o conteúdo.
          </p>

          <h2>8. Contato</h2>
          <p>
            Para questões sobre esta política ou sobre seus dados pessoais, entre em contato:
          </p>
          <ul>
            <li>E-mail: suporte@dinblu.com.br</li>
            <li>Telefone: (41) 98850-9971</li>
          </ul>

          <h2>9. Atualizações desta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Recomendamos que você revise 
            regularmente para se manter informado sobre como protegemos suas informações.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Política de Privacidade | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Política de Privacidade da Dinblu - Como protegemos e utilizamos seus dados.'
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

/* Estilização do conteúdo */
.prose {
  @apply text-gray-600;
}

.prose h2 {
  @apply text-gray-900 mt-12 mb-6;
}

.prose ul {
  @apply my-6 list-disc list-inside space-y-2;
}

.prose p {
  @apply mb-6;
}
</style> 