import React from 'react';

const Tools = ({ tools }) => {
  return (
    <section className="tools">
      <h2>My daily drivers</h2>
      <div>
        {tools.map((tool) => {
          return (
            <a key={tool.id} href={tool.url} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
