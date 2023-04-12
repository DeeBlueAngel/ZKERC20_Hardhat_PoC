//import { ethers } from "ethers";

const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '<<Contract-Address>>';
const provider = new ethers.providers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer); 
const amount = ethers.utils.parseUnits("1000000");

async function call() {
    await contract.approve("<<Contract-Address>>", amount);
    await contract.mint("<<Contract-Address>>", "100");
    console.log("Successfully minted 100 tokens")
}

call();