const Nusagate = require("nusagate-nodejs");

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: "71dfcab4915efa1a17aa73695838a6d69129a9cb",
  secretKey: "7be9c28a56979c641d7b523035f141d590e021ef",
});

// void invoice
nusagateClient
  .voidInvoice("b0590d28-cae3-4c31-9e96-45280286430d")
  .then((data) => {
    console.log("data:", data);
  })
  .catch((error) => {
    console.log("Error occured:", JSON.parse(error.message));
  });
