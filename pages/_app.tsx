import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { AnimatePresence } from 'framer-motion'

function Main({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default Main