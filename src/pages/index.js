import * as React from "react"
import { Link,graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
	<ul>
	    {
		data.allFile.nodes.map(node => (
			<li key={node.name}>{node.name}</li>
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
