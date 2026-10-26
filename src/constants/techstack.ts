import type { TechStackItem } from "@/types";

export const TECH_STACK: TechStackItem[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "C", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "HTML", category: "language" },
  { name: "CSS", category: "language" },
  { name: "MQL5", category: "language" },
  { name: "C++ (Arduino)", category: "language" },

  // Frameworks / Libraries
  { name: "React", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "TensorFlow", category: "framework" },
  { name: "OpenCV", category: "framework" },
  { name: "YOLO", category: "framework" },
  { name: "gTTS", category: "framework" },
  { name: "Flask", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "MediaPipe", category: "framework" },

  // Tools / Platforms
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "PostgreSQL", category: "tool" },
  { name: "MetaTrader 5", category: "tool" },
  { name: "ESP32", category: "tool" },
  { name: "SQLite", category: "tool" },
  { name: "Ollama", category: "tool" },
  { name: "Gemini API", category: "tool" },
  { name: "LINE Messaging API", category: "tool" },
];

export const TECH_CATEGORY_LABELS: Record<TechStackItem["category"], string> = {
  language: "Language",
  framework: "Framework / Library",
  tool: "Tool / Platform",
  database: "Database",
};
