<template>
  <div
    class="extendable"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      v-show="shouldShow"
      ref="resizer"
      class="resizer"
    />
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ResizeElement',

  props: {
    active: {
      type: Boolean,
      default: true
    },

    left: {
      type: Boolean,
      default: false
    },

    top: {
      type: Boolean,
      default: false
    },

    right: {
      type: Boolean,
      default: false
    },

    bottom: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      hovering: false,
      clicking: false
    }
  },

  computed: {
    shouldShow() {
      return this.active && (this.hovering || this.clicking)
    }
  },

  watch: {
    active(isActive) {
      if (isActive) {
        this.initComponent()
      }
    }
  },

  mounted() {
    if (!this.active) {
      return
    }

    this.initComponent()
  },

  methods: {
    initComponent() {
      this.$refs.resizer.addEventListener('mousedown', this.initResize, false)
    },

    initResize() {
      window.addEventListener('mousemove', this.resize, false)
      window.addEventListener('mouseup', this.stopResize, false)
    },

    resize(e) {
      this.clicking = true
      const { x } = this.$refs.resizer.getBoundingClientRect()
      const width = e.clientX - x
      this.$refs.resizer.style.opacity = 0.1
      this.$refs.resizer.style.width = `${width}px`
    },

    stopResize(e) {
      this.$refs.resizer.style.opacity = 1
      this.$refs.resizer.style.width = '2px'
      this.$emit('dropped', e)
      window.removeEventListener('mousemove', this.resize, false)
      window.removeEventListener('mouseup', this.stopResize, false)
      this.clicking = false
    }
  }
}
</script>
<style scoped>
.extendable {
  position: relative;
  display: flex;
}
.resizer {
  position: absolute;
  left: 14px;
  z-index: 2;
  width: 2px;
  height: 100%;
  cursor: col-resize;
  background: black;
}
</style>
