import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './reddit.css'

const Reddit = (props) => {
  return (
    <div className="reddit-container1">
      <Helmet>
        <title>reddit - Python Final</title>
        <meta property="og:title" content="reddit - Python Final" />
      </Helmet>
      <img
        alt="image"
        src="/screenshot%202024-12-09%20at%2010.39.14%C3%A2%C2%80%C2%AFam-200h.png"
        className="reddit-image1"
      />
      <div className="reddit-container2">
        <div className="reddit-container3">
          <img
            alt="image"
            src="/screenshot%202024-12-09%20at%2010.42.20%C3%A2%C2%80%C2%AFam-300w.png"
            className="reddit-image2"
          />
        </div>
        <div className="reddit-container4">
          <h1>
            <span>[Talk] NEW WAY DISCOVERED TO RECOVER LOST MEDIA</span>
            <br></br>
          </h1>
          <div className="reddit-container5">
            <span className="reddit-text13">
              <span className="reddit-text14">video games</span>
              <br className="reddit-text15"></br>
              <span className="reddit-text16">posted by johnnydoe2002</span>
              <br className="reddit-text17"></br>
              <br className="reddit-text18"></br>
              <br className="reddit-text19"></br>
              <span className="reddit-text20">
                Recently, I think i have discovered the best way to download
                this old game I used to play in my youth. I couldn&apos;t find
                it on the app store anymore. I checked google play and there was
                nothing there. someone in the subreddit suggested that i look
                into this specific lost media community.
              </span>
              <br className="reddit-text21"></br>
              <br className="reddit-text22"></br>
              <span className="reddit-text23">According to this article, </span>
              <br className="reddit-text24"></br>
              <span className="reddit-text25">
                &quot;lost media refers to any form of media—such as films,
                television shows, music, books, video games, or other types of
                content—that is no longer available to the public or is
                considered missing.&quot;
              </span>
              <br className="reddit-text26"></br>
              <br className="reddit-text27"></br>
              <span className="reddit-text28">
                i found this page that claims I can download it for free if I
                know the password. Do you guys think this is legit???
              </span>
              <br className="reddit-text29"></br>
              <br className="reddit-text30"></br>
              <span className="reddit-text31">
                i&apos;m kind of worried about viruses but i really miss this
                game and i am out of options. how bad could it truly be?
              </span>
              <br className="reddit-text32"></br>
              <br className="reddit-text33"></br>
              <br className="reddit-text34"></br>
              <br className="reddit-text35"></br>
              <br className="reddit-text36"></br>
              <br className="reddit-text37"></br>
            </span>
          </div>
          <Link
            to="/netshade"
            name="netshade"
            className="reddit-navlink button"
          >
            <span className="reddit-text38">
              <span>The link is here: netshade.com/dhdt/lstmed222</span>
              <br></br>
              <br></br>
            </span>
          </Link>
          <div className="reddit-container6"></div>
          <img
            alt="image"
            src="/screenshot%202024-12-09%20at%2011.15.58%C3%A2%C2%80%C2%AFam-200h.png"
            className="reddit-image3"
          />
        </div>
        <img
          alt="image"
          src="/screenshot%202024-12-09%20at%2010.49.18%C3%A2%C2%80%C2%AFam-400w.png"
          className="reddit-image4"
        />
        <div className="reddit-container7"></div>
      </div>
    </div>
  )
}

export default Reddit
