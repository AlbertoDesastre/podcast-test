import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";
import Home from "./page";
import Dashboard from "./components/Dashboard/Dashboard";
import PodcastOverview from "./components/PodcastOverview/PodcastOverview";
import PodcastList from "./components/PodcastList/PodcastList";

let mockUsePodcastResponse = {
  podcasts: [],
  loading: false,
};

describe("HOME", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("should render <main> tag, owned by Dashboard component", () => {
    const view = render(<Home />);

    // main it's rendered on Dashboard component
    const main = view.container.querySelector("main");

    // console.log(prettyDOM(li as HTMLElement));
    expect(main).toBeInTheDocument();
  });

  test("should render loading if the data still fetching", () => {
    mockUsePodcastResponse.loading = true;
    const view = render(
      <Dashboard loading={true}>
        <PodcastOverview>
          <PodcastList podcasts={[]}></PodcastList>
        </PodcastOverview>
      </Dashboard>
    );

    expect(view.container.querySelector("span")).toBeInTheDocument();
  });

  test("should NOT render loading when data has been fetched", () => {
    mockUsePodcastResponse.loading = false;
    const view = render(<Home />);

    const span = view.container.querySelectorAll("span");
    expect(span.length).toEqual(1); // only one span should render, and that's the counter from PodcastOverview
  });

  /* 
These tests are outdated since the custom hook "usePodcast" doesn't exists anymore

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
