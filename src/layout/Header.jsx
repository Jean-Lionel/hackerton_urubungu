import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocaleAction } from "../store/actions/appActions";
import { Link, useLocation } from 'react-router-dom';

import { useIntl } from "react-intl";

const locales = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ki', label: 'kirundi', flag: '🇧🇮' }
];

const Header = () => {
  const [openLang, setOpenLang] = useState(false);
  const dispatch = useDispatch();

  const intl = useIntl();

  const handleLinkClick = (to) => {
    // Vous pouvez stocker l'état actif ici si besoin
  };

  const handleLocaleChange = (e, locale) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('locale', locale);
    dispatch(setLocaleAction(locale));
    setOpenLang(false);
  };

  const toggleOpenLang = () => {
    setOpenLang((prev) => !prev);
  };

  const currentLocale = localStorage.getItem('locale') || 'fr';

  return (
    <header style={styles.header}>
      <div style={styles.logo}>🎮{intl.formatMessage({ id: 'header.jeux' })} </div>


      <div style={styles.langContainer}>
        <button onClick={toggleOpenLang} style={styles.langButton}>
          🌐 {locales.find((l) => l.code === currentLocale)?.flag}
        </button>
        {openLang && (
          <ul style={styles.langDropdown}>
            {locales.map((locale) => (
              <li key={locale.code}>
                <button
                  onClick={(e) => handleLocaleChange(e, locale.code)}
                  style={{
                    ...styles.langOption,
                    fontWeight: locale.code === currentLocale ? 'bold' : 'normal',
                  }}
                >
                  {locale.flag} {locale.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  
  langContainer: {
    position: 'relative',
  },
  langButton: {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  langDropdown: {
    position: 'absolute',
    top: '40px',
    right: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
    zIndex: 1001,
  },
  langOption: {
    display: 'block',
    width: '100%',
    padding: '10px 20px',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Header;
