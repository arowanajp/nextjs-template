import type { AppProps } from "next/app"

import "../styles/reset.css"

if (process.env.NODE_ENV === "development") {
  const mockServer = () => import("@/mock/worker")
  mockServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
