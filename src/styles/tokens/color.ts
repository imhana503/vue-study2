export const colorValues = [
  // white
  'white',
  // base
  'base-100',
  'base-200',
  'base-300',
  'base-content',
  'primary',
  'primary-content',
  'secondary',
  'secondary-content',
  'accent',
  'accent-content',
  'neutral',
  'neutral-content',
  'info',
  'info-content',
  'success',
  'success-content',
  'warning',
  'warning-content',
  'error',
  'error-content',
  // gray
  'gray-50',
  'gray-100',
  'gray-200',
  'gray-300',
  'gray-400',
  'gray-500',
  'gray-600',
  'gray-700',
  'gray-800',
  'gray-900',
  'gray-950',
  // black
  'black',
  // mint
  'mint-50',
  'mint-100',
  'mint-200',
  'mint-300',
  'mint-400',
  'mint-500',
  'mint-600',
  'mint-700',
  'mint-800',
  'mint-900',
  'mint-950',
  // dark
  'dark-100-5',
  'dark-100-10',
  'dark-100-15',
  'dark-100-30',
  'dark-100-50',
  'dark-100-75',
  'dark-100-80',
  // light
  'light-100-50',
  'light-100-60',
  //보더
  'border-1',
  'border-2',
  'border-3',
  'border-4',
  'border-5',
] as const;

//배열의 요소들을 타입으로 변환
export type Color = (typeof colorValues)[number];
/*
(typeof colorValues)[number]: colorValues 배열의 인덱스(number)에 해당하는 모든 값의 타입을 가져오라는 뜻
type Color = "white" | "base-100" | "primary" | ... | "border-5"
*/