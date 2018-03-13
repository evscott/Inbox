const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'clip hurry ice joy crop this valid machine ice genuine secret tired',
  'https://rinkeby.infura.io/y8JFkoF3a5ysd1d6RMix'
);

const web3 = new Web3(provider);
