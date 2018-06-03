import React from 'react';

const ThemeContext = React.createContext({
    name:"React Context"
}); 

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;
