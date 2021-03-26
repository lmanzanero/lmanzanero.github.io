import React from "react" 
import Layout from "../layouts/layout" 
import SEO from "../components/seo"
import '../layouts/layout' 
import Slider from "../components/slider"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout> 
      <SEO 
          title="Scientist, Software Developer, Innovator" 
          description="Hello! I am Luis Manzanero - An Aspiring environmental scientist with a passion for programming. I am from the world most beautiful country, Belize!"
          isHomePage="true"
      /> 
      <div className="page">
         <Slider/> 
      </div> 
  </Layout>
)

export default IndexPage
