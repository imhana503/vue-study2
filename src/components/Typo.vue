<template>
  <component :is="tag" :class="computedClass">
    <slot/>
  </component>
  
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import clsx from 'clsx' 
import { twMerge } from 'tailwind-merge' 
import { textAlignMap, typography, textColorTokens, type TypographyVariant, TextColor, TextAlign } from '@/styles/tokens'


defineOptions({ name: 'TypographyComponent' })


/**
  *동적 클래스 매핑 객체 (Tailwind Safe List 역할)
*/
const MULTI_ELLIPSIS_MAP = {
  2: 'line-clamp-2',
  3: 'line-clamp-3',
} as const;

const BULLET_BASE = 'relative before:absolute before:top-1/2 before:left-0 before:block before:translate-y-[-1px] before:bg-current  pl-4';

const BULLET_MAP = {
  dot: `${BULLET_BASE} before:w-[3px] before:h-[3px] before:rounded-full`,
  dash: `${BULLET_BASE} before:w-[5px] before:h-[1px]`,
  none: ''
}

/**
 *Props 정의
*/
interface Props {
  tag?: keyof HTMLElementTagNameMap;
  underline?: boolean;
  centerline?: boolean;
  ellipsis?: boolean;
  multiEllipsis?: keyof typeof MULTI_ELLIPSIS_MAP;
  bullet?: keyof typeof BULLET_MAP;
  color?: TextColor;
  variant?: TypographyVariant;
  class?: string; // 부모로부터 전달받는 커스텀 클래스
  align?: TextAlign;
  bold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  underline: false,
  centerline: false,
  ellipsis: false,
  multiEllipsis: undefined,
  bullet: 'none',
  color: 'title',
  variant: 'body16-m',
  class: '',
});



const computedClass = computed(() => {
  return twMerge(
    clsx(
      // 기본 타이포그래피 및 색상 (순서상 기본 스타일을 먼저 배치)
      typography[props.variant],
      textColorTokens[props.color],
      props.align && textAlignMap[props.align],
      props.bold && 'font-bold',

      // 장식성 스타일
      BULLET_MAP[props.bullet],
      props.underline && 'relative w-fit before:absolute before:-bottom-2 before:border-b before:border-b-current before:w-full before:left-0',
      props.centerline && 'line-through',

      // 텍스트 생략 관련
      props.ellipsis && 'truncate',
      props.multiEllipsis && MULTI_ELLIPSIS_MAP[props.multiEllipsis],

      // 외부 주입 클래스 (가장 마지막에 두어 우선순위 확보)
      props.class,
    )
  )
})

/* 
clsx
클래스를 조건부로 붙일 때
원래 자바스크립트에서 조건부 클래스를 붙이려면 props.bold ? 'font-bold' : '' 처럼 삼항 연산자를 복잡하게 써야 합니다. clsx는 이걸 깔끔하게 해결해줍니다. 
특징: false, null, undefined 같은 값들은 알아서 무시하고 실제 문자열만 합쳐줍니다.

twMerge
중복된 Tailwind 클래스를 정리할 때 사용
중복되거나 충돌하는 Tailwind 클래스를 마지막에 들어온 놈 기준으로 정리
이게 진짜 핵심입니다. Tailwind는 클래스 우선순위가 "선언 순서"가 아니라 "CSS 파일 내 정의 순서"를 따르기 때문에, 단순히 문자열만 합치면 예상치 못한 스타일이 적용될 수 있습니다.
class="text-red-500 text-blue-500" 이라고 쓰면, 뒤에 쓴 파란색이 나올 것 같지만 실제로는 CSS 파일 상에서 아래에 있는 색상이 나옵니다.

이 조합은 **"조건부로 클래스를 다 모은 뒤(clsx), 마지막에 중복된 놈들을 쳐내서 정리(twMerge)한다"**는 완벽한 공식을 만듭니다.
*/
</script>