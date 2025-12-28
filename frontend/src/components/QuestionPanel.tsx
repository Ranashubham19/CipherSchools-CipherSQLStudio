// src/components/QuestionPanel.tsx

type Props = {
  assignment: {
    title: string;
    difficulty: string;
    description: string;
  };
};

export default function QuestionPanel({ assignment }: Props) {
  return (
    <div>
      <h2>{assignment.title}</h2>
      <p>
        <strong>Difficulty:</strong> {assignment.difficulty}
      </p>
      <p>{assignment.description}</p>
    </div>
  );
}
