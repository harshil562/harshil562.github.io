import * as Constants from './todoConstants.js';
//Replace all the string constants with imported constants
const todosReducer = (state=[], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
			...state,
			{
				name: action.name,
				completed: action.completed, 
			}];
		case 'DELETE_TODO':
			let newTodos = state.filter( (el, i) => i !== action.id );
			return newTodos;
		case 'COMPLETE_TODO':
			let updatedTodos = state.map( (el,i) => {
				if(i === action.id){
					el[Constants.COMPLETED] = !el.completed;
					return el
				}
				else { return el; }
			})
			return updatedTodos;
		case 'SHOW_DESCRIPTION':
			let changedTodos = state.map( (el,i) => {
				if(i === action.id){
					el['showDescription'] = !el.showDescription;
					return el
				}
				else { return el; }
			})
			return changedTodos;
		case 'SAVE_DESCRIPTION':
			let modifiedTodos = state.map( (el,i) => {
				if(i === action.id){
					let describedElement = Object.assign(el, {description: action.description,
						showDescription: !action.showDescription})
					return describedElement
				}
				else { return el; }
			})
			return modifiedTodos;
		default : 
			return state;
	}
}

export default todosReducer