import { saveOnCache } from "@/services/cacheService/cacheService";

type useFetchParams = { url: string; cacheName: string };

function fetchAndCache({ url, cacheName }: useFetchParams) {
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
      return rawData;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { fetchAndCache };
