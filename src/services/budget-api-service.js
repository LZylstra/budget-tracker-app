import TokenService from "../services/token-service";
import config from "../config";

const BudgetApiService = {
  getBudgets() {
    let user = TokenService.getUser();
    return fetch(`${config.API_ENDPOINT}/budget/user/${user}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        //console.log(res);
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  getBudget(id) {
    return fetch(`${config.API_ENDPOINT}/budget/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postBudget(newBudget) {
    let user_id = TokenService.getUser();
    const {
        monthly_pay,
        additional_income
    } = newBudget;
    return fetch(`${config.API_ENDPOINT}/budget/user/${user_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        monthly_pay: monthly_pay,
        additional_income: additional_income
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  patchBudget(updatedBudget, budgetId) {
    // let user = TokenService.getUser();
    const {
        monthly_pay,
        additional_income,
    } = updatedBudget;

    return fetch(`${config.API_ENDPOINT}/budget/${budgetId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        monthly_pay: monthly_pay,
        additional_income: additional_income
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deleteBudget(budgetId) {
    return fetch(`${config.API_ENDPOINT}/budget/${budgetId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then((e) => Promise.reject(e));
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  },
};

export default BudgetApiService;
