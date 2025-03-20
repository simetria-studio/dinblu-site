<template>
  <div class="min-h-screen page-with-hero">
    <!-- Hero Section -->
    <section class="relative py-20 bg-dinblu">
      <!-- Overlay sutil -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      <div class="container relative z-10">
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          Termos e Condições
        </h1>
        <p class="text-lg text-white/90">
          Última atualização: {{ new Date().toLocaleDateString() }}
        </p>
      </div>
    </section>

    <!-- Conteúdo -->
    <section class="py-16">
      <div class="container">
        <div class="prose prose-lg max-w-4xl mx-auto">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar os serviços da Dinblu, você concorda com estes termos e condições. 
            Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
          </p>

          <h2>2. Descrição dos Serviços</h2>
          <p>
            A Dinblu fornece soluções de software para gestão empresarial, incluindo mas não se limitando a:
          </p>
          <ul>
            <li>Sistemas de gestão empresarial</li>
            <li>Soluções para e-commerce</li>
            <li>Gestão de restaurantes</li>
            <li>Gestão de clínicas e salões</li>
            <li>Soluções para o agronegócio</li>
            <li>Aplicativos financeiros</li>
          </ul>

          <h2>3. Conta de Usuário</h2>
          <p>
            Para utilizar nossos serviços, você deve:
          </p>
          <ul>
            <li>Fornecer informações precisas e completas</li>
            <li>Manter suas credenciais de acesso seguras</li>
            <li>Notificar imediatamente qualquer uso não autorizado</li>
            <li>Ser responsável por todas as atividades em sua conta</li>
          </ul>

          <h2>4. Pagamentos e Assinaturas</h2>
          <p>
            Os serviços da Dinblu são fornecidos mediante pagamento de assinatura. Ao contratar 
            nossos serviços, você concorda em:
          </p>
          <ul>
            <li>Pagar pelos serviços contratados nos prazos estabelecidos</li>
            <li>Fornecer informações de pagamento válidas e precisas</li>
            <li>Manter suas informações de pagamento atualizadas</li>
          </ul>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, código, design e funcionalidades dos serviços Dinblu são de nossa 
            propriedade exclusiva e são protegidos por leis de propriedade intelectual.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            A Dinblu não será responsável por:
          </p>
          <ul>
            <li>Perdas indiretas ou consequentes</li>
            <li>Interrupções temporárias do serviço</li>
            <li>Perda de dados causada por força maior</li>
            <li>Uso indevido da plataforma</li>
          </ul>

          <h2>7. Disponibilidade do Serviço</h2>
          <p>
            Nos esforçamos para manter nossos serviços disponíveis 24/7, mas podem ocorrer 
            interrupções para manutenção ou atualizações. Notificaremos sobre manutenções 
            programadas com antecedência.
          </p>

          <h2>8. Rescisão</h2>
          <p>
            Podemos encerrar ou suspender seu acesso aos serviços imediatamente, sem aviso 
            prévio, por violação destes termos ou por qualquer outro motivo que julgarmos apropriado.
          </p>

          <h2>9. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações 
            significativas serão notificadas através de nossos canais de comunicação.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato:
          </p>
          <ul>
            <li>E-mail: suporte@dinblu.com.br</li>
            <li>Telefone: (41) 98850-9971</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Termos e Condições | Dinblu',
  meta: [
    {
      name: 'description',
      content: 'Termos e Condições de uso dos serviços Dinblu - Leia com atenção nossos termos.'
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