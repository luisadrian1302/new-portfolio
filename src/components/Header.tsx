import { useEffect, useState } from 'react';
import { useLanguage } from '../app/LanguageProvider';
import { profile } from '../content/profile';
import { Icon } from './Icon';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    }
    if (open) window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#home"
          className="brand"
          aria-label={`${profile.name} — ${language === 'es' ? 'Inicio' : 'Home'}`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            la<span>.</span>
          </span>
          <span>
            {profile.name}
            <span className="brand-dot">.</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          aria-label={language === 'es' ? 'Principal' : 'Main'}
          className={`main-nav ${open ? 'is-open' : ''}`}
        >
          {(['projects', 'about', 'experience'] as const).map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            {t.nav.contact}
            <Icon name="arrow" size={16} />
          </a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={language === 'es' ? 'Idioma' : 'Language'}>
            {(['es', 'en'] as const).map((lang) => (
              <button
                type="button"
                key={lang}
                lang={lang}
                aria-label={lang === 'es' ? 'Español' : 'English'}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? t.closeMenu : t.menu}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
