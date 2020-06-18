import React from "react" 
import Layout from "../layouts/layout" 
import SEO from "../components/seo"
import '../layouts/layout'
import Slider from "../components/slider"

const IndexPage = () => (
  <Layout> 
      <SEO title="Web Developer | Environmental Scientist | Innovator"/> 
      <Slider/>
      <div className="buttons">
        <button id="prev"><i className="fas fa-arrow-left"></i></button>
        <button id="next"><i className="fas fa-arrow-right"></i></button>
     </div>
  </Layout>
)

export default IndexPage
