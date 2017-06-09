/**
 * Created by root on 6/06/17.
 */
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './routes';
import TabarBarList from './routes/TabBarList';

const App = () => (
    <Provider store={createStore(Reducers)}>
        <View>
            <TabarBarList/>
        </View>
    </Provider>
);

export default App;