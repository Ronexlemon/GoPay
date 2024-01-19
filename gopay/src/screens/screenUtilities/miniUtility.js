import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, Alert} from 'react-native';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { transferGHO } from '../../web3/AccountUtils';
import { utilityadrress } from '../../web3/chains';

export default function MiniUtility({navigation}) {
  const [phoneNumber,setPhoneNumber] = useState()  
  const [password,setPassword] = useState() 
  const [amount,setAmount] = useState() 
  const [useData,setUserData]= useState([])
  const route = useRoute()
 const utilityType = route?.params?.type


 const buyUtility =async()=>{
  try{
    Alert.alert("starting")
    const res = await transferGHO(utilityadrress,useData?.user?.PrivateKey,amount)
    Alert.alert("response",res.message)
    console.log("the response is",res.message);
    if(res.success){
    await   loginUser()
    }


  }catch(err){
    console.log("buy utility error",err);
  }
 }
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
 if (amount !="" && useData?.user?.phoneNumber !="" && utilityType !=""){
  await axios.post("https://gopayba.onrender.com/api/utility",{
        
          phoneNumber:useData?.user?.phoneNumber,
          amount:amount,
          type:utilityType

        
      }).then((response)=>{
        if (response.status == 200){
          console.log("user data  saved success", response.data);
          // storeData(response.data);
          // navigation.navigate('Account',{data:response.data})
          Alert.alert("success");
          
        }
      })

 }else{
  Alert.alert("please check Your credentials")
 }
      


    }catch(err){
 console.log("user Authentication error",err);
    }
  }
  //get local data

       const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };

    //use Effect
    useEffect(()=>{
        async function fetchdata(){
          const data =  await getData()
          console.log("user data s s s ",data.user.PrivateKey)
          setUserData(data)
         
        }
      
        fetchdata();
        
          
      },[useData])
  
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
            <Text className="text-4xl">{utilityType} </Text>
          </View>

        </View>
      
     
    </View>
    <View className="flex-1 pl-10  flex-col gap-16  w-full text-9xl items-center justify-center pt-11 " >
      <TextInput label="Password"
      placeholder='Mobile Number'  
      value={useData?.user?.phoneNumber}   
      editable={false} 
      onChange={(e)=> setPhoneNumber(e.nativeEvent.text)}
       className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
      <TextInput 
      onChange={(e)=> setAmount(e.nativeEvent.text)}
      placeholder='Password'  label="Password" className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/> 
     
    </View>
    {/* button */}
    <View className="flex flex-col gap-4  items-center">

   
    <View className="bg-[#FFFFFF] w-60 rounded-full  pt-20   justify-center  ">
        <Button 
        
        onPress={()=>buyUtility()}
title="BUY"
color="grey"



/>
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
