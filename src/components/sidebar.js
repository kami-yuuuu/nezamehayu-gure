import React from "react";

const Sidebar = ({ data }) =>{
  return(
  <>
	  <ul>{
		  data.mdx.headings.map(heading =>(
			  <li>{heading.value}</li>
		  ))
	  }
	  </ul>
  </>
  )
}
export default Sidebar
