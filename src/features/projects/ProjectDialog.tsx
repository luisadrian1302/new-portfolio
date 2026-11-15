import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../app/LanguageProvider';
import { Icon } from '../../components/Icon';
import { asset } from '../../lib/asset';
import type { Project } from '../../types/portfolio';

export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { language, t } = useLanguage();
  const [imageIndex, setImageIndex] = useState(0);
  const [device, setDevice] = useState(project.images[0].device);
  const devices = [...new Set(project.images.map((image) => image.device))];
  const images = project.images.filter((image) => image.device === device);
  const content = project.content[language].modalContent;
  const currentImage = images[imageIndex];

  useEffect(() => {
    const element = dialog.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, []);

  function moveImage(direction: number) {
    setImageIndex((index) => (index + direction + images.length) % images.length);
  }

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-inner">
        <div className="dialog-top">
          <span className="eyebrow">{project.field[language]}</span>
          <button autoFocus className="icon-button" onClick={onClose} aria-label={t.detail.close}>
            <Icon name="close" />
          </button>
        </div>
        <div className="dialog-header">
          <h2 id="project-dialog-title">{project.name}</h2>
          <p>{project.summary[language]}</p>
          {project.status && <span className="status-note">{project.status[language]}</span>}
        </div>
        <div
          className="gallery"
          role="region"
          aria-label={t.detail.gallery}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              moveImage(1);
            }
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              moveImage(-1);
            }
          }}
        >
          {devices.length > 1 && (
            <div
              className="project-filters gallery-filters"
              role="group"
              aria-label={t.detail.gallery}
            >
              {devices.map((option) => (
                <button
                  key={option}
                  aria-pressed={device === option}
                  onClick={() => {
                    setDevice(option);
                    setImageIndex(0);
                  }}
                >
                  {option === 'desktop' ? t.projects.web : t.projects.mobile}
                  <span>{project.images.filter((image) => image.device === option).length}</span>
                </button>
              ))}
            </div>
          )}
          <div className={`gallery-stage gallery-${currentImage.device}`}>
            <img src={asset(currentImage.src)} alt={currentImage.alt[language]} />
          </div>
          <div className="gallery-controls">
            <button
              className="icon-button"
              aria-label={t.detail.previous}
              onClick={() => moveImage(-1)}
            >
              <Icon name="left" />
            </button>
            <p aria-live="polite">
              {currentImage.alt[language]}{' '}
              <span>
                {imageIndex + 1} / {images.length}
              </span>
            </p>
            <button className="icon-button" aria-label={t.detail.next} onClick={() => moveImage(1)}>
              <Icon name="chevron" />
            </button>
          </div>
          <div className="gallery-thumbnails">
            {images.map((image, index) => (
              <button
                key={image.src}
                aria-label={`${t.detail.image}: ${image.alt[language]}`}
                aria-pressed={index === imageIndex}
                onClick={() => setImageIndex(index)}
              >
                <img src={asset(image.src)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
        <div className="dialog-content">
          <div className="case-study">
            <h3>{t.detail.overview}</h3>
            <p>{content.overview}</p>
            {content.disclaimer && <p className="disclaimer">{content.disclaimer}</p>}
            <h3>{t.detail.contribution}</h3>
            <ul>
              {content.participation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>{t.detail.features}</h3>
            <ul>
              {content.mainFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="project-facts">
            <h3>{t.detail.stack}</h3>
            <div className="tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {project.links.length > 0 && (
              <>
                <h3>{t.detail.links}</h3>
                {project.links.map((link) => (
                  <a
                    className="text-link"
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label[language]}
                    <Icon name="arrow" size={16} />
                  </a>
                ))}
              </>
            )}
          </aside>
        </div>
        {project.video && (
          <div className="project-video">
            <h3>{t.detail.video}</h3>
            <video src={asset(project.video)} controls preload="none" aria-label={t.detail.video} />
          </div>
        )}
      </div>
    </dialog>
  );
}
