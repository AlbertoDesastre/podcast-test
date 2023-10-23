function PodcastFigure({
  title,
  artist,
  description,
}: {
  title: string;
  artist: string;
  description: string;
}) {
  return (
    <section>
      <img alt="podcast-image" src="/assets/imgs/Podcast.jpg" />
      <h2> {title}</h2>
      <h3>{artist}</h3>
      <p>{description}</p>
    </section>
  );
}

export default PodcastFigure;
