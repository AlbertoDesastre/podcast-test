import { StyledPodcasFigure } from "./StyledPodcastFigure";

function PodcastFigure({
  title,
  artist,
  description,
}: {
  title: string;
  artist: string;
  description: string;
}) {
  return (
    <StyledPodcasFigure className="podcast-figure">
      <img alt="podcast-image" src="/assets/imgs/Podcast.jpg" />
      <div className="artist-and-title-container">
        <h2> {title}</h2>
        <h3>by {artist}</h3>
      </div>
      <div className="description-container">
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    </StyledPodcasFigure>
  );
}

export default PodcastFigure;
