import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to CipherSQLStudio</h1>
      <p>Practice SQL with interactive assignments</p>
      <Link to="/assignments">Go to Assignments</Link>
    </div>
  );
}
