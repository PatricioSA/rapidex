import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import twilio from 'twilio';

const app = express();
const port = 3333;

app.use(cors())
dotenv.config()

// Configurando o body-parser para lidar com solicitações POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando as credenciais do Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/api/enviar-mensagem', async (req: Request, res: Response) => {

    const { name, address, phoneNumber, orderDetails, paymentMethod, observations } = req.body;

    const mensagem = `Novo pedido!\n\nNome: ${name}\nEndereço: ${address}\nTelefone: ${phoneNumber}\nDetalhes do Pedido: ${orderDetails}\nMétodo de pagamento: ${paymentMethod}\nObservações: ${observations}`;

    client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+553288158597',
        body: mensagem
    })
    .then(message => {
        console.log('Mensagem enviada com sucesso:', message.sid);
        res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    })
    .catch(error => {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).json({ success: false, error: 'Erro ao enviar mensagem' });
    });
});

app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});