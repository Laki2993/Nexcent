import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('Body:', body);
  const { name, email, phone } = body; 

  const token = '8133341671:AAEZeshxTeoy3Bfww589BO8xrHjoIVEycVM'; 
  const chatId = '-1002572536580'; 

  const message = `Новая заявка:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('Ошибка отправки в Telegram:', data);
      throw new Error('Ошибка отправки сообщения в Telegram');
    }

    return { success: true, message: 'Сообщение успешно отправлено в Telegram!' };
  } catch (error) {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка сервера',
      message: 'Не удалось отправить сообщение в Telegram',
    });
  }
});