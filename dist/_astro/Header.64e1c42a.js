import { c as o, j as e } from "./createLucideIcon.b094e4a2.js";
import { r as i } from "./index.ed373d49.js";
const x = o("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ]),
  h = o("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  d = ({ children: r }) =>
    e.jsx("div", {
      className: "max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4",
      children: r,
    }),
  m = () =>
    e.jsx("div", {
      className: "min-h-[80vh] inset-0 bg-black bg-opacity-90",
      children: e.jsxs("div", {
        className:
          "grid grid-cols-4 bg-black min-h-[40vh] border-[4px] gap-1 border-black px-60 grid-rows-2 text-white",
        children: [
          e.jsx("div", {
            className:
              "border-[1px]    hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center ",
            children: e.jsx("h1", {
              className: "text-white text-center  font-medium text-5xl",
              children: "Wheels and Tires",
            }),
          }),
          e.jsxs("div", {
            className:
              "border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center ",
            children: [
              " ",
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Paint Protection",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center ",
            children: [
              " ",
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Ceramic Coating",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center ",
            children: [
              " ",
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Mobile Detailing",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer   border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center ",
            children: [
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Headlight Restoration",
              }),
              " ",
            ],
          }),
          e.jsxs("div", {
            className:
              "border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center ",
            children: [
              " ",
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Engine Bay Cleaning",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              " hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-[1px] border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center ",
            children: [
              " ",
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Interior/Exterior Detail",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center ",
            children: [
              " ",
              e.jsx("h1", {
                className: "text-white text-center  font-medium text-5xl",
                children: "Trim and Plastic Restoration",
              }),
            ],
          }),
        ],
      }),
    }),
  b = (r) => {
    const { positionprop: n } = r,
      [t, l] = i.useState(!1),
      [a, s] = i.useState(!1),
      c = () => {
        console.log("toggleNavbar"), l(!t);
      };
    return e.jsxs("header", {
      className: `w-full bg-black ${n}   z-10  max-w-screen `,
      children: [
        e.jsxs(d, {
          children: [
            e.jsxs(e.Fragment, {
              children: [
                e.jsxs("nav", {
                  className:
                    "hidden   sm:flex flex-row items-center max-h-[8rem]  px-3  justify-between",
                  children: [
                    e.jsx("a", {
                      href: "/",
                      children: e.jsx("img", {
                        className: "w-36 h-36  ",
                        src: "/logo1.png",
                        alt: "",
                      }),
                    }),
                    e.jsxs("ul", {
                      className:
                        "flex  flex-row text-white tracking-[0.2em] text-xl text-opacity-200 gap-16",
                      children: [
                        e.jsx("li", {
                          className: "  hover:text-gray-500 font-extralight",
                          children: e.jsx("a", { href: "/", children: "Home" }),
                        }),
                        " ",
                        e.jsx("li", {
                          className: "  hover:text-gray-500 font-extralight",
                          children: e.jsx("a", {
                            href: "/portfolio",
                            children: "Portfolio",
                          }),
                        }),
                        " ",
                        e.jsx("button", {
                          onMouseEnter: () => s(!0),
                          className:
                            "cursor-pointer tracking-[0.2em]   hover:text-gray-500 font-extralight",
                          children: "Services",
                        }),
                        e.jsx("li", {
                          className: "  hover:text-gray-500 font-extralight",
                          children: e.jsx("a", {
                            href: "/contact",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("ul", {
                      className:
                        "flex flex-row  text-white text-opacity-200 gap-6",
                      children: e.jsx("li", {
                        className:
                          "hover:bg-transparent text-xl border-[2px]   transition ease-in-out hover:border-red-700  duration-100 hover:text-red-700 hover:bg-opacity-50  px-10 py-1 rounded-3xl cursor-pointer  font-semibold",
                        children: e.jsx("a", {
                          href: "/",
                          children: "Get Quote!",
                        }),
                      }),
                    }),
                  ],
                }),
                e.jsxs("nav", {
                  className:
                    " sm:hidden flex flex-row items-center  px-3 justify-between",
                  children: [
                    e.jsx("a", {
                      href: "/",
                      children: e.jsx("img", {
                        className: "w-24",
                        src: "./logo1.png",
                        alt: "",
                      }),
                    }),
                    e.jsxs("button", {
                      onClick: c,
                      className: "mr-3 ",
                      children: [
                        " ",
                        t
                          ? e.jsx(h, { size: 35, color: "white" })
                          : e.jsx(x, { size: 35, color: "white" }),
                      ],
                    }),
                  ],
                }),
                t &&
                  e.jsx("div", {
                    className: `block sm:hidden bg-black transform translate-x-0 duration-500 ease-in-out ${
                      t ? "h-[10rem]" : "h-0"
                    }`,
                    children: e.jsx("nav", {
                      className: "h-[10rem]  ",
                      children: e.jsxs("ul", {
                        className:
                          "flex flex-col items-center justify-center text-white gap-6",
                        children: [
                          e.jsx("li", {
                            className:
                              " underline-offset-4 hover:text-blue-500 font-semibold",
                            children: e.jsx("a", {
                              href: "/",
                              children: "Home",
                            }),
                          }),
                          e.jsx("li", {
                            className:
                              " underline-offset-4 hover:text-blue-500 font-semibold",
                            children: e.jsx("a", {
                              href: "/",
                              children: "Contact",
                            }),
                          }),
                          e.jsx("li", {
                            className:
                              " underline-offset-4 hover:text-blue-500 font-semibold",
                            children: e.jsx("a", {
                              href: "/",
                              children: "About",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
            " ",
          ],
        }),
        " ",
        a &&
          e.jsx("div", {
            onMouseLeave: () => s(!1),
            className: "absolute w-full top-32  ",
            children: e.jsx(m, {}),
          }),
      ],
    });
  };
export { b as Header };