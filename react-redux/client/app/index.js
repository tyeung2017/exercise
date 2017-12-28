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
        {this.props.isFetching ? <p>loading</p> : <p>{this.props.content}</p>}
      </div>
    );
  }
}

const mSTP = ({ fetch: { isFetching, content } }) => {
  const output = JSON.stringify(content);

  console.log('calling mstp', content); // called three times?

  return {
    isFetching,
    content: output,
  };
};


const mapDispatchToProps = dispatch => ({
  fetchAPI: () => dispatch(fetchAPI()),
});

const Display = connect(mSTP, mapDispatchToProps)(Info);

// new component for connect
// new mapStateToProps
// new mapDispatchToProps

const mapStatToProps = ({ todo }) => (
  { todo }
);

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
};

render(App, document.getElementById('root'));
