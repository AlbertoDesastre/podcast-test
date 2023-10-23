"use client";

import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import constants from "@/constants.json";
import { podcastEpisodes } from "@/assets";
import Dashboard from "@/app/components/Dashboard/Dashboard";
import PodcastFigure from "./PodcastFigure/PodcastFigure";

import PodcastEpisodeList from "./PodcastEpisodeList/PodcastEpisodeList";
import "./page.scss";

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

  return { podcastsEpisodes: cachedPodcastEpisodes as PodcastFullDetail[] };
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
      <div className="podcast-episodes-container">
        <PodcastFigure
          title={selectedPodcastEpisode.title}
          artist={selectedPodcastEpisode.artist}
          description={selectedPodcastEpisode.description}
        />
        <PodcastEpisodeList podcastEpisodes={selectedPodcastEpisode.episodes} />
      </div>
    </Dashboard>
  );
}

export default PodcastDetail;
