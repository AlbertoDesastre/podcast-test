"use client";

import Dashboard from "../components/Dashboard/Dashboard";
import PodcastEpisode from "./PodcastEpisodeList/PodcastEpisodeList";
import constants from "@/constants.json";

function getPodcastEpisodes() {
  return fetch(
    constants.URLs.allOrigin +
      `${encodeURIComponent(constants.URLs.podcastEpisodes)}`
  ).then((response) => response.json());
}

function PodcastDetails() {
  const podcastEpisodes = getPodcastEpisodes();
  return (
    <Dashboard loading={true}>
      <h1>This is some page</h1>
      <PodcastEpisode></PodcastEpisode>
    </Dashboard>
  );
}

export default PodcastDetails;
