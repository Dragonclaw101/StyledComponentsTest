import React from 'react'
import { Link } from 'react-router-dom'
// [MF]: My VSCode shows this Icon import as not being used.
// This where ESLint helps in telling you what is not necessary in your codebase.
import { Header, Container, Divider } from 'semantic-ui-react'

import { pullRight, h1 } from './Layout.css'

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          My Webpack
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with various react plugins and tools by Jo-Jo
      </p>
    </Container>
  )
}

export default Layout
