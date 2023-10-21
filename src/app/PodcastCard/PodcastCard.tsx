import { Podcast } from "@/hooks/usePodcasts";

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <article>
      <img alt="podcast-image" src={podcast.images[0].label}></img>

      <h2>{podcast.title}</h2>
      <p>Title: {podcast.artist}</p>
    </article>
  );
}

export default PodcastCard;
