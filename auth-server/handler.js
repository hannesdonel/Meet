const { google } = require('googleapis');

const { OAuth2 } = google.auth;
const calendar = google.calendar('v3');
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  redirect_uris: ['https://hannesdonel.github.io/go-out-with-me/'],
  javascript_origins: ['https://hannesdonel.github.io', 'http://localhost:3000'],
};
const {
  client_secret: clientSecret,
  client_id: clientId,
  redirect_uris: redirectUris,
  calendar_id: calendarId,
} = credentials;
const oAuth2Client = new OAuth2(
  clientId,
  clientSecret,
  redirectUris[0],
);

module.exports.getAuthUrl = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  }).then((token) => ({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(token),
  })).catch((error) => ({
    statusCode: 500,
    body: JSON.stringify(error),
  }));
};

module.exports.getCalendarEvents = async (event) => {
  /* eslint-disable-next-line */
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      },
    );
  }).then((result) => ({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ events: result.data.items }),
  })).catch((error) => ({
    statusCode: 500,
    body: JSON.stringify(error),
  }));
};
