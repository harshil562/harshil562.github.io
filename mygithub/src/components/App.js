import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.js';
import Search from './github/Search.js';


 
class App extends Component{
	constructor(props){
		super(props);
		this.state ={


			username: 'harshil562',
			userData: [],
			userRepos: [],
			perPage: 5
		}

	}

	// Get user data from Github
	// We will be using jquery to make some ajax calls
	getuserData(){
		// fetch()
		$.ajax({

			url: 'https://api.github.com/users/'+ this.state.username + '?client_id=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					...this.state,
					userData: data
				});
				//console.log(data);
				}.bind(this),
			error: function(xhr, status, err){
				this.setState({
					...this.state,
					username: null
				});
				alert(err);
			}.bind(this)
		});
	}



	//Get user Repos
	getuserRepos(){
		// fetch()
		$.ajax({

			url: 'https://api.github.com/users/'+ this.state.username + '/repos?per_page='+this.state.perpage+'&client_id=' + this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					...this.state,
					userRepos: data
				});
				}.bind(this),
			error: function(xhr, status, err){
				this.setState({
					...this.state,
					username: null
				});
				alert(err);
			}.bind(this)
		});
	}

	handleFormSubmit(username){
		this.setState({username: username}, function(){

		this.getuserData();
		this.getuserRepos();

		});
	}

	componentDidMount(){

		this.getuserData();
		this.getuserRepos();
	}

	render(){

		return(
				<div>
					<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
					<Profile {...this.state} />
				</div>
		)
	}

}

App.propTypes ={
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps ={
	clientId: '7c0118b5ca47bde7d5c7',
	clientSecret: '9e1d8ba6e1139c23b68e82af7a9494fa858fb3ef'
}

export default App;