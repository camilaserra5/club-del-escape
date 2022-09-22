import React, { useState } from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Card from "../components/Cards";
import {
  AiFillCaretLeft,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/all";

type Sala = {
  productId: string;
  eventId: string;
  startTime: string;
  endTime: string;
  numSeatsAvailable: number;
  privateEvent: boolean;
};

export default function Test({ sala }: { sala: Array<Sala> }) {
  const getItems = () =>
    Array(20)
      .fill(0)
      .map((_, ind) => ({ id: `element-${ind}` }));
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = ({ id }: { id: any }) => {
    return !!selected.find((el) => el === id);
  };

  const handleClick = ({ id }: { id: any }) => {
    return () => {
      const itemSelected = isItemSelected({ id: id });

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {sala.map(({ eventId, startTime, numSeatsAvailable }) => (
        <Card
          itemId={eventId} // NOTE: itemId is required for track items
          title={startTime}
          numSeatsAvailable={numSeatsAvailable}
          key={eventId}
          onClick={handleClick({ id: eventId })}
          selected={isItemSelected({ id: eventId })}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <AiOutlineDoubleLeft />
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <AiOutlineDoubleRight />
    </Arrow>
  );
}
function Arrow({
  children,
  disabled,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: String;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"arrow" + `-${className}`}
      style={{
        backgroundColor: "gray",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}
