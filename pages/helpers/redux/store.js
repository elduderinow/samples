import { configureStore, combineReducers, getDefaultMiddleware } from 'redux-starter-kit'
import { todos } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//add all reducers
const reducers = {
    todos
};

//persist config for storing to local storage
const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        ...getDefaultMiddleware({ serializableCheck: false })
    ]
})
export const persistor = persistStore(store)

export default store