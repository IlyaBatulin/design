import { TELEGRAM_BOT_TOKEN } from '../config/telegram';

export const handleBotCommand = async (command: string, chatId: string) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  let message = '';
  
  switch (command) {
    case '/start':
      message = `👋 Добро пожаловать в бот A.S Interior Design Studio!

🏠 Этот бот создан для обработки заявок с сайта asinteriordesignstudio.ru

📝 Здесь вы будете получать уведомления о новых заявках от клиентов.

❓ Используйте команду /help для получения справки.`;
      break;
      
    case '/help':
      message = `📌 Доступные команды:

/start - Начать работу с ботом
/help - Показать это сообщение

💡 Бот автоматически присылает уведомления о новых заявках с сайта в следующем формате:

🎯 Новая заявка с сайта!
👤 Имя: [имя клиента]
📧 Email: [email клиента]
📱 Телефон: [телефон клиента]
💬 Сообщение: [текст сообщения]`;
      break;
      
    default:
      return;
  }
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send command response');
    }

    return true;
  } catch (error) {
    console.error('Error sending command response:', error);
    throw error;
  }
}; 