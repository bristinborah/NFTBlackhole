async function main() {
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");

  // Start deployment, returning a promise that resolves to a contract object
  const NFTmarket = await NFTMarketplace.deploy();
  console.log("Contract deployed to address:", NFTmarket.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
