
import type { ComponentSizes, ComponentTypes } from '@/styles/types/common'

export const componentTypeClassMap = (prefix: string): Record<ComponentTypes, string> => ({
  primary: `${prefix}-primary`,
  secondary: `${prefix}-secondary`,
  accent: `${prefix}-accent`,
  info: `${prefix}-info`,
  success: `${prefix}-success`,
  warning: `${prefix}-warning`,
  error: `${prefix}-error`,
  ghost: `${prefix}-ghost`,
  neutral: `${prefix}-neutral`,
})

export const componentSizeClassMap = (prefix: string): Record<ComponentSizes, string> => ({
  sm: `${prefix}-sm`,
  md: `${prefix}-md`,
  lg: `${prefix}-lg`,
})
