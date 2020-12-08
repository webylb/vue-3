<template>
  <button class="el-button" :class="[size ? `el-button--${size}` : '']">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(val: string) {
        if (!val) return true
        return ['medium', 'small', 'mini'].includes(val)
      }
    }
  },
  setup(props) {
    return {}
  }
})
</script>
