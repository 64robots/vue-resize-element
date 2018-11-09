# Vue Resize Element

> A Wrapper that allows resize to the element passed as slot

## Usage

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install the component:

```html
<div id="app"><resize-element>My Element</resize-element></div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-resize-element"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system (without Vue CLI)

Install the library with NPM:

```bash
npm install vue-resize-element
```

Then register the library as a plugin to globally install the component:

```js
import ResizeEmelent from 'vue-resize-element'

Vue.use(ResizeEmelent)
```

Or, import the component individually for local registration:

```js
import { ResizeEmelent } from 'vue-resize-element'

export default {
  components: { ResizeEmelent }
}
```

### In a module system (with Vue CLI)

> If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import the library from its `src` directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.

Install the library with NPM:

```bash
npm install vue-resize-element
```

Then register the library as a plugin to globally install all components:

```js
import ResizeEmelent from 'vue-resize-element/src'

Vue.use(ResizeEmelent)
```

Or, import components individually for local registration:

```js
import { ResizeEmelent } from 'vue-resize-element/src'

export default {
  components: { ResizeEmelent }
}
```
