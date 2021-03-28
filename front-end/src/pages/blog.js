import React from 'react';  
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from '../layouts/layout'; 
import Posts from '../components/posts';

const Blog = () =>{
  return (
     <Layout>
       <SEO 
            title="Blog"
            description="I also enjoy writing about the environment, life experiences, music, and colloborate with other coders!"
       
        /> 
        <div className="page">
            <h1 className="title">Blog</h1>
            <p className="sub-title">I also enjoy writing about the environment, life experiences, and music!</p>
            <div className="page-categories">
                  <ul>
                    <li><span className="option active" >All</span></li>
                    <li><span className="option">Nature</span></li>
                    <li><span className="option">Story</span></li>
                    <li><span className="option">Adventure</span></li>
                    <li><span className="option">Music</span></li>   
                  </ul>
            </div>
            <div className="blog-posts">
            <StaticQuery
                 query={graphql`
                    query { 
                    allStrapiArticle(filter: {status: {eq: "published"}}) {
                    edges {
                    node {
                      strapiId
                      slug
                      title
                      content
                      publishedAt
                      category {
                        name
                      }
                      image {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
            `}
              render={data => ( 
                  <Posts article={data.allStrapiArticle.edges}/>   
              )}
            />
            </div>
            {/* <button>Load More</button>  */}
        </div>
     </Layout>
  );
}

export default Blog;
