import { Podcast } from "@/services/getPodcasts";
import { StyledPodcastCard } from "./StyledPodcastCard";
import Link from "next/link";

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <StyledPodcastCard>
      <article>
        {/* previously, to make the route I used a constant. That's a good idea for ongoing projects, but since this one it's going to be
         finished and never touched again, I decided to change it slightly to make it easier to read.
         Old versiof of the routing -->   <Link key={podcast.id} href={constants.ROUTES["podcast-detail"] + `${podcast.id}`}> */}
        <Link key={podcast.id} href={`/podcast/${podcast.id}`}>
          <img alt="podcast-image" src="/assets/imgs/Podcast.jpg" />
          <div className="box-separator">
            <h2>{podcast.title}</h2>
            <h3>Author: {podcast.artist}</h3>
          </div>
        </Link>
      </article>
    </StyledPodcastCard>
  );
}

export default PodcastCard;
