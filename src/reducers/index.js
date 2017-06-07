/**
 * Created by root on 6/06/17.
 */
import {combineReducers} from 'redux';
import superheroesReducer from './superheroesReducer';
import contador from './contador';

export default combineReducers({
    superheroes: superheroesReducer,
    contador: contador,
});