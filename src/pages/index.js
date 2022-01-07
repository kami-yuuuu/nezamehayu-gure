import * as React from "react"
import { Link,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        date
        title
      }
      id
      body
    }
  }
}

`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
	<ul>
	    {
		data.allMdx.nodes.map(node => (
			<article key={node.id}>
			<h2>{node.frontmatter.title}</h2>
			<p>{node.frontmatter.date}</p>
			<MDXRenderer>{node.body}</MDXRenderer>
			</article>
		))
	    }
	</ul>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
