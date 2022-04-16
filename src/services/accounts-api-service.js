import TokenService from "../services/token-service";
import config from "../config";

const AccountsApiService = {
  getAllAccounts(budgetId) {
    return fetch(`${config.API_ENDPOINT}/accounts/budget/${budgetId}`, {
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
  getAccount(id) {
    return fetch(`${config.API_ENDPOINT}/accounts/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postAccount(newAccount, budgetId) {
   // let user_id = TokenService.getUser();
    const {
        accounts_name,
        accounts_amount,
        goal_date,
        goal_amount,
        monthly_auto
    } = newAccount;
    return fetch(`${config.API_ENDPOINT}/accounts/budget/${budgetId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        accounts_name: accounts_name,
        accounts_amount: accounts_amount,
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
  patchAccount(updatedAccount, accountsId) {
    // let user = TokenService.getUser();
    const {
        accounts_name,
        accounts_amount,
        goal_date,
        goal_amount,
        monthly_auto
    } = updatedAccount;

    return fetch(`${config.API_ENDPOINT}/accounts/${accountsId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        accounts_name: accounts_name,
        accounts_amount: accounts_amount,
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
  deleteAccount(accountsId) {
    return fetch(`${config.API_ENDPOINT}/accounts/${accountsId}`, {
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

export default AccountsApiService;
