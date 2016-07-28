import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component{
	onSubmit(e){

		e.preventDefault();
		let username = this.refs.username.value.trim();
		if(!username){
			alert('Please enter a username');
			return;
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}
	
	render(){
// Nesting Repo component in App component
	return(
		<div>
			<form onSubmit ={this.onSubmit.bind(this)}>
				<label> Search Github users by entering their usernames !!</label>
				<input type ="text" ref ="username" className="form-control"/>
				<br/>
			</form>
		</div>
		)
	}

}

export default Search