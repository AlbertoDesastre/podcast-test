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
