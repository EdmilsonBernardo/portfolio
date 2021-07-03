import React from 'react';
import EmailForm from '../components/EmailForm';

class Contacts extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <h1>My contacts</h1>
        <section>
          <EmailForm />
        </section>
      </div>
    );
  } 
}

export default Contacts;
