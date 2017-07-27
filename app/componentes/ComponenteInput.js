import React, {Component} from 'react'
import {
    View,
    Text,
    AppRegistry,
    Button,
    StyleSheet,
    TextInput
} from 'react-native'

class InputWithLabel extends Component
{
    render() {
        return (
            <View>
                <View>
                    <Text>{this.props.label}</Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}

export default class TextInputComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }

    onChangeText(text)
    {
        this.setState({
            text: text
        })
    }

    onSubmitEditing()
    {
        console.log("Estado: " + this.state.text)
    }

    render()
    {
        return(
            <View style={{flex: 1}}>
                <InputWithLabel label="Input Simple">
                    <TextInput
                        autoFocus={true}
                        value={this.state.text}
                        onChangeText={(text) => this.onChangeText(text)}
                        onSubmitEditing={() => this.onSubmitEditing()}
                        autoCapitalize="words"
                        maxLength={40}
                        keyboardType="email-address"
                    />
                </InputWithLabel>

                <InputWithLabel label="Input Multilinea">
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.onChangeText(text)}
                        numberOfLines={4}
                        multiline={true}
                        autoCapitalize="characters"
                        maxLength={200}
                    />
                </InputWithLabel>

                <Text>{this.state.text}</Text>
            </View>
        )
    }
}