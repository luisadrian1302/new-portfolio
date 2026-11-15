import { useLanguage } from '../app/LanguageProvider';
import { profile } from '../content/profile';
import { Icon } from './Icon';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="container footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
        <span>{t.footer}</span>
      </p>
      <a href="#home">
        {t.back}
        <Icon name="up" size={16} />
      </a>
    </footer>
  );
}
