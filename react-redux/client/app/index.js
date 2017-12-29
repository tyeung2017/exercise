import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from '../app/config/store';
import { fetchAPI } from './actions/fetch';

const List = ({ todo }) => (
  <div>
    Hello World~
    <p>Things to do</p>
    {todo.map((item, i) => <li key={i} >{item}</li>)}
  </div>
);

class Info extends Component {
  componentWillMount() {
    this.props.fetchAPI();
  }

  render() { // show loading
    // show data
    return (
      <div>
        <p>Fetch Exercise</p>
        {this.props.isFetching ? <p>loading</p> : <p>{this.props.content}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mSTP = ({ fetch: { isFetching, content, error } }) => {
  const output = JSON.stringify(content);

  return {
    isFetching,
    content: output,
    error,
  };
};


const mapDispatchToProps = dispatch => ({
  fetchAPI: () => dispatch(fetchAPI()),
});

const Display = connect(mSTP, mapDispatchToProps)(Info);

// new component for connect
// new mapStateToProps
// new mapDispatchToProps

const mapStatToProps = ({ todo }) => ({ todo });

const Main = connect(mapStatToProps)(List);

const App = (
  <Provider store={store}>
    <div>
      <Main />
      <Display />
    </div>
  </Provider>
);

List.propTypes = {
  todo: Proptypes.array.isRequired,
};

Info.propTypes = {
  fetchAPI: Proptypes.func.isRequired,
  content: Proptypes.string.isRequired,
  isFetching: Proptypes.bool.isRequired,
  error: Proptypes.string,
};

render(App, document.getElementById('root'));
