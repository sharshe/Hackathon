import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import DatePicker from 'react-date-picker';


class AddEntry extends Component {

  constructor() {
    super();
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log(this.state)
    axios.post('/api/empdata/entry', this.state,
    )
      .then(response => {
        console.log(response)
      })
  }

  render() {
    const { items } = this.state;

    return (

      <div>

        <h1 class="text-center text-white"> Enter Employee Details</h1>
        <div>
        <table class="table" style={{ border: "0px solid black" }}>
            <tbody>
                <tr>
                    <td>  <label class="text-center text-white">Employee Name : </label> </td>
                    <td>  <input
              name="EmpName"
              type="text"
              value={this.state.name}
              onChange={this.onInputchange}
            /> </td>
                </tr>
                <tr>
                    <td>  <label class="text-center text-white">Employee Email : </label> </td>
                    <td> <input
              name="Empmail"
              type="text"
              value={this.state.email}
              onChange={this.onInputchange}
            /> </td>
                </tr>
                {/* <tr>
                    <td>  <label class="text-center text-white">Employee Name : </label> </td>
                    <td><input
              name="Empmail"
              type="text"
              value={this.state.email}
              onChange={this.onInputchange}
            /> </td>
                </tr> */}
                <tr>
                    <td>  <label class="text-center text-white">Employee Date of Bith : </label> </td>
                    <td><input
              name="EmpDOB"
              type="date"
              value={this.state.dob}
              onChange={this.onInputchange}
            /> </td>
                </tr>
            <tr>
                <td>  <label class="text-center text-white">Employee Joining Date : </label> </td>
                <td><input
              name="EmpDOJ"
              type="date"
              value={this.state.doj}
              onChange={this.onInputchange}
            /> </td>
            </tr>
            <tr>
                <td>  <label class="text-center text-white"> Employee Designation :</label> </td>
                <td> <input
              name="EmpDesig"
              type="text"
              value={this.state.desig}
              onChange={this.onInputchange}
            /></td>
            </tr>
            <tr>
                <td>  <label class="text-center text-white">Employee still Working :  </label> </td>
                <td><input
              name="IsEmp"
              type="text"
              value={this.state.isEmp}
              onChange={this.onInputchange}
            /> </td>
            </tr>
            </tbody>
        </table>
                

        </div>

        <div>

          <button onClick={this.onSubmitForm}>Submit</button>

        </div>

        {/* {{Response}} */}

      </div>

    );

  }

}


export default AddEntry;