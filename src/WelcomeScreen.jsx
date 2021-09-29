import React from 'react';
import './App.css';

import { getAccessToken } from './api';

function WelcomeScreen(props) {
  const { showWelcomeScreen, isLoading } = props;
  return showWelcomeScreen
    ? (
      <div className="welcome-screen">
        <h3>Welcome to the Meet app</h3>
        <h3>
          Log in to see upcoming events around the world for full-stack developers.
        </h3>
        <div className="button_cont" align="center">
          <button
            type="button"
            onClick={() => { getAccessToken(); isLoading(true); }}
            rel="nofollow noopener"
            className="google-btn"
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <div className="btn-text">
              <b>Sign in with google</b>
            </div>
          </button>
        </div>
        <a
          className="privacy-policy"
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
