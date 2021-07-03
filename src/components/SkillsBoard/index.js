import React from 'react';
import {
  DiJsBadge, DiHtml5, DiCss3,
  DiGithubBadge,
} from 'react-icons/di';
import { SiJest, SiRedux, SiReact } from 'react-icons/si';
import './SkillsBoard.css';

const SkillsBoard = () => {
  return (
    <section className="section-skills">
      <DiHtml5 className="skills-icons" />
      <DiCss3 className="skills-icons" />
      <DiJsBadge className="skills-icons" />
      <SiReact className="skills-icons" />
      <SiRedux className="skills-icons" />
      <SiJest className="skills-icons" />
      <DiGithubBadge className="skills-icons" />
    </section>
  );
}

export default SkillsBoard;
