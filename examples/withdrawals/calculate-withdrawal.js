const Nusagate = require("nusagate-nodejs");

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: "71dfcab4915efa1a17aa73695838a6d69129a9cb",
  secretKey: "7be9c28a56979c641d7b523035f141d590e021ef",
});

const payload = {
  address: "TUe4Uat7JFXj9zG8B8HXEeZcRZYfPU1twP",
  amount: 169,
  currencyCode: "TRX",
};

// calculate withdrawal
nusagateClient
  .calculateWithdrawal(payload)
  .then((data) => {
    console.log("data:", data);
  })
  .catch((error) => {
    console.log("Error occured:", JSON.parse(error.message));
  });
