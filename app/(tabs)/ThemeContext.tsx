// import React, { createContext, useState, useEffect } from 'react';
// import { Appearance, useColorScheme } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Create the Theme Context
// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const systemColorScheme = useColorScheme(); // Detect system theme
//   const [darkMode, setDarkMode] = useState(systemColorScheme === 'dark');

//   // Load saved theme from AsyncStorage
//   useEffect(() => {
//     const loadTheme = async () => {
//       const savedTheme = await AsyncStorage.getItem('darkMode');
//       if (savedTheme !== null) {
//         setDarkMode(JSON.parse(savedTheme));
//       }
//     };
//     loadTheme();
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = async () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     await AsyncStorage.setItem('darkMode', JSON.stringify(newMode));
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };