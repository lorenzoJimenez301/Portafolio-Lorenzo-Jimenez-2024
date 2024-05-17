import React, { createContext, useState, memo, useEffect } from 'react';
import imgInicial from '../Images/FondoPiel.jpg';

export const ThemeContext = createContext();

export const ThemeProvider = memo(({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [theme, setTheme] = useState('dark');
    const fondoInicial = imgInicial; // Ruta a tu imagen de fondo

    useEffect(() => {
        const img = new Image();
        img.src = fondoInicial;
        img.onload = () => {
            setBackgroundImage(fondoInicial);
        };
    }, [fondoInicial]);

    const changeBackgroundImage = (newImage) => {
        setBackgroundImage(newImage);
    };

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ backgroundImage, theme, changeBackgroundImage, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
});