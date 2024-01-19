import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity, ScrollView} from 'react-native';
import { seedPhrase,privateKey } from '../constants/data';
import { useRoute } from '@react-navigation/native';

export default function Account({navigate}) {
  // const route = useRoute()
  // const data = route?.params?.data
     const wordphrase = seedPhrase.split(" ")
   

  
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
        <View className="flex justify-between w-3/4 mt-10">
          <Text>RECENT ACTIVITIES</Text>
          
        </View>
        {/* Transaction */}
        <ScrollView>
          
        </ScrollView>
       </View>


    
    </SafeAreaView>
    
  );
}


