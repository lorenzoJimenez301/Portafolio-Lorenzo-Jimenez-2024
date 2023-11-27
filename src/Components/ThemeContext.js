import React, { createContext, useState } from 'react';
import fondoInicial from '../Images/FondoPiel.png'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState(fondoInicial);

    const changeBackgroundImage = (newImage) => {
        setBackgroundImage(newImage);
    };

    return (
        <ThemeContext.Provider value={{ backgroundImage, changeBackgroundImage }}>
            {children}
        </ThemeContext.Provider>
    );
};