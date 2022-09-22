import { VisibilityContext } from "react-horizontal-scrolling-menu";
import React from "react";

export default function Card({
  onClick,
  selected,
  title,
  itemId,
}: {
  onClick: any;
  selected: any;
  title: any;
  itemId: any;
}) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "100px",
        }}
      />
    </div>
  );
}
