import { Podcast } from "@/hooks/usePodcasts";
import PodcastCard from "../PodcastCard/PodcastCard";
import { StyledPodcastCard } from "../PodcastCard/StyledPodcastCard";
import "./PodcastOverview.scss";
import PodcastList from "../PodcastList/PodcastList";

function PodcastOverview({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default PodcastOverview;
