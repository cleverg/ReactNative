import React, {Component} from 'react'
import {
    View,
    Image
} from 'react-native'

export default class ImageComponent extends Component
{
    render()
    {
        return(
            <View>
                <Image
                    source={require('../img/isotipo.png')}
                    style={{width: 300, height: 200}}
                />
                <Image
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    style={{width: 50, height: 50}}
                />

                <Image
                    source={require('../img/dancing-banana.gif')}
                    style={{width: 100, height: 100}}
                />
            </View>
        )
    }
}