/**
 * Created by root on 6/06/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class SuperheroesList extends Component {
    getSuperHeroes() {
        const {superheroes} = this.props;
        return superheroesData = superheroes.map((heroe, i) => {
            return <Text key={i}>{heroe.nombre}</Text>;
        })
    }

    render() {
        return (
            <View>
                <Text>Lista de Super Heroes</Text>
                {
                    this.getSuperHeroes()
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {superheroes: state.superheroes}
};

export default connect(mapStateToProps)(SuperheroesList);