import React from 'react';
import {
  object,
  number,
  func,
} from 'prop-types';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import {Button} from 'antd';

@hot(module)
/**
 * List Page
 */
export default class List extends React.Component {
  static propTypes = {
    classes: object,
    count: number,
    fetchSomeAsyncRequest: func,
  };

  /**
   * Call saga function to increment count by 1
   */
  onClick() {
    this.props.fetchSomeAsyncRequest();
  }

  /**
   * Render List Page
   * @return {Component}
   */
  render() {
    const {
      count,
    } = this.props;

    return (
      <div>
        <div>JSS demo</div>
        <ul>
          <li><Link to="/detail">Redirect and lazy load detail page</Link></li>
        </ul>
        <div >
          {count}
        </div>
        <Button onClick={this.onClick.bind(this)}>Click me, to mock async callback:</Button>
      </div>
    );
  }
}
