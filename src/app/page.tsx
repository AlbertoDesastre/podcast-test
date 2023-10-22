"use client";

import Dashboard from "./Dashboard/Dashboard";
import PodcastList from "./PodcastList/PodcastList";
import "../styles/index.scss";
import { usePodcasts } from "@/hooks/usePodcasts";
import constants from "../constants.json";

export default function Home() {
  // since a loading element has to be shown on HTML owned by dashboard, we have to look for the podcast right at the beginning
  // and then passing to the components needed.

  const { podcasts, loading } = usePodcasts(
    constants.URLs.allOrigin +
      `${encodeURIComponent(constants.URLs.podcastList)}`
  );

  return (
    <Dashboard loading={loading}>
      <PodcastList podcasts={podcasts}></PodcastList>
    </Dashboard>
  );
}
