"use client";

import Dashboard from "@/app/components/Dashboard/Dashboard";
import PodcastFigure from "../../PodcastFigure/PodcastFigure";

import EpisodeSummary from "./EpisodeSummary/EpisodeSummary";
import { getSummaries } from "@/services/getSummaries";
import { getEpisodes } from "@/services/getEpisodes";
import "./page.scss";

function EpisodeDetail({
  params,
}: {
  params: { id: string; episodeId: string };
}) {
  const { summaries } = getSummaries();
  const { episodes } = getEpisodes();

  const summary = summaries.find(
    (matchingSummary) => matchingSummary.id === params.id
  );
  const episode = episodes.find(
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
          params={params}
        />

        <EpisodeSummary
          title={summary.title}
          summary={summary.summary}
          audio={summary.audio}
          params={params}
        ></EpisodeSummary>
      </div>
    </Dashboard>
  );
}

export default EpisodeDetail;
