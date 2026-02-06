import { createClassMap } from '@/styles/utils/createClassMap'


export const spacingValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

export type Spacing = (typeof spacingValues)[number] | `${(typeof spacingValues)[number]}`
