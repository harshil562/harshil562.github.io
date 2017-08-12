import * as ActionTypes from './todoConstants';

export const addNewTodo = (value) => {
	return(
		{
			type: ActionTypes.ADD_TODO,
			name: value,
			completed: false,
			showDescription: false
		}
	)
}

export const deleteTodo = (id) => {
	return(
		{
			type: ActionTypes.DELETE_TODO,
			id
		}
	)
}

export const todoCompleted = (id) => {
	return(
		{
			type: ActionTypes.COMPLETE_TODO,
			id
		}
	)
}

export const addDescription = (id) => {
	return(
		{
			type: ActionTypes.SHOW_DESCRIPTION,
			id
		}
	)
}

export const saveDescription = (id, description) => {
	return(
		{
			type: ActionTypes.SAVE_DESCRIPTION,
			id,
			description,
			showDescription: true
		}
	)
}

export const createNotification = (id, msg) => {
	return(
		{
			type: ActionTypes.CREATE_NOTIFICATION,
			id,
			msg
		}
	)
}