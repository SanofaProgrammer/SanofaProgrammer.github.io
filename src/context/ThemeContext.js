import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('portfolio_theme') ? JSON.parse(localStorage.getItem('portfolio_theme')) : null);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}