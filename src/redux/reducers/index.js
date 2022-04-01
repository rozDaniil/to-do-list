import { combineReducers } from 'redux'

import tasks from './tasks'
import toDo from './toDo'

const rootReducer = combineReducers({ tasks, toDo })

export default rootReducer