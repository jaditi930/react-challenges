import React, { useContext, useState, useEffect, useRef } from "react";
import accordianBg from "../accordionBg.svg";
import { createContext } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdReturnLeft } from "react-icons/io";
import ProgressBar from "./ProgressBar";

const AccordianContext = createContext({});
const ItemContext = createContext({});

const Accordian = ({ children }) => {
  const [active, setActive] = useState("1");
  const itemsRef = useRef([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActive((active) => {
        const len = itemsRef.current.length;
        const currentIndex = itemsRef.current.findIndex(
          (item) => item === active
        );
        const nextIndex = (currentIndex + 1) % len;
        return itemsRef.current[nextIndex];
      });
    }, 4000);
  }, [active]);

  return (
    <AccordianContext.Provider value={{ active, setActive, itemsRef }}>
      <div
        style={{
          backgroundImage: `url('${accordianBg}')`,
        }}
      >
        {children}
      </div>
    </AccordianContext.Provider>
  );
};

const AccordianItem = ({ children, id }) => {
  const { active, setActive, itemsRef } = useContext(AccordianContext);

  useEffect(() => {
    let new_items = [...itemsRef.current];
    if (new_items.findIndex((item) => item === id) === -1) new_items.push(id);
    itemsRef.current = new_items;
  }, []);
  return (
    <ItemContext.Provider value={{ id }}>
      <div className="p-3" key={id}>
        {active === id && <ProgressBar TIME={3} />}
        {children}
      </div>
    </ItemContext.Provider>
  );
};

const AccordianToggle = ({ children }) => {
  const { active, setActive, itemsRef } = useContext(AccordianContext);
  const { id } = useContext(ItemContext);
  const isOpen = active === id;

  return (
    <div className="flex w-[100%]">
      <div>{children}</div>
      <div className="ml-auto mr-5 cursor-pointer">
        {isOpen && (
          <IoIosArrowUp
            onClick={() => {
              setActive(null);
            }}
          />
        )}
        {!isOpen && (
          <IoIosArrowDown
            onClick={() => {
              setActive(id);
            }}
          />
        )}
      </div>
    </div>
  );
};

const AccordianContent = ({ children }) => {
  const { active, setActive } = useContext(AccordianContext);
  const { id } = useContext(ItemContext);
  return (
    <div
      style={{
        display: active === id ? "block" : "none",
      }}
    >
      {children}
    </div>
  );
};

export { Accordian, AccordianItem, AccordianContent, AccordianToggle };
