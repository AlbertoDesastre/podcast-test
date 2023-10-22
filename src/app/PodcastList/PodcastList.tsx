import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";
import { StyledPodcastCard } from "../PodcastCard/StyledPodcastCard";
import "./PodcastList.scss";
import FilterPodcast from "../Filter/Filter";

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const podcastAreLoaded = podcasts[0];

  return (
    <section>
      <ul className="podcast-list">
        {podcastAreLoaded && <FilterPodcast podcasts={podcasts} />}
      </ul>
    </section>
  );
}

export default PodcastList;
