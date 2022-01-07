import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export const query = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        date
        title
      }
      id
      slug
    }
  }
}
`

const IndexPage = ()=> (
  <Layout>
    <Seo title="about" />
    <h2>そのうち自己紹介文とか書きたいです。</h2>
  </Layout>
)

export default IndexPage
