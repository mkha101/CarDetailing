import React, { useEffect, useState } from "react";

export const scrollOpacity = () => {
  const [scrollY, setScrollY] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const minScroll = 0;
    const maxScroll = 200;
    const opacity = Math.min(
      1,
      (scrollY - minScroll) / (maxScroll - minScroll)
    );
    setHeaderOpacity(opacity);
  }, [scrollY]);

  const headerStyle = {
    backgroundColor: `rgba(0, 0, 0, ${headerOpacity})`,
  };
  return <div>scrollOpacity</div>;
};
