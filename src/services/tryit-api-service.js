import config from '../config';

const TryItApiService = {
  getAllCards() {
    return fetch(`${config.API_ENDPOINT}/cards`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return 0;
    });
  },
  getUserCards(id) {
    return fetch(`${config.API_ENDPOINT}/cards?id=${id}`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return 0;
    });
  },
  getAllTags() {
    return fetch(`${config.API_ENDPOINT}/tags`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return 0;
    });
  },
  createCard(data) {
    return fetch(`${config.API_ENDPOINT}/cards`, {
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
    return fetch(`${config.API_ENDPOINT}/cards`, {
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
  deleteCard(id) {
    return fetch(`${config.API_ENDPOINT}/cards`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).then((res) => {
      if (res.ok) {
        Promise.resolve();
        window.location.reload();
      }
    });
  },
};

export default TryItApiService;
