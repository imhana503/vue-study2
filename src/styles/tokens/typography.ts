export const typography = {
  display1: 'text-4xl font-bold leading-[1.4]',
  display2: 'text-3xl font-bold leading-[1.4]',
  title24: 'text-2xl font-bold leading-[1.4]',
  title20: 'text-xl font-bold leading-[1.4]',
  'title18-b': 'text-lg font-bold leading-[1.4]',
  'title18-m': 'text-lg font-medium leading-[1.4]',
  'title16-b': 'text-md font-bold leading-[1.4]',
  'title16-m': 'text-md font-medium leading-[1.4]',
  'body16-m': 'text-md font-medium leading-[1.5]',
  'body16-r': 'text-md font-normal leading-[1.5]',
  'body15-m': 'font-smd font-medium leading-[1.5]',
  'body15-r': 'font-smd font-normal leading-[1.5]',
  'body14-m': 'text-sm font-medium leading-[1.5]',
  'body14-r': 'text-sm font-normal leading-[1.5]',
  'body13-m': 'text-xs font-medium leading-[1.5]',
  'body13-r': 'text-xs font-normal leading-[1.5]',
  caption1: 'font-xxs font-normal leading-[1.4]',
  caption2: 'font-xxs font-normal leading-[1.4]',
  'link-m': 'text-md font-medium leading-[1.25]',
}  as const;
/*
as const: 이 객체의 값들이 절대 변하지 않는 상수임을 TypeScript에 알립니다.
이걸 붙여야 나중에 TypographyVariant 타입을 아주 정확하게 추출할 수 있습니다.
*/


export type TypographyVariant = keyof typeof typography
/*
이 코드는 TypeScript의 아주 유용한 기능들을 조합해서 **"객체의 키값들을 그대로 타입으로 옮겨와줘"**라고 명령하는 자동화 코드입니다.
쉽게 말해, typography 객체에 정의된 이름들(display1, title24 등)을 일일이 손으로 타이핑해서 타입을 만들지 않고, 원본 객체에서 실시간으로 추출해내는 방식


typeof typography:
자바스크립트의 typography 객체를 가져와서, TypeScript가 이해할 수 있는 타입 형태로 변환합니다.
결과: { display1: string; title24: string; ... } 같은 구조가 됩니다.

keyof:
앞서 만든 타입 구조에서 키(Key) 이름들만 쏙 뽑아냅니다.
결과: "display1" | "display2" | "title24" | ... (유니온 타입)

*/