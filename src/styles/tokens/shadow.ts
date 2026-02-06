export type Shasow = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export const shadowMap: Record<Shasow, string> = {
  none: 'shadow-none',
  xs: 'shadow-[var(--shadow-xs)]',
  sm: 'shadow-[var(--shadow-sm)]',
  md: 'shadow-[var(--shadow-md)]',
  lg: 'shadow-[var(--shadow-lg)]',
}