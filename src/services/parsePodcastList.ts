import { Podcast, Podcasts } from "@/hooks/usePodcasts";

function parsePodcastList(rawPodcasts: string): Podcast[] {
  console.log(rawPodcasts);
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
