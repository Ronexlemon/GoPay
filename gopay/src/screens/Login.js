import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {
  const [phoneNumber,setPhoneNumber] = useState()  
  const [password,setPassword] = useState() 

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userData', jsonValue);
    } catch (e) {
      // saving error
      console.log("error saving local data",e);
    }
  }; 

  const loginUser =async()=>{
    try{
 if (password !="" && phoneNumber !=""){
  await axios.post("https://gopayba.onrender.com/api/login",{
        
          phoneNumber:phoneNumber,
          password:password

        
      }).then((response)=>{
        if (response.status == 200){
          console.log("user data", response.data);
          console.log("user datautil", typeof(response.data.user.utilityInfo));
          storeData(response.data);
          navigation.navigate('Account',{data:response.data})
          
        }
      })

 }else{
  Alert.alert("please check Your credentials")
 }
      


    }catch(err){
 console.log("user Authentication error",err);
    }
  }
  
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
    <View className="flex-1 pl-10 flex-col gap-16  w-full text-9xl items-center justify-center pt-11 " >
      <TextInput label="Password"
      placeholder='Mobile Number'      
      onChange={(e)=> setPhoneNumber(e.nativeEvent.text)}
       className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
      <TextInput 
      onChange={(e)=> setPassword(e.nativeEvent.text)}
      placeholder='Password'  label="Password" className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
     
    </View>
    <View className="flex-1 pt-20  items-center" >
      <View className="flex  gap-4 items-center">
        
        <View className="bg-[#FFFFFF]  w-60 rounded-full  ">
        <Button 
        
        
        onPress={loginUser}
title="SIGN IN"
color="purple"



/>
        </View>

      </View>
     
    </View>
    <View className="flex justify-center items-center">
      <Text>Don't have an account</Text>
      <TouchableOpacity><Text className="text-[#800080] text-xl">SIGN UP NOW</Text></TouchableOpacity>
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
