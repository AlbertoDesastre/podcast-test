import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import { fetchAndCache } from "@/services/fetchAndCache";
import { PODCAST_NAMING } from "@/types";
import { useEffect, useMemo, useState } from "react";

type PodcastList = {
  expirationDate: Date;
  data: {
    status: Object;
    contents: string;
  };
};

function usePodcasts(url: string) {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<PodcastList | null>(null);

  useEffect(() => {
    const { data: cachedPodcasts, expirated } = getCache({
      storageName: PODCAST_NAMING.LIST,
    });

    //  console.log(expirated);

    // if there are no cachedPodcast or, there ARE but they are older than 24 hours... fetch it's coming :)
    if (!cachedPodcasts || (cachedPodcasts && expirated === true)) {
      localStorage.removeItem(PODCAST_NAMING.LIST);
      fetchAndCache({ url, cacheName: PODCAST_NAMING.LIST });
    }
    const podcastList = parsePodcastList(
      localStorage.getItem(PODCAST_NAMING.LIST) as string
    );

    setPodcasts(podcastList);
    setLoading(false);
  }, [url]);

  return { podcasts, loading };
}

function parsePodcastList(rawPodcasts: string): PodcastList {
  let podcastsUnformatted = JSON.parse(rawPodcasts);

  const podcastList = {
    data: {
      contents: JSON.parse(podcastsUnformatted.data.contents),
      status: podcastsUnformatted.data.status,
    },
    expirationDate: podcastsUnformatted.expirationDate,
  };

  return podcastList;
}

export { usePodcasts };
