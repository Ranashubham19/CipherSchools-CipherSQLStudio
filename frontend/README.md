---

## ⚙️ Query Execution & Backend Handling

This project focuses primarily on the **frontend SQL editor experience** as per the assignment scope.

### Current Implementation
- SQL queries are **validated on the frontend**
- Only `SELECT` queries are allowed
- Empty or invalid queries are rejected with clear error messages
- Query execution is **mocked** to simulate real database behavior
- Results are displayed dynamically in a tabular format

### Why Mocked Execution?
- Backend integration (PostgreSQL + API) was intentionally kept out of scope
- The goal was to demonstrate:
  - Query validation
  - Execution flow
  - Error handling
  - Result rendering
- This approach allows the UI and user experience to remain realistic

### Future Enhancement (Planned)
In a production setup, the flow would be:
1. User submits SQL query
2. Query sent to backend API
3. Backend validates & sanitizes query
4. PostgreSQL executes the query
5. Results returned to frontend

This design ensures **security, scalability, and correctness**.

---


