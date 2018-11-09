import Vue from 'vue'
import App from './App'

if (process.env.VUE_APP_E2E) {
  if (window.__e2e_lib) {
    Vue.use(require('vue-resize-element').default)
  } else if (window.__e2e_components) {
    Vue.component(
      'ResizeElement',
      require('vue-resize-element/dist/ResizeElement')
    )
  } else if (window.__e2e_src_lib) {
    Vue.use(require('vue-resize-element/src').default)
  } else if (window.__e2e_src_components) {
    Vue.component(
      'ResizeElement',
      require('vue-resize-element/src/ResizeElement').default
    )
  }
} else {
  // Install the plugin directly from src in development
  Vue.use(require('../../../../src').default)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
