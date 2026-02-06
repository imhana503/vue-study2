export type BorderWidth = 'none' | 'sm' | 'md' | 'lg'
export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'none'
export type BorderSide = 'top' | 'bottom' | 'left' | 'right' | 'x' | 'y' | 'all'

export const borderWidthMap: Record<BorderWidth, string> = {
  none: 'border-0',
  sm: 'border',
  md: 'border-2',
  lg: 'border-4',
}

export const borderStyleMap: Record<BorderStyle, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
  none: 'border-none',
}

export const borderSideMap: Record<BorderSide, string> = {
  top: 'border-t',
  bottom: 'border-b',
  left: 'border-l',
  right: 'border-r',
  x: 'border-x',
  y: 'border-y',
  all: 'border',
}

export const borderSideWithWidthMap: Record<BorderSide, Record<BorderWidth, string>> = {
  top: {
    none: '',
    sm: 'border-t',
    md: 'border-t-2',
    lg: 'border-t-4',
  },
  bottom: {
    none: '',
    sm: 'border-b',
    md: 'border-b-2',
    lg: 'border-b-4',
  },
  left: {
    none: '',
    sm: 'border-l',
    md: 'border-l-2',
    lg: 'border-l-4',
  },
  right: {
    none: '',
    sm: 'border-r',
    md: 'border-r-2',
    lg: 'border-r-4',
  },
  x: {
    none: '',
    sm: 'border-x',
    md: 'border-x-2',
    lg: 'border-x-4',
  },
  y: {
    none: '',
    sm: 'border-y',
    md: 'border-y-2',
    lg: 'border-y-4',
  },
  all: {
    none: '',
    sm: 'border',
    md: 'border-2',
    lg: 'border-4',
  },
}