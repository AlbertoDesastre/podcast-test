import { StyledEpisodeSummary } from "./StyledEpisodeSummary";

function EpisodeSummary({
  title,
  summary,
  audio,
  episodeId,
}: {
  title: string;
  summary: string;
  audio: string;
  episodeId: string;
}) {
  return (
    <StyledEpisodeSummary>
      <p>{title}</p>
      <p>{summary}</p>
      <p>{audio}</p>
      <p>{episodeId}</p>
    </StyledEpisodeSummary>
  );
}

export default EpisodeSummary;
