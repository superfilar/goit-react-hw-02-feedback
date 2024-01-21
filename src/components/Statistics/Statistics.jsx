import style from './Statistics.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };
  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number,
  };

  render() {
    return (
      <div className={style.statistics}>
        <h2 className={style.statistics__title}>Statistics</h2>
        <ul className={style.statistics__list}>
          {Object.entries(this.props.stat).map(([key, value]) => {
            return (
              <li className={style.statistics__item} key={nanoid()}>
                <span
                  className={style.statistics__name}
                  key={nanoid()}
                >
                  {key}:{' '}
                </span>
                <span key={nanoid()}>{value}</span>
              </li>
            );
          })}
          <li className={style.statistics__item} key={nanoid()}>
            <span key={nanoid()}>Total: </span>
            <span key={nanoid()}>{this.props.total}</span>
          </li>
          <li className={style.statistics__item} key={nanoid()}>
            <span key={nanoid()}>Positive feedback: </span>
            <span key={nanoid()}>
              {this.props.positivePercentage}%
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
