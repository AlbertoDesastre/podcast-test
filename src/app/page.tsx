"use client";

import Dashboard from "./Dashboard/Dashboard";
import PodcastOverview from "./PodcastOverview/PodcastOverview";
import "../styles/index.scss";
import { usePodcasts } from "@/hooks/usePodcasts";
import constants from "../constants.json";
import PodcastList from "./PodcastList/PodcastList";

export default function Home() {
  // since a loading element has to be shown on HTML owned by dashboard, we have to look for the podcast right at the beginning
  // and then passing to the components needed.

  const { podcasts, loading } = usePodcasts(
    constants.URLs.allOrigin +
      `${encodeURIComponent(constants.URLs.podcastList)}`
  );

  return (
    <Dashboard loading={loading}>
      {!loading && (
        <PodcastOverview>
          <PodcastList podcasts={podcasts} />
        </PodcastOverview>
      )}
    </Dashboard>
  );
}
