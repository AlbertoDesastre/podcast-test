import Link from "next/link";

import { StyledPodcastEpisodeList } from "./StyledPodcastEpisodeList";
import { PodcastEpisode } from "@/services/getEpisodes";

function PodcastEpisodeList({
  podcastEpisodes,
  params,
}: {
  podcastEpisodes: PodcastEpisode[];
  params: { id: string };
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
                    <Link href={`/podcast/${params.id}/episode/${episode.id}`}>
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
