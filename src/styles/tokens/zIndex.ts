export type ZIndexValue = 
  | 'auto'
  | '0'
  | '10'
  | '20'
  | '30'
  | '40'
  | '50'
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'backdrop'
  | 'offcanvas'
  | 'tooltip'
  | 'popover'
  | 'toast'
  | 'modal'

export const zIndexMap: Record<ZIndexValue, string> = {
  auto: 'z-auto',
  '0': 'z-0',
  '10': 'z-10',
  '20': 'z-20',
  '30': 'z-30',
  '40': 'z-40',
  '50': 'z-50',

  dropdown: 'z-[1000]',
  sticky: 'z-[1020]',
  fixed: 'z-[1030]',
  backdrop: 'z-[1040]',
  offcanvas: 'z-[1050]',
  tooltip: 'z-[1070]',
  popover: 'z-[1080]',
  toast: 'z-[1090]',
  modal: 'z-[1100]',
  }