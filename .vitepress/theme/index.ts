import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { setupLightbox } from './lightbox'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    setupLightbox()
  },
}
