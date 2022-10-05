# Nusagate API Client - Node.js

The official Node.js library for the Nusagate API.

Visit https://nusagate.com.

## 1. Documentation

For more details visit [Nusagate API docs](https://nusagate.docs.apiary.io/#).

## 2. Installation

```sh
npm install nusagate-nodejs --save
```

## 3. Usage

Get your api key and secret key from [Nusagate Dashboard](https://dashboard.nusagate.com/).

```js
const Nusagate = require('nusagate-nodejs');

const nusagateClient = new Nusagate({
  isProduction: false,
  apiKey: '71dfcab...',
  secretKey: '7be9c28...',
});
```

### Create Invoice

You can see example [here](examples/invoices/create-invoice.js).

```js
const payload = {
  externalId: 'HEHE-00011',
  description: 'hehe...',
  price: 560000,
  dueDate: '2022-05-26T19:26:07.255Z',
  email: 'john@gmail.com',
  phoneNumber: '62813123...',
};

nusagateClient
  .createInvoice(payload)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Get Invoices

You can see example [here](examples/invoices/invoice-list.js).

```js
const query = {
  page: 1,
  perPage: 2,
  fromDate: '2022-04-26T19:26:07.255Z',
  toDate: '2022-05-26T19:26:07.255Z',
  orderBy: 'DESC',
  sortBy: 'createdAt',
  status: 'UNPAID', // status: ['PAID', 'UNPAID', 'VOID', 'COMPLETED']
  search: '',
};

// get invoice list
nusagateClient
  .getInvoices(query)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Get Invoice By Id

You can see example [here](examples/invoices/invoice-detail.js).

```js
nusagateClient
  .getInvoiceById('b0590d28-cae3-4c31-9e96-45280286430d')
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Void Invoice

You can see example [here](examples/invoices/void-invoice.js).

```js
nusagateClient
  .voidInvoice('b0590d28-cae3-4c31-9e96-45280286430d')
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Create Transfer

You can see example [here](examples/transfers/create-transfer.js).

```js
const payload = {
  externalId: 'EXAMPLE_EXTERNAL_ID',
  address: 'TUe4Uat7JFXj9zG8...',
  amount: 169,
  currencyCode: 'TRX',
};

nusagateClient
  .createTransfer(payload)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Get Transfers

You can see example [here](examples/transfers/transfer-list.js).

```js
const query = {
  page: 1,
  perPage: 2,
  fromDate: '2022-04-26T19:26:07.255Z',
  toDate: '2022-05-26T19:26:07.255Z',
  status: '', // status: ['PENDING', 'WAITING', 'SUBMITTED', 'CONFIRMED', 'REJECTED', 'CANCELED']
};

nusagateClient
  .getTransfers(query)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Get Transfer By Id

You can see example [here](examples/transfers/transfer-detail.js).

```js
nusagateClient
  .getTransferById('5a54a11d-ffda-46cd-b389-fc602b9fdb41')
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```

### Calculate Transfer

You can see example [here](examples/transfers/calculate-transfer.js).

```js
const payload = {
  address: 'TUe4Uat7JFXj9zG8...',
  amount: 169,
  currencyCode: 'TRX',
};

// calculate transfer
nusagateClient
  .calculateTransfer(payload)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    console.log('Error occured:', JSON.parse(error.message));
  });
```
