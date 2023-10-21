import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";
import { StyledPodcastCard } from "../PodcastCard/StyledPodcastCard";
import "./PodcastList.scss";

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const podcastAreLoaded = podcasts[0];

  return (
    <section>
      <ul className="podcast-list">
        {podcastAreLoaded &&
          podcasts.map((podcast) => {
            return (
              <StyledPodcastCard key={podcast.id}>
                <PodcastCard podcast={podcast} />
              </StyledPodcastCard>
            );
          })}
      </ul>
    </section>
  );
}

export default PodcastList;
