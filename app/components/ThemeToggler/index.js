'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className='ms-3'
      onClick={(e) => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'dark' ? (
        <MoonIcon className='block h-6 w-6 ml-2' aria-hidden='true' />
      ) : (
        <SunIcon className='block h-6 w-6 ml-2' aria-hidden='true' />
      )}
    </button>
  );
};

export default DarkModeButton;
