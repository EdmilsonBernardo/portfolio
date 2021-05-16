import React from 'react';
import Card from '../components/ProjectCard';
import Img1 from '../images/imgProject1.png';

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
        <Card
          title="Movie cards library - CRUD"
          body="Movie library with features grouped and organized into routes."
          imageUrl={ Img1 }
        />
      </div>
    );
  } 
}

export default Projects;
