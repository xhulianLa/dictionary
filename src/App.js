import styles from './App.module.css';
import SettingsBar from './components/SettingsBar/SettingsBar';
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from 'react';

function App() {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [fontFamily, setFontFamily] = useState(() => {
    const savedFont = localStorage.getItem('fontFamily');
    return savedFont || 'Sans Serif';
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', fontFamily);
    localStorage.setItem('fontFamily', fontFamily);
  }, [fontFamily]);

  useEffect(() => {console.log(results)}, [results]);
  return (
    <div className={styles.App}>
      <div className={styles.App_Wrapper}>
        <SettingsBar theme={theme} 
        setTheme={setTheme}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        />
        <SearchBar setResults={setResults}/>
      </div>
    </div>
  );
}

export default App;
