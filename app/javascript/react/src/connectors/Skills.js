import React from 'react';
import { connect } from 'react-redux';
import SkillsContainer from '../containers/SkillsContainer';

const mapStateToProps = state => {
  return{
    skills: state.skills
  };
};

const Skills = connect(
  mapStateToProps
)(SkillsContainer)

export default Skills;
