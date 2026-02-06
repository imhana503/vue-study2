export type DimmedColor  = 'bg' | 'toast'

export const dimmedColorTokens: Record<DimmedColor, string> = {
  bg: 'var(--dim-bg)',
  toast: 'var(--dim-toast)',
}