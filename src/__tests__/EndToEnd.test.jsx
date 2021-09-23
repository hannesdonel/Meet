import puppeteer from 'puppeteer';
import mockData from '../mock-data';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
    //   {
    //     headless: false,
    //     slowMo: 250,
    //     ignoreDefaultArgs: ['--disable-extensions'],
    //   },
    );
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  }, 30000);

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event__details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event__show-more-button');

    const eventDetails = await page.$('.event__details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event__show-more-button');
    const eventDetails = await page.$('.event__details');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
      // {
      //   headless: false,
      //   slowMo: 250,
      //   ignoreDefaultArgs: ['--disable-extensions'],
      // },
    );
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  }, 30000);

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    const events = await page.$$('.event');
    expect(events.length).toEqual(mockData.length);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city-search__input', 'Berlin');
    const suggestions = await page.$('.city-search__suggestions');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list', async () => {
    await page.click('.city-search__button');
  });
});
