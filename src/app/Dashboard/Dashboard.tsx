import { ReactNode } from "react";
import "./Dashboard.scss";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Podcaster</h1>

      {children}
    </main>
  );
}

export default Dashboard;
