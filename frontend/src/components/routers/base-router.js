import axios from 'axios';




const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:4000',
  });

  export const FinancesAPI  = {
    
    loginNewUser (login, password, rememberMe) {
        return instance.post('/api/users', {
            login: login,
            password: password,
            rememberMe: rememberMe
        }).then(res => res.body);
    },
    getFinances() {
        return instance.get("/api/finance/").then(res => res.data);
    },
    createNewFinance(year, month, userId, income, concept, amount) {
        return instance.post("/api/finance", {
            year: year,
            month: month,
            user_id: userId,
            income: income,
            outcome: [{
                concept: concept,
                amount: amount
            }]
        }).then(res => res.data);
    },
    deleteFinance(id) {
        return instance.delete("/api/finance/" + id).then(res => res.data);
    }
  } 