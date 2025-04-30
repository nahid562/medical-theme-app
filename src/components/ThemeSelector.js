import React from 'react';

const ThemeSelector = () => {
  const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    window.location.reload();
  };

  return (
    <div className="theme-buttons">
      <button onClick={() => setTheme('default')}>Default</button>
      <button onClick={() => setTheme('organ')}>Organ Transplant</button>
      <button onClick={() => setTheme('cosmetic')}>Cosmetic Surgery</button>
    </div>
  );
};

export default ThemeSelector;