"use client";

import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import constants from "@/constants.json";
import { podcastEpisodes } from "@/assets";
import Dashboard from "@/app/components/Dashboard/Dashboard";

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

function PodcastDetail({ params }: { params: { id: string } }) {
  const podcastEpisodes = getPodcastsEpisodes();

  console.log(podcastEpisodes);

  return (
    <Dashboard loading={false}>
      <h1>This is some page</h1>
      <h2>This is the id of the podcast {params.id}</h2>
    </Dashboard>
  );
}

export default PodcastDetail;
