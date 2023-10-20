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

    //  console.log(expirated);

    // if there are no cachedPodcast or, there ARE but they are older than 24 hours... fetch it's coming :)
    if (!cachedPodcasts || (cachedPodcasts && expirated === true)) {
      localStorage.removeItem(PODCAST_NAMING.LIST);
      fetchAndCache({ url, cacheName: PODCAST_NAMING.LIST });
    }

    setLoading(false);
  }, [url]);

  return { podcasts, loading };
}

export { usePodcasts };
