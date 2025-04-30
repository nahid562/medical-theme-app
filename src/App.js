import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';

function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL}/themes/${theme}.css`;
    link.id = 'theme-style';

    // Remove any previous theme
    const oldLink = document.getElementById('theme-style');
    if (oldLink) {
      oldLink.remove();
    }

    document.head.appendChild(link);
  }, [theme]);

  return (
    <div>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/themes" style={{ marginRight: '10px' }}>Themes</Link>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} style={{ float: 'right' }}>
          <option value="default">Default</option>
          <option value="organ">Organ Transplant</option>
          <option value="cosmetic">Cosmetic Surgery</option>
        </select>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
    </div>
  );
}

export default App;