import React, { useState } from 'react';

function ProjectCard({ project }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={isChecked ? 'checked-card' : 'card'} onClick={toggleChecked}>
      <h1>{project.title}</h1>
      <img src={project.imgUrl} alt="" />
      <h3>{project.languages}</h3>
      <p>{project.desc}</p>
      <button>Check it out!</button>
      <h1>{project.id}</h1>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {   
        id:1,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    {   
        id:2,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    {   
        id:3,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    {   
        id:4,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    {   
        id:5,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    {   
        id:6,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    {   
        id:7,
        imgUrl: "./src/projectImages/sample.png",
        title: "Project Number 1",
        languages: "JS, HTML, CSS, React",
        desc: ""
    },
    // Other project objects...
  ];

  const projectsPacked = projects.map(project =>
    <ProjectCard project={project} key={project.id} />
  );

  return (
    <div className="projects-section">
      {projectsPacked}
    </div>
  );
}

export default ProjectsSection;
