import { Routes, Route, Navigate } from "react-router-dom";
import Assignments from "./pages/Assignments";
import AssignmentView from "./pages/AssignmentView";

export default function App() {
  return (
    <Routes>
      {/* Redirect root */}
      <Route path="/" element={<Navigate to="/assignments" />} />

      <Route path="/assignments" element={<Assignments />} />
      <Route path="/assignments/:id" element={<AssignmentView />} />
    </Routes>
  );
}
