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

  return { podcastsEpisodes: cachedPodcastEpisodes as PodcastEpisode[] };
}

function PodcastDetail({ params }: { params: { id: string } }) {
  const { podcastsEpisodes } = getPodcastsEpisodes();

  const selectedPodcastEpisode = podcastEpisodes.find(
    (episode) => episode.id === params.id
  );

  if (!selectedPodcastEpisode) {
    return (
      <Dashboard loading={false}>
        <h1>Podcast Episode Not Found</h1>
      </Dashboard>
    );
  }

  return (
    <Dashboard loading={false}>
      <h1>This is some page</h1>
      <h2>This is the id of the podcast {selectedPodcastEpisode.id}</h2>
    </Dashboard>
  );
}

export default PodcastDetail;
