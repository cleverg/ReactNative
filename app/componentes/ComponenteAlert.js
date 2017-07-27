import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Alert
} from 'react-native'

export default class AlertComponent extends Component
{
    constructor()
    {
        super();
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert()
    {
        Alert.alert(
            'Nuevo Alert',
            'Mensaje del Alert',
            [
                {text: 'Neutral', onPress: () => alert('Has pulsado el botón neutral')},
                {text: 'Ok', onPress: () => alert('Has pulsado el botón ok')},
                {text: 'Cancelar', onPress: () => alert('Has pulsado el botón cancelar')}
            ]
        )
    }

    render()
    {
        return(
            <View style={styles.container}>
                <Button
                    title={'Mostrar alert'}
                    color={'rebeccapurple'}
                    onPress={() => this.showAlert()}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: .1,
        backgroundColor:'oldlace'
    }
});