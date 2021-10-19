import React from 'react';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import styles from './ToggleButton.module.scss';




class ToggleButton extends React.Component{


  render(){
  return (
    <div className={styles.ToggleButton}>
      <button><img src={logo} alt="logo"/></button>
    </div>
  )
  }

}

ToggleButton.propTypes = {};

ToggleButton.defaultProps = {};

export default ToggleButton