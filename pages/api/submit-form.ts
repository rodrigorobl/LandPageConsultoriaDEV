
import type { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  try {
    const { nome, email, telefone, mensagem } = req.body as FormData;
    
    // Aqui você pode implementar a lógica para enviar o email
    // usando serviços como SendGrid, Mailgun, AWS SES, etc.
    
    // Simulando processamento
    console.log('Formulário recebido:', { nome, email, telefone, mensagem });
    
    // Resposta de sucesso
    res.status(200).json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
    });
  }
}
