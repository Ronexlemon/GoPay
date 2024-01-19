import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button, TouchableOpacity} from 'react-native';
import { seedPhrase,privateKey } from '../constants/data';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
// const {mongoose} = require("mongoose")
// const {Schema} = mongoose;
//  const userSchema = new Schema(
//     {
        
        
//         password:{
//             type:String,
//             required: false,
//         },        
//           phoneNumber:{
//             type:String,
//             unique:true,
//             required:true
//         },
//           PublicKey:{
//             type:String,
//             unique:true,
//             required:true,
//         },
//         PrivateKey:{
//             type:String,
//             unique:true,
//             required:true,
//         },
//         seedPhrase:{
//           type:String,
//           unique:true,
//           required:true,
//       },
//       userAddress:{
//         type:String,
//         unique:false,
//         required:true,
//     },

//     },
//     {timestamps:true}
//  );
//   module.exports= mongoose.models.User || mongoose.model("User",userSchema);

export default function Accounts({navigation}) {
   const route = useRoute()
   const seed = route?.params.seedPhrase;
   const account = route?.params?.account;
      const phoneNumber = route?.params?.phoneNumber;
   const password = route?.params?.password;
    const wordphrase = seed.split(" ")

    const signUpUser = async()=>{
      
      try{
         await axios.post("https://gopayba.onrender.com/api/signup",{
          phoneNumber:phoneNumber,
          password:password,
          seedPhrase:seed,
          publicKey:account.address,
          privateKey: account.privateKey,
          userAddress:account.address
          
          
        }).then((response)=>{
          console.log("response is",response);
          navigation.navigate('Login')
        }).catch(error => {
          console.error("Error:", error);
          // Handle error cases
        });

      }catch(err){
        console.log("error signUser",err)
      }
    }

  
  return (
    <SafeAreaView className="flex-1 w-screen h-full bg-[#FFFFFF]">
       <StatusBar style="auto" />
       <View className="h-full w-full flex flex-col pt-20  ">
        {/* secretWord */}
        <View className="flex flex-col items-center ">
            <Text className="text-2xl">Your Secret Words</Text>
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
              <Text className="text-black">{account.privateKey}</Text>

            </View>

        </View>
        {/* button done */}
       <View className="bg-[#FFFFFF]  w-60 rounded-full ml-10 mt-8 flex   ">
        <Button 
        
        
        onPress={signUpUser}
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


