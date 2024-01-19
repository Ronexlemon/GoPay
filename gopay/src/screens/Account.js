import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { seedPhrase,privateKey,DATA } from '../constants/data';
import { useRoute } from '@react-navigation/native';


export default function Account({navigate}) {
  // const route = useRoute()
  // const data = route?.params?.data
     const wordphrase = seedPhrase.split(" ")

     const Transactions =(trasact)=>{
      <View className="w-3/4 ">
        <Text className="text-red-300">{trasact}</Text>
        <Text>{trasact}</Text>

      </View>
     }
   

  
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col pt-20 items-center  gap-4 ">
        {/* Balance */}
        <View className="w-3/4 bg-[#600060] h-1/6 rounded-2xl mt-16 p-5 ">
          <Text className="text-white text-xl">Balance:</Text>
          <Text className="text-white text-xl">KSH 782,341.96</Text>


        </View>
        {/* send ,utilities */}
        <View className="w-3/4   gap-4" style={{flexDirection:"row",flexWrap:"wrap"}}>
          <View className="bg-[#B84CB8] w-32 h-10 rounded-xl items-center justify-center  ">
            <TouchableOpacity><Text className="text-black ">Send Funds</Text></TouchableOpacity>
            

          </View>
          <View className="bg-[#B84CB8] w-32  h-10 rounded-xl items-center justify-center ">
          <TouchableOpacity><Text className="text-black ">Receive Funds</Text></TouchableOpacity>

</View>
<View className="bg-[#B84CB8] w-32  h-10 rounded-xl items-center justify-center ">
<TouchableOpacity><Text className="text-black ">Pay Utilities</Text></TouchableOpacity>

</View>
          
        </View>
        {/* recent activities */}
        <View className=" justify-between w-3/4 mt-10">
          <Text>RECENT ACTIVITIES</Text>
          
        </View>
        {/* Transaction */}
       
        <ScrollView className=" w-3/4 h-full">
        {DATA.map((word, index) => (
                    
                       <View className="w-full h-20 bg-[#FBF1FB] mb-4 p-2  justify-between  rounded-2xl" style={{flexDirection:"row",flexWrap:"wrap"}} key={index}>
                        <Text className="w-1/2 text-black"> {word.title}</Text>
                        <Text className="w-1/2 text-green-700"> {word.amount}</Text>
                        <Text className="w-1/2"> {word.date}</Text>
                        <Text className="w-1/2"> {word.title}</Text>
                      
                    </View>
                    
                   
                  
                  ))}
        
        </ScrollView>
       
        

        
       </View>


    
    </SafeAreaView>
    
  );
}


