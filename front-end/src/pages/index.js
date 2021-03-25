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
          description="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet"
          isHomePage="true"
      /> 
      <div className="page">
         <Slider/> 
      </div> 
  </Layout>
)

export default IndexPage
