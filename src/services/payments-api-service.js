import TokenService from "../services/token-service";
import config from "../config";

const PaymentsApiService = {
  // Get all payments for a given bill
  getBillPayments(id) {
    return fetch(`${config.API_ENDPOINT}/payments/bill/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postBillPayment(newPayment, billId) {
   // let user_id = TokenService.getUser();
    const {
        payment_type,
        payment_note,
        payment_date,
        payment_amount
    } = newPayment;
    return fetch(`${config.API_ENDPOINT}/payments/bill/${billId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        payment_type:payment_type,
        payment_note:payment_note,
        payment_date:payment_date,
        payment_amount:payment_amount
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },

    // Get all payments for a given debt
    getDebtPayments(id) {
        return fetch(`${config.API_ENDPOINT}/payments/debt/${id}`, {
          headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
        }).then((res) => {
          if (!res.ok) {
            res.json().then((e) => Promise.reject(e));
          }
          return res.json();
        });
      },
      postDebtPayment(newPayment, debtId) {
       // let user_id = TokenService.getUser();
        const {
            payment_type,
            payment_note,
            payment_date,
            payment_amount
        } = newPayment;
        return fetch(`${config.API_ENDPOINT}/payments/debt/${debtId}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            payment_type:payment_type,
            payment_note:payment_note,
            payment_date:payment_date,
            payment_amount:payment_amount
          }),
        }).then((res) => {
          if (!res.ok) {
            res.json().then((e) => Promise.reject(e));
          }
    
          return res.json();
        });
      },

  // Get all payments from a given account
  getFromPayments(id) {
    return fetch(`${config.API_ENDPOINT}/payments/from-account/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postFromPayment(newPayment, accountId) {
   // let user_id = TokenService.getUser();
    const {
        payment_type,
        payment_note,
        payment_date,
        payment_amount
    } = newPayment;
    return fetch(`${config.API_ENDPOINT}/payments/from-account/${accountId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        payment_type:payment_type,
        payment_note:payment_note,
        payment_date:payment_date,
        payment_amount:payment_amount
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },

  // Get all payments to a given account
  getToPayments(id) {
    return fetch(`${config.API_ENDPOINT}/payments/to-account/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postToPayment(newPayment, accountId) {
   // let user_id = TokenService.getUser();
    const {
        payment_type,
        payment_note,
        payment_date,
        payment_amount
    } = newPayment;
    return fetch(`${config.API_ENDPOINT}/payments/to-account/${accountId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        payment_type:payment_type,
        payment_note:payment_note,
        payment_date:payment_date,
        payment_amount:payment_amount
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  getPayment(id) {
    return fetch(`${config.API_ENDPOINT}/payments/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  patchPayment(updatedPayment, paymentId) {
    // let user = TokenService.getUser();
    const {
        payment_type,
        payment_note,
        payment_date,
        payment_amount,
        bill_id,
        account_from_id,
        account_to_id,
        debt_id
    } = updatedPayment;

    return fetch(`${config.API_ENDPOINT}/payments/${paymentId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        payment_type:payment_type,
        payment_note:payment_note,
        payment_date:payment_date,
        payment_amount:payment_amount,
        bill_id:bill_id,
        account_from_id:account_from_id,
        account_to_id:account_to_id,
        debt_id:debt_id
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deletePayment(paymentId) {
    return fetch(`${config.API_ENDPOINT}/payments/${paymentId}`, {
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

export default PaymentsApiService;
