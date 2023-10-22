import "@testing-library/jest-dom";
import { fireEvent, prettyDOM, render } from "@testing-library/react";

import PodcastList from "../PodcastList/PodcastList";
import { Podcast } from "@/hooks/usePodcasts";
import { podcastsTemplate } from "@/assets";
import Filter from "./Filter";
import PodcastCard from "../PodcastCard/PodcastCard";

describe("PODCAST LIST", () => {
  let mockPodcasts: Podcast[] = podcastsTemplate;

  test("should render an input", () => {
    const view = render(
      <Filter
        dataToFilter={mockPodcasts}
        renderComponent={() => {
          return;
        }}
      />
    );
    // console.log(prettyDOM(view.container));
    const input = view.container.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  test("should render a child component via render Props, and send some props to it's Children", () => {
    // the objective is to verify that every time a consumer filters the name/title of the podcast they want
    // they only get the <PodcastCard> that meet it's criteriah. Firstly we want to make sure that the number of
    // <PodcastCard> render matches with the props we are passing.

    const view = render(
      <Filter
        dataToFilter={mockPodcasts}
        renderComponent={(mockPodcasts: Podcast[]) => {
          return mockPodcasts.map((podcast) => {
            return <PodcastCard key={podcast.id} podcast={podcast} />;
          });
        }}
      ></Filter>
    );
    console.log(prettyDOM(view.container));
    const img = view.container.querySelectorAll("img");
    expect(img.length).toEqual(mockPodcasts.length);
  });

  /*   test("should render only Childs that meet the filter applied", () => {
    const view = render(
      <Filter
        dataToFilter={mockPodcasts}
        renderComponent={(mockPodcasts: Podcast[]) => {
          return mockPodcasts.map((podcast) => {
            return <PodcastCard key={podcast.id} podcast={podcast} />;
          });
        }}
      ></Filter>
    );

    const input = view.container.querySelector("input");
    fireEvent.change(input as HTMLInputElement, {
      target: { value: "Comedy Hour" },
    });

    // this two Podcast titles matches the one present in "mockPodcasts"
    const podcastFound = view.getByText(/Comedy Hour/i);
    const notFoundPodcast = view.getByText(/Health and Wellness Tips/i);

    console.log(prettyDOM(view.container));

    expect(podcastFound).toBeInTheDocument();
    expect(notFoundPodcast).toBeNull();
  }); */
});
