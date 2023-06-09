require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const {PRIVATE_KEY, POLYGON_URL, POLYGON_zkEVM, POLYGONSCAN_API_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "mumbai",
  networks: {   
	mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY]
    },
	zkevm: {
      url: POLYGON_zkEVM,
      accounts: [PRIVATE_KEY]
    }
  },
   polygonzkevm: {
    apiKey: POLYGONSCAN_API_KEY
  }
};