import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../config/telegram';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendToTelegram = async (data: FormData) => {
  const text = `
🎯 Новая заявка с сайта!

👤 Имя: ${data.name}
📧 Email: ${data.email}
📱 Телефон: ${data.phone}
💬 Сообщение: ${data.message}
  `.trim();

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
}; 