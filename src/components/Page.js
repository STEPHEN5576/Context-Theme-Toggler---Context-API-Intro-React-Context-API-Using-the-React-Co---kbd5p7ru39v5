import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const contextVal = useContext(ThemeContext);
    const { theme } = contextVal;

    return(
        <div className={"container"+ `bg-${theme}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className="btn" id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    );
};

export { Page }
