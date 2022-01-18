import TaskProvider from '../src/components/common/TaskProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <TaskProvider>
    <Component {...pageProps} />
  </TaskProvider>
  )
}

export default MyApp
