// src/components/SchemaViewer.tsx

export default function SchemaViewer() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Database Schema</h3>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "600px",
          marginTop: "10px",
        }}
        border={1}
        cellPadding={8}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th>Column Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>id</td>
            <td>INTEGER</td>
            <td>Primary key</td>
          </tr>
          <tr>
            <td>name</td>
            <td>VARCHAR</td>
            <td>User name</td>
          </tr>
          <tr>
            <td>age</td>
            <td>INTEGER</td>
            <td>User age</td>
          </tr>
          <tr>
            <td>city</td>
            <td>VARCHAR</td>
            <td>City of residence</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
