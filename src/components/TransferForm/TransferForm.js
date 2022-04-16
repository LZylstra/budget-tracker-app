import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";
import './TransferForm.css'


export default class TransferForm extends Component {
//   static defaultProps = {
//     onTransferSuccess: () => {}
//   };

  state = { error: null };

//   //static contextType = AllContext;

//   handleSubmitJwtAuth = ev => {
//     ev.preventDefault();
//     this.setState({ error: null });
//     const { user_name, password } = ev.target;

//     AuthApiService.postTransfer({
//       user_name: user_name.value,
//       password: password.value
//     })
//       .then(res => {
//         user_name.value = "";
//         password.value = "";
//         TokenService.saveAuthToken(res.authToken);
//         TokenService.saveUserId(res.user_id);
//         this.props.onTransferSuccess();
//       })
//       .catch(res => {
//         this.setState({ error: res.error });
//       });
//   };

  render() {
    const { error } = this.state;
    return (
      <form className="TransferForm"> 
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="amount">
          <label htmlFor="TransferForm__amount">Amount</label>
          <Input type="number" min="0" required name="amount" id="TransferForm__amount"></Input>
        </div>
        
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
