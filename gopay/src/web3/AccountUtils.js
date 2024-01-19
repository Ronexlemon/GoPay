import "react-native-get-random-values";
import "@ethersproject/shims";
import { Wallet } from "ethers";
import { ethers,JsonRpcProvider,formatEther } from "ethers";
import { ghoTokenAddress } from "./tokens";
import { abi } from "./erc20Abi";

import { sapolia } from "./chains";
export function generateAccount(seedPhrase = "", index = 0) {
  let wallet;

  // Initialize wallet if seedPhrase is not provided
  if (seedPhrase === "") {
    wallet = Wallet.createRandom();
    seedPhrase = wallet.mnemonic.phrase;
  } else {
    wallet = seedPhrase.includes(" ")
      ? Wallet.fromMnemonic(seedPhrase).derivePath(`m/44'/60'/0'/${index}`)
      : new Wallet(seedPhrase);
  }

  

  const { address } = wallet;
  const account = { address, privateKey: wallet.privateKey, balance: "0" };

  return { account, seedPhrase: seedPhrase.includes(" ") ? seedPhrase : "" };
}
// format function
function formatEth(value, decimalPlaces = 2) {
    const ethUSD= 2483;
    return +parseFloat(value*ethUSD).toFixed(decimalPlaces);
  }
  
  function formatEthGHO(value, decimalPlaces = 2) {
    const ethUSD= 0.98;
    return +parseFloat(value*ethUSD).toFixed(decimalPlaces);
  }
  // fetch balance
  export async function fetchBalanceGHO(userAddress) {
    console.log("usesssssser addresss",userAddress)
    try {
      const provider = new JsonRpcProvider(sapolia.rpcUrl);
      const contract = new ethers.Contract(ghoTokenAddress,abi, provider);
const balance = (await contract.balanceOf(userAddress)).toString();
      //let accountBalance = await provider.getBalance(userAddress);
      return String(formatEthGHO(formatEther(balance)));
    } catch (err) {
      console.log("error fetching balance", err);
    }
  }

  //fetch eth balance

  // fetch balance
  export async function fetchBalance(userAddress) {
    console.log("usesssssser addresss",userAddress)
    try {
      const provider = new JsonRpcProvider(sapolia.rpcUrl);
      let accountBalance = await provider.getBalance(userAddress);
      return String(formatEth(formatEther(accountBalance)));
    } catch (err) {
      console.log("error fetching balance", err);
    }
  }
  

