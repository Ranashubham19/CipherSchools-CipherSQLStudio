type Props = {
  rows: any[];
  columns: string[];
  loading: boolean;
};

export default function ResultsTable({ rows, columns, loading }: Props) {
  if (loading) {
    return <p className="info-text">⏳ Executing query...</p>;
  }

  if (!rows.length) {
    return <p className="info-text">ℹ️ No results found</p>;
  }

  return (
    <div className="results-wrapper">
      <table className="results-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
