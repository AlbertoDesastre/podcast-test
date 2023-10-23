import { getCache, saveOnCache } from "./cacheService/cacheService";
import constants from "@/constants.json";
import { podcastsLongTemplate } from "@/assets";

export type Podcast = {
  id: string;
  title: string;
  artist: string;
  images: Array<{
    attributes: { height: string };
    label: string;
  }>;
};

// this is the fake version that doesn't call the real API. Correct this based on "usePodcast" custom hook
function getPodcasts() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.list);
    saveOnCache({
      storageName: constants.PODCAST_NAMING.list,
      data: podcastsLongTemplate,
      expirationDate: new Date(),
    });
  }

  const { data: cachedPodcasts } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  return { podcastsList: cachedPodcasts as Podcast[] };
}

export { getPodcasts };
