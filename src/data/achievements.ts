export type Achievement = {
  title: string;
  detail: string | null;
  category: "competition" | "academic" | "coding";
};

export const achievements: Achievement[] = [
  {
    title: "Winner — Smart India Hackathon (College Level)",
    detail: "Competed among 27 teams",
    category: "competition",
  },
  {
    title: "Selected — HCLTech Hackathon",
    detail: "Among 35 participating teams",
    category: "competition",
  },
  {
    title: "3★ Rating — CodeChef",
    detail: null,
    category: "coding",
  },
  {
    title: "300+ Problems — LeetCode",
    detail: null,
    category: "coding",
  },
  {
    title: "300+ Problems — GeeksforGeeks",
    detail: null,
    category: "coding",
  },
  {
    title: "100/100 Mathematics — CBSE Class X",
    detail: null,
    category: "academic",
  },
];

export const proofOfWork = [
  {
    platform: "LeetCode",
    stat: "300+",
    label: "Problems Solved",
    url: "https://leetcode.com/u/abhishekkumarcoder21/",
  },
  {
    platform: "GeeksforGeeks",
    stat: "300+",
    label: "Problems Solved",
    url: "https://www.geeksforgeeks.org/user/workakthah9e3/",
  },
  {
    platform: "CodeChef",
    stat: "3★",
    label: "Rating",
    url: "https://www.codechef.com/users/abhishek_ak27",
  },
  {
    platform: "GitHub",
    stat: "—",
    label: "Open Source",
    url: "https://github.com/abhishekkumarcoder21",
  },
];

export const journeySteps = [
  {
    year: "2019",
    label: "Foundation",
    description: "Scored 92.4% in CBSE Class X with 100/100 in Mathematics. First encounter with programming logic.",
  },
  {
    year: "2021",
    label: "PCM & Problem Solving",
    description: "Completed Class XII with 89.2% in PCM. Started competitive programming and algorithmic thinking.",
  },
  {
    year: "2022",
    label: "IIIT Guwahati",
    description: "Began B.Tech at IIIT Guwahati. Deep dive into DSA, OOP, OS, and Computer Networks.",
  },
  {
    year: "2023",
    label: "Full Stack & Hackathons",
    description: "Won Smart India Hackathon (college level). Selected in HCLTech Hackathon. Built full-stack applications with React, Node.js, and PostgreSQL.",
  },
  {
    year: "2024",
    label: "Systems Engineering",
    description: "Shifted focus to distributed systems, concurrency, and Go. Built the Distributed Workflow Engine and SyncForge — production-grade infrastructure software.",
  },
  {
    year: "2025",
    label: "AI + Systems",
    description: "Combined systems engineering with AI — built CodeLens, a hybrid AST + LLM code review platform. 600+ DSA problems solved across platforms.",
  },
  {
    year: "2026",
    label: "Now",
    description: "Graduating from IIIT Guwahati. Exploring production engineering, observability, and scaling distributed systems in real-world environments.",
  },
];
