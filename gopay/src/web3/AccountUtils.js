import "react-native-get-random-values";
import "@ethersproject/shims";
import { Wallet } from "ethers";

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
