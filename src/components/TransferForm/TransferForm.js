import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";
import Dropdown from "../Dropdown/Dropdown";
//import NumberInput from '@yaireo/react-number-input';
import NumberInput from "../../utils/NumberInput";
import './TransferForm.css'


export default class TransferForm extends Component {
//   static defaultProps = {
//     onTransferSuccess: () => {}
//   };

  state = { 
    error: null,
    choice: null
   };

   updateChoice = (selectedChoice)=>{
    this.setState({choice: this.state.choice = selectedChoice})
  }

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
    handleChangeOption = (event) => {
        this.updateChoice(event.target.value)
      console.log(event.target.value);
    };



  render() {
    const { error } = this.state;
    let choices = this.props.options

    return (
      <form className="TransferForm"> 
      <h3 className="transfer_title">Transfer Money</h3>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <Dropdown
          label="From"
          options={choices}
          value={choices}
          onChange={this.handleChangeOption}
          className="DropDown"
        />
        <Dropdown
          label="To"
          options={choices}
          value={choices}
          onChange={this.handleChangeOption}
          className="DropDown"
        />
        <div className="amount">
          <label htmlFor="TransferForm__amount">Amount</label>
          <NumberInput className="TransferForm__amount"
          // type='currency' value="0.00" placeholder='amount' min="0" required name="amount" id="TransferForm__amount">
          localeOptions={{
            maximumFractionDigits:2,
            currency:"USD",
            style:"currency",
            currencyDisplay:"symbol"
          }}
          />
        </div>
        
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
