import axios from 'axios';

export default class RestClient {
  static GetRequest = (getUrl) => {
    return axios.get(getUrl).then((response) => {
      return response.data;
    });
  };

  static PostRequest = async (postUrl, postJson) => {
    return axios
      .post(postUrl, postJson, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(async (response) => {
        return await response.data;
      })
      .catch((error) => {
        return error;
      });
  };
}
