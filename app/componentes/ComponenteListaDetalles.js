import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

export default class ComponenteListaDetalles extends Component
{
    constructor(props)
    {
        super(props);
        this._goBack = this._goBack.bind(this);
    }

    _goBack()
    {
        return this.props.navigator.pop();
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text>
                        Id: {this.props.rowData.id}
                        {"\n"}{"\n"}
                        Title: {this.props.rowData.title}
                        {"\n"}{"\n"}
                        Body: {this.props.rowData.body}
                        {"\n"}
                    </Text>
                </View>
                <Button
                    color="salmon"
                    onPress={() => this._goBack()}
                    title={'Volver'}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: .1,
        backgroundColor:'cornsilk'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    text: {
        flex: 1,
    },
});