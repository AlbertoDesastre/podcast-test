"use client";

import { getCache, saveOnCache } from "@/services/cacheService/cacheService";
import Dashboard from "../components/Dashboard/Dashboard";
import PodcastEpisode from "./[id]/PodcastEpisodeList/PodcastEpisodeList";
import constants from "@/constants.json";
import { podcastEpisodes } from "@/assets";

function PodcastDetails() {
  return (
    <Dashboard loading={true}>
      <h1>{"Oh, hello. How did you get here?"}</h1>
      <h2>
        {
          "Are you sure you don't want to use the app... you know, like a normal person?"
        }
      </h2>
      <h3>{"Why don't you click on 'Podcaster' to try again?"}</h3>
    </Dashboard>
  );
}

export default PodcastDetails;
