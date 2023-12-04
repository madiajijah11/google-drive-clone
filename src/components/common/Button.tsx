import React from "react";
import type { Button } from "~/interface/Index";

export default function Button({ btnClass, title, onClick }: Button) {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>
      {title}
    </button>
  );
}
