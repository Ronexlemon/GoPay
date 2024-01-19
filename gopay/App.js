import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,Image,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Accounts from './src/screens/Accounts';
import Account from './src/screens/Account';
import Utility from './src/screens/Utilities';
import MiniUtility from './src/screens/screenUtilities/miniUtility';
import Receive from './src/screens/screenUtilities/receive';
import Send from './src/screens/screenUtilities/send';


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
      <Stack.Screen name="Utility" component={Utility} />
      <Stack.Screen name="MiniUtility" component={MiniUtility} />
      <Stack.Screen name="Receive" component={Receive} />
      <Stack.Screen name="Send" component={Send} />
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
