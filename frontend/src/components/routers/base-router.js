import axios from 'axios';




const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:4000',
  });

  export const FinancesAPI  = {
    getUser (userId) {
        return instance.get('/api/user/' + userId)
            .then(res =>  res.data);
    },
    createNewUser (login, password) {
        instance.post('/users', {
            login,
            password,
        }).then(res => res.body)
    },
    getFinances(id) {
        instance.get('/api/finance/' + id).then(res => {
            console.log(res.data);
            return res.data})
    }
  } 