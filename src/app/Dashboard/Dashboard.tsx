import { ReactNode } from "react";

import { URLS } from "../../types";
import "./Dashboard.scss";
import { useFetch } from "@/hooks/useFetch";

function Dashboard({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <main>
      <header>
        <h1>Podcaster</h1>
        {loading && (
          <div className="loader">
            <span className="loader-background"></span>
          </div>
        )}
      </header>

      {children}
    </main>
  );
}

export default Dashboard;
