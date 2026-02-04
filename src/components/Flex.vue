<template>
  <component :is="tag" :class="computedClass">
    <slot/>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  tag?: keyof HTMLElementTagNameMap
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div'
})

const computedClass = computed(()=>{

})
</script>