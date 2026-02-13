import { Routes, Route, Navigate } from "react-router-dom";
import Assignments from "./pages/Assignments";
import AssignmentView from "./pages/AssignmentView";
import ChatClone from "./pages/ChatClone";

export default function App() {
  return (
    <Routes>
      {/* Redirect root */}
      <Route path="/" element={<Navigate to="/chat" />} />

      <Route path="/chat" element={<ChatClone />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/assignments/:id" element={<AssignmentView />} />
    </Routes>
  );
}
