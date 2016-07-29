import React,{Component} from 'react';


class Results extends Component{


	render() {

		var percent =(this.props.score / this.props.questions.length*100);
		if (percent > 80){

			var message ='Awesome Job!';
		} else if(percent < 80 && percent >60)
		{
			var message = 'You did Ok !';
		}
		else {

			var message ='Not satisfactory. Should try once again !';
		}
		return(
			<div className="well">
				<h4> You got {this.props.score} out of {this.props.questions.length} Correct</h4>
				<h1>{percent}% - {message}</h1>
				<hr />
				<a href ="https://harshil562.github.io/reactquiz/app/"> Take again </a>
			</div>
		)
	}
}

//some apis will going to expose it's json code to us , then only we can get the database access
export default Results
