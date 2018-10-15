// this file will be responseable for the 
// deployment of the election smart contract

// this artifact is provided by truffle and 
// it takes your contracts and change it into 
// object that you can interact with it 
var Election = artifacts.require("./Election.sol");

// deploying the contract
module.exports = function(deployer) {
  deployer.deploy(Election);
};
