export type Round = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export const roundMap: Record<Round, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
}

export const createRoundSideMap = (size: Round) => ({
  top: size === 'none' ? undefined : `rounded-t-${size}`,
  bottom: size === 'none' ? undefined : `rounded-b-${size}`,
  left: size === 'none' ? undefined : `rounded-l-${size}`,
  right: size === 'none' ? undefined : `rounded-r-${size}`,
});

export const roundSideMap: Record<Round, {top?: string; bottom?: string; left?: string; right?: string}> = {
  none: {},
  sm: createRoundSideMap('sm'),
  md: createRoundSideMap('md'),
  lg: createRoundSideMap('lg'),
  xl: createRoundSideMap('xl'),
  '2xl': createRoundSideMap('2xl'),
  full: createRoundSideMap('full'),
} 