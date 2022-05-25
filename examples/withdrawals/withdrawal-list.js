const Nusagate = require("nusagate-nodejs");

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: "71dfcab4915efa1a17aa73695838a6d69129a9cb",
  secretKey: "7be9c28a56979c641d7b523035f141d590e021ef",
});

const query = {
  page: 1,
  perPage: 2,
  fromDate: "2022-04-26T19:26:07.255Z",
  toDate: "2022-05-26T19:26:07.255Z",
  status: "",
};

// get withdrawal list
nusagateClient
  .getWithdrawals(query)
  .then((data) => {
    console.log("data:", data);
  })
  .catch((error) => {
    console.log("Error occured:", JSON.parse(error.message));
  });
