// COPIE E COLE ESTE CÓDIGO NO ARQUIVO dinblu-agro.vue
// LOCALIZAÇÃO: Após const modulesRow2 (linha ~844) e antes de useHead

const segmentosAtendidosAgro = [
    'Produtor rural',
    'Fazendas',
    'Cooperativas',
    'Associações',
    'Agronegócio em geral'
]

const segmentosRow1Agro = computed(() => segmentosAtendidosAgro.slice(0, 3))
const segmentosRow2Agro = computed(() => segmentosAtendidosAgro.slice(3))

const muitoMaisAgro = [
    {
        title: 'Gestão da safra',
        description: 'Gestão da safra e das culturas de forma simples e eficiente na palma da mão.',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600',
    },
    {
        title: 'Controle financeiro',
        description: 'Controle as suas contas a pagar e receber, realize orçamentos e conciliação bancária, e emita boletos integrados com o seu banco.',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        title: 'Cadastro de imóvel rural',
        description: 'Cadastre proprietários e imóveis rurais e gerencie tudo com facilidade.',
        bgColor: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
    {
        title: 'Controle de estoque',
        description: 'Por meio de todas as suas entradas e saídas de documentos fiscais, o sistema apura todo o seu estoque de forma simples e inteligente.',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
    {
        title: 'Controle de vendas',
        description: 'Descomplique sua venda e emita documentos fiscais em um clique de forma inteligente para os seus clientes.',
        bgColor: 'bg-cyan-50',
        iconColor: 'text-cyan-600',
    },
    {
        title: 'Gestão inteligente',
        description: 'Aprimore sua gestão com uma dashboard interativa que conta com gráficos e relatórios fáceis de interpretar.',
        bgColor: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
    },
    {
        title: 'Controle de produção',
        description: 'Gestão da entrada da matéria-prima até a transformação do produto acabado.',
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-600',
    },
    {
        title: 'Emissão de etiquetas',
        description: 'Emita etiquetas personalizadas com preço, códigos e dados variados.',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-600',
    },
    {
        title: 'Agro Fiscal',
        description: 'Ideal para cooperativas. Você cadastra vários produtores rurais e emite notas fiscais independentes de forma simples e com total controle das emissões.',
        bgColor: 'bg-teal-50',
        iconColor: 'text-teal-600',
    }
]
