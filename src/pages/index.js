import * as React from "react"
import { Link,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

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

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
	<ul>
	    {
		data.allMdx.nodes.map(node => (
			<article key={node.id}>
			<StaticImage src="../images/kuranntetyann Small.png"/>
			<h2><Link to={`/${node.slug}`}>
			{node.frontmatter.title}
			</Link>
			</h2>
			<p>{node.frontmatter.date}</p>
			</article>
		))
	    }
	</ul>
	<sidebar></sidebar>
  </Layout>
)

export default IndexPage
