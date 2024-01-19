import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,Image,Button} from 'react-native';


export default function Home({navigation}) {
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#40023D]">
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
            <Text className="text-4xl">GoPay </Text>
          </View>

        </View>
      
     
    </View>
    <View className="flex-1  w-full  text-9xl" >
      <Text className="pt-11 pl-12 pr-4 w-full text-white flex justify-between text-2xl">Gateway   for <Text className="text-[#BEA629] pl-16 pr-16">Safe</Text>    <Text className="pl-16 text-2xl">& </Text></Text>
      <Text className="pl-20 text-2xl items-center text-[#BEA629]">Swift <Text className="text-white">Transactions</Text></Text>
     
    </View>
    <View className="flex-1  items-center" >
      <View className="flex flex-col gap-4 items-center">
        <View className="bg-[#FFFFFF] w-60 rounded-full  ">
        <Button 
        
onPress={()=>navigation.navigate('Login')}
title="Login"
color="grey"



/>
        </View>
        <View className="bg-[#FFFFFF] w-60 rounded-full  ">
        <Button 
        
        onPress={()=>navigation.navigate('Register')}
title="Signup"
color="grey"



/>
        </View>

      </View>
     
    </View>
    <View className="flex-1  items-center" >
      <Text className="pt-11 text-[#BEA629] ">Terms & Conditions</Text>
     
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
