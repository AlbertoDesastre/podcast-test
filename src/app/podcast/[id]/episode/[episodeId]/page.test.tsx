import { render } from "@testing-library/react";
import EpisodeDetail from "./page";

describe("PODCAST SUMMARY - (page --> episode/[episodeId]", () => {
  test("should render components when episodesDetail is truthy", () => {
    const view = render(<EpisodeDetail params={{ id: "1", episodeId: "1" }} />);

    expect(view.getByText("Podcaster")).toBeInTheDocument();
  });
});
