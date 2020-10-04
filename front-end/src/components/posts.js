import React from "react" 
import Post from './post';
const Posts = ({ article }) => { 
  const allPosts = article;
  return (
     <div className="blog-posts">
      { allPosts.map((post, i) => { 
        return (
          <Post article={post} key={post.node.slug}/>
        );
      })}
     </div>
  )
}

export default Posts;