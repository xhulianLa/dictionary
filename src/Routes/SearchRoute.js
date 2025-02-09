import styles from './SearchRoute.module.css';
import SettingsBar from '../components/SettingsBar/SettingsBar';
import SearchBar from "../components/SearchBar/SearchBar";
import Explanation from '../components/Explanation/Explanation';
import NotFoundPanel from '../components/NotFoundPanel/NotFoundPanel';
import { useState, useEffect } from 'react';
import {useParams} from "react-router";

function SeachRoute() {

  const {word} = useParams();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [fontFamily, setFontFamily] = useState(() => {
    const savedFont = localStorage.getItem('font');
    return savedFont || 'Sans Serif';
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font', fontFamily);
    localStorage.setItem('font', fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data[0]);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, [word]);

  return (
    <div className={styles.App}>
      <div className={styles.App_Wrapper_Search}>
        <div className={styles.Settings_Search_Wrapper}>
          <SettingsBar theme={theme} 
          setTheme={setTheme}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          />
          <SearchBar setResults={setResults}/>
        </div>
        <div className={styles.Explanation_Wrapper}>
          {results && (<Explanation data={results}/>)}
        </div>
        {!results && (<NotFoundPanel/>)}
      </div>
    </div>
  );
}

export default SeachRoute;
