import { PodcastEpisode } from "../page";

function PodcastEpisodeList({
  podcastEpisodes,
}: {
  podcastEpisodes: PodcastEpisode[];
}) {
  return (
    <section>
      <h3>Episodes: {podcastEpisodes.length}</h3>
      <article>
        <header>
          <h4>Title</h4>
          <h4>Date</h4>
          <h4>Duration</h4>
        </header>

        <ul>
          {podcastEpisodes.map((episode) => {
            return (
              <li
                key={episode.episodeTitle + episode.date + episode.episodeTitle}
              >
                <p> {episode.episodeTitle}</p>
                <p> {episode.duration}</p>
                <p> {episode.date}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default PodcastEpisodeList;
