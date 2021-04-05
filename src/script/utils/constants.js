import topNotchTechImage from "../../images/tech-img.svg";
import cloudIcon from "../../images/cloud-img.svg";
import boxIcon from "../../images/box-img.svg";
import numbersIcon from "../../images/numbers.svg";
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import teamphoto from "../../images/teamphoto1.png";
import robot from "../../images/robots1.svg";
import robot2 from "../../images/gallery-image.png";

const benefitsCards = [
  {
    path: topNotchTechImage,
    title: "Top-Notch Technology",
    text: "Once you transform your indoor logistics, we'll keep it up-to-date.",
  },
  {
    path: cloudIcon,
    title: "Up-To-Date Software",
    text:
      "You always get immediate software updates including new features and algorithms in background.",
  },
  {
    path: boxIcon,
    title: "Seamless Fleet Upgrade",
    text:
      "No need to stop the production to upgrade, extend, or replace the fleet. No hassle needed for the new units to get to work.",
  },
  {
    path: numbersIcon,
    title: "Incompatible Robots Team-Up",
    text:
      "Robots produced by tens of different vendors can collaborate in the same workspace.",
  },
];

const customerBenefitsCards = [
  {
    path: photo1,
    title: "Labor-intensive dolly movements",
    text:
      "<b>Challenges:</b> It is more and more <b>difficult to hire workers</b>, because they prefer to work in delivery services for the same money.",
  },
  {
    path: photo2,
    title: "Forklifts, tuggers managed by man",
    text:
      "<b>Challenges:</b> It is more and more <b>difficult to hire forklift drivers</b>  because they prefer to work in delivery for the same money.",
  },
  {
    path: photo3,
    title: "Follow-the-line robots",
    text:
      "<b>Challenges:</b> It is time-consuming and expensive to replace old robots by state-of-the art, but produced by another vendor.",
  },
  {
    path: photo4,
    title: "Autonomous mobile robots ",
    text:
      "<b>Challenges:</b> Limited upgrade options within the same vendor robot line only and too expensive to use another vendor robots.",
  },
];

const teamCards = [
  {
    path: teamphoto,
    title: "Max Antonenko",
    subtitle: "CEO",
    text:
      "Ph.D., expert in algorithms and mathematical modelling. Co-founded two tech startups.",
  },
  {
    path: teamphoto,
    title: "Vladimir Sokolenko",
    subtitle: "CTO",
    text:
      "Hardware and robotics guru, 20+ years team lead experience. Co-founded two tech startups.",
  },
  {
    path: teamphoto,
    title: "Alexander Sambuk",
    subtitle: "CBDO",
    text:
      "Entrepreneur and top-notch operational lead with a background in corporate business and startups.",
  },
  {
    path: teamphoto,
    title: "Ilya Shimchik",
    subtitle: "Advisor, AI and Computer Vision",
    text:
      "Computer Vision and AI guru, MS Software Engineering (CMU). Head of Acronis SIT Autonomous Team, Roborace. ",
  },
];

const robotProducts = [
  {
    path: robot,
    title: "OTTO 100 (pending)",
    maxpayload: "220 lbs (100kg)",
    size: "740 x 550 x 310 mm",
    maxspeed: "4.3 mph",
    runningtime: "4 hrs or 9mi",
    chargingtime: "1.2 hrs (0-80%: 0.75 hrs)",
  },
  {
    path:
      "https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "TX1000",
    maxpayload: "300 lbs(136kg)",
    size: "800 x 400 x210 mm",
    maxspeed: "5.4mph",
    runningtime: "5 hrs",
    chargingtime: "1hr(0-70%: 0.45hrs)",
  },
  {
    path:
      "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fHJvYm90c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "M8120",
    maxpayload: "150lbs(68kg)",
    size: "600 x 300 x 150 mm",
    maxspeed: "4.5mph",
    runningtime: " 3 hrs",
    chargingtime: "3hrs(0-50%: 1hr)",
  },
];

const galleryItems = [
  {
    path: robot2,
    caption: "ANT 100 Robot at work",
  },
  {
    path:
      "https://images.unsplash.com/photo-1561634507-b0cd27bf0aa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjdG9yeSUyMHJvYm90c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    caption: "At the factory",
  },
  {
    path:
      "https://images.unsplash.com/photo-1563968743333-044cef800494?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjdG9yeSUyMHJvYm90c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    caption: "Robot arm at work",
  },
];
export {
  benefitsCards,
  customerBenefitsCards,
  teamCards,
  robotProducts,
  galleryItems,
};
