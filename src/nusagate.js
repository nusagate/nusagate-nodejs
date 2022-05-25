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

  async createWithdrawal(data) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/withdrawals/`,
        data,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async calculateWithdrawal(data) {
    try {
      const response = await axios.post(
        `${this.#getBaseUrl()}/v1/withdrawals/calculate/`,
        data,
        { auth: { username: this.apiKey, password: this.secretKey } },
      );
      return response.data.data;
    } catch (error) {
      const { statusCode, ...restError } = error?.response?.data?.meta;
      throw new Error(JSON.stringify(restError));
    }
  }

  async getWithdrawals(query) {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/withdrawals?page=${
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

  async getWithdrawalById(id) {
    try {
      const response = await axios.get(
        `${this.#getBaseUrl()}/v1/withdrawals/${id}`,
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
