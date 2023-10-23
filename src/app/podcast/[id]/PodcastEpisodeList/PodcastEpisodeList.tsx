import Link from "next/link";
import { PodcastEpisode } from "../page";
import { StyledPodcastEpisodeList } from "./StyledPodcastEpisodeList";

function PodcastEpisodeList({
  podcastEpisodes,
}: {
  podcastEpisodes: PodcastEpisode[];
}) {
  // console.log(podcastEpisodes);

  return (
    <StyledPodcastEpisodeList>
      <h1>Episodes: {podcastEpisodes.length}</h1>

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>

            {podcastEpisodes.map((episode) => {
              return (
                <tr key={episode.id}>
                  <td>
                    <Link href={`/podcast/1/episode/${episode.id}`}>
                      {episode.episodeTitle}
                    </Link>
                  </td>
                  <td> {episode.date}</td>
                  <td> {episode.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledPodcastEpisodeList>
  );
}

export default PodcastEpisodeList;
