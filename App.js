import * as React from 'react';
import { useState } from 'react';
import HomeScreen from './Screen/HomeScreen';
import GenderScreen from './Screen/GenderScreen';
import AgeScreen from './Screen/Age';
import BirthdayScreen from './Screen/BirthdayScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen navigate={setCurrentScreen} />;
      case 'Gender':
        return <GenderScreen navigate={setCurrentScreen} />;
      case 'Age':
        return <AgeScreen navigate={setCurrentScreen} />;
      case 'Birthday':
        return <BirthdayScreen navigate={setCurrentScreen} />;
      default:
        return <HomeScreen navigate={setCurrentScreen} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}