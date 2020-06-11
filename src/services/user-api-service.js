const userApiService = {
  createUser(data, callback) {
    return fetch('http://localhost:8000/api/user/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return callback();
      }
    });
  },
  loginUser(data, callback) {
    return fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject();
        }
      })
      .then((resJSON) => {
        localStorage.setItem('id', resJSON);
        return callback('success');
      })
      .catch(callback('error'));
  },
};

module.exports = userApiService;
