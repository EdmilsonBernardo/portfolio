import React from 'react';
import Card from '../components/ProjectCard';
import Img1 from '../images/imgProject1.png';
import Img2 from '../images/imgProject2.png';
import Img3 from '../images/imgProject3.png';

class Projects extends React.Component {
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
        <h1>My projects</h1>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Card
            title="Movie cards library - CRUD"
            body="Movie library with features grouped and organized into routes."
            imageUrl={Img1}
          />
          <Card
            title="Asynchronous Jest and Mocking"
            body="Asynchronous function tests using Jest and Mock."
            imageUrl={Img2}
          />
          <Card
            title="Shopping Cart"
            body="Project that simulates operations in a shopping cart"
            imageUrl={Img3}
          />
        </section>
      </div>
    );
  }
}

export default Projects;
