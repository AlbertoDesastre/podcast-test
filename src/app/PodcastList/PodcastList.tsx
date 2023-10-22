import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";
import { StyledPodcastCard } from "../PodcastCard/StyledPodcastCard";
import "./PodcastList.scss";
import Filter from "../Filter/Filter";

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const podcastAreLoaded = podcasts[0];

  return (
    <section>
      <ul className="podcast-list">
        {podcastAreLoaded && (
          // Filter component is in charge of rendering a <PodcastCard> based on the consumer search (we are filtering Podcast names & titles)
          <Filter
            dataToFilter={podcasts}
            renderComponent={(podcasts: Podcast[]) => {
              return podcasts.map((podcast) => {
                return <PodcastCard key={podcast.id} podcast={podcast} />;
              });
            }}
          ></Filter>
        )}
      </ul>
    </section>
  );
}

export default PodcastList;
