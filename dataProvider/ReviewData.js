import React, { createContext, useContext } from "react";

const ReviewContext = createContext([]);

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque eveniet quod doloribus tempora ex deserunt aspernatur debitis magnam, mollitia, adipisci, nisi eos iusto accusantium.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque eveniet quod doloribus tempora ex deserunt aspernatur debitis magnam, mollitia, adipisci, nisi eos iusto accusantium.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Smith",
    job: "Game Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque eveniet quod doloribus tempora ex deserunt aspernatur debitis magnam, mollitia, adipisci, nisi eos iusto accusantium.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Williams",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque eveniet quod doloribus tempora ex deserunt aspernatur debitis magnam, mollitia, adipisci, nisi eos iusto accusantium.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Oliver Jones",
    job: "Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque eveniet quod doloribus tempora ex deserunt aspernatur debitis magnam, mollitia, adipisci, nisi eos iusto accusantium.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mason Brown",
    job: "Video Editor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque eveniet quod doloribus tempora ex deserunt aspernatur debitis magnam, mollitia, adipisci, nisi eos iusto accusantium.",
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
