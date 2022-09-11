import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/styles/config/sizes"
import { css } from "@emotion/react"
import { ReactNode } from "react"

import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
  children: ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const styles = {
  container: css({
    height: "100vh",
    display: "grid",
    gridTemplateRows: `${HEADER_HEIGHT} auto ${FOOTER_HEIGHT}`,
  }),
}
