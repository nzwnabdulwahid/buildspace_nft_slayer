const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["MaDude", "Judgemental Neko", "Hustler"], // Names
    [
      "https://i.natgeofe.com/n/08220776-5888-4eea-bb80-1436a5ca047a/04-frog-day-gallery_3x4.jpg", // Images
      "https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg",
      "https://i.pinimg.com/originals/92/eb/2b/92eb2b6d3b882037f50c6838265eb3b5.jpg",
    ],
    [500, 400, 300], // HP values
    [500, 300, 666], // Attack damage values
    "Yellow Eyes Gold Dragon", // Boss name
    "https://iluminasi.com/img/upload/cacing-mester-stoor.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
