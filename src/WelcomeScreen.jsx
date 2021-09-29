import React from 'react';
import './App.css';

function WelcomeScreen(props) {
  const { showWelcomeScreen, getAccessToken } = props;
  console.log('showWelcomeScreen', showWelcomeScreen);
  return showWelcomeScreen
    ? (
      <div className="welcome-screen">
        <h1>Welcome to the Meet app</h1>
        <h4>
          Log in to see upcoming events around the world for full-stack developers.
        </h4>
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              type="button"
              onClick={() => { getAccessToken(); }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
            </button>
            Page 1
          </div>
        </div>
        <a
          href="https://hannesdonel.github.io/Meet/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    )
    : null;
}

export default WelcomeScreen;
