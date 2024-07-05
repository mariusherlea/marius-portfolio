import React, { createContext, useContext } from "react";

const ReviewContext = createContext([]);

const reviewsData = [
  {
    avatar: "/reviews/skillbrain_-_logo.svg",
    name: "Mentor Skillbrain",
    job: "Web Developer",
    review:
      "Marius Herlea accepts challenges and finds solutions for the problems encountered even if it is something new that he is facing for the first time. This proves that he can isolate the problem, knows how to use the accumulated knowledge and learn new things along the way to reach the desired solution - an important quality for a Developer.",
  },
  {
    avatar: "/reviews/Jogga.png",
    name: "Piciorea Vladut",
    job: "Web Developer",
    review:
      "I am honored to recommend Marius Herlea for successfully completing the internshipprogram for Front-End Developer at Jogga. Throughout his tenure, Marius Herlea has demonstrated exceptional proficiency in Html, Css, JavaScript, Git, Agile, React technologies, significantly contributing to our software testing processes.",
  },
];

export const ReviewProvider = ({ children }) => {
  return (
    <ReviewContext.Provider value={reviewsData}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  return useContext(ReviewContext);
};
