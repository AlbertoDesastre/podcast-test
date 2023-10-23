import { Podcast } from "@/services/getPodcasts";
import { StyledPodcastCard } from "./StyledPodcastCard";

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <StyledPodcastCard>
      <article>
        {/*
          Since the real API it's down I will place a hardcoded image
          
          <img alt="podcast-image" src={podcast.images[2].label}></img> */}
        <img alt="podcast-image" src="/assets/imgs/Podcast.jpg" />
        <div className="box-separator">
          <h2>{podcast.title}</h2>
          <h3>Author: {podcast.artist}</h3>
        </div>
      </article>
    </StyledPodcastCard>
  );
}

export default PodcastCard;
