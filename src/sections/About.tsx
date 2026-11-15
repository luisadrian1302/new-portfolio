import { useLanguage } from '../app/LanguageProvider';
import { SectionHeading } from '../components/SectionHeading';
import { skills } from '../content/profile';

export function About() {
  const { language, t } = useLanguage();
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
            <p className="about-text">{t.about.text}</p>
            <p className="about-text">{t.about.text2}</p>
          </div>
          <div className="principles">
            <p className="eyebrow">{t.about.approach}</p>
            {t.about.principles.map((principle, index) => (
              <div className="principle" key={principle.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills">
          <p className="eyebrow">{t.about.tools}</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3>{typeof skill.title === 'string' ? skill.title : skill.title[language]}</h3>
                <div className="skill-list">
                  {skill.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
