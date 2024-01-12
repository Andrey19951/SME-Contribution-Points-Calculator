import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {reducer} from './favorites/favorites.slice'
import { userSlice } from './user/user.slice'
import { todoSlice } from './toDos/todos.slice'


const persistConfig = {
  key: 'root',
  storage,
};


const reducers = combineReducers({
  favorites: reducer,
  user: userSlice.reducer,
  counter: todoSlice.reducer,

}
  
)

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);
