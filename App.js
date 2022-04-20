import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from './src/core/Theme'
import {
  SplashScreen,
  LoginScreen,
  RegisterScreen,
  Dashboard
} from './src/screens'

const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="SplashScreen"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   )
// }
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;