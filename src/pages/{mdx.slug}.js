import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date
    }
    body
    headings {
      value
    }
  }
}
`


const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
	<div>
	<p>{data.mdx.frontmatter.date}</p>
	<MDXRenderer>{data.mdx.body}</MDXRenderer>
	</div>
	<sidebar>
	  <ul>{
		  data.mdx.headings.map( heading =>(
			  <li>{heading.value}</li>
		  ))
	  }
	  </ul>
	</sidebar>
    </Layout>
  )
}

export default BlogPost
