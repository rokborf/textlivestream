import React, { Component } from 'react';
import 'react-date-picker/index.css';
import { DateField } from 'react-date-picker';

class AddStream extends Component {
  static handleSubmit(event) {
    event.preventDefault();

    const inputFields = event.target.querySelectorAll('input');
    let bodyString = '';

    Array.prototype.forEach.call(inputFields, (el, i) => {
      bodyString = `${bodyString + el.name}=${encodeURIComponent(el.value)}`;
      if (i < inputFields.length) {
        bodyString += '&';
      }
    });

    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyString,
    };

    console.log(bodyString);

    fetch('http://localhost:8888/api/streams/', request)
      .then(response => response.json())
      .then((response) => {
        alert(response.message);
      });
  }

  render() {
    return (
      <div className="add-message">
        <h4>Add stream</h4>

        <form onSubmit={this.handleSubmit}>
          <label> Title:
            <input type="text" name="title" className="add-message__input" />
          </label>
          <label> Description:
            <input type="text" name="description" className="add-message__input add-message__textbox" />
          </label>
          <label> <div>Start date:</div>
            <DateField
              dateFormat="HH:mm DD-MM-YYYY"
              className="add-message__input"
              name="startDate"
            />
          </label>
          <button className="add-message__submit">Send</button>
        </form>
      </div>
    );
  }
}

export default AddStream;
