import { createStore, combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import { newsReducer } from './News/newsReducer'
import { fetchNews } from './News/newsActions';
import { weatherReducer } from './Weather/weatherReducer'
import { fetchWeather } from './Weather/weatherAction';

const rootReducer = combineReducers({
    news:newsReducer,
    weather: weatherReducer,
})


const middlewares = [ReduxThunk,logger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));

store.dispatch(fetchNews())
store.dispatch(fetchWeather())


export default store;