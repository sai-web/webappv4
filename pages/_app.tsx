import React from 'react'
import type { AppProps } from 'next/app'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { AnimatePresence } from 'framer-motion'
import { ErrorDisplay } from './ErrorDisplay'

import '../styles/sideNav.css'
import '../styles/topNav.css'
import '../styles/home.css'
import '../styles/music.css'
import '../styles/esports.css'
import '../styles/custom-check-box.css'
import '../styles/analytics-circle.css'

function Main({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key="Components" />
        <ErrorDisplay key="Error" />
      </AnimatePresence>
    </DndProvider>
  )
}

export default Main