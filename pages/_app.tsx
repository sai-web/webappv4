import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'

import { core } from '../core'
import { Token } from '../core/controllers/auth/events'
import { useEvent, usePulse } from '@pulsejs/react'

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
import '../styles/settings.css'
import '../styles/channel.css'

function Main({ Component, pageProps }: AppProps) {
  const csrf = usePulse(core.auth.state.csrf_token)
  useEvent(Token, ({ token }) => {
    if (token === "access") core.auth.refreshAccessToken()
    else if (token === "refresh") Router.push('/auth/login')
  })
  useEffect(() => {
    if (csrf.length === 0 && !Router.pathname.includes('auth')) core.auth.csrf()
  }, [Router])
  // useEffect(() => {
  //   console.log(core.user.state.info._value)
  // }, [core.user.state.info])
  return (
    <DndProvider backend={HTML5Backend}>
      <AnimatePresence>
        <Component {...pageProps} key="Components" />
        <ErrorDisplay key="Error" />
      </AnimatePresence>
    </DndProvider>
  )
}

export default Main