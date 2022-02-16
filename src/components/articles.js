import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Articles = () =>{
	const data = useStaticQuery(graphql`
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
	}`)

	return(
	<div>
		{data.allMdx.nodes.map(node => (
			<div>{node.fromtmatter.title}</div>
		))}
	</div>
	)
}

export default Articles
