import httpClient from './httpClient.js';


class ApiService {
  constructor() {
    this.http = httpClient;
  }
  
  async request(endpoint, options = {}) { return this.http.request(endpoint, options); }
  async post(endpoint, data) { return this.http.post(endpoint, data); }
  async put(endpoint, data) { return this.http.put(endpoint, data); }
  async patch(endpoint, data) { return this.http.patch(endpoint, data); }
  async delete(endpoint) { return this.http.delete(endpoint); }
  async get(endpoint, params = {}) { return this.http.get(endpoint, params); }

}

export default new ApiService();