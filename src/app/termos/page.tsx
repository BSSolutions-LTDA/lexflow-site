import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LexiFlow | Termos de Uso',
  description: 'Termos de Uso do LexiFlow - Plataforma de aprendizado de idiomas via WhatsApp, Telegram e Discord.',
  keywords: 'termos de uso, condições de serviço, lexiflow, aprendizado de idiomas',
  openGraph: {
    title: 'Termos de Uso | LexiFlow',
    description: 'Termos de Uso do LexiFlow - Plataforma de aprendizado de idiomas via WhatsApp, Telegram e Discord.',
    url: 'https://lexiflow.app/termos',
    siteName: 'LexiFlow',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function TermsOfService() {
  return (
    <main className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Última atualização: 06 de Abril de 2025</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Bem-vindo ao LexiFlow. Ao acessar ou usar nosso site, aplicativo e serviços de aprendizado de idiomas via WhatsApp, Telegram e Discord (coletivamente, os "Serviços"), você concorda em ficar vinculado a estes Termos de Uso ("Termos"). Se você não concordar com estes Termos, por favor, não use nossos Serviços.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrição dos Serviços</h2>
          <p>
            O LexiFlow é uma plataforma de aprendizado de idiomas que utiliza sistema de repetição espaçada através de aplicativos de mensagens populares. Nossos Serviços incluem:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Envio de palavras e frases para aprendizado via WhatsApp, Telegram e Discord</li>
            <li>Sistema de repetição espaçada adaptativo</li>
            <li>Personalização de conteúdo por inteligência artificial</li>
            <li>Gamificação do processo de aprendizado</li>
            <li>Dashboard web para visualização de progresso e estatísticas</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Registro e Conta</h2>
          <p>
            Para utilizar nossos Serviços, você precisa criar uma conta no LexiFlow. Você concorda em fornecer informações precisas, atuais e completas durante o processo de registro e em atualizar essas informações para mantê-las precisas e atualizadas.
          </p>
          <p>
            Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta. Você concorda em notificar imediatamente o LexiFlow sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Planos e Pagamentos</h2>
          <p>
            O LexiFlow oferece diferentes planos de assinatura, incluindo um plano gratuito com recursos limitados. Para os planos pagos, você concorda em pagar todas as taxas aplicáveis conforme descrito no site no momento da compra.
          </p>
          <p>
            As assinaturas são renovadas automaticamente, a menos que você cancele antes do próximo ciclo de faturamento. Você pode cancelar sua assinatura a qualquer momento através do seu painel de controle.
          </p>
          <p>
            Nos reservamos o direito de alterar nossos preços mediante aviso prévio. Se você não concordar com uma alteração de preço, poderá cancelar sua assinatura antes que a alteração entre em vigor.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Uso Aceitável</h2>
          <p>
            Ao usar nossos Serviços, você concorda em não:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violar quaisquer leis ou regulamentos aplicáveis</li>
            <li>Infringir direitos de propriedade intelectual ou outros direitos de terceiros</li>
            <li>Enviar ou transmitir conteúdo ofensivo, abusivo, difamatório ou ilegal</li>
            <li>Tentar acessar áreas restritas dos Serviços sem autorização</li>
            <li>Usar os Serviços para enviar spam ou mensagens não solicitadas</li>
            <li>Interferir ou interromper a integridade ou o desempenho dos Serviços</li>
            <li>Tentar descompilar, fazer engenharia reversa ou desmontar qualquer parte dos Serviços</li>
            <li>Criar contas múltiplas para abusar de ofertas promocionais ou contornar limites</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Propriedade Intelectual</h2>
          <p>
            Todos os direitos, títulos e interesses nos Serviços, incluindo todo o conteúdo, design, texto, gráficos, interfaces, código, software e outros materiais são de propriedade exclusiva do LexiFlow ou de nossos licenciadores.
          </p>
          <p>
            Concedemos a você uma licença limitada, não exclusiva, não transferível e revogável para usar os Serviços para fins pessoais e não comerciais, sujeita a estes Termos.
          </p>
          <p>
            O conteúdo educacional fornecido através dos Serviços é para seu uso pessoal. Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material de nossos Serviços, exceto conforme permitido por estes Termos.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Conteúdo do Usuário</h2>
          <p>
            Você pode ter a opção de enviar conteúdo para os Serviços, como respostas a exercícios, comentários ou feedback ("Conteúdo do Usuário"). Ao enviar Conteúdo do Usuário, você concede ao LexiFlow uma licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, distribuir, preparar trabalhos derivados, exibir e executar o Conteúdo do Usuário em conexão com os Serviços.
          </p>
          <p>
            Você é o único responsável por seu Conteúdo do Usuário e pelas consequências de compartilhá-lo através dos Serviços. Você declara e garante que tem todos os direitos necessários para conceder as licenças acima e que seu Conteúdo do Usuário não viola direitos de terceiros ou quaisquer leis aplicáveis.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Privacidade</h2>
          <p>
            Nosso uso de suas informações pessoais é regido por nossa <Link href="/privacidade" className="text-blue-600 hover:underline">Política de Privacidade</Link>, que está incorporada a estes Termos por referência.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Isenção de Garantias</h2>
          <p>
            OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. O LEXIFLOW EXPRESSAMENTE SE ISENTA DE TODAS AS GARANTIAS DE QUALQUER TIPO, SEJAM EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO.
          </p>
          <p>
            O LEXIFLOW NÃO GARANTE QUE OS SERVIÇOS ATENDERÃO SEUS REQUISITOS, QUE OS SERVIÇOS SERÃO ININTERRUPTOS, OPORTUNOS, SEGUROS OU LIVRES DE ERROS, OU QUE OS RESULTADOS QUE PODEM SER OBTIDOS DO USO DOS SERVIÇOS SERÃO PRECISOS OU CONFIÁVEIS.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitação de Responsabilidade</h2>
          <p>
            EM NENHUMA CIRCUNSTÂNCIA O LEXIFLOW, SEUS DIRETORES, FUNCIONÁRIOS, PARCEIROS OU AGENTES SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, DADOS, USO, BOA VONTADE OU OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DE (i) SEU ACESSO OU USO OU INCAPACIDADE DE ACESSAR OU USAR OS SERVIÇOS; (ii) QUALQUER CONDUTA OU CONTEÚDO DE TERCEIROS NOS SERVIÇOS; (iii) QUALQUER CONTEÚDO OBTIDO DOS SERVIÇOS; E (iv) ACESSO NÃO AUTORIZADO, USO OU ALTERAÇÃO DE SUAS TRANSMISSÕES OU CONTEÚDO.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Indenização</h2>
          <p>
            Você concorda em defender, indenizar e isentar o LexiFlow, seus diretores, funcionários e agentes de e contra quaisquer reivindicações, responsabilidades, danos, perdas e despesas, incluindo, sem limitação, honorários advocatícios razoáveis, decorrentes de ou de qualquer forma relacionados com seu acesso ou uso dos Serviços, seu Conteúdo do Usuário, ou sua violação destes Termos.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">12. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito, a nosso critério exclusivo, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso critério exclusivo.
          </p>
          <p>
            Ao continuar a acessar ou usar nossos Serviços após essas revisões se tornarem efetivas, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, por favor, pare de usar os Serviços.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">13. Lei Aplicável</h2>
          <p>
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições de conflito de leis.
          </p>
          <p>
            Qualquer disputa, controvérsia ou reivindicação decorrente ou relacionada a estes Termos será resolvida por arbitragem de acordo com as regras do Centro de Arbitragem e Mediação da Câmara de Comércio Brasil-Canadá.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">14. Disposições Gerais</h2>
          <p>
            Estes Termos constituem o acordo integral entre você e o LexiFlow em relação aos nossos Serviços e substituem quaisquer acordos anteriores entre você e o LexiFlow.
          </p>
          <p>
            Se qualquer disposição destes Termos for considerada inválida ou inexequível, essa disposição será limitada ou eliminada na extensão mínima necessária, e as disposições restantes destes Termos permanecerão em pleno vigor e efeito.
          </p>
          <p>
            Nossa falha em fazer valer qualquer direito ou disposição destes Termos não será considerada uma renúncia a tais direitos. A renúncia a qualquer direito ou disposição só será efetiva se for por escrito e assinada por um representante autorizado do LexiFlow.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">15. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos, entre em contato conosco:
          </p>
          <p>
            <strong>E-mail:</strong> <a href="mailto:termos@lexiflow.app" className="text-blue-600 hover:underline">termos@lexiflow.app</a><br />
            <strong>Endereço:</strong> Av. Paulista, 1000, São Paulo - SP, 01310-100, Brasil
          </p>
        </div>
        
        <div className="mt-12">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  )
}
