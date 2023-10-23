import { prettyDOM, render } from "@testing-library/react";
import EpisodeSummary from "./EpisodeSummary";
import { episodesDetail } from "@/assets";

describe("EPISODE DETAI - (page --> episode/[episodeId]", () => {
  const mockEpisodeSummary = episodesDetail[0];

  // console.log(mockEpisodeSummary);

  test("should render the content passed by props", () => {
    const view = render(
      <EpisodeSummary
        title={mockEpisodeSummary.title}
        summary={mockEpisodeSummary.summary}
        audio={mockEpisodeSummary.audio}
        episodeId={mockEpisodeSummary.id}
      />
    );

    // console.log(prettyDOM(view.container));

    expect(view.queryByText("Rock Music Podcast")).toBeInTheDocument(); // title equivalent to the one rendered above
  });
});
