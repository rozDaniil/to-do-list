const initialState = {
    isOpen: false,
    header: '',
    toDoLists: [],
    doneTasks: [],
    remainTasks: [],
    toDoName: ''
}

const toDo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_OPEN':
            return {
                ...state,
                isOpen: true,
            }
        case 'SET_HEADER':
            return {
                ...state,
                header: action.payload,
                toDoLists: {
                    ...state.toDoLists,
                    [action.payload]: state.toDoLists[action.payload] ? [...state.toDoLists[action.payload]] : []
                },
                doneTasks: {
                    ...state.doneTasks,
                    [action.payload]: state.doneTasks[action.payload] ? [...state.doneTasks[action.payload]] : []
                }
            }
        case 'SET_TODO_NAME':
            return {
                ...state,
                toDoName: action.payload,
            }
        case 'ADD_TODO_TASK':
            return {
                ...state,
                toDoName: action.payload,
                toDoLists: {
                    ...state.toDoLists,
                    [state.header]: state.toDoLists[state.header] ? [...state.toDoLists[state.header],
                        action.payload
                    ] : [
                        action.payload
                    ]
                },
            }
        case 'DONE_TASK':
            return {
                ...state,
                doneTasks: {
                    ...state.doneTasks,
                    [state.header]: Array.from(new Set(state.doneTasks[state.header] ? [...state.doneTasks[state.header],
                        action.payload
                    ] : [
                        action.payload
                    ])),
                }
            }
        case 'CLEAR_DONE_TASKS':
            const xxx = state.toDoLists[state.header].filter((x) => !state.doneTasks[state.header].includes(x))
            return {
                ...state,
                toDoLists: {
                    ...state.toDoLists,
                    [state.header]: xxx
                },
                doneTasks: initialState.doneTasks
            }
        case 'DELETE_TODO':
            const copyToDoLists = {...state.toDoLists }
            const copyDoneList = {...state.doneTasks }
            delete copyToDoLists[state.header]
            delete copyDoneList[state.header]
            return {
                ...state,
                isOpen: false,
                toDoLists: copyToDoLists,
                doneTasks: copyDoneList,
            }
        default:
            return state
    }
}

export default toDo