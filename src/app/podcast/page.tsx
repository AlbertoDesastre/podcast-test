"use client";

import Dashboard from "../components/Dashboard/Dashboard";

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
