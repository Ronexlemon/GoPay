import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button} from 'react-native';


export default function Login() {
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col ">
       <View className=" h-1/4 pt-11 w-full items-start " >
        <View className="  h-full w-full rounded-br-full rounded-bl-xl  rounded-tr-3xl ">
          <View className="static flex flex-row h-1/2 p-16 items-center">
            <View className="ml-8 rotate-45 h-20 w-12 inline-block bg-[#bd6abd]">              

            </View>
            <View className="pl-12 rotate-45 h-20 w-12 inline-block bg-[#a828a8]">              

</View>
<View className="pl-16 rotate-45 h-20 w-12 inline-block bg-[#6a116a]">              

</View>
          
          </View>
          
          
          <View className=" ml-32" >
            <Text className="text-4xl">GoPay  </Text>
          </View>

        </View>
      
     
    </View>
    <View className="flex-1  flex-col gap-16  w-full text-9xl items-center justify-center pt-11 " >
      <TextInput className="bg-[#DBC4DB] w-3/4 h-14 rounded-full "/> 
      <TextInput className="bg-[#DBC4DB] w-3/4 h-14 rounded-full "/> 
     
    </View>
    <View className="flex-1 pt-20  items-center" >
      <View className="flex flex-col gap-4 items-center">
        
        <View className="bg-[#FFFFFF]  w-60 rounded-full  ">
        <Button 
        
onPress={""}
title="SIGN IN"
color="purple"



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
