import { projects } from "src/text/projectsPage";
import React from "react";
import WhatTheySay from "../home/WhatTheySay";
import Project from "./Project";

export default function index() {
  return (
    <div>
      {projects["ar"].map((p, i) => (
        <Project project={p} index={i} key={p.name} />
      ))}
      <WhatTheySay locale="ar" />
    </div>
  );
}
