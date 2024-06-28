import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progress = (currentProgress / scrollHeight) * 100;
        setCompletion(Number(progress.toFixed(2)));
      }
    };

    //event

    window.addEventListener("scroll", updateScrollCompletion);

    //clear event

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
};

export default useScrollProgress;
