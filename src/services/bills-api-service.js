import TokenService from "../services/token-service";
import config from "../config";

const BillsApiService = {
  getAllBills(budgetId) {
    return fetch(`${config.API_ENDPOINT}/bill/budget/${budgetId}`, {
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
  getBills(id) {
    return fetch(`${config.API_ENDPOINT}/bill/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postBills(newBills, budgetId) {
   // let user_id = TokenService.getUser();
    const {
        bill_name,
        bill_cost,
        bill_due_date,
        current_status
    } = newBills;
    return fetch(`${config.API_ENDPOINT}/bill/budget/${budgetId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        bill_name: bill_name,
        bill_cost: bill_cost,
        bill_due_date: bill_due_date,
        current_status: current_status
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  patchBills(updatedBills, billId) {
    const {
        bill_name,
        bill_cost,
        bill_due_date,
        current_status
    } = updatedBills;

    return fetch(`${config.API_ENDPOINT}/bill/${billId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        bill_name: bill_name,
        bill_cost: bill_cost,
        bill_due_date: bill_due_date,
        current_status: current_status
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deleteBills(billId) {
    return fetch(`${config.API_ENDPOINT}/bill/${billId}`, {
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

export default BillsApiService;
