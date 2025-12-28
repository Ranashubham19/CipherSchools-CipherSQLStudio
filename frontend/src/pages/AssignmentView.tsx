import { useParams } from "react-router-dom";
import QueryEditor from "../components/QueryEditor";

export default function AssignmentView() {
  const { id } = useParams();

  const assignment =
    id === "1"
      ? {
          title: "Basic SELECT Query",
          description: "Learn how to retrieve all records from a table",
          placeholder: "SELECT * FROM users",
          hintText: "Use SELECT * FROM users",
          mode: "basic" as const,
        }
      : {
          title: "Filter by City",
          description: "Retrieve users by filtering records using city name",
          placeholder: "SELECT * FROM users WHERE city = 'Delhi'",
          hintText: "Use WHERE city = 'Delhi'",
          mode: "city" as const,
        };

  return <QueryEditor {...assignment} />;
}
