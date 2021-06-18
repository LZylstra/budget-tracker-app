import TokenService from "../services/token-service";
import config from "../config";

const SavingsApiService = {
  getAllSavings(budgetId) {
    return fetch(`${config.API_ENDPOINT}/savings/budget/${budgetId}`, {
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
  getSavings(id) {
    return fetch(`${config.API_ENDPOINT}/savings/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postSavings(newSavings, budgetId) {
   // let user_id = TokenService.getUser();
    const {
        savings_name,
        savings_amount,
        goal_date,
        goal_amount,
        monthly_auto
    } = newSavings;
    return fetch(`${config.API_ENDPOINT}/savings/budget/${budgetId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        savings_name: savings_name,
        savings_amount: savings_amount,
        goal_date: goal_date,
        goal_amount: goal_amount,
        monthly_auto: monthly_auto
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  patchSavings(updatedSavings, savingsId) {
    // let user = TokenService.getUser();
    const {
        savings_name,
        savings_amount,
        goal_date,
        goal_amount,
        monthly_auto
    } = updatedSavings;

    return fetch(`${config.API_ENDPOINT}/savings/${savingsId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        savings_name: savings_name,
        savings_amount: savings_amount,
        goal_date: goal_date,
        goal_amount: goal_amount,
        monthly_auto: monthly_auto
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deleteSavings(savingsId) {
    return fetch(`${config.API_ENDPOINT}/savings/${savingsId}`, {
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

export default SavingsApiService;
