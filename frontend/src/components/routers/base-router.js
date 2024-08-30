import axios from 'axios';

const instance = axios.create({
    baseURL: 'localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  const UsersAPI  = {
    getUser (userId) {
        return instance.get('/api/user/' + userId)
            .then(res =>  res.data);
    },
    createNewUser (login, password) {
        instance.post('/users', {
            login,
            password,
        }).then(res => res.body)
    }
  }