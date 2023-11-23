import './assets/main.css'
import { createI18n } from 'vue-i18n'
import messages from './localizations/localizations'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@fssd/rpx-app-icons';

;(async () => {
  const app = createApp(App)
  const uiLanguage = 'en' //Get Value from config  await lsxConfig.get('uiLanguage')
  const i18n = createI18n({
    locale: uiLanguage, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: messages.messages // set locale messages
  })
  app.use(i18n)
  app.use(router)
  app.use(vuetify)
  window.i18n = i18n
  app.mount('#app')
})()
