import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import { fetchAndCache } from "@/services/fetchAndCache";
import { PODCAST_NAMING } from "@/types";
import { useEffect, useMemo, useState } from "react";

type Podcast = {
  id: string;
  title: string;
  artist: string;
  images: Array<{
    attributes: { height: string };
    label: string;
  }>;
};

export interface Podcasts {
  expirationDate: Date;
  data: {
    status: Object;
    contents: {
      feed: {
        entry: Array<{
          id: { attributes: { "im:id": string } };
          "im:name": { label: string };
          "im:artist": { label: string };
          "im:image": Array<{
            attributes: { height: string };
            label: string;
          }>;
        }>;
      };
    };
  };
}

export interface usePodcastResponse {
  podcasts: Podcast[] | null;
  loading: boolean;
}

function usePodcasts(url: string): usePodcastResponse {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<Podcast[] | null>(null);

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

function parsePodcastList(rawPodcasts: string): Podcast[] {
  let podcastsUnformatted = JSON.parse(rawPodcasts);

  const rawPodcastList: Podcasts = {
    data: {
      contents: JSON.parse(podcastsUnformatted.data.contents),
      status: podcastsUnformatted.data.status,
    },
    expirationDate: podcastsUnformatted.expirationDate,
  };

  const podcastEntries = rawPodcastList.data.contents.feed.entry.map(
    (podcast) => {
      return {
        id: podcast.id.attributes["im:id"],
        title: podcast["im:name"].label,
        artist: podcast["im:artist"].label,
        images: [...podcast["im:image"]],
      };
    }
  );

  return podcastEntries;
}

export { usePodcasts };
