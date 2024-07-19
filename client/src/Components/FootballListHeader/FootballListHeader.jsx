import "./football-list-header.css";

function FootballListHeader() {
  return (
    <div className="list-header">
      <h1 className="app-title">
        Thursday
        <br />
        Night Football
      </h1>
      <div className="button-container">
        <button className="btn submit-name">Sign Up</button>
        <button className="btn signout">Logout</button>
      </div>
    </div>
  );
}

export default FootballListHeader;
