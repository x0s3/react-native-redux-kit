/**
 * Created by root on 6/06/17.
 */
import {combineReducers} from 'redux';
import superheroesReducer from './Home/reducer/superheroesReducer';
import contador from './Counter/reducer/contadorReducer';

export default combineReducers({
    superheroes: superheroesReducer,
    contador: contador,
});