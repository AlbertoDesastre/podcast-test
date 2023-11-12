import { useState, ChangeEvent, useEffect } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import "./PodcastList.scss";
import { Podcast } from "@/services/getPodcasts";
import useFilterPodcasts from "./useFilterPodcast";

// this could have been it's own hook, and export all the necessary functions, setters, and etc...

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const { filterByNameAndTitle, matchingPodcasts, podcastCount } =
    useFilterPodcasts({ podcasts });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    // console.log(event.target.value);

    filterByNameAndTitle({ search });
  };

  return (
    <>
      <header className="filter-header">
        <span>{podcastCount}</span>
        <input
          data-testid="filter-input"
          type="text"
          onChange={handleInputChange}
          placeholder="Filter podcasts..."
        ></input>
      </header>

      <ul className="podcast-list">
        {matchingPodcasts.map((podcast) => {
          return <PodcastCard key={podcast.id} podcast={podcast} />;
        })}
      </ul>
    </>
  );
}

export default PodcastList;
