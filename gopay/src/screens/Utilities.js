import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { seedPhrase,privateKey,DATA } from '../constants/data';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { fetchBalance, fetchBalanceGHO } from '../web3/AccountUtils';

export default function Utility({navigation}) {
  // const route = useRoute()
  //  const data = route?.params?.data
//   const [useData,setUserData]= useState([])
//   const [balance,setBalance]= useState(0)
//   const [balance2,setBalanceGHO]= useState(0)
//      //const wordphrase = useData?.user?.seedPhrase.split(" ")
//      console.log("user user data",useData?.user?.PrivateKey);

//      const getData = async () => {
//       try {
//         const jsonValue = await AsyncStorage.getItem('userData');
//         return jsonValue != null ? JSON.parse(jsonValue) : null;
//       } catch (e) {
//         // error reading value
//       }
//     };

//      const Transactions =(trasact)=>{
//       <View className="w-3/4 ">
//         <Text className="text-red-300">{trasact}</Text>
//         <Text>{trasact}</Text>

//       </View>
//      }
   
// useEffect(()=>{
//   async function fetchdata(){
//     const data =  await getData()
//     console.log("user data s s s ",data.user.PrivateKey)
//     setUserData(data)
//     const bal = await fetchBalance(data?.user?.userAddress)
//     const bal2 = await fetchBalanceGHO(data?.user?.userAddress)
//     console.log("user bal",bal);
//     setBalance(bal)
//     setBalanceGHO(bal2)
//   }

//   fetchdata();
  
    
// },[useData])
  
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col pt-20 items-center  gap-4 ">
        {/* Utility */}
        <View className="h-full w-full justify-center  gap-8  " style={{flexDirection:"row",flexWrap:"wrap"}}>
            {/* KPLC */}
            <View className="bg-[#600060] w-2/6  h-1/4 rounded-2xl ml-8 items-center justify-center ">
  <TouchableOpacity  onPress={()=>navigation.navigate("MiniUtility",{type:"kplc tokens"})} className="flex flex-col "><Text className="text-white text-xl">KPLC</Text><Text className="text-white text-xl">TOKENS</Text></TouchableOpacity>
            </View>
            <View className="bg-[#600060] w-2/6  h-1/4 rounded-2xl items-center justify-center  ">
            <TouchableOpacity onPress={()=>navigation.navigate("MiniUtility",{type:"AIRTIME "})} className="flex flex-col "><Text className="text-white text-xl">BUY</Text><Text className="text-white text-xl">AIRTIME</Text></TouchableOpacity>
</View>
<View className="bg-[#600060] w-2/6  h-1/4 rounded-2xl items-center justify-center ">
<TouchableOpacity onPress={()=>navigation.navigate("MiniUtility",{type:"GROCERIES"})} className="flex flex-col "><Text className="text-white text-xl">BUY</Text><Text className="text-white text-xl">GROCERIES</Text></TouchableOpacity>
</View>
<View className="bg-[#600060] w-2/6  h-1/4 rounded-2xl items-center justify-center ">
<TouchableOpacity onPress={()=>navigation.navigate("MiniUtility",{type:"Water Bill"})} className="flex flex-col "><Text className="text-white text-xl">WATER</Text><Text className="text-white text-xl">BILL</Text></TouchableOpacity>
</View>
<View className="bg-[#600060] w-2/6  h-1/4 rounded-2xl items-center justify-center">
<TouchableOpacity onPress={()=>navigation.navigate("MiniUtility",{type:"RENT"})} className="flex flex-col "><Text className="text-white text-xl">RENT</Text></TouchableOpacity>
</View>
<View className="bg-[#600060] w-2/6  h-1/4 rounded-2xl  items-center justify-center">
<TouchableOpacity onPress={()=>navigation.navigate("MiniUtility",{type:"PARKING"})} className="flex flex-col "><Text className="text-white text-xl">PARKING</Text></TouchableOpacity>
</View>

        </View>
        
       </View>


    
    </SafeAreaView>
    
  );
}


