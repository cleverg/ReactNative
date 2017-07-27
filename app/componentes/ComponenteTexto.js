import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class TextComponent extends Component
{
    constructor()
    {
        super();
        this.state = {
            fontSize: 10,
            titleText: "Bird's Nest",
            bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        };

        this.increaseSize = this.increaseSize.bind(this);
        this.onLongPress = this.onLongPress.bind(this);
    }

    increaseSize()
    {
        this.setState({
            fontSize: this.state.fontSize + 1
        })
    }

    onLongPress()
    {
        this.increaseSize();
    }

    render()
    {
        return(
            <View style={{flex: 1}}>
                <View>
                    <Text
                        numberOfLines={5}
                        onLongPress={this.onLongPress}
                    >
                        {this.state.bodyText}
                    </Text>
                </View>

                <View>
                    <Text
                        style={{padding: 10, fontSize: 16, marginTop: 10, backgroundColor: 'blue', color: 'white'}}
                        numberOfLines={5}
                        onLongPress={this.onLongPress}
                    >
                        {this.state.bodyText}
                    </Text>
                </View>

                <View style={{backgroundColor: 'darksalmon', marginTop: 10}}>
                    <Text
                        style={{fontWeight: 'bold', fontStyle: 'italic'}}
                        numberOfLines={4}
                    >
                        <Text
                            textBreakStrategy='simple'
                            onPress={this.increaseSize}
                            style={{color: '#fff', fontSize: this.state.fontSize}}
                        >
                            {this.state.bodyText}
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
}