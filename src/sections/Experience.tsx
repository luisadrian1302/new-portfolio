import { useLanguage } from '../app/LanguageProvider';
import { SectionHeading } from '../components/SectionHeading';
import { Icon } from '../components/Icon';
import { certificates, experience, profile } from '../content/profile';
import { asset } from '../lib/asset';

export function Experience() {
  const { language, t } = useLanguage();
  return (
    <section id="experience" className="section container">
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.intro}
      />
      <div className="experience-layout">
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={index}>
              <span className="timeline-dot" />
              <p className="eyebrow">{item.period[language]}</p>
              <h3>{item.title[language]}</h3>
              <p className="organization">{item.organization}</p>
              <p className="experience-description">{item.description[language]}</p>
              {item.responsibilities[language].length > 0 && (
                <ul className="experience-responsibilities">
                  {item.responsibilities[language].map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              )}
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <aside className="education">
          <p className="eyebrow">{t.experience.education}</p>
          <span className="education-date">2022 — 2025</span>
          <h3>{t.experience.degree}</h3>
          <p>{profile.university}</p>
          <div className="certifications">
            <p className="eyebrow">{t.experience.certificates}</p>
            {certificates.map((certificate) => (
              <a
                href={asset(certificate.file)}
                key={certificate.name}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.experience.view}: ${certificate.name} (PDF)`}
              >
                <div>
                  <strong>{certificate.name}</strong>
                  <span>{certificate.year} · PDF</span>
                </div>
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
