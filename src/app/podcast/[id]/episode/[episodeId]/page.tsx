"use client";

import Dashboard from "@/app/components/Dashboard/Dashboard";
import PodcastFigure from "../../PodcastFigure/PodcastFigure";

import { episodesDetail } from "@/assets";
import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import constants from "@/constants.json";
import EpisodeSummary from "./EpisodeSummary/EpisodeSummary";

type EpisodeDetail = {
  id: string;
  title: string;
  summary: string;
  audio: string;
};

//this is a fake API call as right now the API it's giving a 502 gateaway error
function getEpisodesDetail() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.episodes,
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
function EpisodeDetail({ params }: { params: { id: string } }) {
  const { episodesDetail } = getEpisodesDetail();

  if (!episodesDetail) {
    return (
      <Dashboard loading={false}>
        <h1>Episode Not Found</h1>
      </Dashboard>
    );
  }

  return (
    <Dashboard loading={false}>
      <PodcastFigure title={""} artist={""} description={""} />
      <div className="podcast-episodes-container">
        <EpisodeSummary title={""} summary={""} audio={""}></EpisodeSummary>
      </div>
      {episodesDetail[0].id}
    </Dashboard>
  );
}

export default EpisodeDetail;
