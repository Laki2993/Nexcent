// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // Подключение глобальных стилей
  css: [
    '~/assets/scss/mian.scss' // Убедись, что имя файла написано правильно (main или mian)
  ],

  // Настройки для секции <head> документа
  app: {
    head: {
      title: 'Nuxcent ', // Можно задать заголовок по умолчанию
      meta: [
        { name: 'description', content: 'Описание моего сайта' } // Мета-описание
      ],
      link: [
        // Ссылки на шрифты из Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        {
          rel: 'stylesheet',
          // Это самая главная ссылка, которая подгружает все шрифты
          href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Comfortaa:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Knewave&family=Nova+Mono&family=Numans&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap'
        }
        // Если бы ты подключал еще один шрифт через отдельную ссылку, она бы шла здесь же
        // {
        //   rel: 'stylesheet',
        //   href: 'ССЫЛКА_НА_ДРУГОЙ_ШРИФТ'
        // }
      ]
    }
  },
  
  // ... остальные настройки, если они есть
})