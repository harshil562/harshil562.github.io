// 1 import React from 'react';
// class App extends React.Component {
// render() {

// 	return <h1> Hello World </h1>
// }
// }

// export default App



//2 import React from 'react';

// class App extends React.Component {

// 	render() {

// 		return React.createElement('h1', null,'Hello Guys')
// 	}

// }

// export default App

// import React from 'react';

// const App =() =><h1>Hello Engineers </h1>

// export default App


//Render Method understood ( L-3)

// import React from 'react';
// class App extends React.Component {
// render() {

// 	return ( 

// 	<div>

// 	<h1> Hello Harshil </h1> 

// 	<b>I am doing react in Media Iq</b>
// 	 	</div>
//  	);
// }

// }

// export default App


// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {

// 	render() {

// 		let txt = this.props.txt
// 		return <h1>{txt}</h1>
// 	}
// }

// App.propTypes = {

// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }

// //We can also define default Properties.

// App.defaultProps = {

// 	txt:  'this is the default text'
// }

// ReactDOM.render(
// 	<App cat ={5} txt = "this is a props value" />,
// 	document.getElementById('app')
// );


//L5 state Basics

//L6 

// import React from 'react'
// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = { 
// 			txt: ''}
// 		this.update = this.update.bind(this)
// 	}

// update(e) {

// 	this.setState({txt: e.target.value})
// }

// 	render(){
//   //Updating the state.txt value of our parent component
// 		return (
// 			<div>
// 			<Widget txt ={this.state.txt} update={this.update}/>
// 			<Widget txt ={this.state.txt} update={this.update}/>
// 			<Widget txt ={this.state.txt} update={this.update}/>
// 			<Widget txt ={this.state.txt} update={this.update}/>
// 			</div>
// 			); 
// 	}
// }

// //Making a new statelesss component 

// const Widget = (props) => {

// 	return (
// 			<div>
// 			<input type ="text"
// 				onChange ={props.update}/>
// 			<h1>{props.txt} </h1>
// 			</div>
// 			); 


// }

// export default App



//L7 Using Ref
// Ref are way to referenece to instance of a component from within a react application

// Now what we want is to update it's own text
//Ref don't work with stateless function component
// import React from 'react'
// import ReactDOM from 'react-dom';

// class App extends React.Component {
// 	constructor() {

// 		super();
// 		this.state ={

// 			red:0,
// 			green:0,
// 			blue: 0
// 		}

// 	this.update = this.update.bind(this)
// 	}

// 	update(e) {
// 		this.setState({
// 			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
// 			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
// 			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
// 		})
// 	}

// render(){

// 	return (
// 		<div>
// 		<Slider ref ="red" update ={this.update}/>
// 		{this.update.red}
// 		<br/>
// 		<Slider ref ="green" update ={this.update}/>
// 		{this.update.green}
// 		<br/>
// 		<Slider ref ="blue" update ={this.update}/>
// 		{this.update.blue}
// 		<br/>
// 		</div>
// 	);
// }

// }

// class Slider extends React.Component {

// 	render() {
// 		return (
// 		<input ref ="inp" type ="range"
// 		min ="0"
// 		max ="255"
// 		onChange = {this.props.update}/>


// 		);

// 	}
// }

// export default App


// L-8  Accessing child properties
// import React from 'react';
// class App extends React.Component {
// 	render(){

// 		return <Button>I <Heart/>React</Button>

// 	}
// }

// class Button extends React.Component {
// 	render(){

// 		return <button>{this.props.children}</button>
// 	}// we are accessing .inner HTML
// }

// const Heart = () => <span className ="glyphicon glyphicon-heart"></span>

// export default App

//L-9 Component LifeCycle - Mounting Basics
// When a componenet is added or removed from the dom it is called mounting or unmounting dom

// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {

// 	constructor() {
// 		super();
// 		this.state= {val: 0};
// 		this.update = this.update.bind(this);
// 	}

// 	update() {
// 		this.setState({val: this.state.val +1});
// 	}

// 	componentWillMount(){
// 		console.log('mounting')
// 	}

// 	render(){
// 		console.log('rendering!')
// 		return (
// 			<button onClick ={this.update}>{this.state.val}</button>
// 		);
// 	}

// 	componentDidMount(){
// 		console.log('mounted')
// 	}

// 	componentWillUnmount() {
// 		console.log('bye!')
// 	}
// }

// class Wrapper extends React.Component {

// 	render() {
// 		return (
// 			<div>

// 			</div>

// 		);
// 	}
// }

// export default App


// L-14 Dynamically Generated Components !!

// import React from 'react'
// class App extends React.Component {

// 	constructor() {

// 		super();
// 		this.state = {data: [

// 		{id: 1, name: "Simon Bailey"},
// 		{id: 2, name: "Harshil Garg"},
// 		{id: 3, name: "Arun Jain"},
// 		{id: 4, name: "Ashwin Sahay"}

// 		]}
// 	}
// 	render(){

// 		let rows = this.state.data.map( person => {

// 			return <PersonRow key={person.id} data ={person}/>
// 		})

// 		return <table>
// 		<tbody>{rows}</tbody>
// 		</table>

// 	}

// }

// //Defining a person Component , this will be stateless component
// //Unique key is required among siblings

// const PersonRow = (props) => {
// 	return <tr>
// 	<td>{props.data.id}</td>
// 	<td>{props.data.name}</td>
// 	</tr>
// }
// export default App


//L-15 , Building a Jsx Live compiler

import React from 'react'
class App extends React.Component {
	constructor(){
	super(); //Set up our constructor to set up our initial state 
		this.state = {

			input: '/*add your jsx here*/',
			output: '',
			err: ''
		}
		this.update = this.update.bind(this);
	}
	
	//Creating an update method
	update(e){

	//Triggering an event
	let code = e.target.value;
	try {

		this.setState({

			output: babel.transform(code,{
				stage: 0,
				loose: 'all'

			}).code,
			err: ''
		})
	}

	catch(err){

		this.setState({err: err.message})
	}

	}

	render(){
		return(
			<div>
				<header>{this.state.err}</header>
				<div className ="container">
					<textarea onChange ={this.update}  // This will trigger our update method
						defaultValue ={this.state.input}>
					</textarea>
					<pre>
						{this.state.output}
					</pre>	
				</div>
			</div>
		)
	}
}

export default App