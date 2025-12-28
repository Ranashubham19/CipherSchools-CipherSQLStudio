import { Link } from "react-router-dom";
import { assignments } from "../data/assignments";
import "../styles/assignments.css";

export default function Assignments() {
  return (
    <div className="assignments-page">
      <h1 className="page-title">SQL Assignments</h1>

      <div className="assignment-grid">
        {assignments.map((assignment) => (
          <Link
            to={`/assignments/${assignment.id}`}
            key={assignment.id}
            className="assignment-card"
          >
            <div className="card-header">
              <h2>{assignment.title}</h2>
              <span
                className={`difficulty-badge ${assignment.difficulty.toLowerCase()}`}
              >
                {assignment.difficulty}
              </span>
            </div>

            <p className="assignment-desc">{assignment.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
