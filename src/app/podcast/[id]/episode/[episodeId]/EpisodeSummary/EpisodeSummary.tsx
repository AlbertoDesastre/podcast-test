import { StyledEpisodeSummary } from "./StyledEpisodeSummary";
import DOMPurify from "dompurify";

function EpisodeSummary({
  title,
  summary,
  audio,
  params,
}: {
  title: string;
  summary: string;
  audio: string;
  params: { id: string; episodeId: string };
}) {
  const sanitizedSummary = DOMPurify.sanitize(summary);
  console.log("log desde Episode summary --> ", params);

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
