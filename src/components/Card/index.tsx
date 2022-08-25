import React from "react";
import clsx from "clsx";
// import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import style from "./style.module.css";

interface Props {
  title: string;
  url: string;
  description: JSX.Element;
}

export function Card({ title, url, description }: Props) {
  return (
    <div className={clsx(style.card)}>
      <Link to={url}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}
