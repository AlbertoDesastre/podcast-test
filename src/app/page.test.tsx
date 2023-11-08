import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "./page";
import { podcastsTemplate } from "@/assets";
import { Podcast } from "@/services/getPodcasts";

describe("HOME", () => {
  let mockPodcasts: Podcast[] = podcastsTemplate;
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  // NOTE FOR SELF IMPROVEMENT --> use "screen" methods instead of selecting the container. Recommendation from Kent C. Dodds.

  // The benefit of using screen is you no longer need to keep the render call destructure up-to-date as you add/remove the queries you need.
  // You only need to type screen. and let your editor's magic autocomplete take care of the rest.

  test("should render <main> tag, owned by Dashboard component", () => {
    render(<Home />);

    // main it's rendered on Dashboard component
    const main = screen.queryByRole("main");

    // console.log(prettyDOM(li as HTMLElement));
    expect(main).toBeInTheDocument();
  });

  /* 
  NOTE FOR SELF IMPROVEMENT --> These tests should be modified in order to check how the components reacts to having/not having cached podcasts and other behaviours.

  test("usePodcast should fetch only if there is nothing on cache", () => {
    render(<Home />);
    expect(usePodcastSpy).toHaveBeenCalled();
    expect(usePodcastSpy).toHaveBeenCalledTimes(1);
  });
  
 test("usePodcast should fetch only if there is nothing on cache", () => {
    // this how the app will start, with absolutely nothing saved on cache
    const emptyPodcasts = cacheModule.getCache({
      storageName: constants.PODCAST_NAMING.list,
    });
    expect(emptyPodcasts).toMatchObject({
      data: null,
      expirated: true,
      expirationDate: null,
    });

    // I force in this test the case where the uses come another day and he has already a cached version of podcasts
    cacheModule.saveOnCache({
      storageName: constants.PODCAST_NAMING.list,
      data: [{}],
      expirationDate: new Date(),
    });
    const cachedPocasts = cacheModule.getCache({
      storageName: constants.PODCAST_NAMING.list,
    });

    expect(cachedPocasts).toMatchObject({
      data: [{}],
      expirated: expect.any(Boolean),
      expirationDate: expect.any(Date),
    });
    jest.clearAllMocks();

    render(<Home />);

    expect(usePodcastSpy).toHaveBeenCalled();
    expect(usePodcastSpy).toHaveBeenCalledTimes(1);
  }); */
});
