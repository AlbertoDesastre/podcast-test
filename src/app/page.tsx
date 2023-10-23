"use client";

import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import PodcastList from "./components/PodcastList/PodcastList";
import { useState, useEffect } from "react";
import { Podcast, getPodcasts } from "@/services/getPodcasts";
import "../styles/index.scss";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const { podcastsList } = getPodcasts();
    setPodcasts(podcastsList);
    setLoading(false);
  }, []);

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
