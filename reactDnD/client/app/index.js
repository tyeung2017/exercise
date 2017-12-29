import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { render } from 'react-dom';

import Knight from './components/Knight';
import Square from './components/Square';
import Board from './components/Board';

render(<Board knightPosition={[4, 5]} />, document.getElementById('root'));
