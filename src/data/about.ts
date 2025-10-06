import { FaDiscord, FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"

const rv_img = ""
const rv_name = "Rahul Varma"
const rv_bio = "Engineer"
const rv_about = `
    <P>
        I’m a curious developer who loves learning by building—whether it’s crafting React frontends, 
        setting up backends with Express, Prisma, and PostgreSQL, or exploring AI-powered tools and interactive web experiences.    
    </P>
    <P>
        I’ve worked on projects like Learn-o-Flow, an AI-powered learning assistant, IntellectUp, a personalized AI app, and fun side builds like chat apps and to-do lists.
    </P>
    <P>
    I’m passionate about solving problems, contributing to open source, freelancing, and creating tools that make learning and tech more exciting
    </P>
`

const rv_link = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },

  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/u/rinkitadhana",
    icon: SiLeetcode,
  },
]

const rv_contact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries."
const rv_contactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
]

const rv_footerLink = [
  {
    id: 1,
    name: "Mail",
    link: "vrahul.engineer@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/meruem09",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rahul-varma-1129a9328/",
    icon: FaLinkedinIn,
  }
]

export {
  rv_img,
  rv_bio,
  rv_contact,
  rv_contactLink,
  rv_about,
  rv_link,
  rv_footerLink
}