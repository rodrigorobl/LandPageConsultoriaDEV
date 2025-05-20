
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

// Configurar o transportador de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rodrigo.augusto.r21@gmail.com', // Seu email gmail
    pass: process.env.EMAIL_PASSWORD // Senha de app para seu email (deve ser configurada em Secrets)
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  try {
    const { nome, email, telefone, mensagem } = req.body as FormData;
    
    // Log dos dados recebidos
    console.log('Formulário recebido:', { nome, email, telefone, mensagem });
    
    // Configurar o email
    const mailOptions = {
      from: '"Site TechSolutions" <rodrigo.augusto.r21@gmail.com>',
      to: 'rodrigo.augusto.r21@gmail.com', // Destinatário
      subject: `Nova mensagem de ${nome}`,
      html: `
        <h1>Nova mensagem do formulário de contato</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <h2>Mensagem:</h2>
        <p>${mensagem}</p>
      `
    };

    try {
      // Tentar enviar o email
      await transporter.sendMail(mailOptions);
      
      // Resposta de sucesso
      res.status(200).json({ 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
      res.status(500).json({ 
        success: false, 
        message: 'Não foi possível enviar o email. Por favor, tente novamente mais tarde.'
      });
    }
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
    });
  }
}
