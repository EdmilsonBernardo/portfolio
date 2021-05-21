import React from 'react';
import SkillsBoard from '../components/SkillsBoard';

class Skills extends React.Component {
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
        <h1>My skills</h1>
        <section>
          <SkillsBoard />
        </section>
      </div>
    );
  }
}

export default Skills;