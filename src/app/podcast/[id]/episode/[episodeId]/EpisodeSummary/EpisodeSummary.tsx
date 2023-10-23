import { StyledEpisodeSummary } from "./StyledEpisodeSummary";

function EpisodeSummary({
  title,
  summary,
  audio,
}: {
  title: string;
  summary: string;
  audio: string;
}) {
  return <StyledEpisodeSummary></StyledEpisodeSummary>;
}

export default EpisodeSummary;
