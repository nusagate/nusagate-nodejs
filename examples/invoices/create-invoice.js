const Nusagate = require("nusagate-nodejs");

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: "71dfcab4915efa1a17aa73695838a6d69129a9cb",
  secretKey: "7be9c28a56979c641d7b523035f141d590e021ef",
});

const payload = {
  externalId: "HEHE-00011",
  description: "hehe...",
  price: 560000,
  dueDate: "2022-05-26T19:26:07.255Z",
  email: "jackfrost2398@gmail.com",
  phoneNumber: "085875517882",
};

// create invoice
nusagateClient
  .createInvoice(payload)
  .then((data) => {
    console.log("data:", data);
  })
  .catch((error) => {
    console.log("Error occured:", JSON.parse(error.message));
  });
