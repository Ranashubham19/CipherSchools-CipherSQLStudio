import { useState } from "react";
import { sampleUsers } from "../data/sampleData";
import ResultsTable from "./ResultsTable";
import "../styles/proQueryEditor.scss";

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
};

export default function ProQueryEditor() {
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<User[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const runQuery = () => {
    setError("");
    setRows([]);

    if (!query.trim()) {
      setError("Query cannot be empty");
      return;
    }

    const q = query.toLowerCase();

    if (!q.startsWith("select")) {
      setError("Only SELECT queries are allowed");
      return;
    }

    if (q.includes(";")) {
      setError("Multiple SQL statements are not allowed");
      return;
    }

    if (q.includes("where") && q.includes("city")) {
      const match = q.match(/city\s*=\s*'(.+)'/);
      if (match) {
        const city = match[1].toLowerCase();
        const result = sampleUsers.filter(
          (u) => u.city.toLowerCase() === city
        );
        setRows(result);
        setColumns(["id", "name", "age", "city"]);
        return;
      }
    }

    if (q.includes("from users")) {
      setRows(sampleUsers);
      setColumns(["id", "name", "age", "city"]);
      return;
    }

    setError("Invalid query format");
  };

  return (
    <div className="pro-editor-page">
      <div className="pro-editor-card">
        <h2 className="pro-title">🏙 Filter by City</h2>
        <p className="pro-subtitle">
          Retrieve users by filtering records using city name
        </p>

        <div className="pro-editor-label">SQL Query Editor</div>

        <textarea
          className="pro-sql-box"
          placeholder={`SELECT * FROM users\nWHERE city = 'Delhi'`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="pro-actions">
          <button className="pro-execute-btn" onClick={runQuery}>
            ▶ Execute Query
          </button>

          <button
            className="pro-hint-btn"
            onClick={() =>
              alert("Use WHERE clause. Example:\nWHERE city = 'Delhi'")
            }
          >
            💡 Hint
          </button>
        </div>

        {error && <div className="pro-error">{error}</div>}

        <ResultsTable rows={rows} columns={columns} loading={false} />
      </div>
    </div>
  );
}
