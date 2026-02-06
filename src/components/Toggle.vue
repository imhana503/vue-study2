<template>
  <label class="label flex items-center gap-2">
    <Typo
      v-if="props.label && props.labelPosition === 'left'"
      variant="body14-m"
      :color="props.disabled ? 'body-4' : 'title'"
     
      >{{ props.label }}</Typo>

    <div
      class="toggle cursor-pointer"
      :class="[
        props.size === 'md' ? 'toggle-md' : 'toggle-sm',
        {
          'text-white': model,
          'text-base-100': !model,
          'toggle-disabled': props.disabled 
        }
      ]"
    >
      <input
        type="checkbox"
        class="hidden"
        :checked="model"
        :disabled="props.disabled"
        @change="(e)=> (model = (e.target as HTMLInputElement).checked)"       
      />
      <!--
        <input type="checkbox"> 요소에서 발생하는 값의 변화를 감지하여, Vue의 model 변수에 그 상태를 반영하는 이벤트 핸들러
        (e.target as HTMLInputElement)	TypeScript 타입 단언(Type Assertion)**입니다. e.target이 일반적인 요소가 아니라 checked 속성을 가진 HTMLInputElement임을 명시합니다.
      -->
      <svg
        aria-label="disabled"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-primary)"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></svg>
      <svg
        aria-label="disabled"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-primary)"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></svg>
      <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="4"
          fill="none"
          stroke="var(--color-primary)"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </g>
      </svg>
    </div>
    <Typo
      variant="body14-m"
      :color="props.disabled ? 'body-4' : 'title'"
      v-if="props.label && props.labelPosition === 'right'"
      >{{ props.label }}</Typo>
   
  </label>
</template>

<script lang="ts" setup>
import Typo from '@/components/Typo.vue'

defineOptions({ name: 'ToggleComponent' });

interface Props {
  label?: string
  labelPosition?: 'left' | 'right'
  disabled?: boolean
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  labelPosition: 'right',
  disabled: false,
});

const model = defineModel<boolean>();
/*
부모와 자식 컴포넌트 간의 양방향 데이터 바인딩(v-model)을 훨씬 간결하게 만들어주는 매크로.
기능: 부모가 보낸 v-model 값을 내부적으로 감시(watch)하고, 값이 변하면 자동으로 부모에게 업데이트 이벤트를 보냅니다.
타입 정의: <boolean>을 통해 이 모델이 boolean 타입의 값만 가질 것임을 명시합니다.
반환값: ref와 유사한 반응형 객체를 반환합니다. model.value를 통해 값을 읽거나 수정할 수 있습니다.

옵션 활용하기
// 필수값이며, 기본값은 false인 경우
const model = defineModel<boolean>({ required: true, default: false })
// 특정 이름을 가진 v-model을 사용하는 경우 (예: v-model:active)
const active = defineModel<boolean>('active')
*/

</script>

<style lang="scss" scoped>
.toggle {
  background-color: var(--color-gray-300);
  &:checked,
  &[aria-checked='true'],
  &:has(> input:checked) {
    grid-template-columns: 1fr 1fr 0fr;
    background-color: var(--color-primary);
    --input-color: var(--color-base-content);
  }
  &.toggle-disabled {
    background-color: var(--color-gray-200) !important;
    // opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>