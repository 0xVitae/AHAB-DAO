import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x715c9B0b7D43EaEa4C7BA3789a73DD91EABFe0FC",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Darling Whaler",
        description: "This NFT will give you access to AhabDAO",
        image: readFileSync("scripts/assets/spear1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()