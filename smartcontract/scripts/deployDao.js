
const hre = require("hardhat");

async function main() {
  const KaveDAO = await hre.ethers.getContractFactory("KaveDAO");
  const kaveDAO = await KaveDAO.deploy();

  await kaveDAO.deployed();

  console.log("KaveDAO deployed to:", kaveDAO.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
