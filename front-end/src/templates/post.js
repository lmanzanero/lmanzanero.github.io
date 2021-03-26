import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Moment from "react-moment"

import Layout from "../layouts/layout"
import Seo from "../components/seo"
import Markdown from 'react-markdown';

const BlogPost = ({ data }) => {  
  const article = data.strapiArticle
  return (
    <Layout>
       <Seo
          title={article.Seo.metaTitle}
          description={article.Seo.metaDescription}
          image={article.Seo.shareImage.image.publicURL}
        />
      <div className="page">

        <div
          id="banner" 
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL} 
        >
          <img style={{width: '100%',height: '70vh', objectFit: 'cover'}} src={article.image.publicURL}/>
          <h1>{article.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
          <Markdown source={article.content} escapeHtml={false} />
            {/* <MDXProvider>
              {/* <MDXRenderer>{article.childStrapiArticleContent.childMdx.body}</MDXRenderer> */}
            {/* </MDXProvider> */} 

            <hr className="uk-divider-small" />


            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div >
                  {article.user.image && <Img fixed={article.user.image.childImageSharp.fixed} imgStyle={{ position: 'static',  borderRadius: '50%' }} />}
                </div>
                <div className="uk-width-expand">
                    <p className="uk-margin-remove-bottom">By { article.user.username }</p>
                    <p className="uk-text-meta uk-margin-remove-top"><Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: {eq: "published"}) {
      strapiId
      title
      content
      publishedAt
      Seo {
        metaDescription
        metaTitle
        shareImage {
          image {
            publicURL
          }
        }
      }
      image {
        publicURL
        childImageSharp {
            fixed {
              src
            }
        }
      } 
      user {
        username
        image {
          childImageSharp {
            fixed(width: 30, height: 30) {
              src
            }
          }
        } 
      }
    }
  }
`

export default BlogPost;