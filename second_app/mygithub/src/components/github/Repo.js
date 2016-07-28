import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Repo extends Component{
	
	render(){
// Nesting Repo component in App component
		const {repo} = this.props;
		return(
			<div>
				<li className ="list-group-item">
					<a href ={repo.html_url}>
						{repo.name}
					</a> : {repo.description}
				</li>
			</div>
		)
	}

}

export default Repo;