import React from 'react'
import { Header } from 'semantic-ui-react'

import Layout from './Layout'

//Defined date in function to be called
function MyDate() {
  return Date()
}
// [MF]: What makes this page "dynamic"?
//I forgot to add the Date component, it's there now -[JH]
const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">This is my Dynamic page!</Header>
      <p>
        This page was created and loaded using various webpack tools, and styled
        with CSS modules.
      </p>
      <br></br>
      <br></br>
      <p>The current date is:</p> <MyDate />
    </Layout>
  )
}

export default DynamicPage
