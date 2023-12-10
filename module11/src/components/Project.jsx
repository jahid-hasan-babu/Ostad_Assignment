const Project = () => {
  const projects = ['Project 1', 'Project 2', 'Project 3'];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
