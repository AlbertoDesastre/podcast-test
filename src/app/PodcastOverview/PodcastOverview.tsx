import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";
import { StyledPodcastCard } from "../PodcastCard/StyledPodcastCard";
import "./PodcastOverview.scss";
import PodcastList from "../PodcastList/PodcastList";

function PodcastOverview({ podcasts }: { podcasts: Podcast[] }) {
  const podcastAreLoaded = podcasts[0];

  return (
    <section>{podcastAreLoaded && <PodcastList podcasts={podcasts} />}</section>
  );
}

export default PodcastOverview;
