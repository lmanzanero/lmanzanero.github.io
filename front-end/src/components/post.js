import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Post = ({ article }) => {
  console.log(article);
  return (
    <Link to={`/blog/${article.node.slug}`}>
      <div className="blog-post">
          <div className="image">
              <Img fluid={article.node.image.childImageSharp.fixed} imgStyle={{ position: 'static' }} />
           </div>
          <div className="blog-info">
            <div className="category"><a href="#">{article.node.category.name}</a></div>
            <div className="blog-title"><h2>{article.node.title}</h2></div>
            <div className="exerpt">{article.node.content}</div>
            <div className="author">Luis Manzanero</div>
            <div className="published-date">September, 23rd, 2019</div>
          </div>
      </div>  
    </Link>
  )
}

export default Post;