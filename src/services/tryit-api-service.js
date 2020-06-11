const TryItApiService = {
  getAllCards() {
    return fetch(`http://localhost:8000/api/cards`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return 0;
    });
  },
  getAllTags() {
    return fetch('http://localhost:8000/api/tags').then((res) => {
      if (res.ok) {
        return res.json();
      }
      return 0;
    });
  },
  createCard(data) {
    return fetch('http://localhost:8000/api/cards', {
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
  updateTries(data, cb) {
    return fetch('http://localhost:8000/api/cards', {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        cb();
      }
    });
  },
};

module.exports = TryItApiService;
