import React from 'react'
import type { AppProps } from 'next/app'

import { AnimatePresence } from 'framer-motion'

import '../styles/sideNav.css'
import '../styles/topNav.css'
import '../styles/home.css'

function Main({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default Main