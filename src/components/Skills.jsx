import './Skills.css'

const skillsData = [
  {
    category: 'Development',
    skills: [
      'Java / Python',
      'React / Next.js',
      'Node.js',
      'HTML5 / CSS3 / SASS',
      ' ML'
    ]
  },
  {
    category: 'Libraries',
    skills: [
      'Numpy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      'Git / GitHub',
      'Tabluea / PowerBI',
      'Jupiter / Vs code',
      
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Expertise</div>
      <h2 className="section-title">What I Do</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className="skill-category"
            style={{ 
              animationDelay: `${0.3 + index * 0.2}s` 
            }}
          >
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
