"use client";

import Dashboard from "@/app/components/Dashboard/Dashboard";
import PodcastFigure from "./PodcastFigure/PodcastFigure";

import PodcastEpisodeList from "./PodcastEpisodeList/PodcastEpisodeList";
import "./page.scss";
import { getEpisodes } from "@/services/getEpisodes";

function PodcastDetail({ params }: { params: { id: string } }) {
  const { episodes } = getEpisodes();

  const episode = episodes.find(
    (matchingEpisode) => matchingEpisode.id === params.id
  );

  return (
    <Dashboard loading={false}>
      {!episode && <h1>Podcast Not Found</h1>}
      {episode && (
        <div className="podcast-episodes-container">
          <PodcastFigure
            title={episode.title}
            artist={episode.artist}
            description={episode.description}
            params={params}
          />
          {/* It's necessary to pass the object params since it will be used to redirect to the correct podcast when navigating */}
          <PodcastEpisodeList
            podcastEpisodes={episode.episodes}
            params={params}
          />
        </div>
      )}
    </Dashboard>
  );
}

export default PodcastDetail;
