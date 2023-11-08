import { saveOnCache, getCache } from "./cacheService";
import { format, sub } from "date-fns";

const podcastList = [
  { title: "AI Insights", author: "John Smith" },
  { title: "Inner Peace Now", author: "Emily Anderson" },
  { title: "Creative Sparks", author: "David Taylor" },
  { title: "Startup Stories", author: "Sarah Johnson" },
  { title: "Ancient Mysteries", author: "Michael Clark" },
  { title: "Cosmic Journeys", author: "Rachel White" },
  { title: "Fitness Fusion", author: "Alex Carter" },
  { title: "Culinary Adventures", author: "Luis Martinez" },
  { title: "Global Explorers", author: "Megan Turner" },
  { title: "Soundscapes", author: "Daniel Green" },
];

// this is the exact same podcast list that uphere but in string format
const jsonString = `[
    { "title": "AI Insights", "author": "John Smith" },
    { "title": "Inner Peace Now", "author": "Emily Anderson" },
    { "title": "Creative Sparks", "author": "David Taylor" },
    { "title": "Startup Stories", "author": "Sarah Johnson" },
    { "title": "Ancient Mysteries", "author": "Michael Clark" },
    { "title": "Cosmic Journeys", "author": "Rachel White" },
    { "title": "Fitness Fusion", "author": "Alex Carter" },
    { "title": "Culinary Adventures", "author": "Luis Martinez" },
    { "title": "Global Explorers", "author": "Megan Turner" },
    { "title": "Soundscapes", "author": "Daniel Green" }
  ]`;

const templateInfoForCaching = {
  storageName: "podcasts",
  data: [{}],
  expirationDate: new Date(),
};

// NOTE TO SELF IMPROVEMENT --> These are great test for functions but this is probably overkill.
// I have to focus on testing what the user it's going to see. Meaning I would have to test the component where this
// functions it's taking action, and test how the component reacts to it's different responses.

describe("SERVICE --> saveOnCache", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should save something on localStorage when giving a name", () => {
    saveOnCache(templateInfoForCaching);

    expect(
      localStorage.getItem(templateInfoForCaching.storageName)
    ).toBeTruthy();
  });

  test("should save data and the expiration date", () => {
    saveOnCache(templateInfoForCaching);

    let dataOnCache = localStorage.getItem(templateInfoForCaching.storageName);
    let parsedData = JSON.parse(dataOnCache as string);

    expect(typeof dataOnCache).toEqual("string");
    expect(parsedData).toMatchObject({
      expirationDate: expect.any(String), // I expect to be this date in string, parsing it to another type it's not the responsability of saveOnCache
      data: templateInfoForCaching.data,
    });
  });

  test("should save the date in a specific format", () => {
    const formattedDateAndTime = format(
      templateInfoForCaching.expirationDate,
      "yyyy-MM-dd HH:mm:ss"
    );
    saveOnCache(templateInfoForCaching);

    let dataOnCache = localStorage.getItem(templateInfoForCaching.storageName);
    let parsedData: { data: Object[]; expirationDate: string } = JSON.parse(
      dataOnCache as string
    );

    let datesToHaveSameFormat =
      parsedData.expirationDate == formattedDateAndTime;

    expect(datesToHaveSameFormat).toBeTruthy();
  });

  test("should be able to save data coming in string or json format", () => {
    saveOnCache({
      storageName: "podcast-string",
      data: jsonString,
      expirationDate: new Date(),
    });

    let dataOnCache = localStorage.getItem("podcast-string");
    let parsedData: { data: string; expirationDate: string } = JSON.parse(
      dataOnCache as string
    );

    expect(parsedData.data).toBeTruthy();
    expect(typeof parsedData.data).toEqual("string");
    expect(JSON.parse(parsedData.data)).toEqual(podcastList);
  });
});

describe("SERVICE --> getCache", () => {
  test("should return a data if it was stored already", () => {
    saveOnCache({
      storageName: templateInfoForCaching.storageName,
      expirationDate: templateInfoForCaching.expirationDate,
      data: podcastList,
    });

    const response = getCache({
      storageName: templateInfoForCaching.storageName,
    });

    expect(response).toMatchObject({
      data: expect.any(Object),
      expirationDate: expect.any(Date),
      expirated: false,
    });
  });

  test("should return 'expired' to true if 24 hours have passed", () => {
    saveOnCache({
      storageName: templateInfoForCaching.storageName,
      expirationDate: sub(new Date(), { hours: 25 }),
      data: podcastList,
    });

    const response = getCache({
      storageName: templateInfoForCaching.storageName,
    });

    expect(response).toMatchObject({
      data: expect.any(Object),
      expirationDate: expect.any(Date),
      expirated: true,
    });
  });

  test("should return 'expired' to false if 24 hours DIDN'T passed", () => {
    saveOnCache({
      storageName: templateInfoForCaching.storageName,
      expirationDate: sub(new Date(), { hours: 23 }),
      data: podcastList,
    });

    const response = getCache({
      storageName: templateInfoForCaching.storageName,
    });

    expect(response).toMatchObject({
      data: expect.any(Object),
      expirationDate: expect.any(Date),
      expirated: false,
    });
  });
});
