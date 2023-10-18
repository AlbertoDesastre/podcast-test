"use client";

import Dashboard from "./Dashboard/Dashboard";
import PodcastList from "./PodcastList/PodcastList";
import "./styles/index.scss";

export default function Home() {
  return (
    <Dashboard>
      <PodcastList></PodcastList>
    </Dashboard>
  );
}
