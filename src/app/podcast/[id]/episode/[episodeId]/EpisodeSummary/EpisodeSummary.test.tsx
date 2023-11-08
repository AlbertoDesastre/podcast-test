import { prettyDOM, render } from "@testing-library/react";
import EpisodeSummary from "./EpisodeSummary";
import { episodesDetail } from "@/assets";

// should have checked the redirection also, and check if all the properties passed are there
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
        //  CORRECT THIS --> params: { id: string; episodeId: string }
      />
    );

    // console.log(prettyDOM(view.container));

    expect(view.queryByText("Rock Music Podcast")).toBeInTheDocument(); // title equivalent to the one rendered above
  });
});
