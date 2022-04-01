export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: text
})

export const addToTasks = (text) => ({
    type: 'ADD_TO_TASKS',
    payload: text
})

export const deleteTask = (text) => ({
    type: 'DELETE_TASK',
    payload: text
})