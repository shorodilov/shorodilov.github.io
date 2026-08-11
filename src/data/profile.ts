export interface Profile {
  name: string
  role: string
  avatar: string
  summary: string
  location: string
  languages: string[]
  email: string
  linkedin: string
  github: string
}

export const profile = {
  name: "Serhii Horodilov",
  role: "Software Engineer",
  avatar: "https://avatars.githubusercontent.com/u/22391544?v=4",
  summary:
    "I design and build reliable software systems, developer tooling, and infrastructure while keeping the resulting products approachable for the people who use them.",
  location: "Ukraine",
  languages: ["English", "Ukrainian"],
  email: "shorodilov@gmail.com",
  linkedin: "https://www.linkedin.com/in/serhii-horodilov/",
  github: "https://github.com/shorodilov",
} satisfies Profile
