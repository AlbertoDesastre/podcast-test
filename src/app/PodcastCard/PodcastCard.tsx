import { Podcast } from "@/hooks/usePodcasts";

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <article>
      <img alt="podcast-image" src={podcast.images[2].label}></img>
      <ul>
        <li>
          <h2>{podcast.title}</h2>
        </li>
        <li>
          <p>Author: {podcast.artist}</p>
        </li>
      </ul>
    </article>
  );
}

export default PodcastCard;
