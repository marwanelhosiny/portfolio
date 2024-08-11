const projects = [
  {
    name: "Dar-Alnokhba",
    description:
      "This website is designed specifically for Daralnokhba Company, based in Kuwait. It allows employees to add contracts, receipts, and bonds using saved templates, with dates and signatures automatically added. The system enables easy searching for any document and allows administrators to edit templates as needed.",
    pic: "/Dar-Alnokhba.PNG",
    tech: ["React", "Nest.js", "MongoDB"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://daralnokhbaestrealestatebrokerage.com/home",
      },
    ],
  },
  {
    name: "Post-Bet",
    description:
      " Postbet App enables users to publish posts within our app and simultaneously share them across multiple platforms such as Facebook, Twitter, TikTok, and more with a single click. The ability to publish on multiple platforms is based on the subscribed plan, providing seamless and efficient content distribution.",
    pic: "/Post-Bet.png",
    tech: ["Flutter", "Nest.js","PostgreSQL"],
    links: [
      {
        label: "MobileApp",
        icon: "link",
        url: "https://play.google.com/store/apps/details?id=com.postBet.post_bet",
      },
    ],
  }
];

export const extraProjects = [
  {
    name: "E-Commerce",
    type: "Training",
    description:
      "This project enables vendors to add their brands and products in a structured system categorized. Users can easily search, find their desired items, add them to their cart, and purchase products directly from the website",
    tech: ["express.js", "MongoDB"],
    links: [
      {
        label: "Project",
        icon: "github",
        url: "https://github.com/marwanelhosiny/eCommerce-App",
      },
    ],
  },
  {
    name: "JobSearch App",
    type: "Training",
    description:
      "This application enables users to browse and apply for job postings. It allows HR personnel from companies to post job openings with detailed descriptions and compare job descriptions with applicant profiles to find the best matches",
    tech: [ "express.js", "MongoDB"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/ShahmeerShahid/ResumeWords",
      },
    ],
  },
  {
    name: "Chat-App",
    type: "Training",
    description: "This is a chatting platform designed for real-time communication. It utilizes Socket.io to facilitate instant messaging and interactions. User details are securely stored in an encrypted format, ensuring privacy and data protection.",
    tech: ["express.js","MongoDB"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/marwanelhosiny/chatApp",
      },
    ],
  },
  {
    name: "upVote App",
    type: "Training",
    description:
      "This app allows users to discover, share, and organize a wide variety of content including images, products, and videos. It serves as a versatile platform for finding inspiration and curating collections that span multiple media types.",
    tech: ["express.js", "MongoDB"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/marwanelhosiny/upVoteApp",
      }
    ],
  },
  {
    name: "toDoApp",
    type: "Training",
    description:
      "This Task Management app allows managers to assign tasks to employees, set deadlines, and monitor progress. Managers can browse and track tasks ensuring clear communication and efficient workflow management.",
    tech: ["express.js","MongoDB"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/marwanelhosiny/toDoApp",
      }
    ],
  }
];

export default projects;
