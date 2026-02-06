export type displayType = 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex'
export type positionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

export const displayMap: Record<displayType, string> = {
  block: 'block',
  'inline-block': 'inline-block',
  inline: 'inline',
  flex: 'flex',
  'inline-flex': 'inline-flex',
}

export const positionMap: Record<positionType, string> = {
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
}