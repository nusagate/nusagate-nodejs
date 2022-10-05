const Nusagate = require('nusagate-nodejs');

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});

const query = {
  page: 1,
  perPage: 2,
  fromDate: '2022-04-26T19:26:07.255Z',
  toDate: '2022-05-26T19:26:07.255Z',
  status: '',
};

// get withdrawal list
nusagateClient
  .getTransferById(query)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
