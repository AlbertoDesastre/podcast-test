"use client";

import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import "../styles/index.scss";
import { usePodcasts } from "@/hooks/usePodcasts";
import constants from "../constants.json";
import PodcastList from "./components/PodcastList/PodcastList";
import Link from "next/link";

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
