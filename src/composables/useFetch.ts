import { createFetch } from '@vueuse/core'
import { useToken } from './useToken'

const { token, hasToken } = useToken()

export const useFetch = createFetch({
  baseUrl: 'http://localhost:3000',
  options: {
    async beforeFetch({ options }) {
      if (hasToken.value)
        (options.headers as any).Authorization = `Bearer ${token.value}`

      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})
