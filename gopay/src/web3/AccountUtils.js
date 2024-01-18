import "react-native-get-random-values"
import "@ethersproject/shims"
import {Wallet} from "ethers"

export function generateAccount(seedPhrase="",index=0){
    let wallet;
    if(seedPhrase ===""){
        seedPhrase = wallet.createRandom().mnemonic.phrase;
    }

    wallet = seedPhrase.includes(" ")? Wallet.fromMnemonic(seedPhrase,`m/44'/60'/0'/${index}`): new Wallet(seedPhrase)
    
    console.log("yooh",wallet);

    const {address} = wallet;
    const account = {address,privateKey:wallet.privateKey,balance:"0"}

    return {account,seedPhrase:seedPhrase.includes(" ")?seedPhrase:""};

}