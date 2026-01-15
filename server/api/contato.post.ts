import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validação básica
    if (!body.nome || !body.email || !body.mensagem) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      }
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return {
        success: false,
        message: 'Por favor, forneça um email válido.'
      }
    }

    // Configurar transporter do nodemailer
    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: parseInt(config.smtpPort),
      secure: config.smtpSecure === 'true',
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      }
    })

    // Preparar conteúdo do email em HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #004aad; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Nova Mensagem de Contato</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #004aad; margin-top: 0;">Informações do Contato</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Nome:</strong>
              <div style="color: #6b7280; margin-top: 5px;">${body.nome}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <div style="color: #6b7280; margin-top: 5px;">
                <a href="mailto:${body.email}" style="color: #004aad;">${body.email}</a>
              </div>
            </div>
            
            ${body.empresa ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #374151;">Empresa:</strong>
                <div style="color: #6b7280; margin-top: 5px;">${body.empresa}</div>
              </div>
            ` : ''}
            
            ${body.solucao ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #374151;">Solução de Interesse:</strong>
                <div style="color: #6b7280; margin-top: 5px;">${body.solucao}</div>
              </div>
            ` : ''}
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #004aad; margin-top: 0;">Mensagem</h2>
            <div style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${body.mensagem}</div>
          </div>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">Enviado através do formulário de contato do site Dinblu</p>
        </div>
      </div>
    `

    // Preparar conteúdo em texto simples
    const textContent = `
Nova mensagem de contato recebida:

Nome: ${body.nome}
Email: ${body.email}
${body.empresa ? `Empresa: ${body.empresa}` : ''}
${body.solucao ? `Solução de Interesse: ${body.solucao}` : ''}

Mensagem:
${body.mensagem}

---
Enviado através do formulário de contato do site Dinblu
    `.trim()

    // Enviar email
    await transporter.sendMail({
      from: '"Dinblu - Formulário de Contato" <dinblucloud@gmail.com>',
      to: 'contato@dinblu.com.br',
      replyTo: body.email,
      subject: `[SITE] Novo contato - ${body.nome}${body.empresa ? ` - ${body.empresa}` : ''}`,
      text: textContent,
      html: htmlContent
    })

    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    }
  } catch (error) {
    console.error('Erro ao processar contato:', error)
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
    }
  }
})
