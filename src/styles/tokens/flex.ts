export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type FlexDirection =  'row' | 'row-reverse' | 'col' | 'col-reverse';
export type justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline'

export const textAlignMap: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

export const flexDirectionMap: Record<FlexDirection, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
}

export const justifyMap: Record<justify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

export const alignMap: Record<Align, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}