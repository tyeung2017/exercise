import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {
  renderList = () => this.props.books.map(book => (
    <li
      onClick={() => this.props.selectBook(book)}
      key={book.title}
      className="list-group-item"
    >{book.title}
    </li>
  ))

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // show up as props inside Booklist
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
