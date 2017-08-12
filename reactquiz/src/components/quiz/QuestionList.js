import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.js';

class QuestionList extends Component{


	render() {

		return(
			<div className="questions">
				{

					this.props.questions.map(question => {
						if(question.id == this.props.current){
					return <Question question={question} key={question.id} {...this.props} />
						}
					})
				}
			</div>
		)
	}
}

//some apis will going to expose it's json code to us , then only we can get the database access
export default QuestionList