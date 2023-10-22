import { Loader } from "../Loader/Loader";
import { StyledLoader } from "../Loader/StyleLoader";
import "./Dashboard.scss";

function Dashboard({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="main">
        <h1>Podcaster</h1>
        {loading && (
          <StyledLoader>
            <Loader />
          </StyledLoader>
        )}
      </header>

      {children}
    </main>
  );
}

export default Dashboard;
