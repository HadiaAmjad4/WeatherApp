// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationAction, NavigationContainer } from '@react-navigation/native';


// const App = () => {
//   return (

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name = "Home" component = {HomeScreen}
// options = {{
//   title : 'Home',
//   headerStyle: {
//     backgroundColor: '#1B1A55',
//   },
//   headerShadowVisible : false,
//   headerTintColor : '#fff',
// }}
    
//     />
//   </Stack.Navigator>
// </NavigationContainer>



   
//   );
// };

// export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = "Home" component= {HomeScreen} 
    options={{
      title: 'Home',
      headerStyle: {
        backgroundColor: '#1B1A55', // Set background color of the header
      },
      headerShadowVisible: false,
      headerTintColor: '#fff', // Set text color of the header
    }}
    
    
    />
      <Stack.Screen name = "Result" component= {ResultScreen}

        options={{
      title: 'Result',
      headerStyle: {
        backgroundColor: '#1B1A55', // Set background color of the header
      },
      headerShadowVisible: false,
      headerTintColor: '#fff', // Set text color of the header
    }}
      />
      
      </Stack.Navigator>
      <View>
      <StatusBar style="hidden" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
