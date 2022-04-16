import TokenService from "../services/token-service";
import config from "../config";

const ExpenseApiService = {
  getAllExpenses(categoryId) {
    return fetch(`${config.API_ENDPOINT}/expense/category/${categoryId}`, {
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
  getExpense(id) {
    return fetch(`${config.API_ENDPOINT}/expense/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postExpense(newExpense, categoryId) {
   // let user_id = TokenService.getUser();
    const {
        expense_amount,
        expense_date,
        expense_desc,
        expense_type,
        category_id 
    } = newExpense;
    return fetch(`${config.API_ENDPOINT}/expense/category/${categoryId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        expense_amount:expense_amount,
        expense_date:expense_date,
        expense_desc:expense_desc,
        expense_type:expense_type,
        category_id:category_id
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  patchExpense(updatedExpense, expenseId) {
    const {
        expense_amount,
        expense_date,
        expense_desc,
        expense_type,
        category_id
    } = updatedExpense;

    return fetch(`${config.API_ENDPOINT}/expense/${expenseId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        expense_amount:expense_amount,
        expense_date:expense_date,
        expense_desc:expense_desc,
        expense_type:expense_type,
        category_id:category_id
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deleteExpense(expenseId) {
    return fetch(`${config.API_ENDPOINT}/expense/${expenseId}`, {
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

export default ExpenseApiService;
