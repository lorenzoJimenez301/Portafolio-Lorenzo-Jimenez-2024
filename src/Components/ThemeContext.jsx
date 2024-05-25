import React, { createContext, useState, memo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = memo(({ children }) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
});