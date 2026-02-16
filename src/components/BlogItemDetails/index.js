import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const formattedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({
      blogData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {blogData, isLoading} = this.state

    const {title, imageUrl, avatarUrl, author, content} = blogData

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details">
            <h1 className="blog-details-title">{title}</h1>
            <div className="author-section">
              <img src={avatarUrl} alt={author} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="details-image" />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
