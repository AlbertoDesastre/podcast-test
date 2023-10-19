import { ReactNode } from "react";

import useFecth from "@/services/useFetch";
import { URLS } from "../../types";
import "./Dashboard.scss";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header>
        <h1>Podcaster</h1>
        <span> Loading... </span>
      </header>

      {children}
    </main>
  );
}

export default Dashboard;
