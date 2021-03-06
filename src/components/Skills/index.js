import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div>
        {skills.map((skill) => {
          return <span key={skill.id}>{skill.name}</span>;
        })}
      </div>
    </section>
  );
};

export default Skills;
