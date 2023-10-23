"use client";

import Dashboard from "@/app/components/Dashboard/Dashboard";
import PodcastFigure from "../../PodcastFigure/PodcastFigure";

import { episodesDetail } from "@/assets";
import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import constants from "@/constants.json";
import EpisodeSummary from "./EpisodeSummary/EpisodeSummary";
import "./page.scss";
import { getPodcastsEpisodes } from "../../page";

type EpisodeDetail = {
  id: string;
  title: string;
  summary: string;
  audio: string;
};

//this is a fake API call as right now the API it's giving a 502 gateaway error
function getEpisodesDetail() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.episodesDetail,
  });

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.episodesDetail);

    saveOnCache({
      storageName: constants.PODCAST_NAMING.episodesDetail,
      data: episodesDetail,
      expirationDate: new Date(),
    });
  }

  const { data: cachedEpisodesDetail } = getCache({
    storageName: constants.PODCAST_NAMING.episodesDetail,
  });

  return { episodesDetail: cachedEpisodesDetail as EpisodeDetail[] };
}
function EpisodeDetail({
  params,
}: {
  params: { id: string; episodeId: string };
}) {
  const { episodesDetail } = getEpisodesDetail();
  const { podcastsEpisodes } = getPodcastsEpisodes();
  //console.log(params);

  const summary = episodesDetail.find(
    (matchingSummary) => matchingSummary.id === params.id
  );
  const episode = podcastsEpisodes.find(
    (matchingEpisode) => matchingEpisode.id === params.episodeId
  );

  if (!summary || !episode) {
    return (
      <Dashboard loading={false}>
        <h1>Episode Not Found</h1>
      </Dashboard>
    );
  }

  return (
    <Dashboard loading={false}>
      <div className="podcast-summaries-container">
        <PodcastFigure
          title={episode.title}
          artist={episode.artist}
          description={episode.description}
        />

        <EpisodeSummary
          title={summary.title}
          summary={summary.summary}
          audio={summary.audio}
          episodeId={params.episodeId}
        ></EpisodeSummary>
      </div>
    </Dashboard>
  );
}

export default EpisodeDetail;
