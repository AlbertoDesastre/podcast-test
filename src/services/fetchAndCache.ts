import { saveOnCache } from "@/services/cacheService/cacheService";

type useFetchParams = { url: string; cacheName: string };

function fetchAndCache({ url, cacheName }: useFetchParams) {
  let fullfilledResponse: unknown;

  console.log("I'm actually fetching the data!");
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((rawData) => {
      saveOnCache({
        storageName: cacheName,
        data: rawData,
        expirationDate: new Date(),
      });
      fullfilledResponse = rawData;
    })
    .catch((error) => {
      console.log(error);
    });

  return fullfilledResponse as String | Object;
}

export { fetchAndCache };
