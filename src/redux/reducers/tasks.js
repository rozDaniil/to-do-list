const initialState = {
    taskName: '',
    tasksList: [],
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskName: action.payload,
            }
        case 'ADD_TO_TASKS':
            return {
                ...state,
                tasksList: [...state.tasksList, action.payload]
            }
        case 'DELETE_TASK':
            const xxx = state.tasksList.filter(item => item !== action.payload)
            return {
                ...state,
                tasksList: xxx
            }
        default:
            return state
    }
}

export default tasks