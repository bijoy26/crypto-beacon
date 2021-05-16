var CryptoBeacon = artifacts.require("Cryptobeacon");

module.exports = function(deployer){
  deployer.deploy(CryptoBeacon);
}
