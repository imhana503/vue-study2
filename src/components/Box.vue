<template>
  <component :is="as" :class="computedClass">
    <slot/>
  </component>

</template>

<script lang="ts" setup>
import { zIndexMap } from '@/styles/tokens';

console.log(zIndexMap)

defineOptions({ name: 'BoxComponent' })

interface Props {
  as?: keyof HTMLElementTagNameMap;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div'
});

const computedClass = 'aa'
</script>