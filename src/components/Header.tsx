import { useEffect, useState } from "react";
import { Container } from "./Container.tsx";
import { Services } from "./Services.tsx";
import { MobileNavList, NavList } from "./NavList.tsx";

interface Props {
  positionprop: string;
}

export const Header = (props: Props) => {
  const [services, setServices] = useState(false);
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

  return (
    <header
      style={headerStyle}
      className={` ${props.positionprop}   w-full bg-black 
       z-10  max-w-screen `}
    >
      <Container>
        <NavList setServices={setServices} positionprop={"fixed"} />
        <MobileNavList />
      </Container>{" "}
      {services && (
        <div
          onMouseLeave={() => setServices(false)}
          className="absolute w-full top-24  "
        >
          <Services />
        </div>
      )}
    </header>
  );
};
