import styles from "./SettingsBar.module.css";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import{ReactComponent as LogoIcon} from "../../assets/icons/logo.svg";
import {ReactComponent as MoonIcon} from "../../assets/icons/icon-moon.svg";
     
function SettingsBar({theme, setTheme, fontFamily, setFontFamily}) {
    const handleCheckboxChange = (e) => {
        setTheme(e.target.checked ? 'dark' : 'light');
    }

    const handleFontChange = (newFont) => {
        setFontFamily(newFont);
    };

    const fonts = ['Sans Serif', 'Serif', 'Monospace'];

    return ( 
        <div className={styles.settingsBar}>
            <LogoIcon className={styles.settingsIcon}/>
            <div className={styles.settingsRightWrapper}>
            <DropDownMenu
                options={fonts}
                selectedOption={fontFamily}
                onOptionChange={handleFontChange}
            />   
                <span className={styles.dividerIcon}></span>
                <label className={styles.settingsLabel}>
                    <input type="checkbox" 
                    onChange={handleCheckboxChange} 
                    className={styles.settingsCheckbox}
                    checked={theme==="dark"}/>
                    <span className={styles.roundSlider}></span>
                </label>
                <MoonIcon className = {styles.moonIcon}/>
            </div>
        </div>
     );
}

export default SettingsBar;