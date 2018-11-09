
import ResizeElement from './ResizeElement'

// Export components individually
export { ResizeElement }

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component('ResizeElement', ResizeElement)
}

// Export the library as a plugin
export default { install: install }
