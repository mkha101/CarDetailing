import { useEffect, useState } from "react";
import { Container } from "./Container.tsx";
import { Services } from "./Services.tsx";
import { MobileNavList, NavList } from "./NavList.tsx";

interface Props {
  positionprop: string;
}

export const Header = (props: Props) => {
  const [services, setServices] = useState(false);

  return (
    <header
      className={` ${props.positionprop}   w-full bg-black 
       z-10  `}
    >
      <Container>
        <NavList setServices={setServices} positionprop={"fixed"} />
      </Container>{" "}
      <MobileNavList />
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
