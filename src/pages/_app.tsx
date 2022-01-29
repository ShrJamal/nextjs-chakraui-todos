import type { AppProps } from 'next/app'
import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { reactQuery } from '~/hooks'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={reactQuery}>
      <ChakraProvider theme={theme}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

const theme = extendTheme({
  initialColorMode: 'dark',
})
