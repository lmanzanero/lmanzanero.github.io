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
            <div className="title"><h2>{article.node.title}</h2></div>
            <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <div className="author">Luis Manzanero</div>
            <div className="published-date">September, 23rd, 2019</div>
          </div>
      </div>  
    </Link>
  )
}

export default Post;