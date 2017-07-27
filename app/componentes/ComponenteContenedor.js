import React, {Component} from 'react';
import {
    View
} from 'react-native';

export default class ContainerComponent extends Component
{
    render()
    {
        return(
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: .5, height: 50, backgroundColor: 'darkorange'}} />
                <View style={{flex: .1, height: 50}} />
                <View style={{flex: .2, height: 50, backgroundColor: 'darkorchid'}} />
                <View style={{flex: .2, height: 50, backgroundColor: 'darkred'}} />
            </View>

            /*<View
             style={{
             flex: 1,
             flexDirection: 'column',
             justifyContent: 'space-between',
             }}
             >
                 <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} />
                 <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
                 <View style={{width: 100, height: 50, backgroundColor: 'steelblue'}} />
             </View>*/

            /*<View
             style={{
             flex: 1,
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center',//flex-start o flex-end, izquierda o derecha
             }}
             >
                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
             </View>*/
        )
    }
}