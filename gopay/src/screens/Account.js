import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity} from 'react-native';
import { seedPhrase,privateKey } from '../constants/data';


export default function Account({navigate}) {
    const wordphrase = seedPhrase.split(" ")

  
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col pt-20  ">
        {/* secretWord */}
        <View className="flex flex-col items-center ">
            <Text className="text-2xl">Account</Text>
            <Text>Here are your 12 special words keep safe</Text>

        </View>
        {/* Seeed Phrase */}
        <View className="h-3/6 w-3/4 bg-[#DBC4DB] m-10 rounded-3xl ">
        <View  className="flex flex-wrap m-4 w-full h-full ">
            
          

                {wordphrase.map((word, index) => (
                    
          <Text key={index}>
            {index + 1}. {word}
          </Text>
        
        ))}
          </View>


            


        </View>

        {/* Private Key */}
        <View className="flex flex-col w-full">
            <Text className="ml-8 text-black">Private Key</Text>
            <View className="bg-[#DBC4DB] h-14 w-3/4 m-4 rounded-2xl">
              <Text className="text-black">{privateKey}</Text>

            </View>

        </View>
        {/* button done */}
       <View className="bg-[#FFFFFF]  w-60 rounded-full ml-10 mt-8 flex   ">
        <Button 
        
        
        onPress={()=>navigation.navigate('Account')}
title="DONE"
color="purple"



/>
        </View>
        {/* {Terms} */}
        <View className="flex-1  items-center" >
      <Text className="pt-11 text-[#BEA629] ">Terms & Conditions</Text>
     
    </View>
       </View>


    
    </SafeAreaView>
    
  );
}


