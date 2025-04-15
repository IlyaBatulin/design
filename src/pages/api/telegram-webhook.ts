import { NextApiRequest, NextApiResponse } from 'next';
import { TELEGRAM_BOT_TOKEN } from '../../config/telegram';

const sendTelegramMessage = async (chatId: string, text: string) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ message: 'No message in request body' });
    }

    const chatId = message.chat.id;
    
    if (message.text === '/start') {
      await sendTelegramMessage(
        chatId,
        `👋 Добро пожаловать в бот A.S Interior Design Studio!

🏠 Этот бот создан для обработки заявок с сайта asinteriordesignstudio.ru

📝 Здесь вы будете получать уведомления о новых заявках от клиентов.

❓ Используйте команду /help для получения справки.`
      );
    } else if (message.text === '/help') {
      await sendTelegramMessage(
        chatId,
        `📌 Доступные команды:

/start - Начать работу с ботом
/help - Показать это сообщение

💡 Бот автоматически присылает уведомления о новых заявках с сайта в следующем формате:

🎯 Новая заявка с сайта!
👤 Имя: [имя клиента]
📧 Email: [email клиента]
📱 Телефон: [телефон клиента]
💬 Сообщение: [текст сообщения]`
      );
    }

    res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ message: 'Error processing webhook' });
  }
} 