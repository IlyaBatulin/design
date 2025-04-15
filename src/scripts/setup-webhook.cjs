const fetch = require('node-fetch');

const TELEGRAM_BOT_TOKEN = '8090554221:AAG1PBF1732VNtmoRVarJ2jl0RMgC_DGkUk';
const DOMAIN = 'asinteriordesignstudio.ru';
const WEBHOOK_URL = `https://${DOMAIN}/api/telegram-webhook`;

async function setWebhook() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: WEBHOOK_URL,
      }),
    });

    const data = await response.json();
    console.log('Webhook setup result:', data);
    
    if (data.ok) {
      console.log('✅ Webhook успешно установлен!');
      console.log(`🌐 URL: ${WEBHOOK_URL}`);
    } else {
      console.error('❌ Ошибка при установке webhook:', data.description);
    }
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  }
}

setWebhook(); 