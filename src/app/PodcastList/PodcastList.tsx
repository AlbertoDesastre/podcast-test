import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";
import { StyledPodcastCard } from "../PodcastCard/StyledPodcastCard";
import FilterPodcast from "../Filter/Filter";

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const podcastAreLoaded = podcasts[0];

  return (
    <section>
      {podcastAreLoaded && <FilterPodcast podcasts={podcasts} />}
    </section>
  );
}

export default PodcastList;
