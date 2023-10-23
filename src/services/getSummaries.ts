import { getCache, saveOnCache } from "./cacheService/cacheService";
import constants from "@/constants.json";
import { episodesDetail } from "@/assets";

type EpisodeSummary = {
  id: string;
  title: string;
  summary: string;
  audio: string;
};

//this is a fake API call as right now the API it's giving a 502 gateaway error
function getSummaries() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.summaries,
  });

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.summaries);

    saveOnCache({
      storageName: constants.PODCAST_NAMING.summaries,
      data: episodesDetail,
      expirationDate: new Date(),
    });
  }

  const { data: cachedEpisodesDetail } = getCache({
    storageName: constants.PODCAST_NAMING.summaries,
  });

  return { summaries: cachedEpisodesDetail as EpisodeSummary[] };
}

export { getSummaries };
