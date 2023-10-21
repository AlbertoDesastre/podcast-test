"use client";

import Dashboard from "./Dashboard/Dashboard";
import PodcastList from "./PodcastList/PodcastList";
import "../styles/index.scss";
import { usePodcasts } from "@/hooks/usePodcasts";
import { URLS } from "@/types";

export default function Home() {
  // since a loading element has to be shown on HTML owned by dashboard, we have to look for the podcast right at the beginning
  // and then passing to the components needed.

  const { podcasts, loading } = usePodcasts(
    URLS.ALL_ORIGIN + `${encodeURIComponent(URLS.PODCAST_LIST)}`
  );

  console.log(podcasts);

  return (
    <Dashboard loading={loading}>
      <PodcastList podcasts={podcasts}></PodcastList>
    </Dashboard>
  );
}
