import React from 'react';
import imgProfile from '../images/profile.jpg';

class Home extends React.Component {
  render() {
    return (
      <>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignItems: 'center',
            height: '80vh',
            margin: '25px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              width: '500px',
            }}
          >
            <p>Hello, welcome to my portfolio! Here you will find information about me and the projects I have developed. Please feel free to get in touch with me, I will be happy to receive your feedback or help you in any way.</p>
          </div>
          <img
            src={ imgProfile }
            alt="edmilson bernardo"
            style={{
              width: '300px',
              borderRadius: '30px'
            }}
          />
        </section>
      </>
    );
  } 
}

export default Home;
