import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-header2.css'

const BlogPostHeader2 = (props) => {
  return (
    <div className="blog-post-header2-blog-post-header3 thq-section-padding">
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="blog-post-header2-image"
      />
    </div>
  )
}

BlogPostHeader2.defaultProps = {
  imageAlt1: 'image',
  imageSrc1:
    '/screenshot%202024-12-09%20at%2010.39.14%C3%A2%C2%80%C2%AFam-1200h.png',
}

BlogPostHeader2.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default BlogPostHeader2
