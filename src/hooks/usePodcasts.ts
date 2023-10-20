import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import { fetchAndCache } from "@/services/fetchAndCache";

import { PODCAST_NAMING } from "@/types";
import { useEffect, useMemo, useState } from "react";

function usePodcasts(url: string) {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<Object | null>(null);

  useEffect(() => {
    const { data: cachedPodcasts, expirated } = getCache({
      storageName: PODCAST_NAMING.LIST,
    });

    if (cachedPodcasts != null || expirated === false) {
      setPodcasts(cachedPodcasts);
      setLoading(false);
    } else {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((rawData) => {
          saveOnCache({
            storageName: PODCAST_NAMING.LIST,
            data: rawData,
            expirationDate: new Date(),
          });
          setPodcasts(rawData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [url]);

  return { podcasts, loading };
}

export { usePodcasts };
