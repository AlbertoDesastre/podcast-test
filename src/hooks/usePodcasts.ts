import { podcastsTemplate } from "@/assets";
import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import { fetchAndCache } from "@/services/fetchAndCache";
import constants from "@/constants.json";
import { useEffect, useMemo, useState } from "react";

export type Podcast = {
  id: string;
  title: string;
  artist: string;
  images: Array<{
    attributes: { height: string };
    label: string;
  }>;
};

export type Podcasts = {
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
};

export type usePodcastResponse = {
  podcasts: Podcast[] | [];
  loading: boolean;
};

function usePodcasts(url: string): usePodcastResponse {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<Podcast[] | []>([]);

  useEffect(() => {
    const { data: cachedPodcasts, expirated } = getCache({
      storageName: constants.PODCAST_NAMING.list,
    });

    //  console.log(expirated);

    // if there are no cachedPodcast or, there ARE but they are older than 24 hours... fetch it's coming :)
    if (!cachedPodcasts || (cachedPodcasts && expirated === true)) {
      localStorage.removeItem(constants.PODCAST_NAMING.list);

      fetchAndCache({ url, cacheName: constants.PODCAST_NAMING.list });
    }

    const podcastList = parsePodcastList(
      localStorage.getItem(constants.PODCAST_NAMING.list) as string
    );

    setPodcasts(podcastList);
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
