"use client";

import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import "../styles/index.scss";

import constants from "../constants.json";
import PodcastList from "./components/PodcastList/PodcastList";

import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import { podcastsLongTemplate } from "@/assets";
import { useState, useEffect } from "react";

export type Podcast = {
  id: string;
  title: string;
  artist: string;
  images: Array<{
    attributes: { height: string };
    label: string;
  }>;
};

// this is the fake version that doesn't call the real API. Correct this based on "usePodcast" custom hook
function getPodcasts() {
  const { data, expirated } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  if (!data || (data && expirated === true)) {
    localStorage.removeItem(constants.PODCAST_NAMING.list);
    saveOnCache({
      storageName: constants.PODCAST_NAMING.list,
      data: podcastsLongTemplate,
      expirationDate: new Date(),
    });
  }

  const { data: cachedPodcasts } = getCache({
    storageName: constants.PODCAST_NAMING.list,
  });

  return { podcastsList: cachedPodcasts as Podcast[] };
}

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
