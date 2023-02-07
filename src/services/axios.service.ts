import axios, {AxiosRequestConfig} from 'axios';

abstract class APIService {
  getRequestConfig(options = {}): AxiosRequestConfig {
    return {...options};
  }

  //Passing bearer for all api calls
  getAxiosHeaders(): any {
    return {
      Authorization: '',
      'Content-Type': 'application/json',
    };
  }

  get(url: string, options = {}): Promise<any> {
    return axios({
      method: 'GET',
      url,
      ...options,
    });
  }

  post(url: string, data = {}, options = {}): Promise<any> {
    return axios({
      method: 'POST',
      url,
      data,
      ...options,
    });
  }

  put(url: string, data = {}, options = {}): Promise<any> {
    return axios({
      method: 'PUT',
      url,
      data,
      ...options,
    });
  }

  delete(url: string, options = {}): Promise<any> {
    return axios({
      method: 'DELETE',
      url,
      ...options,
    });
  }
}

export default APIService;