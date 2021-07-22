import React from 'react';
import Project from '../Project';

export default function Portfolio({projects}) {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
      <ul className="list-group">
       
        {projects.map((user) => (
           <Project user={user}/>
        ))}
      </ul>
    </div>
    </div>
  );
}
