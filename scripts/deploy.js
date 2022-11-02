async function main() {
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  const LazyMinting = await ethers.getContractFactory("LazyNFT");
  const EnglishAuction = await ethers.getContractFactory("EnglishAuction");

  // Start deployment, returning a promise that resolves to a contract object
  const NFTmarket = await NFTMarketplace.deploy();
  console.log("Contract deployed to address:", NFTmarket.address);
  
  const Lazy = await LazyMinting.deploy();
  console.log("Contract deployed to address:", Lazy.address);

  const Auction = await EnglishAuction.deploy();
  console.log("Contract deployed to address:", Auction.address);


  
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
