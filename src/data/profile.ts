export const profile = {
  name: "Abhishek Kumar",
  firstName: "Abhishek",
  lastName: "Kumar",
  title: "Software Engineer",
  location: "Bengaluru, India",
  email: "work.akthakur27@gmail.com",
  phone: "+91-6001166308",
  tagline: "I build distributed systems, fault-tolerant infrastructure, and AI-powered developer tools.",
  shortBio:
    "Final-year B.Tech student at IIIT Guwahati building infrastructure-grade software — distributed job schedulers, real-time collaboration engines, and AI code review platforms.",
  resumeUrl: "#",
} as const;

export const socialLinks = {
  github: {
    label: "GitHub",
    url: "https://github.com/abhishekkumarcoder21",
    handle: "@abhishekkumarcoder21",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/11abhishek-kumar/",
    handle: "Abhishek Kumar",
  },
  leetcode: {
    label: "LeetCode",
    url: "https://leetcode.com/u/abhishekkumarcoder21/",
    handle: "abhishekkumarcoder21",
  },
  codechef: {
    label: "CodeChef",
    url: "https://www.codechef.com/users/abhishek_ak27",
    handle: "abhishek_ak27",
  },
  geeksforgeeks: {
    label: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/workakthah9e3/",
    handle: "workakthah9e3",
  },
} as const;

export const education = [
  {
    institution: "Indian Institute of Information Technology, Guwahati",
    shortName: "IIIT Guwahati",
    degree: "B.Tech in Electronics & Communication Engineering",
    period: "2022 – 2026",
    score: null,
  },
  {
    institution: "Anugrah Narayan College, Patliputra University, Patna",
    shortName: "AN College, Patna",
    degree: "Class XI & XII (PCM)",
    period: "2019 – 2021",
    score: "89.2%",
  },
  {
    institution: "Mother's International Academy, Patna",
    shortName: "Mother's International Academy",
    degree: "Class X (CBSE)",
    period: "2018 – 2019",
    score: "92.4%",
  },
] as const;
