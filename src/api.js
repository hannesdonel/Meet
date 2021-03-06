import axios from 'axios';
import NProgress from 'nprogress';
import mockData from './mock-data';
import { AUTH_ENDPOINT, EVENTS_ENDPOINT, TOKEN_ENDPOINT } from './config';

// Clean up URL after query
const removeQuery = () => {
  let newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  if (window.history.pushState && window.location.pathname) {
    window.history.pushState('', '', newurl);
  } else {
    newurl = `${window.location.protocol}//${window.location.host}`;
    window.history.pushState('', '', newurl);
  }
};

// Returns an array only with available locations
const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

// Gets token from server
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  /* eslint-disable-next-line */
  const { access_token } = await fetch(
    `${TOKEN_ENDPOINT}/${encodeCode}`,
  )
    .then((res) => res.json())
    .catch((error) => error);

  localStorage.setItem('access_token', access_token);

  /* eslint-disable-next-line */
  return access_token;
};

// Checks if token is valid
const checkToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    try {
      return await fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`);
    } catch (error) {
      return error;
    }
  } else {
    return 'no token';
  }
};

// Checks if there's already a valid token available and returns it. If not, it gets a new one.
const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = checkToken();

  if (!accessToken || tokenCheck.ok) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const results = await axios.get(AUTH_ENDPOINT);
      const { authUrl } = results.data;
      window.location.href = authUrl;
      return (window.location.href);
    }
    return getToken(code);
  }
  return accessToken;
};

// Get all events available
const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const data = localStorage.getItem('lastEvents');
    NProgress.done();
    return data ? JSON.parse(data).events : [];
  }

  const token = await getAccessToken();
  removeQuery();
  const url = `${EVENTS_ENDPOINT}/${token}`;
  const result = await axios.get(url);
  if (result.data) {
    const locations = extractLocations(result.data.events);
    localStorage.setItem('lastEvents', JSON.stringify(result.data));
    localStorage.setItem('locations', JSON.stringify(locations));
  }
  NProgress.done();
  return result.data.events;
};

export {
  getEvents, getAccessToken, checkToken, extractLocations,
};
