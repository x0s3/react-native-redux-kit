import React, {Component} from 'react'
import SuperheroesList from './views/superheroesList';
import Contador from './views/contador';

import TabBar from 'react-native-smartbar';

export default class TabBarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            index: 0
        }
    }

    render() {
        return (
            <TabBar
                activeColor={'#FE985B'}
                height={150}
                toggle={this.state.toggle}
                ref={tabbar => this.tabbar = tabbar}
                index={this.state.index}
            >
                <TabBar.Item
                    icon={require('../src/views/teamwork.png')}
                    selectedIcon={require('../src/views/teamwork.png')}
                    text={'Home'}
                >
                    <SuperheroesList />
                </TabBar.Item>

                <TabBar.Item
                    icon={require('../src/views/teamwork.png')}
                    selectedIcon={require('../src/views/teamwork.png')}
                    text={'Contador'}
                >
                    <Contador/>
                </TabBar.Item>
            </TabBar>
        )
    }
}
