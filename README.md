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
