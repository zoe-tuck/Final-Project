import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './toast1.css'

const Toast1 = (props) => {
  return (
    <div className="toast1-container">
      <img alt={props.logoAlt} src={props.logoSrc} className="toast1-logo" />
      <div className="toast1-header">
        <div className="toast1-content"></div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="toast1-text2">Join the Celebration</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <button type="button" aria-label="Close" className="toast1-close-button">
        <svg viewBox="0 0 804.5714285714286 1024" className="toast1-icon1">
          <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
        </svg>
      </button>
    </div>
  )
}

Toast1.defaultProps = {
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  button: undefined,
  logoAlt: 'Your Company Logo',
}

Toast1.propTypes = {
  logoSrc: PropTypes.string,
  button: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Toast1
