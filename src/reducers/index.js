import { combineReducers } from 'redux'
import { dataReducer } from './data-reducer'
import { setFilterReducer } from './setFilter-reducer'
import { isLoadingReducer } from './isLoading-reducer'
import { hasErroredReducer } from './hasErrored-reducer'

export const rootReducer = combineReducers({
  loading: isLoadingReducer, 
  error: hasErroredReducer, 
  selection: setFilterReducer, 
  data: dataReducer
})