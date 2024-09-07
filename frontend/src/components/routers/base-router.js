import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:4000",
});

export const FinancesAPI = {
  loginNewUser(login, password, rememberMe) {
    return instance
      .post("/api/users", {
        login: login,
        password: password,
        rememberMe: rememberMe,
      })
      .then((res) => res.body);
  },
  getFinances(token) {
    console.log(`in get finances: ${token}`);
    return instance
      .get("/api/finance/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  },
  createNewFinance(year, month, income, concept, amount, token) {
    return instance
      .post("/api/finance",  {
        year: year,
        month: month,
        income: income,
        outcome: [
          {
            concept: concept,
            amount: amount,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
      .then((res) => res.data);
  },
  deleteFinance(id, token) {
    return instance
      .delete("/api/finance/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  },
  updateFinance(concept, income,
    month, year, outcomeAmount, token, id) {
    return instance.patch('/api/finance/'+ id, {
        year: year,
        month: month,
        income: income,
        outcome: [
          {
            concept: concept,
            amount: outcomeAmount,
          },
        ],
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    }).then(res => res.data) 
  }
};
