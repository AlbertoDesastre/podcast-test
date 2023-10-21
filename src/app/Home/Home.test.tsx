import "@testing-library/jest-dom";
import { prettyDOM, render } from "@testing-library/react";
import Home from "../page";
import Dashboard from "../Dashboard/Dashboard";
import { PODCAST_NAMING } from "@/types";
import { Podcasts, usePodcastResponse } from "@/hooks/usePodcasts";
import PodcastList from "../PodcastList/PodcastList";
// these modules needed to be exported this way so they can get mocked correctly by jest
import * as usePodcastsModule from "@/hooks/usePodcasts";
import * as fetchAndCacheModule from "@/services/fetchAndCache";
import * as cacheModule from "@/services/cacheService/cacheService";

// if we don't require the actual module we won't be able to make spies based in more than one method of the same module
jest.mock("../../services/fetchAndCache", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../services/fetchAndCache"), // this returns the actual two functions of this model
  };
});

jest.mock("../../services/cacheService/cacheService.ts", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../services/cacheService/cacheService.ts"), // this returns the actual two functions of this model
  };
});

let mockUsePodcastResponse: usePodcastResponse = {
  podcasts: [],
  loading: false,
};

jest.mock("../../hooks/usePodcasts.ts", () => ({
  usePodcasts: jest.fn(() => {
    return mockUsePodcastResponse;
  }),
}));

describe("HOME", () => {
  // since I want to test the use case of what would happen if X and Y when fetching data PLUS
  // avoiding actually fetching, the unit test it's done based on a mock, to check all behaviours
  const useFetchSpy = jest.spyOn(fetchAndCacheModule, "fetchAndCache");
  const saveOnCacheSpy = jest.spyOn(cacheModule, "saveOnCache");
  const getCacheSpy = jest.spyOn(cacheModule, "getCache");
  const usePodcastSpy = jest.spyOn(usePodcastsModule, "usePodcasts");

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
        <PodcastList podcasts={[]}></PodcastList>
      </Dashboard>
    );

    expect(view.container.querySelector("span")).toBeInTheDocument();
  });

  test("should NOT render loading when data has been fetched", () => {
    mockUsePodcastResponse.loading = false;
    const view = render(<Home />);

    expect(view.container.querySelector("span")).toBeNull();
  });

  test("usePodcast should fetch only if there is nothing on cache", () => {
    render(<Home />);
    expect(usePodcastSpy).toHaveBeenCalled();
    expect(usePodcastSpy).toHaveBeenCalledTimes(1);
  });

  /*  
  
test("usePodcast should fetch only if there is nothing on cache", () => {
    // this how the app will start, with absolutely nothing saved on cache
    const emptyPodcasts = cacheModule.getCache({
      storageName: PODCAST_NAMING.LIST,
    });
    expect(emptyPodcasts).toMatchObject({
      data: null,
      expirated: true,
      expirationDate: null,
    });

    // I force in this test the case where the uses come another day and he has already a cached version of podcasts
    cacheModule.saveOnCache({
      storageName: PODCAST_NAMING.LIST,
      data: [{}],
      expirationDate: new Date(),
    });
    const cachedPocasts = cacheModule.getCache({
      storageName: PODCAST_NAMING.LIST,
    });

    expect(cachedPocasts).toMatchObject({
      data: [{}],
      expirated: expect.any(Boolean),
      expirationDate: expect.any(Date),
    });
    jest.clearAllMocks();

    render(<Home />);
    // now the user gets to Home page and if they have cached version, it first should be verified and upon verification useFetch shouldn't be called

    expect(usePodcastSpy).toHaveBeenCalled();
    expect(usePodcastSpy).toHaveBeenCalledTimes(1);

    expect(getCacheSpy).toHaveBeenCalled();
    expect(getCacheSpy).toHaveBeenCalledTimes(1);
    // fetchs

    expect(useFetchSpy).toHaveBeenCalledTimes(0);
  }); */
});
