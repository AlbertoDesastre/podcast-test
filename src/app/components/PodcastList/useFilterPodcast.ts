import { Podcast } from "@/services/getPodcasts";
import { useEffect, useState } from "react";

export default function useFilterPodcasts({
  podcasts,
}: {
  podcasts: Podcast[];
}) {
  const [matchingPodcasts, setMatchingPodcasts] = useState<Podcast[]>([]);
  const [podcastCount, setPodcastCount] = useState(0);

  const filterByNameAndTitle = ({ search }: { search: string }) => {
    const filteredPodcasts = podcasts.filter((podcast) => {
      const title = podcast.title.toLowerCase();
      const artist = podcast.artist.toLowerCase();
      const matchingText = search.toLowerCase();

      return title.includes(matchingText) || artist.includes(matchingText);
    });

    setMatchingPodcasts(filteredPodcasts);
    setPodcastCount(filteredPodcasts.length);
  };

  // when the components gets rendered the first time I want to execute the function so the user has the "default" podcasts
  useEffect(() => {
    filterByNameAndTitle({ search: "" });
  }, []);

  return { filterByNameAndTitle, matchingPodcasts, podcastCount };
}
