import React, { Component } from 'react';
import axios from 'axios';

class ContactsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: '',
        phone: '',
        email: '',
        message: '',
        subject: '',
      },
      successMessage: "Sender's message was sent successfully",
      warningMessage: 'Fill up the form, please!',
      errorMessage: 'Something go wrong. Try again later!',
      alertClass: '',
      responseMessage: '',
      alertTimeout: '',
      delay: 5000,
    };
  }

  submitForm = async (e) => {
    e.preventDefault();

    if (document.querySelector('#alert')) {
      document.querySelector('#alert').remove();
    }

    this.setState({ isSubmitting: true });

    axios
      .post('https://store.adveits.com/API/form.php', this.state.values, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        if (response.data.status === 'success') {
          this.setState({ responseMessage: this.state.successMessage });
        }

        if (response.data.status === 'warning') {
          this.setState({ responseMessage: this.state.warningMessage });
        }

        if (response.data.status === 'error') {
          this.setState({ responseMessage: this.state.errorMessage });
        }

        this.callAlert(this.state.responseMessage, response.data.status);
      })
      .catch((error) => {
        this.callAlert(this.state.errorMessage, 'error');
      });
  };

  removeAlert = () => {
    clearTimeout(this.state.alertTimeout);
    this.setState({
      alertTimeout: setTimeout(function () {
        var element = document.querySelector('#alert');
        element.classList.remove('fadeIn');
        element.classList.add('fadeOut');
        setTimeout(function () {
          element.remove();
        }, 900);
      }, this.state.delay),
    });
  };

  callAlert = (message, type) => {
    if (!document.querySelector('#alert')) {
      if (type === 'success') {
        this.setState({ alertClass: 'success' });
      }

      if (type === 'error') {
        this.setState({ alertClass: 'danger' });
      }

      if (type === 'warning') {
        this.setState({ alertClass: 'warning' });
      }

      var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

      var element = document.querySelector('#cf-1');

      element.insertAdjacentHTML('beforeend', alert);

      this.removeAlert();
    }
  };

  handleInputChange = (e) =>
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });

  render() {
    return (
      <form method="post" onSubmit={this.submitForm} id="cf-1" className="contact-form">
        <div className="form-group form-group-xs form-lg-no-space">
          <p className="input-group gutter-width-xs no-space">
            <span className="gutter-width">
              <input
                name="cf-1-name"
                className="font-size-lg pt-0"
                value={this.state.values.name}
                onChange={this.handleInputChange}
                type="text"
                id="cf-1-name"
                placeholder="Name"
                required="required"
              />
            </span>

            <span className="gutter-width">
              <input
                name="cf-1-email"
                type="email"
                value={this.state.values.email}
                onChange={this.handleInputChange}
                className="font-size-lg pt-0"
                id="cf-1-email"
                placeholder="Email"
                required="required"
              />
            </span>
          </p>
        </div>

        <div className="form-group form-group-xs form-lg-no-space">
          <p className="input-group gutter-width-xs no-space">
            <span className="gutter-width">
              <input
                name="cf-1-phone"
                type="text"
                value={this.state.values.phone}
                onChange={this.handleInputChange}
                className="font-size-lg pt-0"
                id="cf-1-phone"
                placeholder="Phone no."
                required="required"
              />
            </span>

            <span className="gutter-width">
              <input
                name="cf-1-subject"
                type="text"
                value={this.state.values.subject}
                onChange={this.handleInputChange}
                className="font-size-lg pt-0"
                id="cf-1-subject"
                placeholder="Subject"
                required="required"
              />
            </span>
          </p>
        </div>

        <div className="form-group form-group-xs form-lg-no-space">
          <textarea
            id="cf-1-message"
            name="cf-1-message"
            value={this.state.values.message}
            onChange={this.handleInputChange}
            className="font-size-lg pt-0"
            placeholder="Message"
            required="required"
          ></textarea>
        </div>

        <div className="form-group form-group-xs">
          <button type="submit" className="btn btn-gradient">
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default ContactsForm;
