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

### Get Invoices

You can see example [here](examples/invoices/invoice-list.js).

### Get Invoice By Id

You can see example [here](examples/invoices/invoice-detail.js).

### Void Invoice

You can see example [here](examples/invoices/void-invoice.js).

### Create Withdrawal

You can see example [here](examples/withdrawals/create-withdrawal.js).

### Get Withdrawals

You can see example [here](examples/withdrawals/withdrawal-list.js).

### Get Withdrawal By Id

You can see example [here](examples/withdrawals/withdrawal-detail.js).

### Calculate Withdrawal

You can see example [here](examples/withdrawals/calculate-withdrawal.js).
