import html from "./assets/icons/html5.svg";
import css from "./assets/icons/css3.svg";
import js from "./assets/icons/javascript.svg";
import react from "./assets/icons/react.svg";
import node from "./assets/icons/nodejs.svg";
import bootstrap from "./assets/icons/bootstrap.svg";
import express from "./assets/icons/express.svg";
import tailwind from "./assets/icons/tailwind.svg";
// projects
import islamicWeb from "./assets/projects/dailyislam.png";
import modernWeb from "./assets/projects/modernpng.png";
import vrWeb from "./assets/projects/vrweb.png";
export const data = [
  { id: 1, icon: html, name: "html5", experience: "70% last 1 year" },
  { id: 2, icon: css, name: "css3", experience: "50% last 1 year" },
  { id: 3, icon: js, name: "javaScript", experience: "40% last 1 year" },
  { id: 4, icon: react, name: "react", experience: "30% last 1 year" },
  { id: 5, icon: node, name: "node js", experience: "10% last 1 year" },
  { id: 6, icon: express, name: "express js", experience: "10% last 1 year" },
  {
    id: 7,
    icon: bootstrap,
    name: "bootstrap 5",
    experience: "50% last 1 year",
  },
  {
    id: 8,
    icon: tailwind,
    name: "Tailwind css",
    experience: "70% last 1 year",
  },
];
export const projects = [
  {
    id: 1,
    img: islamicWeb,
    name: "Daily islam",
    liveLink: "https://dailyislam.netlify.app/",
    repoLink: "https://github.com/alamincodes/daily-muslim-app",
  },
  {
    id: 2,
    img: vrWeb,
    name: "Vr web",
    liveLink: "https://vr-web-ui-app.netlify.app/",
    repoLink: "https://github.com/alamincodes/vr-landing-page",
  },
  {
    id: 3,
    img: modernWeb,
    name: "web 3.0 ui",
    liveLink: "https://modern-web3.netlify.app/",
    repoLink: "https://github.com/alamincodes/modern-web-ui",
  },
];
