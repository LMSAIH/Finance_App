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
  createNewFinance(year, month, userId, income, concept, amount, token) {
    return instance
      .post("/api/finance",  {
        year: year,
        month: month,
        user_id: userId,
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
};
