import { useLanguage } from '../app/LanguageProvider';
import { Icon } from '../components/Icon';
import { projects } from '../content/projects';
import { asset } from '../lib/asset';
import type { Project } from '../types/portfolio';

export function Hero({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  const { t, language } = useLanguage();
  const featured = projects[0];
  const mobilePreview = featured.images.find(
    (image, index) => image.device === 'mobile' && index > 0,
  );
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-square" />
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {t.hero.line1}
            <br />
            {t.hero.line2}
            <br />
            <span>{t.hero.line3}</span>
          </h1>
          <p className="hero-description">{t.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.hero.cta}
              <Icon name="down" size={17} />
            </a>
            <a className="text-link" href="#contact">
              {t.hero.contact}
              <Icon name="arrow" size={17} />
            </a>
          </div>
          <p className="hero-note">
            <span />
            {t.hero.note}
          </p>
        </div>
        <button
          className="featured-project"
          onClick={() => onOpenProject(featured)}
          aria-label={`${t.hero.featuredLink}: ${featured.name}`}
        >
          <div className="featured-topline">
            <span>{t.hero.featured}</span>
            <span>01 — {String(projects.length).padStart(2, '0')}</span>
          </div>
          <div className="featured-visual">
            <span className="visual-cross cross-top">+</span>
            <span className="visual-cross cross-bottom">+</span>
            <div className={`desktop-frame featured-${featured.images[0].device}`}>
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <i>{featured.name}</i>
              </div>
              <img
                src={asset(featured.images[0].src)}
                alt={featured.images[0].alt[language]}
                fetchPriority="high"
              />
            </div>
            {mobilePreview && (
              <div className="phone-frame">
                <img src={asset(mobilePreview.src)} alt={mobilePreview.alt[language]} />
              </div>
            )}
            <span className="visual-caption">
              {featured.technologies.slice(0, 3).join(' / ').toUpperCase()}
            </span>
          </div>
          <div className="featured-bottom">
            <div>
              <span className="eyebrow">{featured.field[language]}</span>
              <h2>{featured.name}</h2>
              <p>{featured.summary[language]}</p>
            </div>
            <span className="round-arrow">
              <Icon name="arrow" />
            </span>
          </div>
        </button>
      </div>
      <div className="hero-strip">
        <span className="strip-label">FULL STACK, END TO END</span>
        <div>
          {t.hero.strip.map((item, i) => (
            <span key={item}>
              <Icon name={(['code', 'mobile', 'server'] as const)[i]} size={18} />
              {item}
            </span>
          ))}
        </div>
        <a href="#projects" className="strip-scroll" aria-label={t.hero.cta}>
          <Icon name="down" size={18} />
        </a>
      </div>
    </section>
  );
}
