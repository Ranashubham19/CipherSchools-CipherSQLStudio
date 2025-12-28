export interface Assignment {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  question: string;
  hint: string;
}

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Basic SELECT Query",
    difficulty: "Easy",
    description: "Learn how to filter rows using WHERE clause",
    question: "Fetch all users whose age is greater than 25",
    hint: "Use SELECT with a WHERE condition on age",
  },
  {
    id: "2",
    title: "Filter by City",
    difficulty: "Easy",
    description: "Filter records based on city name",
    question: "Fetch users who live in Delhi",
    hint: "Use WHERE city = 'Delhi'",
  },
];
