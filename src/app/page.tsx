"use client";

import Dashboard from "./Dashboard/Dashboard";
import PodcastList from "./PodcastList/PodcastList";
import "../styles/index.scss";

export default function Home() {
  // since a loading element has to be shown on HTML owned by dashboard, we have to look for the podcast right at the beginning
  // and then passing to the components needed.

  /*   const { data, loading } = useFecth(
    URLS.ALL_ORIGIN + `${encodeURIComponent(URLS.PODCAST_LIST)}`
  ); */

  return (
    <Dashboard>
      <PodcastList podcasts={""}></PodcastList>
    </Dashboard>
  );
}
