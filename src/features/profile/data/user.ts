import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Rahul",
  lastName: "Varma",
  displayName: "Rahul Varma",
  username: "Rahul",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Developer",
    "Design Engineer",
    "Open Source Contributor",
    "Graphic Designer",
  ],
  address: "Ahmedabad, India",
//   phoneNumber: "Kzg0Nzc3ODg4MTQ4", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "dnJhaHVsLmVuZ2luZWVyQGdtYWlsLmNvbQ==", // base64 encoded
  website: "",
  jobTitle: "Developer",
//   jobs: [
//     {
//       title: "Developer",
//       company: "Simplamo",
//       website: "https://simplamo.com?ref=IN-926722",
//     },
//     {
//       title: "Founder",
//       company: "Quaric",
//       website: "https://quaric.com",
//     },
//   ],
  about: `
    Hey, I'm Rahul Varma. I build fast, beautiful software that people actually want to use.
    I work with Next.js, React, and TypeScript to create web and mobile applications that don't just look good... they perform. I'm all about clean code, smooth interactions, and experiences that feel effortless.
    Outside of client work, I'm constantly tinkering with new tech and bringing ideas to life through side projects.
    Let's build something together.
  `,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475",
//   namePronunciationUrl: "/audio/chanhdai.mp3",
//   keywords: [
//     "ncdai",
//     "nguyenchanhdai",
//     "nguyen chanh dai",
//     "chanhdai",
//     "chanh dai",
//     "iamncdai",
//     "quaric",
//     "zadark",
//     "nguyễn chánh đại",
//     "chánh đại",
//   ],
  dateCreated: "", // YYYY-MM-DD
};