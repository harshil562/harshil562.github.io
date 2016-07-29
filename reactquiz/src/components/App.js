import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.js'
import Scorebox from './quiz/Scorebox.js'
import Results from './quiz/Results.js'


class App extends Component{
	constructor(props){

		super(props);
		this.state = {

			questions: [
			{
				id: 1,
				text: 'The Great Wall of China is about __________ KM long.',
				choices: [
					{

						id: 'a',
						text: '18,196'

					},
					{

		 				id: 'b',
						text: '19,196'

					},
					{

						id: 'c',
						text: '20,196'

					},
					{

						id: 'd',
						text: '21,196'

					}
				],
				correct: 'd'

			},

			{
				id: 2,
				text: 'Where do you study ?',
				choices: [
					{

						id: 'a',
						text: 'BITS'

					},
					{

		 				id: 'b',
						text: 'MIT'

					},
					{

						id: 'c',
						text: 'IIT'

					},
					{

						id: 'd',
						text: 'Other colleges'

					}
				],
				correct: 'a'

			},

			{
				id: 3,
				text: 'Where are you interning currently ?',
				choices: [
					{

						id: 'a',
						text: 'MediaIq digital'

					},
					{

		 				id: 'b',
						text: 'Batchef'

					},
					{

						id: 'c',
						text: 'Foodpanda'

					},
					{

						id: 'd',
						text: 'Fresh'

					}

				],
				correct: 'a'

			},

			{
				id: 4,
				text: 'Did you like this quiz ?',
				choices: [
					{

						id: 'a',
						text: 'Yes'

					},
					{

		 				id: 'b',
						text: 'No'

					},
					{

						id: 'c',
						text: 'Very much'

					},
					{

						id: 'd',
						text: 'Needs improvement'

					}

				],
				correct: 'c'

			}

			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}
 
	render() {

		if(this.state.current > this.state.questions.length){

			var scorebox = '';
			var results = <Results {...this.state} />
		} else {

			var scorebox = <Scorebox {...this.state} />
			var results = '';
		}
		return(
			//passing all state values to question List
			<div>
			{scorebox}
			<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} /> 
			{results}
			</div>
		)
	}
}

//some apis will going to expose it's json code to us , then only we can get the database access
export default App