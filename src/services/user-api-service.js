import config from '../config';

const userApiService = {
  createUser(data, success, fail) {
    return fetch(`${config.API_ENDPOINT}/user/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((resJson) => {
          fail(resJson);
        });
      }
      return success();
    });
  },
  loginUser(data, success, fail) {
    return fetch(`${config.API_ENDPOINT}/user/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json().then((resJSON) => {
            window.localStorage.setItem('id', resJSON);
            success(resJSON);
          });
        }
        throw new Error(res.statusText);
      })

      .catch((err) => {
        return fail(err.message);
      });
  },
};

export default userApiService;
