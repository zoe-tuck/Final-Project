import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './not-found4.css'

const NotFound4 = (props) => {
  return (
    <div className="not-found4-container1 thq-section-padding">
      <div className="not-found4-max-width thq-section-max-width">
        <div className="not-found4-container2">
          <div className="not-found4-container3">
            <h2 className="not-found4-text1 thq-heading-2">Oooops!</h2>
            <p className="not-found4-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="not-found4-text5">
                    We can&apos;t seem to find the page you are looking for.
                  </span>
                </Fragment>
              )}
            </p>
            <button className="not-found4-button thq-button-filled">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="not-found4-text4">Back to homepage</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="not-found4-container4">
          <h1 className="not-found4-text3 thq-heading-1">404</h1>
        </div>
      </div>
    </div>
  )
}

NotFound4.defaultProps = {
  action1: undefined,
  content1: undefined,
}

NotFound4.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default NotFound4
