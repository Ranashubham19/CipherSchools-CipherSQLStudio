export default function DataFlowDiagram() {
  return (
    <div className="dataflow-box">
      <h4>🔁 Data Flow Diagram</h4>

      <pre className="dataflow-diagram">
{`User
 │
 │ types SQL query
 ▼
SQL Query Editor
 │
 │ clicks Execute
 ▼
executeQuery()
 │
 │ validateSQL()
 ▼
Validation Layer
 │
 │ filters data
 ▼
Mock Backend Logic
(sampleUsers)
 │
 │ updates state
 ▼
ResultsTable
 │
 ▼
Rendered Output`}
      </pre>
    </div>
  );
}
