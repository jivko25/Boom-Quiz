import { ThemeProvider } from '@emotion/react'
import TaskProvider from '../src/components/common/TaskProvider'
import theme from '../src/styles/theme'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  console.log(theme.palette.background);
  return (
  <TaskProvider>
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  </TaskProvider>
  )
}

export default MyApp
