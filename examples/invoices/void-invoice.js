const Nusagate = require('nusagate-nodejs');

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});

// void invoice
nusagateClient
  .voidInvoice('b0590d28-cae3-4c31-9e96-45280286430d')
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
