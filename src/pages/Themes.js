import React, { useEffect } from 'react';

function Themes() {
  useEffect(() => {
    const link = document.createElement('link');
    link.id = 'theme-style';
    link.rel = 'stylesheet';
    link.href = '/themes/default.css'; // Load default theme
    document.head.appendChild(link);
  }, []);

  const changeTheme = (e) => {
    const selectedTheme = e.target.value;
    const themeLink = document.getElementById('theme-style');
    if (themeLink) {
      themeLink.href = `/themes/${selectedTheme}.css`;
    }
  };

  return (
    <div>
      <h2>Available Themes</h2>
      <p>Select a theme using the dropdown in the top-right corner.</p>
      <select
        onChange={changeTheme}
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <option value="default">Default</option>
        <option value="organ">Organ</option>
        <option value="cosmetic">Cosmetic</option>
      </select>
    </div>
  );
}

export default Themes;