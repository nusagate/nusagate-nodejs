const Nusagate = require('nusagate-nodejs');

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
});

const payload = {
  externalId: 'HEHE-00011',
  description: 'hehe...',
  price: 560000,
  dueDate: '2022-05-26T19:26:07.255Z',
  email: 'jackfrost2398@gmail.com',
  phoneNumber: '085875517882',
};

// create invoice
nusagateClient
  .createInvoice(payload)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
