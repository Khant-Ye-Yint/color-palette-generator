'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className="iconBtn" onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </div>
  );
};

export default ModeToggle;
