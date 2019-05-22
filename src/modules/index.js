import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as notificationsReducer } from 'redux-notifications'
import pages from './pages'
import games from './games'

export default combineReducers({
  routing: routerReducer,
  notifs: notificationsReducer,
  pages,
  games
})
