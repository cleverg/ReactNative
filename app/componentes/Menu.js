import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

const window = Dimensions.get('window');



import ComponenteInicio from './ComponenteInicio';


export default class Menu extends Component
{
    render()
    {
        return(
            <ScrollView style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={require('../img/isotipo.png')}
                    />

                    <Text style={styles.name}>Comunidad Hittco</Text>

                </View>
                <Text
                    style={styles.item}
                    onPress={() => this.props.onItemSelected({
                        item: 'ComponenteInicio',
                        component: ComponenteInicio
                    })}
                >
                    Inicio
                </Text>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'navajowhite',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 10,
        marginTop: 5,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 18,
        fontWeight: '300',
        paddingTop: 15,
        paddingBottom: 15,
        color: 'black'
    },
});