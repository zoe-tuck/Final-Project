import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Python Final</title>
        <meta property="og:title" content="Python Final" />
      </Helmet>
      <div className="home-container2">
        <h1>The Lost Media Archive</h1>
      </div>
      <Link to="/reddit" name="gameEnter" className="home-navlink button">
        Enter
      </Link>
    </div>
  )
}

export default Home
