import { Podcast } from "./getPodcasts";

export type Podcasts = {
  expirationDate: Date;
  data: {
    status: Object;
    contents: {
      feed: {
        entry: Array<{
          id: { attributes: { "im:id": string } };
          "im:name": { label: string };
          "im:artist": { label: string };
          "im:image": Array<{
            attributes: { height: string };
            label: string;
          }>;
        }>;
      };
    };
  };
};

function parsePodcastList(rawPodcasts: string): Podcast[] {
  // console.log(rawPodcasts);
  let podcastsUnformatted = JSON.parse(rawPodcasts);

  const rawPodcastList: Podcasts = {
    data: {
      contents: JSON.parse(podcastsUnformatted.data.contents),
      status: podcastsUnformatted.data.status,
    },
    expirationDate: podcastsUnformatted.expirationDate,
  };

  const podcastEntries = rawPodcastList.data.contents.feed.entry.map(
    (podcast) => {
      return {
        id: podcast.id.attributes["im:id"],
        title: podcast["im:name"].label,
        artist: podcast["im:artist"].label,
        images: [...podcast["im:image"]],
      };
    }
  );

  return podcastEntries;
}

export { parsePodcastList };
