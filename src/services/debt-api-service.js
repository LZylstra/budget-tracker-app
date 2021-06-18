import TokenService from "../services/token-service";
import config from "../config";

const DebtApiService = {
  getAllDebt(budgetId) {
    return fetch(`${config.API_ENDPOINT}/debt/budget/${budgetId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
       
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  getDebt(id) {
    return fetch(`${config.API_ENDPOINT}/debt/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postDebt(newDebt, budgetId) {
   // let user_id = TokenService.getUser();
    const {
        debt_name,
        debt_balance,
        debt_due_date,
        current_status,
        interest_rate,
        debt_min_payment 
    } = newDebt;
    return fetch(`${config.API_ENDPOINT}/debt/budget/${budgetId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        debt_name:debt_name,
        debt_balance:debt_balance,
        debt_due_date:debt_due_date,
        current_status:current_status,
        interest_rate:interest_rate,
        debt_min_payment:debt_min_payment 
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  patchDebt(updatedDebt, debtId) {
    const {
        debt_name,
        debt_balance,
        debt_due_date,
        current_status,
        interest_rate,
        debt_min_payment 
    } = updatedDebt;

    return fetch(`${config.API_ENDPOINT}/debt/${debtId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        debt_name:debt_name,
        debt_balance:debt_balance,
        debt_due_date:debt_due_date,
        current_status:current_status,
        interest_rate:interest_rate,
        debt_min_payment:debt_min_payment 
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deleteDebt(debtId) {
    return fetch(`${config.API_ENDPOINT}/debt/${debtId}`, {
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

export default DebtApiService;
