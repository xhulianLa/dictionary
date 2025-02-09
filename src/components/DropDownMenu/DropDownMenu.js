import React, { useState, useEffect } from 'react';
import styles from './DropDownMenu.module.css';

const DropDownMenu = ({ options, selectedOption, onOptionChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionChange = (event) => {
        onOptionChange(event.target.value);
        setIsOpen(false);
    };

    return (
        <div className={styles.select}>
            <div
                className={styles.selected}
                onClick={toggleDropdown}
            >
                {selectedOption}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className={styles.arrow}
                >
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>
                </svg>
            </div>
            
            <div className={styles.options}>
                {options.map((option) => (
                    <div key={option} title={option}>
                        <input
                            id={option}
                            name="option"
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        <label className={styles.option} htmlFor={option} style={{ fontFamily: option }}>
                            {option}
                        </label>
                    </div>
                ))}
                </div>
          
        </div>
    );
};

export default DropDownMenu;