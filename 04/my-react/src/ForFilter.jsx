import { Fragment } from "react";
import ForItem from "./ForItem";

export default function ForFilter({ src }) {
  const lowPrice = src.filter((src) => src.price < 3500);
  return (
    <dl>
      {lowPrice.map((elem) => (
        <ForItem book={elem} key={elem.isbn} />
      ))}
    </dl>
  );
}
