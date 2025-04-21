// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
import Light from "./images/hero-light.jpg";
import Dark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const userData = {
  name: "Ahmad Eran",
  avatar_url: "/images/me.jpg",
  bio: "Full Stack Developer",
}

export const githubUsername = "AhmadEran";
export const heroUsername = "Ahmad Eran";
export const GithubUrl = "https://github.com/AhmadEran";
export const projectsData = [
  {
    name: "Shamel Cloud", 
    description: "ERP system, React with .Net core and MySQL, currently under final phases",
    image: "/images/shamelcloud-balancereport.jpg",
    images: [{id:1,image:"/images/shamelcloud-balancereport.jpg"},{id:2,image:"/images/shamelcloud-customers.jpg"},{id:3,image:"/images/shamelcloud-invoice.jpg"}]
  },
  {
    name: "TMS", 
    description: "Task management system, React with .Net core and MySQL, manage tasks, projects, versions and sprints for the company teams and projects",
    image: "/images/shamelcloud-balancereport.jpg",
    images: [{id:1,image:"/images/tms-tasks.jpg"},{id:2,image:"/images/tms-home.jpg"},{id:3,image:"/images/tms-versionmanagement.jpg"},{id:4,image:"/images/tms-requestinitialapproval.jpg"}]
  },
  {
    name: "Shamel Mobile", 
    description: "Vansales system, Android with Java, manage the sales and stock for the company vans",
    image: "/images/shamelcloud-balancereport.jpg",
    images: [
              {id:1,image:"/images/mobile-login.png"},
              {id:2,image:"/images/mobile-receipt.png"},
              {id:2,image:"/images/mobile-receipt.png"},
              {id:3,image:"/images/mobile-counterreading.png"}]
  }
];
// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Accomplished Full Stack Senior Developer with over 10 years of experience in software development, specializing in full-stack development, system architecture, and project management. Expert in C#, JavaScript, CSS, ReactJS, C++, Adept at Agile methodologies and DevOps practices. Passionate about continuous learning, team work and driving innovation in technology";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="devicon-plain:dot-net" className="display-4" />,
    name: ".Net Core",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 7,
    skill: <Icon icon="mdi:laravel" className="display-4" />,
    name: "Laravel",
  },
  {
    id: 8,
    skill: <Icon icon="mdi:android" className="display-4" />,
    name: "Android-JAVA",
  },
  {
    id: 8,
    skill: <Icon icon="nonicons:c-plusplus-16" className="display-4" />,
    name: "C++",
  },
  {
    id: 9,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 10,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 11,
    skill: <Icon icon="skill-icons:mysql-dark" className="display-4" />,
    name: "MySQL",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
