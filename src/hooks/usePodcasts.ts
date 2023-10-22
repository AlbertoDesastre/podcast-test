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
      /* 
      
      TAKE THIS OFF ONCE API IS UP!!

      Right now Apple API it's not working and I still need to work on the development. I will simulate the API response for now.
      fetchAndCache({ url, cacheName: PODCAST_NAMING.LIST }); 
      */
    }

    /*    
        TAKE THIS OFF ONCE API IS UP!!

    const podcastList = parsePodcastList(
      localStorage.getItem(PODCAST_NAMING.LIST) as string
    ); 

    setPodcasts(podcastList);
    
    */

    saveOnCache({
      storageName: constants.PODCAST_NAMING.list,
      data: podcastsTemplate,
      expirationDate: new Date(),
    });

    setPodcasts(cachedPodcasts as Podcast[]);

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
