import React from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { Routes } from './router'
import { AuthProvider } from './hooks/auth'

import Theme from './styles/theme'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
     </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
