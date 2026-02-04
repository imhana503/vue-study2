export type TextColor =
  | 'primary'
  | 'secondary'
  | 'title'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4'
  | 'white'
  | 'accent'
  | 'error'
  | 'inherit'

/*
TypeScript의 **Record**는 객체의 **키(Key)**와 **값(Value)**의 타입을 간편하게 정의할 때 사용하는 유틸리티 타입입니다.
쉽게 말해, **"이 객체는 어떤 모양이어야 한다"**라고 틀을 짜주는 도구
Record<K, V>의 형태
K (Key): 객체의 키로 사용할 타입 (보통 string이나 유니온 타입)
V (Value): 그 키에 할당될 값의 타입

Record<TextColor, string>
이 선언은 TypeScript에게 다음 두 가지를 강제로 약속하는 것입니다.
키(Key)의 제한: 이 객체의 키는 반드시 TextColor 타입에 정의된 단어들(primary, secondary, body-1 등)이어야만 한다.
값(Value)의 타입: 각 키에 연결된 값은 반드시 string(문자열)이어야 한다.
CSS (@theme): --color-text-primary: #5ddbdb; 라고 실제 색상을 정의합니다.
TS (Tokens): primary: 'text-[var(--color-text-primary)]' 라고 Tailwind 클래스와 연결합니다.
HTML (Component): <p :class="textColorTokens['primary']"> 라고 호출합니다.
*/
export const textColorTokens: Record<TextColor, string> = {
  primary: 'text-[var(--color-text-primary)]',
  secondary: 'text-[var(--color-text-secondary)]',
  title: 'text-[var(--color-text-title)]',
  'body-1': 'text-[var(--color-text-body-1)]',
  'body-2': 'text-[var(--color-text-body-2)]',
  'body-3': 'text-[var(--color-text-body-3)]',
  'body-4': 'text-[var(--color-text-body-4)]',
  white: 'text-[var(--color-text-white)]',
  accent: 'text-[var(--color-accent)]',
  error: 'text-[var(--color-error)]',
  inherit: 'text-inherit',
}
