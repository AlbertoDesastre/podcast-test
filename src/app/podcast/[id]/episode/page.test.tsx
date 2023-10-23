import React from "react";
import { render } from "@testing-library/react";
import PodcastDetail from "./page";
import { podcastEpisodes } from "@/assets";
import PodcastEpisode from "./page";

describe("PODCAST EPISODE - (page --> episode)", () => {
  test("should render the placeholder text when accessed forcefully", () => {
    const params = { id: "90790" };
    const view = render(<PodcastEpisode />);

    expect(
      view.getByText(/Oh, hello. How did you get here?/i)
    ).toBeInTheDocument();
  });
});
