import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,Image,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Accounts from './src/screens/Accounts';
import Account from './src/screens/Account';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      
      <Stack.Screen 
      classname="h-full bg-purple-400"
        name="Home"
        component={Home}
        
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
