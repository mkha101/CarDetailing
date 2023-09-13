import { useState } from "react";
import { Container } from "./Container.tsx";
import { Button } from "./ui/button.tsx";
import { X, Menu } from "lucide-react";
import { Services } from "./Services.tsx";
import { MobileNavList, NavList } from "./NavList.tsx";

interface Props {
  positionprop: string;
}

export const Header = (props: Props) => {
  const { positionprop } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={` ${positionprop} fixed  w-full bg-black z-10  max-w-screen `}
    >
      <Container>
        <NavList setServices={setServices} />
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
