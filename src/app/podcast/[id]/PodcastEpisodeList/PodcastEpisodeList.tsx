import Link from "next/link";
import { PodcastEpisode } from "../page";
import { StyledPodcastEpisodeList } from "./StyledPodcastEpisodeList";

function PodcastEpisodeList({
  podcastEpisodes,
}: {
  podcastEpisodes: PodcastEpisode[];
}) {
  return (
    <StyledPodcastEpisodeList>
      <h1>Episodes: {podcastEpisodes.length}</h1>

      <div className="table-container">
        <table>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>

          {podcastEpisodes.map((episode) => {
            return (
              <tr
                key={episode.episodeTitle + episode.date + episode.episodeTitle}
              >
                <td>
                  <Link href={`/podcast/1/episode/`}>
                    {episode.episodeTitle}
                  </Link>
                </td>
                <td> {episode.date}</td>
                <td> {episode.duration}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </StyledPodcastEpisodeList>
  );
}

export default PodcastEpisodeList;
