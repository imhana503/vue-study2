export type SizeTypeKey = 'px' | 'full' | 'half' | 'screen' | 'min' | 'max' | 'fit' | 'auto'

export const widthMap: Record<SizeTypeKey, string> = {
  px: 'w-px',
  full: 'w-full',
  half: 'w-1/2',
  screen: 'w-screen',
  min: 'w-min',
  max: 'w-max',
  fit: 'w-fit',
  auto: 'w-auto',
}

export const heightMap: Record<SizeTypeKey, string> = {
  px: 'h-px',
  full: 'h-full',
  half: 'h-1/2',
  screen: 'h-screen',
  min: 'h-min',
  max: 'h-max',
  fit: 'h-fit',
  auto: 'h-auto',
}