import React, { Component } from 'react';
import { isUndefined, isEmpty } from 'lodash';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import './toDoApp.css';

class TodoApp extends Component {
	constructor(props){
		super(props);
		this.state = {
			showDescription: false,
			disableAddTodo: true,
			searchActive: false,
			name : '',
			currentList: []
		}
	}

	componentWillReceiveProps(nextProps){
		let newTodos = nextProps.newTodos;
		this.setState({
			currentList: newTodos
		})
	}

	handleOnClick(){
		let {name} = this.state;
		if(!isEmpty(name) && !isUndefined(name)){
			this.props.addNewTodo(name);
		}
		this.setState({
			name: '',
			disableAddTodo: true
		})
	}

	handleDelete(id){
		this.props.deleteTodo(id);
		this.createNotification('deleteSuccessful');

	}

	handleCompleted(id) {
		this.props.todoCompleted(id);
		this.createNotification('completeSuccessful');
	}

	addDescription(id){
		this.props.addDescription(id);
	}

	saveDescription(id, description){
		if(!isUndefined(description) && !isEmpty(description)){
			this.props.saveDescription(id, description);
			this.createNotification('success');
		}
		else {
			this.createNotification('error');
		}
	}

	handleOnChange(e) {
		let value = e.target.value
		if(!isUndefined(value) && !isEmpty(value)){
			this.setState({
				disableAddTodo: false,
				name: e.target.value
			})
		}
		else {
			this.setState({
				disableAddTodo: true,
				name: e.target.value
			})
		}
	}

	createNotification(type) {
    switch (type) {
      case 'success':
        NotificationManager.success('Information successfully saved', 'Congratulations !');
        break;
      case 'deleteSuccessful':
        NotificationManager.success('Todo Deleted Successfully', 'Congratulations !');
        break;
      case 'completeSuccessful':
        NotificationManager.success('Todo Completed Successfully', 'Congratulations !');
        break;
      case 'error':
        NotificationManager.error('Please add information to save', 'Warning', 5000, () => {
          alert('Error');
        });
        break;
			default :
		   	return undefined
    }
  }

 handleSearch(e){
 	let {newTodos} = this.props;
 	let currentList = newTodos.filter( el => (el.name).includes(e.target.value));
 	this.setState({
 		currentList
 	})
 }

 onFocus(e){
 	this.setState({
 		searchActive: true
 	})
 }

 handleKeyPress(e){
 	if(e.key === 'Enter'){
 		this.handleOnClick()
 	}
 }

	render() {
		const {disableAddTodo, currentList, name, searchActive } = this.state;
		return(
			<div className="container">
			<center><h1> Cool Todo Application :) </h1></center>
				<div className="row">
					<div className="col-md-12">
						<input value={name} onChange={(e)=>this.handleOnChange(e)} onKeyPress={e => this.handleKeyPress(e)} type="text" name="addTodo" />
						<button disabled={disableAddTodo} onClick={()=>this.handleOnClick()}> Add Todo </button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<br/>
							<input onFocus={ e => this.onFocus(e)} placeholder="Search Todos" onChange={(e)=>this.handleSearch(e)} />
					</div>
				</div>
				{
					isEmpty(currentList) && searchActive ?
					<h4>No Records Found !</h4> : undefined
				}
				<ul>
					{
						!isUndefined(currentList) ? currentList.map( (el, id) => {
							return (
								<div key={id}>
									<li style={{color : el.completed ? 'orange' : 'black'}}>{el.name}</li>
									<button className="glyphicon glyphicon-remove" onClick={ () => this.handleDelete(id)}></button>
									<button className="glyphicon glyphicon-ok" onClick={ () => this.handleCompleted(id)}></button>
									<button className="glyphicon glyphicon-plus" onClick={ () => this.addDescription(id)}></button>
									{
										el.showDescription ?
										<div>
											<div className="row">
												<div className="col-md-12">
													<textarea ref={ textThis => this.textarea = textThis} rows="8" cols="100">
														{ el.description ? el.description : undefined }
													</textarea>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12">
													<button className="glyphicon glyphicon-ok"
														onClick={ () => this.saveDescription(id, this.textarea.value)}> Save</button>
												</div>
											</div>
										</div> : undefined
									}
								</div>
							);
						}) : undefined
					}
				</ul>
				<NotificationContainer/>
			</div>
		)
	}
}

export default TodoApp;
