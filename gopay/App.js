import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,Image} from 'react-native';


export default function App() {
  return (
    <SafeAreaView className="flex-1 w-screen h-screen bg-[#40023D]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col ">
       <View className=" h-1/2 pt-11 w-full items-start " >
        <View className="  h-full w-3/4  bg-[#DBC4DB]  rounded-br-full rounded-bl-xl  rounded-tr-3xl ">
          <View className="static flex flex-row h-1/2 pt-16 items-baseline">
            <View className="ml-8 rotate-45 h-20 w-12 inline-block bg-[#bd6abd]">              

            </View>
            <View className="pl-12 rotate-45 h-20 w-12 inline-block bg-[#a828a8]">              

</View>
<View className="pl-16 rotate-45 h-20 w-12 inline-block bg-[#6a116a]">              

</View>
          
          </View>
          
          
          <View className=" ml-20" >
            <Text className="text-4xl">GoPay</Text>
          </View>

        </View>
      <Text className="pt-11">Open up App.js to start working on your app!</Text>
     
    </View>
    <View className="flex-1  items-center" >
      <Text className="pt-11">Open up App.js to start working on your app!</Text>
     
    </View>
    <View className="flex-1  items-center" >
      <Text className="pt-11">Open up App.js to start working on your app!</Text>
     
    </View>
    <View className="flex-1  items-center" >
      <Text className="pt-11">Open up App.js to start working on your app!</Text>
     
    </View>

       </View>


    
    </SafeAreaView>
    
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
