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
                // tasksList: [...state.tasksList, action.payload]
            }
        case 'ADD_TO_TASKS':
            return {
                ...state,
                tasksList: [...state.tasksList, action.payload]
            }
        default:
            return state
    }
}

export default tasks