import style from './Notification.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    Message: PropTypes.string,
  };
  render() {
    return (
      <h2 key={nanoid()} className={style.notification}>
        {this.props.message}
      </h2>
    );
  }
}

export default Notification;
