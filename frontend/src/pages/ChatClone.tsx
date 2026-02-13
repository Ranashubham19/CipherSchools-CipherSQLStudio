import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./chatClone.css";

type Role = "user" | "assistant";

type Message = {
  id: number;
  role: Role;
  content: string;
};

const starterMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi! I'm your ChatGPT-style assistant. Ask me to explain SQL concepts, write queries, or brainstorm ideas.",
  },
];

const cannedResponses = [
  "Great question. Start by identifying the goal, then break it into smaller steps. I can help with each step if you want.",
  "A clean way to approach this is: define the schema, write a base query, validate with sample rows, then optimize.",
  "If you'd like, I can generate a step-by-step plan and example SQL for this task.",
  "You can improve this prompt by adding context, constraints, and the exact output format you need.",
];

export default function ChatClone() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = useMemo(
    () => [
      "Explain SQL JOINs with examples",
      "Write a query to find top 5 customers",
      "How do I optimize a slow query?",
    ],
    []
  );

  const addAssistantReply = () => {
    const random = cannedResponses[Math.floor(Math.random() * cannedResponses.length)];
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, role: "assistant", content: random },
    ]);
    setIsTyping(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", content: trimmed },
    ]);
    setInput("");
    setIsTyping(true);

    setTimeout(addAssistantReply, 700);
  };

  return (
    <div className="chat-layout">
      <aside className="chat-sidebar">
        <button className="new-chat">+ New chat</button>
        <div className="history">
          <p className="history-title">Recent</p>
          <button>SQL interview prep</button>
          <button>Aggregation examples</button>
          <button>Schema design ideas</button>
        </div>
        <Link to="/assignments" className="go-assignments">
          Open SQL Assignments
        </Link>
      </aside>

      <main className="chat-main">
        <header>
          <h1>ChatGPT Clone</h1>
          <p>Prototype interface built in React</p>
        </header>

        <section className="messages" aria-live="polite">
          {messages.map((message) => (
            <article key={message.id} className={`bubble ${message.role}`}>
              <span className="role">{message.role === "user" ? "You" : "Assistant"}</span>
              <p>{message.content}</p>
            </article>
          ))}
          {isTyping && (
            <article className="bubble assistant typing">
              <span className="role">Assistant</span>
              <p>Typing...</p>
            </article>
          )}
        </section>

        <section className="quick-prompts">
          {quickPrompts.map((prompt) => (
            <button key={prompt} onClick={() => setInput(prompt)}>
              {prompt}
            </button>
          ))}
        </section>

        <form className="composer" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message ChatGPT clone"
          />
          <button type="submit" disabled={!input.trim() || isTyping}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
