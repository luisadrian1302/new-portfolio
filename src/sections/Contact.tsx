import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../app/LanguageProvider';
import { Icon } from '../components/Icon';
import { profile } from '../content/profile';

export function Contact() {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
    timer.current = setTimeout(() => setCopyState('idle'), 4000);
  }
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p className="contact-description">{t.contact.intro}</p>
          <a href={`mailto:${profile.email}`} className="button button-light">
            {t.contact.cta}
            <Icon name="arrow" size={19} />
          </a>
        </div>
        <div className="contact-details">
          <p className="eyebrow">EMAIL</p>
          <div className="email-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="icon-button" aria-label={t.contact.copy} onClick={copyEmail}>
              <Icon name={copyState === 'copied' ? 'check' : 'copy'} size={18} />
            </button>
          </div>
          <p className="copy-feedback" role="status">
            {copyState === 'copied'
              ? t.contact.copied
              : copyState === 'failed'
                ? t.contact.failed
                : ''}
          </p>
          <p className="eyebrow social-label">{t.contact.elsewhere}</p>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
              <Icon name="arrow" size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
