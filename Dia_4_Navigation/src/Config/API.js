import {create} from 'apisauce';

const BASE_URL = 'https://myapi.com.br';

const Api = create({
  baseURL: `${BASE_URL}`,

  timeout: 30000,
});

export default Api;
