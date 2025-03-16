import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home'; // สร้างหน้า HomeScreen
import CalendarScreen from './calendar'; // สร้างหน้า CalendarScreen
import ProgressScreen from './progress'; // สร้างหน้า ProgressScreen
import NoticeScreen from './notice'; // สร้างหน้า NoticeScreen
import SettingScreen from './setting'; // สร้างหน้า SettingScreen
import Ionicons from 'react-native-vector-icons/Ionicons'; // หรือ icon library อื่นๆ

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator style ={{}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Progress') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Notice') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          
          
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Progress" component={ProgressScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Notice" component={NoticeScreen}options={{headerShown: false}}/>
        <Tab.Screen name="Setting" component={SettingScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;