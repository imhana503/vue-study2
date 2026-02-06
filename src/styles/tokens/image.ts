export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
export type imageTypes = 'thumbnail' | 'banner' | 'poster'

export const objectFitMap: Record<ObjectFit, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: '',
  'scale-down': 'object-scale-down',
}

export const autoImageTypeMap: Record<imageTypes, string> = {
  thumbnail: '1/1',
  banner: '16/9',
  poster: '2/3',
}