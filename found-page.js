import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './found-page.css'

const FoundPage = (props) => {
  return (
    <div className="found-page-container1">
      <Helmet>
        <title>foundPage - Python Final</title>
        <meta property="og:title" content="foundPage - Python Final" />
      </Helmet>
      <h1 className="found-page-text">YOU FOUND IT</h1>
      <div>
        <div className="found-page-container3">
          <Script
            html={`<iframe src="https://www.gameflare.com/embed/charlie-the-steak/" frameborder="0" scrolling="no" width="450" height="635" allowfullscreen></iframe>`}
          ></Script>
        </div>
      </div>
      <Link to="/" className="found-page-navlink button">
        Play Again
      </Link>
    </div>
  )
}

export default FoundPage
