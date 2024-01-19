import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, Alert} from 'react-native';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { transferGHO } from '../../web3/AccountUtils';
import { utilityadrress } from '../../web3/chains';
import * as Clipboard from 'expo-clipboard';

export default function Receive({navigation}) {
    const [copiedText, setCopiedText] = useState('');
  
  const [useData,setUserData]= useState([])
  const route = useRoute()
 const utilityType = route?.params?.type


 const copyToClipboard = async () => {
    await Clipboard.setStringAsync(useData?.user?.PublicKey);
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };
  

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
          // console.log("user data s s s ",data.user.PrivateKey)
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
            <Text className="text-4xl">Click The Address </Text>
          </View>

        </View>
      
     
    </View>
    <View className="flex-1 pl-10  flex-col gap-16  w-full text-9xl items-center justify-center pt-11 " >
        <TouchableOpacity  className="bg-[#DBC4DB] w-full items-center h-14 rounded-full text-center " onPress={copyToClipboard}>
            <Text className="items-center justify-center text-sm p-2">{useData?.user?.PublicKey}</Text>
        </TouchableOpacity>
      {/* <TextInput label="Password"
      placeholder='Mobile Number'  
      value={useData?.user?.phoneNumber}   
      editable={false} 
      onChange={(e)=> setPhoneNumber(e.nativeEvent.text)}
       className="bg-[#DBC4DB] w-3/4 h-14 rounded-full text-center "/>  */}
      
    </View>
    {/* button */}
    
    
   
    <View className="flex items-center" >
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
