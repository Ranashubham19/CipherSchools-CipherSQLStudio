import { useState } from "react";
import ResultsTable from "./ResultsTable";
import HintButton from "./HintButton";
import DataFlowDiagram from "./DataFlowDiagram";
import { sampleUsers } from "../data/sampleData";
import "../styles/queryEditor.css";

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
};

type Props = {
  mode: "basic" | "city";
};

function validateSQL(query: string) {
  const q = query.trim().toLowerCase();

  if (!q) return "Query cannot be empty";
  if (!q.startsWith("select")) return "Only SELECT queries are allowed";
  if (q.includes(";")) return "Multiple SQL statements are not allowed";

  return null;
}

export default function QueryEditor({ mode }: Props) {
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<User[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const executeQuery = () => {
    setLoading(true);

    const err = validateSQL(query);
    if (err) {
      setError(err);
      setRows([]);
      setColumns([]);
      setLoading(false);
      return;
    }

    setError(null);

    setTimeout(() => {
      const q = query.toLowerCase();

      if (mode === "basic") {
        if (q.includes("from users")) {
          setRows(sampleUsers);
          setColumns(["id", "name", "age", "city"]);
        }
      }

      if (mode === "city") {
        const match = q.match(/city\s*=\s*'(.+?)'/);
        if (match) {
          const city = match[1].toLowerCase();
          const result = sampleUsers.filter(
            (u) => u.city.toLowerCase() === city
          );
          setRows(result);
          setColumns(["id", "name", "age", "city"]);
        }
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-card">
        <h3 className="editor-title">SQL Query Editor</h3>

        <textarea
          className="sql-editor"
          placeholder={
            mode === "basic"
              ? "Write your SELECT query here..."
              : "Write a SELECT query with WHERE clause..."
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="editor-actions">
          <button className="execute-btn" onClick={executeQuery}>
            ▶ Execute
          </button>
          <HintButton mode={mode} />
        </div>

        {error && <p className="error-text">❌ {error}</p>}

        <ResultsTable rows={rows} columns={columns} loading={loading} />

        <DataFlowDiagram />
      </div>
    </div>
  );
}
