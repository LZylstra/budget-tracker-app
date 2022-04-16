import TokenService from "../services/token-service";
import config from "../config";

const CategoryApiService = {
  getAllCategories(budgetId) {
    return fetch(`${config.API_ENDPOINT}/category/budget/${budgetId}`, {
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
  getCategory(id) {
    return fetch(`${config.API_ENDPOINT}/category/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  postCategory(newCategory, budgetId) {
   // let user_id = TokenService.getUser();
    const {
        category_name,
        category_year,
        monthly_max,
    } = newCategory;
    return fetch(`${config.API_ENDPOINT}/category/budget/${budgetId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        category_name:category_name,
        category_year:category_year,
        monthly_max:monthly_max,
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      return res.json();
    });
  },
  patchCategory(updatedCategory, categoryId) {
    const {
        category_name,
        category_year,
        monthly_max,
    } = updatedCategory;

    return fetch(`${config.API_ENDPOINT}/category/${categoryId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        category_name:category_name,
        category_year:category_year,
        monthly_max:monthly_max,
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      }

      //return res.json();
    });
  },
  deleteCategory(categoryId) {
    return fetch(`${config.API_ENDPOINT}/category/${categoryId}`, {
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

export default CategoryApiService;
