export function useBaseBoxClass<T extends BaseBoxProps>(
  props: T,
  baseClass: string[] = [],
): ComputedRef<string> {
  const bgColorRef = toRef(props, 'bgColor')
  const shadowRef = toRef(props, 'shadow')
  const hAlign = toRef(props, 'hAlign')
  const vAlign = toRef(props, 'vAlign')

  const spacing = useSpacingClass(props)
  const radius = useRadiusClass(props)
  const size = useSizeClass(props)
  const zindex = useZIndexClass(props)
  const layout = useLayoutClass(props)
  const overflow = useOverflowClass(props)
  const shadow = useShadowClass(shadowRef)
  const background = useBackgroundClass(bgColorRef)
  const border = useBorderClass(props)
  const setAlign = useAlignClass(hAlign, vAlign)

  return computed(() =>
    twMerge(
      clsx(
        ...baseClass,
        spacing.value,
        radius.value,
        size.value,
        zindex.value,
        layout.value,
        border.value,
        overflow.value,
        shadow.value,
        background.value,
        setAlign.value,
        props.class,
      ),
    ),
  )
}
