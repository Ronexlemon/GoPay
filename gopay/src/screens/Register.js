import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity} from 'react-native';
import { generateAccount } from '../web3/AccountUtils';
import { useState } from 'react';

export default function Register({navigation}) {
  
  
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col  ">
       <View className=" h-1/4 pt-6 w-full items-start gap-2 " >
        <View className="  h-1/2 w-full rounded-br-full rounded-bl-xl  rounded-tr-3xl ">
          <View className="static flex flex-row h-1/2 p-16 items-center">
            <View className="ml-8 rotate-45 h-20 w-12 inline-block bg-[#bd6abd]">              

            </View>
            <View className="pl-12 rotate-45 h-20 w-12 inline-block bg-[#a828a8]">              

</View>
<View className="pl-16 rotate-45 h-20 w-12 inline-block bg-[#6a116a]">              

</View>
          
          </View>
          
          
          <View className="  ml-32" >
            <Text className="text-4xl">GoPay  </Text>
          </View>

        </View>
      
     
    </View>
    <View className="flex pl-10 pb-8 flex-col gap-16  w-full text-9xl items-center justify-center pt-11 " >
      <TextInput label="Password"
      placeholder='Mobile Number' 
    
       className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
      <TextInput placeholder='Password'  label="Password" className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
      <TextInput placeholder='Confirm Password'  label="Password" className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
     
    </View>
    <View className="">
   
      <View className="flex   pt-11 gap-4 items-center">
        
        <View className="bg-[#FFFFFF]  w-60 rounded-full  ">
        <Button 
        
        
        onPress={()=>navigation.navigate('Accounts')}
title="SIGN IN"
color="purple"



/>
        </View>

      </View>
      </View>
     
    
    <View className="flex  pt-11 justify-center items-center">
      <Text>Already have an account? <TouchableOpacity  onPress={()=>navigation.navigate('Login')}><Text className="text-[#800080] text-sm">Login</Text></TouchableOpacity></Text>
      
    </View>
    <View className="flex  items-center" >
      <Text className="pt-4 text-[#BEA629] ">Terms & Conditions</Text>
     
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
