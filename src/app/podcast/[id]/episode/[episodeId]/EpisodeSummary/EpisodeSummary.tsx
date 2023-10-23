import { StyledEpisodeSummary } from "./StyledEpisodeSummary";
import DOMPurify from "dompurify";

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
  const sanitizedSummary = DOMPurify.sanitize(summary);
  return (
    <StyledEpisodeSummary>
      <h2>{title}</h2>
      <p>{sanitizedSummary}</p>
      <audio
        controls
        src={audio ? audio : "/assets/audio/intro_pocoyo.mp3"}
      ></audio>
    </StyledEpisodeSummary>
  );
}

export default EpisodeSummary;
