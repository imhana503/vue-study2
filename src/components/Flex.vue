<template>
  <component :is="as" :class="computedClass">
    <slot/>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import clsx from 'clsx' 
import { twMerge } from 'tailwind-merge';
import { flexDirectionMap, justifyMap, alignMap, type FlexDirection, justify, Align  } from '@/styles/tokens';
import { useBaseBoxClass } from '@/styles/composables/useBaseBoxClass'

interface Props {
  as?: keyof HTMLElementTagNameMap;
  flex?: boolean;
  inline?: boolean;
  wrap?: boolean;
  direction?: FlexDirection;
  justify?: justify;
  align?: Align;
}



const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  flex: false,
  inline: false,
  wrap: true,
  direction: 'row',  
  justify: 'start',
  align: 'stretch',
});

const baseBoxProps = useBaseBoxClass(props);

const computedClass = computed(()=>{
  return twMerge(
    clsx(
      props.inline ? 'inline-flex' : 'flex',
      props.wrap && 'flex-wrap',
      props.flex && 'flex-1',
      flexDirectionMap[props.direction],
      justifyMap[props.justify],
      alignMap[props.align],
      baseBoxProps.value,
      'bbbbbb'
    )
  )
})
</script>