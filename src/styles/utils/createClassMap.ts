//입력값의 형태(배열 혹은 객체)에 따라 서로 다른 결과물을 만들어내는 아주 유연한 유틸리티 함수

// 배열 시그니처
export function createClassMap<T extends string | number>(
  values: readonly T[],
  prefix: string,
): Record<T, string>

// 객체 시그니처
export function createClassMap<T extends string | number>(
  values: Record<T, string>,
  prefix: string,
): Record<T, string>

// 구현체
export function createClassMap<T extends string | number>(
  values: readonly T[] | Record<T, string>,
  prefix: string,
): Record<T, string> {
  if (Array.isArray(values)) {
    // 배열일 때: 값 자체가 key가 됨
    return Object.fromEntries(values.map((v) => [v, `${prefix}-${v}`])) as Record<T, string>
  } else {
    // 객체일 때: key와 value를 조합
    return Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, `${prefix}-[${v}]`]),
    ) as Record<T, string>
  }
}
