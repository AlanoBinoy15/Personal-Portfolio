import './Projects.css'

const projectsData = [
  {
    number: '01',
    title: 'Automated 3D visualization of 2D blueprints',
    description: 'A comprehensive web application that coverts 2D blueprints to 3D models for faster visualization using python react java deep learning and CNN.',
    tags: ['React', 'Python', 'Deep learning '],
    github: 'https://github.com/AlanoBinoy15/Automated-3D-Visualization-of-2D-Blueprints.git'
  },
  {
    number: '02',
    title: 'Food recommendation chatbot',
    description: 'An platform with focus on performance and accessibility. automated for food related question made using java .',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    github: 'https://github.com/AlanoBinoy15/Food-Recommendation-Chatbot.git'
  },
  {
    number: '03',
    title: 'Electrical vehicle analysis dashboard ',
    description: 'A powerbi dashboard made for analysis of different factors and sales and related factors of e-vehicles.',
    tags: ['MS Excel', 'PowerBI'],
    github: 'https://github.com/yourusername/project-three'
  }
]

export default function Projects() {
  return (
    <section id="work">
      <div className="section-label">Featured Projects</div>
      <h2 className="section-title">Selected Work</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
          >
            <div className="project-number">{project.number}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tech-tag">{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
