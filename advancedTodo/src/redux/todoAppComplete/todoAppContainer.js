import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionCreators from './todoActions.js';
import TodoApp from './todoApp.ui.js';

class TodoAppContainer extends Component {

	render() {
		return(
			<TodoApp {...this.props}/>
		)
	}
}

function mapStateToProps(state) {
  return {
  	newTodos: state
  }
}

export default connect(
	mapStateToProps,
	actionCreators
)(TodoAppContainer)