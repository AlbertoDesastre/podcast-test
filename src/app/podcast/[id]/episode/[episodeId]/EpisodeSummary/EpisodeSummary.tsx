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
  console.log("this is the episode id you are working with -->", episodeId);

  return (
    <StyledEpisodeSummary>
      <h2>{title}</h2>
      <p>
        {summary} + {"This is the episode you are in --> " + episodeId}
      </p>
      <audio
        controls
        src={audio ? audio : "/assets/audio/intro_pocoyo.mp3"}
      ></audio>
    </StyledEpisodeSummary>
  );
}

export default EpisodeSummary;
