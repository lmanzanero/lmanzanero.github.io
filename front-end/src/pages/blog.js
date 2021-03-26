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
                      category {
                        name
                      }
                      image {
                        childImageSharp {
                            fluid {
                              src
                            }
                            fixed(width: 800, height: 500) {
                              src
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
