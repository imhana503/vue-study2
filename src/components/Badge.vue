<template>
  <span :class="computedClass" :variant>{{ label }}</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import clsx from 'clsx' 
import { twMerge } from 'tailwind-merge';
import { componentSizeClassMap } from '@/styles/tokens/components'
import type { ComponentSizes } from  '@/styles/types/common';

defineOptions({ name: 'BadgeComponent' })

const badgeTypes = [
  'positive', 'negative', 'complete', 'progress', 
  'expiration', 'tag', 'emphasis1', 'emphasis2', 'emphasis3'
] as const;

type BadgeTypes = typeof badgeTypes[number];

interface BadgeProps {
  class?: string;
  label?: string;
  variant?: BadgeTypes;
  size?: ComponentSizes;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'positive',
  size: 'md',
});

const badgeTypeClassMap: Record<BadgeTypes, string>={
  positive: 'badge-positive',
  negative: 'badge-negative',
  complete: 'badge-complete',
  progress: 'badge-progress',
  expiration: 'badge-expiration',
  tag: 'badge-tag',
  emphasis1: 'badge-emphasis1',
  emphasis2: 'badge-emphasis2',
  emphasis3: 'badge-emphasis3',
}

const sizeMap = componentSizeClassMap('badge');

const computedClass = computed(()=> {
  return twMerge(
    clsx(
      'badge',
      badgeTypeClassMap[props.variant],
      sizeMap[props.size],
      props.class,
    )
  )
})
</script>

<style lang="scss" scoped>
// 1. 변수 맵 정의 (데이터와 스타일 분리)
$badge-variants: (
  "positive":   (#eaf2ff, var(--color-info)),
  "negative":   (#feeced, var(--color-error)),
  "complete":   (var(--color-gray-500), var(--color-text-white)),
  "progress":   (var(--color-mint-50), var(--color-primary)),
  "expiration": (var(--color-base-300), var(--color-text-body-1)),
  "tag":        (var(--color-base-300), var(--color-text-body-1)),
  "emphasis1":  (var(--color-secondary), var(--color-text-white)),
  "emphasis2":  (var(--color-accent), var(--color-accent-content)),
  "emphasis3":  (var(--color-mint-700), var(--color-accent-content)),
);

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  white-space: nowrap;

  // 2. 반복문을 통한 클래스 자동 생성
  @each $name, $colors in $badge-variants {
    &-#{$name} {
      background-color: nth($colors, 1);
      color: nth($colors, 2);
    }
  }
}
</style>