import React,{Component} from 'react';
import Repo from './Repo.js';
import ReactDOM from 'react-dom';

class RepoList extends Component{
	
	render(){
// Nesting profile component in App component
		return(
			<div>
				<ul className ="list-group">
					{

						this.props.userRepos.map(repo =>{
						return <Repo
									repo={repo}
									key={repo.id}
									{...this.props}/>		

						})
					}
				</ul>
			</div>
		)
	}

}

export default RepoList;