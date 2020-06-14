import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout" 
import SEO from "../components/seo"
import '../layouts/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
    <Link to="/about/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
