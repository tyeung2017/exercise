import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) return <h3>Select a book</h3>;
    return (
      <div>Books details : {this.props.book.title}</div>
    );
  }
}

function mapStateToProps(state) {
  return { book: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);
