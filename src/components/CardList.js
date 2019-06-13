import React from "react";
import Card from "./Card";

export default function CardList(props) {
  const { robots } = props;
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
}
