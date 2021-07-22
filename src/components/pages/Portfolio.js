import React from 'react';
import Project from '../Project';

export default function Portfolio({projects}) {
  return (
    <div>

      <h1>Portfolio</h1>

      <main>
        {projects.map((project) => (
        <Project project={project}/>
        ))}
      </main>

    </div>

  );
}
