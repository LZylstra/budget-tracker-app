import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";
import './CategoryForm.css'


export default class CategoryForm extends Component {
//   static defaultProps = {
//     onCategorySuccess: () => {}
//   };

  state = { error: null };

//   //static contextType = AllContext;

//   handleSubmitJwtAuth = ev => {
//     ev.preventDefault();
//     this.setState({ error: null });
//     const { user_name, password } = ev.target;

//     AuthApiService.postCategory({
//       user_name: user_name.value,
//       password: password.value
//     })
//       .then(res => {
//         user_name.value = "";
//         password.value = "";
//         TokenService.saveAuthToken(res.authToken);
//         TokenService.saveUserId(res.user_id);
//         this.props.onCategorySuccess();
//       })
//       .catch(res => {
//         this.setState({ error: res.error });
//       });
//   };

  render() {
    const { error } = this.state;
    return (
      <form className="CategoryForm"> 
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="cat_type">
          <label htmlFor="CategoryForm__cat_type">Category Type</label>
          <Input required name="cat_type" id="CategoryForm__cat_type"></Input>
        </div>
        <div className="description">
          <label htmlFor="CategoryForm__description">Description</label>
          <Input
            required
            name="description"
            type="description"
            id="CategoryForm__description"
          ></Input>
        </div>
        <div className="amount">
          <label htmlFor="CategoryForm__amount">Amount</label>
          <Input type="number" min="0" required name="amount" id="CategoryForm__amount"></Input>
        </div>
        <div className="date">
          <label htmlFor="CategoryForm__date">Date</label>
          <Input type="date" required name="date" id="CategoryForm__date"></Input>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
