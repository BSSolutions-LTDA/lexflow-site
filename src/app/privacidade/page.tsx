import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LexiFlow | Política de Privacidade',
  description: 'Política de Privacidade do LexiFlow - Plataforma de aprendizado de idiomas via WhatsApp, Telegram e Discord.',
  keywords: 'política de privacidade, termos de uso, lexiflow, aprendizado de idiomas',
  openGraph: {
    title: 'Política de Privacidade | LexiFlow',
    description: 'Política de Privacidade do LexiFlow - Plataforma de aprendizado de idiomas via WhatsApp, Telegram e Discord.',
    url: 'https://lexiflow.app/privacidade',
    siteName: 'LexiFlow',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Última atualização: 06 de Abril de 2025</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
          <p>
            A LexiFlow ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso site, aplicativo e serviços de aprendizado de idiomas via WhatsApp, Telegram e Discord (coletivamente, os "Serviços").
          </p>
          <p>
            Ao utilizar nossos Serviços, você concorda com a coleta e uso de informações de acordo com esta política. Recomendamos que você leia este documento cuidadosamente para entender nossas práticas em relação aos seus dados pessoais.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Informações que Coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <h3 className="text-xl font-bold mt-6 mb-3">2.1 Informações Pessoais</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone (para integração com WhatsApp)</li>
            <li>Nome de usuário (para integração com Telegram e Discord)</li>
            <li>Informações de pagamento (para assinaturas premium)</li>
            <li>Idioma nativo e idiomas que deseja aprender</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-6 mb-3">2.2 Dados de Uso</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Progresso de aprendizado e desempenho</li>
            <li>Padrões de estudo e interação com o sistema</li>
            <li>Frequência e duração das sessões de estudo</li>
            <li>Respostas às perguntas e exercícios</li>
            <li>Preferências de conteúdo e dificuldade</li>
          </ul>
          
          <h3 className="text-xl font-bold mt-6 mb-3">2.3 Dados Técnicos</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Endereço IP</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Sistema operacional</li>
            <li>Cookies e tecnologias similares</li>
            <li>Dados de localização aproximada</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Como Usamos Suas Informações</h2>
          <p>Utilizamos as informações coletadas para:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fornecer, manter e melhorar nossos Serviços</li>
            <li>Personalizar sua experiência de aprendizado</li>
            <li>Adaptar o conteúdo educacional ao seu nível e progresso</li>
            <li>Processar pagamentos e gerenciar sua conta</li>
            <li>Enviar notificações relacionadas ao serviço</li>
            <li>Comunicar atualizações, ofertas e informações relevantes</li>
            <li>Analisar tendências de uso e melhorar nossos algoritmos</li>
            <li>Detectar e prevenir fraudes e abusos</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartilhamento de Informações</h2>
          <p>Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Provedores de Serviços:</strong> Compartilhamos dados com terceiros que nos auxiliam na operação dos Serviços, como processadores de pagamento, serviços de hospedagem e análise.</li>
            <li><strong>Parceiros de Plataforma:</strong> Para integração com WhatsApp, Telegram e Discord, compartilhamos informações necessárias para o funcionamento do serviço.</li>
            <li><strong>Requisitos Legais:</strong> Podemos divulgar suas informações quando exigido por lei ou em resposta a processos legais válidos.</li>
            <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, bem como de nossos usuários ou do público.</li>
            <li><strong>Transações Comerciais:</strong> Em caso de fusão, aquisição ou venda de ativos, seus dados podem ser transferidos como parte dos ativos comerciais.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Segurança de Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Seus Direitos</h2>
          <p>Dependendo da sua localização, você pode ter os seguintes direitos:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Acessar e receber uma cópia de seus dados pessoais</li>
            <li>Retificar dados imprecisos ou incompletos</li>
            <li>Solicitar a exclusão de seus dados pessoais</li>
            <li>Restringir ou opor-se ao processamento de seus dados</li>
            <li>Portabilidade de dados para outro serviço</li>
            <li>Retirar seu consentimento a qualquer momento</li>
          </ul>
          <p>
            Para exercer esses direitos, entre em contato conosco através do e-mail: <a href="mailto:privacidade@lexiflow.app" className="text-blue-600 hover:underline">privacidade@lexiflow.app</a>
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Retenção de Dados</h2>
          <p>
            Mantemos suas informações pessoais pelo tempo necessário para fornecer os Serviços e cumprir as finalidades descritas nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Crianças</h2>
          <p>
            Nossos Serviços não são direcionados a menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Alterações nesta Política</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização". Recomendamos que você revise esta política regularmente para estar ciente de quaisquer mudanças.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contato</h2>
          <p>
            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco:
          </p>
          <p>
            <strong>E-mail:</strong> <a href="mailto:privacidade@lexiflow.app" className="text-blue-600 hover:underline">privacidade@lexiflow.app</a><br />
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
