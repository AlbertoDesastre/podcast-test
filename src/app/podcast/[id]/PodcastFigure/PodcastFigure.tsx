import Link from "next/link";
import { StyledPodcasFigure } from "./StyledPodcastFigure";

function PodcastFigure({
  title,
  artist,
  description,
  episodeId,
}: {
  title: string;
  artist: string;
  description: string;
  episodeId: string;
}) {
  // console.log(episodeId);

  return (
    <StyledPodcasFigure className="podcast-figure">
      <Link href={`/podcast/${episodeId}`}>
        <img alt="podcast-image" src="/assets/imgs/Podcast.jpg" />
      </Link>
      <div className="artist-and-title-container">
        <Link href={`/podcast/${episodeId}`}>
          <h2> {title}</h2>
        </Link>
        <Link href={`/podcast/${episodeId}`}>
          <h3>by {artist}</h3>
        </Link>
      </div>
      <div className="description-container">
        <h4>Description:</h4>
        <p>{description} </p>
      </div>
    </StyledPodcasFigure>
  );
}

export default PodcastFigure;
