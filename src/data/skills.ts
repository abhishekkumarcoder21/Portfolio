export type SkillCategory = {
  id: string;
  label: string;
  verb: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  projectIds: string[]; // references to project.id
};

export const skillCategories: SkillCategory[] = [
  {
    id: "build",
    label: "BUILD",
    verb: "Languages & frameworks I ship production code in",
    skills: [
      { name: "Go", projectIds: ["distributed-workflow-engine", "syncforge"] },
      { name: "Python", projectIds: ["codelens-ai-code-review"] },
      { name: "TypeScript", projectIds: ["distributed-workflow-engine", "codelens-ai-code-review", "syncforge"] },
      { name: "C++", projectIds: [] },
      { name: "Java", projectIds: [] },
      { name: "JavaScript", projectIds: [] },
      { name: "C", projectIds: [] },
      { name: "SQL", projectIds: ["distributed-workflow-engine", "codelens-ai-code-review", "syncforge"] },
    ],
  },
  {
    id: "scale",
    label: "SCALE",
    verb: "Infrastructure for reliable, concurrent systems",
    skills: [
      { name: "Redis", projectIds: ["distributed-workflow-engine", "codelens-ai-code-review", "syncforge"] },
      { name: "PostgreSQL", projectIds: ["distributed-workflow-engine", "codelens-ai-code-review", "syncforge"] },
      { name: "WebSockets", projectIds: ["syncforge"] },
      { name: "Distributed Systems", projectIds: ["distributed-workflow-engine", "syncforge"] },
      { name: "Concurrency", projectIds: ["distributed-workflow-engine", "syncforge"] },
    ],
  },
  {
    id: "ship",
    label: "SHIP",
    verb: "Tools that get code to production",
    skills: [
      { name: "Docker", projectIds: ["distributed-workflow-engine", "syncforge"] },
      { name: "AWS", projectIds: [] },
      { name: "GitHub Actions", projectIds: ["distributed-workflow-engine"] },
      { name: "CI/CD", projectIds: ["distributed-workflow-engine"] },
      { name: "Prometheus", projectIds: ["distributed-workflow-engine", "syncforge"] },
      { name: "Linux", projectIds: [] },
    ],
  },
  {
    id: "think",
    label: "THINK",
    verb: "Fundamentals that inform every decision",
    skills: [
      { name: "Data Structures & Algorithms", projectIds: [] },
      { name: "System Design", projectIds: ["distributed-workflow-engine", "codelens-ai-code-review", "syncforge"] },
      { name: "Operating Systems", projectIds: [] },
      { name: "DBMS", projectIds: [] },
      { name: "Computer Networks", projectIds: [] },
      { name: "OOP", projectIds: [] },
    ],
  },
  {
    id: "augment",
    label: "AUGMENT",
    verb: "AI & intelligent systems engineering",
    skills: [
      { name: "LLM Integration", projectIds: ["codelens-ai-code-review"] },
      { name: "RAG", projectIds: ["codelens-ai-code-review"] },
      { name: "AST Analysis", projectIds: ["codelens-ai-code-review"] },
      { name: "Prompt Engineering", projectIds: ["codelens-ai-code-review"] },
    ],
  },
];
