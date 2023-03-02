import type { ComputedRef, Ref } from 'vue'

export function useStatus<R extends string, T extends R[]>(
  options: T,
  initValue: T[number],
) {
  const status = ref(initValue) as Ref<T[number]>

  const r: Record<Prefix<R, 'is'>, ComputedRef<boolean>> = {} as any
  options.forEach(o => {
    const key = `is${o}` as Prefix<R, 'is'>
    r[key] = computed(() => o === status.value)
  })

  return {
    status,
    set: (s: T[number]) => status.value = s,
    ...r,
  }
}

type Prefix<T extends string, P extends string> = `${P}${T}`
