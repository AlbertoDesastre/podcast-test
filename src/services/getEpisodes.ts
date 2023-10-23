import { getCache, saveOnCache } from "./cacheService/cacheService";
import constants from "@/constants.json";
import { podcastEpisodes } from "@/assets";

export type PodcastEpisode = {
  id: string;
  episodeTitle: string;
  date: string;
  duration: string; // for example --> "14:00"
};

type PodcastFullDetail = {
  id: string;
  title: string;
  artist: string;
  description: string;
  // image
  episodes: PodcastEpisode[];
};

//this is a fake API call as right now the API it's giving a 502 gateaway error
export function getEpisodes() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.episodes,
  });

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.episodes);

    saveOnCache({
      storageName: constants.PODCAST_NAMING.episodes,
      data: podcastEpisodes,
      expirationDate: new Date(),
    });
  }

  const { data: cachedPodcastEpisodes } = getCache({
    storageName: constants.PODCAST_NAMING.episodes,
  });

  return { episodes: cachedPodcastEpisodes as PodcastFullDetail[] };
}
