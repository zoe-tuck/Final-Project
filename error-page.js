import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NotFound4 from '../components/not-found4'
import './error-page.css'

const ErrorPage = (props) => {
  return (
    <div className="error-page-container">
      <Helmet>
        <title>errorPage - Python Final</title>
        <meta property="og:title" content="errorPage - Python Final" />
      </Helmet>
      <Link to="/netshade" className="error-page-navlink">
        <NotFound4
          action1={
            <Fragment>
              <span className="error-page-text1">Return to Previous Page</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="error-page-text2">
                We can&apos;t seem to find the page you are looking for.
              </span>
            </Fragment>
          }
          className="error-page-component"
        ></NotFound4>
      </Link>
    </div>
  )
}

export default ErrorPage
