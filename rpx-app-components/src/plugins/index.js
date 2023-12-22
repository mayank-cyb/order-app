
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import '@fssd/rpx-app-icons';

export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify)
}