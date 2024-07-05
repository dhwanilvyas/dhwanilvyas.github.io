import React from "react";

const Projects = () => {
  return <p>Will add details here soon.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
      <div className="mt-5" style={{ transform: "none " }}>
        <a target="_blank" rel="noopener noreferrer" href="#">
          <img
            alt="Meditations App"
            loading="lazy"
            width="30"
            height="30"
            decoding="async"
            data-nimg="1"
            className="rounded-lg mb-3"
            style={{ color: "transparent" }}
            src="/images/projects/syntaxUI.svg"
          />
          <div className="text-sm mb-1 font-medium text-gray-900">
            Meditations App
          </div>
          <div className="max-w-xs text-sm font-normal text-gray-500">
            An app for organizing book notes and personal reflections.
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
