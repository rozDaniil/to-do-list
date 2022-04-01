export const setOpen = () => ({
    type: 'SET_OPEN',
})

export const setHeader = (text) => ({
    type: 'SET_HEADER',
    payload: text
})

export const addToDo = (text) => ({
    type: 'ADD_TODO',
    payload: text
})

export const addToDoTask = (text) => ({
    type: 'ADD_TODO_TASK',
    payload: text
})

export const addToDoName = (text) => ({
    type: 'SET_TODO_NAME',
    payload: text
})

export const setTaskDone = (text) => ({
    type: 'DONE_TASK',
    payload: text
})

export const onClearDoneTasks = () => ({
    type: 'CLEAR_DONE_TASKS',
})

export const deleteToDo = () => ({
    type: 'DELETE_TODO',
})