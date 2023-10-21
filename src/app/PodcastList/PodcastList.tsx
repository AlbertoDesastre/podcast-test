import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";

function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  const podcastAreLoaded = podcasts[0];

  return (
    <section>
      {podcastAreLoaded &&
        podcasts.map((podcast) => {
          return <PodcastCard key={podcast.id} podcast={podcast} />;
        })}
    </section>
  );
}

export default PodcastList;
