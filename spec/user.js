// save as agreed.js
const user = {
  request: {
    path: '/user',
    method: 'GET',
    query: {
      name: '{:name}',
    },
    values: {
    },
  },
  response: {
    body: {
      id: '{:id}',
      name: '{:name}',
    },
    values: {
      id: 123,
      name: 'taro'
    }
  },
}
module.exports = user;
