import React, { createContext, useState } from 'react';
import fondoInicial from '../Images/FondoPiel.png'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState(fondoInicial);
    const [theme, setTheme] = useState('dark');

    const changeBackgroundImage = (newImage) => {
        setBackgroundImage(newImage);
    };
    const changeTheme = (newTheme) =>{
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ backgroundImage, theme, changeBackgroundImage, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};