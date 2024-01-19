import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { seedPhrase,privateKey,DATA } from '../constants/data';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { fetchBalance, fetchBalanceGHO } from '../web3/AccountUtils';
import { formatTime } from '../constants/timeConverter';

export default function Account({navigation}) {
  // const route = useRoute()
  //  const data = route?.params?.data
  const [useData,setUserData]= useState([])
  const [balance,setBalance]= useState(0)
  const [balance2,setBalanceGHO]= useState(0)
     //const wordphrase = useData?.user?.seedPhrase.split(" ")
    //  console.log("user user data",useData?.user?.PrivateKey);

     const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };

     const Transactions =(trasact)=>{
      <View className="w-3/4 ">
        <Text className="text-red-300">{trasact}</Text>
        <Text>{trasact}</Text>

      </View>
     }
   
useEffect(()=>{
  async function fetchdata(){
    const data =  await getData()
    //console.log("user data s s s ",typeof(data.user.utilityInfo))
    //console.log("user data s s s ",data.user)
   
    setUserData(data)
    const bal = await fetchBalance(data?.user?.userAddress)
    const bal2 = await fetchBalanceGHO(data?.user?.userAddress)
    // console.log("user bal",bal);
    setBalance(bal)
    setBalanceGHO(bal2)
  }

  fetchdata();
  
    
},[useData])
  
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col pt-20 items-center  gap-4 ">
        {/* Balance */}
        <View className="w-3/4 bg-[#600060] h-1/6 rounded-2xl mt-16 p-5 ">
          <Text className="text-white text-xl">Balance:</Text>
          <Text className="text-white text-xl">ETH: $ {balance}</Text>
          <Text className="text-white text-xl">GHO: $ {balance2}</Text>


        </View>
        {/* send ,utilities */}
        <View className="w-3/4   gap-4" style={{flexDirection:"row",flexWrap:"wrap"}}>
          <View className="bg-[#B84CB8] w-32 h-10 rounded-xl items-center justify-center  ">
            <TouchableOpacity onPress={()=>navigation.navigate('Send')}><Text className="text-black ">Send Funds</Text></TouchableOpacity>
            

          </View>
          <View className="bg-[#B84CB8] w-32  h-10 rounded-xl items-center justify-center ">
          <TouchableOpacity onPress={()=>navigation.navigate('Receive')}><Text className="text-black ">Receive Funds</Text></TouchableOpacity>

</View>
<View className="bg-[#B84CB8] w-32  h-10 rounded-xl items-center justify-center ">
<TouchableOpacity onPress={()=>navigation.navigate('Utility')}><Text className="text-black ">Pay Utilities</Text></TouchableOpacity>

</View>
          
        </View>
        {/* recent activities */}
        <View className=" justify-between w-3/4 mt-10">
          <Text>RECENT ACTIVITIES</Text>
          {/* <Text>prive:{useData.user.PrivateKey}</Text> */}
          
        </View>
        {/* Transaction */}
        
  <ScrollView className="bg-[#FBF1FB] w-3/4  h-full "  >
  {useData.user?.utilityInfo?.map((utility, index) => (
    <View className="bg-[#eec9ee] rounded-2xl h-28 justify-between items-center p-8 " key={index} style={{ marginVertical: 8, paddingBottom: 8,borderRadius: 8,flexDirection:"row",flexWrap:"wrap" }}>
    <Text style={{ marginBottom: 4 }}>Paid: {utility.type}</Text>
    <Text style={{ marginBottom: 4 }}>For: ${utility.amount}</Text>
    <Text style={{ marginBottom: 4 }}>Mobile: {utility.phoneNumber}</Text>
    <Text style={{ marginBottom: 4 }}>At: {formatTime(utility.createdAt)}</Text>
  </View>

  ))}
  </ScrollView>
 

       
        

        
       </View>


    
    </SafeAreaView>
    
  );
}


