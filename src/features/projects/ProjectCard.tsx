import { useLanguage } from '../../app/LanguageProvider';
import { Icon } from '../../components/Icon';
import { asset } from '../../lib/asset';
import type { Project } from '../../types/portfolio';

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const { language, t } = useLanguage();
  return (
    <article className="project-card">
      <button
        className="project-card-button"
        onClick={() => onOpen(project)}
        aria-label={`${t.projects.detail}: ${project.name}`}
      >
        <div
          className={`project-preview preview-${project.id} ${project.images[0].device === 'mobile' ? 'preview-mobile' : 'preview-web'}`}
        >
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
          {project.images[0].device === 'desktop' ? (
            <div className="project-desktop">
              <div className="mini-browser">
                <i />
                <i />
                <i />
              </div>
              <img
                src={asset(project.images[0].src)}
                alt={project.images[0].alt[language]}
                loading="lazy"
              />
            </div>
          ) : (
            <div className="project-phones">
              {project.images
                .filter((image) => image.device === 'mobile')
                .slice(0, 2)
                .map((img) => (
                  <img key={img.src} src={asset(img.src)} alt={img.alt[language]} loading="lazy" />
                ))}
            </div>
          )}
          <span className="preview-arrow">
            <Icon name="arrow" size={22} />
          </span>
          {project.status && <span className="project-status">{project.status[language]}</span>}
        </div>
        <div className="project-card-body">
          <p className="eyebrow">{project.field[language]}</p>
          <div className="project-title">
            <h3>{project.name}</h3>
            <Icon name="arrow" size={21} />
          </div>
          <p className="project-summary">{project.summary[language]}</p>
          <div className="tags">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
}
