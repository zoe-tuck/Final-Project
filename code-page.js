import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NotFound4 from '../components/not-found4'
import './code-page.css'

const CodePage = (props) => {
  return (
    <div className="code-page-container1">
      <Helmet>
        <title>code-page - Python Final</title>
        <meta property="og:title" content="code-page - Python Final" />
      </Helmet>
      <Link to="/netshade" className="code-page-navlink1">
        <NotFound4
          action1={
            <Fragment>
              <span className="code-page-text1">Return to Home Page</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="code-page-text2">
                We can&apos;t seem to find the page you are looking for, unless
                you have something for us?
              </span>
            </Fragment>
          }
          className="code-page-component"
        ></NotFound4>
      </Link>
      <div className="code-page-container2">
        <input
          type="text"
          id="codeInput"
          name="codeInput"
          required="true"
          placeholder="Give the Code: _ _ _ _ _ _"
          className="code-page-textinput input"
        />
        <Link
          to="/found-page"
          id="userinputSubmit"
          className="code-page-navlink2 button"
        >
          Submit
        </Link>
      </div>
    </div>
  )
}

export default CodePage
