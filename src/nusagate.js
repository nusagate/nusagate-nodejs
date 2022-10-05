const axios = require('axios').default;

class Nusagate {
  constructor({ isProduction, apiKey, secretKey }) {
    this.isProduction = isProduction;
    this.apiKey = apiKey;
    this.secretKey = secretKey;
  }

  #getBaseUrl() {
    if (this.isProduction) {
      return `https://api.nusagate.com`;
    }
    return `https://api.sandbox.nusagate.com`;
  }

  async createInvoice(data) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/invoices/`,
        data,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async getInvoices(query) {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/invoices?page=${
          query?.page ? query?.page : ''
        }&perPage=${query?.perPage ? query?.perPage : ''}&status=${
          query?.status ? query?.status : ''
        }&fromDate=${query?.fromDate ? query?.fromDate : ''}&toDate=${
          query?.toDate ? query?.toDate : ''
        }&orderBy=${query?.orderBy ? query?.orderBy : ''}&sortBy=${
          query?.sortBy ? query?.sortBy : ''
        }&search=${query?.search ? query?.search : ''}`,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async getInvoiceById(id) {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/invoices/${id}`,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async voidInvoice(id) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/invoices/${id}/void`,
        {},
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return {
        referenceId: response.data.data.referenceId,
        message: response.data.meta.message,
      };
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async availableCurrency() {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/invoices/available-currency`,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async estimateAmount(data) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/invoices/estimate-amount`,
        data,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async createTransfer(data) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/merchant-transfers/`,
        data,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async calculateTransfer(data) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/merchant-transfers/calculate/`,
        data,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async getTransfers(query) {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/merchant-transfers?page=${
          query?.page ? query?.page : ''
        }&perPage=${query?.perPage ? query?.perPage : ''}&fromDate=${
          query?.fromDate ? query?.fromDate : ''
        }&toDate=${query?.toDate ? query?.toDate : ''}&status=${
          query?.status ? query?.status : ''
        }`,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async getTransferById(id) {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/merchant-transfers/${id}`,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }
}

module.exports = Nusagate;
