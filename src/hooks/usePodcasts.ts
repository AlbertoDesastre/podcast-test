import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import { useFetch } from "./useFetch";
import { PODCAST_NAMING } from "@/types";
import { useEffect, useMemo, useState } from "react";

function usePodcasts(url: string) {
  const {
    data: cachedPodcasts,
    expirationDate,
    expirated,
  } = getCache({
    storageName: PODCAST_NAMING.LIST,
  });

  const { data: podcasts, loading } = useFetch("");

  saveOnCache({
    storageName: PODCAST_NAMING.LIST,
    data: [],
    expirationDate: new Date(),
  });

  return { podcasts, loading };
}

export { usePodcasts };
