import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="link-item">
        <img src={imageUrl} alt={title} className="blog-image" />
        <div className="blog-content">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} alt={author} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
