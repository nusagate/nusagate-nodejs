const Nusagate = require('nusagate-nodejs');

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});

const payload = {
  address: 'TUe4Uat7JFXj9zG8...',
  amount: 169,
  currencyCode: 'TRX',
};

// create withdrawal
nusagateClient
  .createWithdrawal(payload)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
