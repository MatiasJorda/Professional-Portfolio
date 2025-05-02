import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a Full-Stack Developer at Practice AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together or hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mr Supply Chain Website",
    des: "Mr. Supply Chain, LLC is the embodiment of Daniel Stanton’s vision to empower supply chain professionals through education, training, and strategic insights.",
    img: "/mrsc.png",
    iconLists: ["/insta.svg", "/link.svg"],
    link: "mrsupplychain.com",
  },
  {
    id: 2,
    title: "Supply Chain Videos Website",
    des: "Explore our comprehensive collection of supply chain management and engineering videos for an enriching educational experience.",
    img: "/supplychainvideos.png",
    iconLists: ["/insta.svg", "/link.svg"],
    link: "supplychainvideos.com",

  },
  {
    id: 3,
    title: "Daniel Stanton Website",
    des: "Stay connected with Daniel Stanton for the latest in supply chain innovation and insights. Follow him on LinkedIn and other social media channels.",
    img: "/danielstanton.png",
    iconLists: ["/insta.svg", "/link.svg"],
    link: "danielstanton.com",
  },
  {
    id: 4,
    title: "Six Sigma Videos Website",
    des: "Lean Six Sigma combines the principles of lean enterprise and lean manufacturing with Six Sigma to improve performance and systematically remove waste. ",
    img: "/sixsigmalearning.png",
    iconLists: ["/insta.svg", "/link.svg"],
    link: "sixsigmalearning.com",
  },
];

export const testimonials = [
  {
    quote:
      "I build solutions that don’t just work—they work with purpose. Every line of code serves a goal, every interface serves the user. Function and form go hand in hand.",
    name: "",
    title: "",
  },
  {
    quote:
      "Great development starts with clarity. I turn complex requirements into clean, maintainable systems. From backend logic to frontend finesse, it's all about balance.",
    name: "",
    title: "",
  },
  {
    quote:
      "Technology should empower, not overwhelm. I craft tools that simplify tasks, enhance workflows, and just make sense. Practical innovation is my default setting.",
    name: "",
    title: "",
  },
  {
    quote:
      "I write code with the end user in mind and the future developer in heart. Scalability, clarity, and experience are non-negotiables. Good software should feel effortless to use—and to maintain.",
    name: "",
    title: "",
  },
  {
    quote:
      "Every project is a collaboration, not a transaction. I listen, plan, and execute with precision to deliver meaningful results. Your vision, translated into reliable, intuitive software.",
    name: "",
    title: "",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
    {
    id: 1,
    title: "Full Stack Developer - Practice AI",
    desc: "Debugged and implemented new features for internal applications.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Software Engineer - ROHM Electronics",
    desc: "Built and maintained ASP.NET applications, integrated microcontrollers for real-time monitoring, and optimized SQL Server databases.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Production Maintenance Andon System - ROHM Electronics",
    desc: "Developed a real-time request system for production teams, enhancing response efficiency and system visibility.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "WordPress Front-End Developer (Freelance)",
    desc: "Customized responsive websites using Elementor, improved performance, and implemented SEO best practices for various client sites.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Real-Time Monitoring System (Microcontroller Project) - ROHM Electronics",
    desc: "Integrated ESP32 and M5Core2 with .NET apps to capture and visualize live environmental data over TCP/IP.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/vincent-capistrano"
  },
  {
    id: 2,
    img: "/insta.svg",
    link:"https://www.instagram.com/capistrano.vincent0307/"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/vincent-capistrano-0884122b3/"
  },
];
