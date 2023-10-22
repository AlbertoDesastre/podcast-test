import { Podcast } from "@/hooks/usePodcasts";
import { useState, ChangeEvent } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";

function FilterPodcast({ podcasts }: { podcasts: Podcast[] }) {
  const [filter, setFilter] = useState("");
  const [matchingPodcasts, setMatchingPodcasts] = useState(podcasts);

  function filterByTitleAndName({
    textToFind,
    podcastArray,
  }: {
    textToFind: string;
    podcastArray: Podcast[];
  }) {
    const filteredPodcasts = podcastArray.filter((podcast) => {
      const title = podcast.title.toLowerCase();
      const artist = podcast.artist.toLowerCase();
      const matchingText = textToFind.toLowerCase();

      return title.includes(matchingText) || artist.includes(matchingText);
    });

    return filteredPodcasts;
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    console.log(event.target.value);

    if (event.target.value === "") {
      setMatchingPodcasts(podcasts);
    } else {
      setMatchingPodcasts(
        filterByTitleAndName({
          textToFind: filter,
          podcastArray: podcasts,
        })
      );
    }
  };

  return (
    <>
      <input
        data-test-id="filter-input"
        type="text"
        value={filter}
        onChange={handleInputChange}
      ></input>

      {matchingPodcasts.map((podcast) => {
        return <PodcastCard key={podcast.id} podcast={podcast} />;
      })}
    </>
  );
}

export default FilterPodcast;