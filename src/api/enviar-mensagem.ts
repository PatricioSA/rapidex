import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const { name, address, phoneNumber, orderDetails, paymentMethod, observations } = req.body;

    const mensagem = `Novo pedido!\n\nNome: ${name}\nEndereço: ${address}\nTelefone: ${phoneNumber}\nDetalhes do Pedido: ${orderDetails}\nMétodo de pagamento: ${paymentMethod}\nObservações: ${observations}`;

    try {
        const message = await client.messages.create({
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+553288158597',
            body: mensagem
        });
        console.log('Mensagem enviada com sucesso:', message.sid);
        res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).json({ success: false, error: 'Erro ao enviar mensagem' });
    }
}