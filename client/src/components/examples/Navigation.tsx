import { useState } from "react";
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    console.log('Theme toggled:', isDark ? 'light' : 'dark');
  };

  return (
    <Navigation 
      onThemeToggle={handleThemeToggle} 
      isDark={isDark}
    />
  );
}