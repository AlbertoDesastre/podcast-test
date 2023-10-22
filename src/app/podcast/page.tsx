"use client";

import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import Dashboard from "../components/Dashboard/Dashboard";
import PodcastEpisode from "./PodcastEpisodeList/PodcastEpisodeList";
import constants from "@/constants.json";
import { podcastEpisodes } from "@/assets";

type PodcastEpisode = {
  id: string;
  title: string;
  artist: string;
  episodes: Array<{
    episodeTitle: string;
    date: Date;
    duration: string; // por ejemplo, una duración en string es "14:00"
  }>;
};

//this is a fake API call as right now the API it's giving a 502 gateaway error
function getPodcastsEpisodes() {
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
    storageName: constants.PODCAST_NAMING.list,
  });

  return { podcastsEpisodeList: cachedPodcastEpisodes as PodcastEpisode[] };
}

function PodcastDetails() {
  const podcastEpisodes = getPodcastsEpisodes();

  console.log(podcastEpisodes);

  return (
    <Dashboard loading={true}>
      <h1>This is some page</h1>
      <PodcastEpisode></PodcastEpisode>
    </Dashboard>
  );
}

export default PodcastDetails;
