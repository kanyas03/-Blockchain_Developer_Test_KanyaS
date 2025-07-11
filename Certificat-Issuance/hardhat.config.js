require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.30",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545" 
    },
    hoodi: {
      url: `https://eth-hoodi.g.alchemy.com/v2/${process.env.HOODI_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/APzhthxxxVw7-boJ6VbeFixoc1M4olqr",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
