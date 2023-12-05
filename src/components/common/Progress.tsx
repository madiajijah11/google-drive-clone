import React from "react";
import type { Progress } from "~/interface/Index";

export default function Progress({ progress }: Progress) {
  return (
    <div className="mt-5 w-11/12">
      <progress className="progress w-56" value={progress} max="100"></progress>
    </div>
  );
}
