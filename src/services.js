import {
  extractLocations, getEvents,
} from './api';

export const fetchData = async () => {
  try {
    const events = await getEvents();
    const locations = extractLocations(events);
    return { events, locations };
  } catch (error) {
    return error;
  }
};

export const handleShowClick = () => {
  const container = document.getElementById('content');
  const chartWrapper = document.getElementById('chart-wrapper');
  const { checked } = document.getElementById('hide-chart');
  if (!checked) {
    container.style.marginTop = 'max(-900px, -70vh)';
    chartWrapper.style.opacity = 0;
  } else {
    container.style.marginTop = '2vh';
    chartWrapper.style.opacity = 1;
  }
};

export const toggleLoadingScreen = (boolean) => {
  this.setState({
    isLoading: boolean,
  });
};

export const offlineListener = () => window.addEventListener('offline', () => {
  const offlineAlert = document.getElementById('offline-alert');
  offlineAlert.classList.add('fadeIn');
  offlineAlert.classList.remove('display-none');
  offlineAlert.addEventListener('animationend', () => {
    setTimeout(() => {
      offlineAlert.classList.remove('fadeIn');
    }, 500);
  });
});

export const onlineListener = () => window.addEventListener('online', () => {
  const offlineAlert = document.getElementById('offline-alert');
  offlineAlert.classList.add('fadeOut');
  offlineAlert.addEventListener('animationend', () => {
    offlineAlert.classList.add('display-none');
    offlineAlert.classList.remove('fadeOut');
  });
});

export const handleScroll = () => {
  const myTimeOut = (action, time) => {
    setTimeout(() => action, time);
  };

  const scrolled = window.scrollY;
  const toTopButton = document.getElementById('toTop');
  if (scrolled > 1000) {
    toTopButton.classList.add('fadeIn');
    toTopButton.classList.remove('fadeOut');
    myTimeOut(toTopButton.style.display = 'block', 250);
  } else if (scrolled < 1000) {
    myTimeOut(toTopButton.style.display = 'none', 3000);
    toTopButton.classList.remove('fadeIn');
    toTopButton.classList.add('fadeOut');
  }
};

export const toTopFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
