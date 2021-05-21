import React from 'react';
import emailjs from 'emailjs-com';

class EmailForm extends React.Component {
  constructor() {
    super();

    this.sendEmail = this.sendEmail.bind(this);
  }
  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_snfta4m', 'template_rg5ttph', e.target, 'user_Dxe9N3u9jfWAYhX5RZWup')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendEmail}>
          <label htmlFor="input-name">
            <input
              type="text"
              id="input-name"
              placeholder="Your name"
              name="name"
            />
          </label>
          <label htmlFor="input-email">
            <input
              type="email"
              id="input-email"
              placeholder="Your email adress"
              name="email"
            />
          </label>
          <label htmlFor="input-message">
            <textarea
              placeholder="Your message"
              id="input-message"
              name="message"
            />
          </label>
          <input type="submit" value="SEND MESSAGE" />
        </form>
      </div>
    );
  }
}

export default EmailForm;