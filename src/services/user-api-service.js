const userApiService = {
  createUser(data) {
    return fetch('http://localhost:8000/api/user/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        Promise.resolve();
      }
    });
  },
  loginUser(data) {
    return fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        Promise.resolve();
      }
    });
  },
};

module.exports = userApiService;
