"use client";

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@travelbycoordinates7814",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/mariusherlea/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/mariusherlea",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
