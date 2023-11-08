"use client";

import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import PodcastList from "./components/PodcastList/PodcastList";
import { useState, useEffect } from "react";
import { Podcast, getPodcasts } from "@/services/getPodcasts";
import { isApiDown } from "@/services/isApiDown";
import constants from "@/constants.json";
import "../styles/index.scss";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const { podcastsList } = getPodcasts();
    setPodcasts(podcastsList);
    setLoading(false);
    /*     
uncomment this line to check wether the API it's still down or not
isApiDown(
      constants.URLs.allOrigin +
        encodeURIComponent(`${constants.URLs.podcastList}`)
    ); */
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
