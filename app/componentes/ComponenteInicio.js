import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ComponenteInicio extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    HomePage
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'blue'
    },
    welcome:{
        textAlign:'center',
        color:'white',
    }

});