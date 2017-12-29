import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class Square extends Component {
    static propTypes = {
      black: Proptypes.bool,
    }

    render() {
      const { black } = this.props;
      const fill = black ? 'black' : 'white';
      const stroke = black ? 'white' : 'black';

      return (
        <div style={{
            backgroundColor: fill,
            width: '100%',
            height: '100%',
            color: stroke,
        }}
        >
          {this.props.children}
        </div>
      );
    }
}
